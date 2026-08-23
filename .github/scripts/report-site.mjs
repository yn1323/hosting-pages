import {
  lstatSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { execFileSync, spawnSync } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";
import { inflateRawSync } from "node:zlib";

const PLAYWRIGHT_DATA_PATH = /^data\/[0-9a-f]{40}\.[A-Za-z0-9]+$/;
const VRT_IMAGE_NAME = /^[^/\\\0\r\n]+\.png$/u;
const SECRET_PATTERNS = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\bgh[pousr]_[A-Za-z0-9]{30,}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{50,}\b/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/,
  /\bsk_live_[A-Za-z0-9]{16,}\b/,
];

const crcTable = Array.from({ length: 256 }, (_, value) => {
  let current = value;
  for (let bit = 0; bit < 8; bit += 1) {
    current = current & 1 ? 0xedb88320 ^ (current >>> 1) : current >>> 1;
  }
  return current >>> 0;
});

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const value of buffer) crc = crcTable[(crc ^ value) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

export function assertSafeRelativePath(value, label = "path") {
  if (
    typeof value !== "string" ||
    value.length === 0 ||
    value.includes("\0") ||
    value.includes("\r") ||
    value.includes("\n") ||
    value.includes("\\")
  ) {
    throw new Error(`${label} is empty or invalid`);
  }
  if (value.startsWith("/") || value.startsWith("\\") || /^[A-Za-z]:[\\/]/.test(value)) {
    throw new Error(`${label} must be relative: ${value}`);
  }
  const segments = value.replaceAll("\\", "/").split("/");
  if (segments.some((segment) => segment === "" || segment === "." || segment === "..")) {
    throw new Error(`${label} contains an unsafe segment: ${value}`);
  }
  return value;
}

function findEndOfCentralDirectory(buffer) {
  const minimum = Math.max(0, buffer.length - 65_557);
  for (let offset = buffer.length - 22; offset >= minimum; offset -= 1) {
    if (buffer.readUInt32LE(offset) === 0x06054b50) return offset;
  }
  throw new Error("ZIP end-of-central-directory record was not found");
}

export function readZipEntries(buffer, options = {}) {
  const maxEntryBytes = options.maxEntryBytes ?? 64 * 1024 * 1024;
  const maxTotalBytes = options.maxTotalBytes ?? 256 * 1024 * 1024;
  const eocd = findEndOfCentralDirectory(buffer);
  if (buffer.readUInt16LE(eocd + 4) !== 0 || buffer.readUInt16LE(eocd + 6) !== 0) {
    throw new Error("Multi-disk ZIP archives are not supported");
  }

  const entryCount = buffer.readUInt16LE(eocd + 10);
  let centralOffset = buffer.readUInt32LE(eocd + 16);
  let totalBytes = 0;
  const entries = new Map();

  for (let index = 0; index < entryCount; index += 1) {
    if (buffer.readUInt32LE(centralOffset) !== 0x02014b50) {
      throw new Error(`Invalid ZIP central-directory entry ${index}`);
    }
    const flags = buffer.readUInt16LE(centralOffset + 8);
    const method = buffer.readUInt16LE(centralOffset + 10);
    const expectedCrc = buffer.readUInt32LE(centralOffset + 16);
    const compressedSize = buffer.readUInt32LE(centralOffset + 20);
    const uncompressedSize = buffer.readUInt32LE(centralOffset + 24);
    const nameLength = buffer.readUInt16LE(centralOffset + 28);
    const extraLength = buffer.readUInt16LE(centralOffset + 30);
    const commentLength = buffer.readUInt16LE(centralOffset + 32);
    const externalAttributes = buffer.readUInt32LE(centralOffset + 38);
    const localOffset = buffer.readUInt32LE(centralOffset + 42);
    const name = buffer.subarray(centralOffset + 46, centralOffset + 46 + nameLength).toString("utf8");

    if (flags & 1) throw new Error(`Encrypted ZIP entry is not allowed: ${name}`);
    if (name.endsWith("/")) {
      centralOffset += 46 + nameLength + extraLength + commentLength;
      continue;
    }
    assertSafeRelativePath(name, "ZIP entry");
    const unixMode = externalAttributes >>> 16;
    if ((unixMode & 0o170000) === 0o120000) {
      throw new Error(`ZIP symlink is not allowed: ${name}`);
    }
    if (uncompressedSize > maxEntryBytes) throw new Error(`ZIP entry is too large: ${name}`);
    totalBytes += uncompressedSize;
    if (totalBytes > maxTotalBytes) throw new Error("ZIP uncompressed size exceeds the safety limit");
    if (buffer.readUInt32LE(localOffset) !== 0x04034b50) {
      throw new Error(`Invalid ZIP local header: ${name}`);
    }
    const localNameLength = buffer.readUInt16LE(localOffset + 26);
    const localExtraLength = buffer.readUInt16LE(localOffset + 28);
    const dataOffset = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = buffer.subarray(dataOffset, dataOffset + compressedSize);
    const data = method === 0 ? Buffer.from(compressed) : method === 8 ? inflateRawSync(compressed) : null;
    if (!data) throw new Error(`Unsupported ZIP compression method ${method}: ${name}`);
    if (data.length !== uncompressedSize || crc32(data) !== expectedCrc) {
      throw new Error(`Corrupt ZIP entry: ${name}`);
    }
    if (entries.has(name)) throw new Error(`Duplicate ZIP entry is not allowed: ${name}`);
    entries.set(name, data);
    centralOffset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

function walkJson(value, visit) {
  if (typeof value === "string") visit(value);
  else if (Array.isArray(value)) for (const child of value) walkJson(child, visit);
  else if (value && typeof value === "object") {
    for (const child of Object.values(value)) walkJson(child, visit);
  }
}

function readEmbeddedPlaywrightReport(indexBuffer) {
  const html = indexBuffer.toString("utf8");
  const match = html.match(/data:application\/zip;base64,([^<]+)/);
  if (!match) throw new Error("Playwright report does not contain an embedded report archive");
  const base64 = match[1].replaceAll(/\s/g, "");
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(base64)) throw new Error("Invalid Playwright report base64");
  return readZipEntries(Buffer.from(base64, "base64"), {
    maxEntryBytes: 16 * 1024 * 1024,
    maxTotalBytes: 64 * 1024 * 1024,
  });
}

export function extractPlaywrightDataReferences(indexBuffer) {
  const references = new Set();
  const entries = readEmbeddedPlaywrightReport(indexBuffer);
  for (const [name, data] of entries) {
    if (!name.endsWith(".json")) continue;
    let json;
    try {
      json = JSON.parse(data.toString("utf8"));
    } catch (error) {
      throw new Error(`Invalid Playwright report JSON ${name}: ${error.message}`);
    }
    walkJson(json, (value) => {
      if (PLAYWRIGHT_DATA_PATH.test(value)) references.add(value);
    });
  }
  return references;
}

export function listGitEntries(repository) {
  const output = execFileSync("git", ["-C", repository, "ls-tree", "-r", "-z", "HEAD"], {
    encoding: "buffer",
    maxBuffer: 128 * 1024 * 1024,
  }).toString("utf8");
  const entries = [];
  for (const record of output.split("\0")) {
    if (!record) continue;
    const match = record.match(/^(\d{6}) (blob|commit) ([0-9a-f]+)\t([\s\S]+)$/);
    if (!match) throw new Error(`Could not parse git tree entry: ${record}`);
    const [, mode, type, object, filePath] = match;
    assertSafeRelativePath(filePath, "git path");
    entries.push({ mode, type, object, path: filePath });
  }
  return entries;
}

export function readGitPath(repository, filePath) {
  assertSafeRelativePath(filePath, "git path");
  return execFileSync("git", ["-C", repository, "show", `HEAD:${filePath}`], {
    encoding: "buffer",
    maxBuffer: 128 * 1024 * 1024,
  });
}

function entryMap(entries) {
  return new Map(entries.map((entry) => [entry.path, entry]));
}

function requireRegularFiles(paths, entriesByPath) {
  for (const filePath of paths) {
    const entry = entriesByPath.get(filePath);
    if (!entry) throw new Error(`Selected path does not exist: ${filePath}`);
    if (entry.type !== "blob" || entry.mode === "120000") {
      throw new Error(`Selected path is not a regular file: ${filePath}`);
    }
  }
}

function addPlaywrightReport({ repository, root, entries, selected }) {
  const byPath = entryMap(entries);
  const indexPath = `${root}/index.html`;
  const references = extractPlaywrightDataReferences(readGitPath(repository, indexPath));
  const reportEntries = entries.filter((entry) => entry.path.startsWith(`${root}/`));

  for (const entry of reportEntries) {
    const relative = entry.path.slice(root.length + 1);
    if (relative === ".report-meta.json") continue;
    if (!relative.includes("/")) selected.add(entry.path);
    else if (relative.startsWith("trace/")) selected.add(entry.path);
    else if (!relative.startsWith("data/")) selected.add(entry.path);
  }
  for (const relative of references) selected.add(`${root}/${relative}`);
  requireRegularFiles([...selected].filter((filePath) => filePath.startsWith(`${root}/`)), byPath);
}

function readVrtResult(repository, outPath) {
  let value;
  try {
    value = JSON.parse(readGitPath(repository, outPath).toString("utf8"));
  } catch (error) {
    throw new Error(`Invalid VRT result ${outPath}: ${error.message}`);
  }
  return value;
}

function validateVrtNames(values, label) {
  if (!Array.isArray(values)) throw new Error(`${label} must be an array`);
  for (const value of values) {
    if (typeof value !== "string" || !VRT_IMAGE_NAME.test(value) || value.includes("..")) {
      throw new Error(`Unsafe VRT image name in ${label}: ${String(value)}`);
    }
  }
  return values;
}

export function selectVrtImagePaths(result, root, availablePaths) {
  const selected = new Set();
  const changed = validateVrtNames(result.failedItems ?? result.changedItems ?? [], "failedItems");
  const added = validateVrtNames(result.newItems ?? [], "newItems");
  const deleted = validateVrtNames(result.deletedItems ?? [], "deletedItems");

  const addExisting = (directory, name, required) => {
    const filePath = `${root}/${directory}/${name}`;
    if (availablePaths.has(filePath)) selected.add(filePath);
    else if (required) throw new Error(`VRT result references a missing image: ${filePath}`);
  };
  for (const name of changed) {
    addExisting("actual", name, true);
    addExisting("expected", name, true);
    addExisting("diff", name, true);
  }
  for (const name of added) {
    addExisting("actual", name, true);
    addExisting("expected", name, false);
    addExisting("diff", name, false);
  }
  for (const name of deleted) {
    addExisting("expected", name, true);
    addExisting("actual", name, false);
    addExisting("diff", name, false);
  }
  return selected;
}

function addVrtReport({ repository, root, entries, selected }) {
  const byPath = entryMap(entries);
  const available = new Set(byPath.keys());
  const outPath = `${root}/out.json`;
  const result = readVrtResult(repository, outPath);
  for (const entry of entries) {
    if (!entry.path.startsWith(`${root}/`)) continue;
    const relative = entry.path.slice(root.length + 1);
    if (relative === ".report-meta.json") continue;
    if (!relative.includes("/")) selected.add(entry.path);
    else if (!/^(?:actual|expected|diff)\//.test(relative)) selected.add(entry.path);
  }
  for (const filePath of selectVrtImagePaths(result, root, available)) selected.add(filePath);
  requireRegularFiles([...selected].filter((filePath) => filePath.startsWith(`${root}/`)), byPath);
}

function assertKnownTopLevel(entries, allowed, ignoredFiles = new Set()) {
  const unknown = new Set();
  for (const entry of entries) {
    const top = entry.path.split("/", 1)[0];
    if (!allowed.has(top) && !ignoredFiles.has(entry.path)) unknown.add(top);
  }
  if (unknown.size) throw new Error(`Unknown top-level content: ${[...unknown].sort().join(", ")}`);
}

export function selectMainSitePaths(repository) {
  const entries = listGitEntries(repository);
  const selected = new Set();
  assertKnownTopLevel(entries, new Set([".github", "llms.txt", "online-draft"]));
  if (entries.some((entry) => entry.path === "llms.txt")) selected.add("llms.txt");

  const onlineEntries = entries.filter((entry) => entry.path.startsWith("online-draft/"));
  const onlineKinds = new Set(onlineEntries.map((entry) => entry.path.split("/")[1]));
  const unknownKinds = [...onlineKinds].filter((kind) => !["playwright", "storybook", "vrt"].includes(kind));
  if (unknownKinds.length) throw new Error(`Unknown online-draft content: ${unknownKinds.sort().join(", ")}`);
  for (const entry of onlineEntries) {
    if (entry.path.startsWith("online-draft/storybook/") || entry.path.startsWith("online-draft/vrt/")) {
      selected.add(entry.path);
    }
  }
  const reportRoots = onlineEntries
    .map((entry) => entry.path.match(/^online-draft\/playwright\/([A-Za-z0-9._-]+)\/index\.html$/)?.[1])
    .filter(Boolean);
  for (const key of reportRoots) {
    addPlaywrightReport({ repository, root: `online-draft/playwright/${key}`, entries, selected });
  }
  requireRegularFiles(selected, entryMap(entries));
  return { entries, paths: [...selected].sort() };
}

export function selectYpsSitePaths(repository) {
  const entries = listGitEntries(repository);
  const selected = new Set();
  assertKnownTopLevel(
    entries,
    new Set(["yps-crispy-carnival", "yps-crispy-carnival-vrt", "yps-crispy-carnival-vrt-baselines"]),
    new Set([".snapshot-meta.json"]),
  );

  const playwrightRoots = entries
    .map((entry) => entry.path.match(/^yps-crispy-carnival\/(\d+)\/index\.html$/)?.[1])
    .filter(Boolean);
  for (const key of playwrightRoots) {
    addPlaywrightReport({ repository, root: `yps-crispy-carnival/${key}`, entries, selected });
  }

  const vrtRoots = entries
    .map((entry) => entry.path.match(/^yps-crispy-carnival-vrt\/(pr-\d+|branches\/(?:develop|main))\/out\.json$/)?.[1])
    .filter(Boolean);
  for (const key of vrtRoots) {
    addVrtReport({ repository, root: `yps-crispy-carnival-vrt/${key}`, entries, selected });
  }
  requireRegularFiles(selected, entryMap(entries));
  return { entries, paths: [...selected].sort() };
}

export function archiveGitPaths(repository, paths, outputDirectory) {
  if (paths.length === 0) return;
  let promisor = "false";
  try {
    promisor = execFileSync("git", ["-C", repository, "config", "--bool", "--get", "remote.origin.promisor"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    // A normal full clone has no promisor configuration.
  }
  if (promisor === "true") {
    const byPath = entryMap(listGitEntries(repository));
    const objects = [...new Set(paths.map((filePath) => byPath.get(filePath)?.object))];
    if (objects.includes(undefined)) throw new Error("Could not resolve every selected Git object");
    for (let offset = 0; offset < objects.length; offset += 2_000) {
      const result = spawnSync(
        "git",
        [
          "-c",
          "fetch.negotiationAlgorithm=noop",
          "-C",
          repository,
          "fetch",
          "--quiet",
          "--no-tags",
          "--no-write-fetch-head",
          "--no-recurse-submodules",
          "--filter=blob:none",
          "--stdin",
          "origin",
        ],
        {
          encoding: "utf8",
          input: `${objects.slice(offset, offset + 2_000).join("\n")}\n`,
          stdio: ["pipe", "ignore", "pipe"],
        },
      );
      if (result.error) throw result.error;
      if (result.status !== 0) {
        throw new Error(`Could not prefetch selected Git objects: ${result.stderr.trim()}`);
      }
    }
  }
  mkdirSync(outputDirectory, { recursive: true });
  const temporary = mkdtempSync(path.join(tmpdir(), "hosting-pages-archive-"));
  try {
    for (let offset = 0; offset < paths.length; offset += 400) {
      const batch = paths.slice(offset, offset + 400);
      const archive = path.join(temporary, `batch-${offset}.tar`);
      execFileSync("git", ["-C", repository, "archive", "--format=tar", `--output=${archive}`, "HEAD", "--", ...batch], {
        stdio: ["ignore", "pipe", "pipe"],
        maxBuffer: 128 * 1024 * 1024,
      });
      execFileSync("tar", ["-xf", archive, "-C", outputDirectory], { stdio: ["ignore", "pipe", "pipe"] });
      unlinkSync(archive);
    }
  } finally {
    rmSync(temporary, { recursive: true, force: true });
  }
}

function assertSafeOutput(outputDirectory, sourceDirectories) {
  const resolved = path.resolve(outputDirectory);
  if (resolved === path.parse(resolved).root || sourceDirectories.some((source) => path.resolve(source) === resolved)) {
    throw new Error(`Unsafe output directory: ${resolved}`);
  }
  return resolved;
}

export function buildPagesSite({ mainRepository, reportsRepository, outputDirectory }) {
  const output = assertSafeOutput(outputDirectory, [mainRepository, reportsRepository]);
  rmSync(output, { recursive: true, force: true });
  mkdirSync(output, { recursive: true });
  const main = selectMainSitePaths(mainRepository);
  const reports = selectYpsSitePaths(reportsRepository);
  archiveGitPaths(mainRepository, main.paths, output);
  archiveGitPaths(reportsRepository, reports.paths, output);
  writeFileSync(path.join(output, ".nojekyll"), "");
  return { mainFiles: main.paths.length, reportFiles: reports.paths.length, output };
}

function walkFiles(root) {
  const files = [];
  const visit = (directory) => {
    for (const name of readdirSync(directory)) {
      const absolute = path.join(directory, name);
      const stats = lstatSync(absolute);
      const relative = path.relative(root, absolute).split(path.sep).join("/");
      assertSafeRelativePath(relative, "public path");
      if (stats.isSymbolicLink()) throw new Error(`Public site contains a symlink: ${relative}`);
      if (stats.isDirectory()) visit(absolute);
      else if (stats.isFile()) {
        if (stats.nlink > 1) throw new Error(`Public site contains a hard link: ${relative}`);
        files.push({ absolute, relative, size: stats.size });
      } else throw new Error(`Public site contains an unsupported file: ${relative}`);
    }
  };
  visit(root);
  return files;
}

function scanBufferForSecrets(buffer, label) {
  const text = buffer.toString("latin1");
  for (const pattern of SECRET_PATTERNS) {
    if (pattern.test(text)) throw new Error(`Potential secret detected in ${label}`);
  }
}

export function validatePagesSite(root, options = {}) {
  const warningBytes = options.warningBytes ?? 750 * 1024 * 1024;
  const maximumBytes = options.maximumBytes ?? 900 * 1024 * 1024;
  const maximumFiles = options.maximumFiles ?? 50_000;
  const files = walkFiles(root);
  const totalBytes = files.reduce((total, file) => total + file.size, 0);
  if (files.length > maximumFiles) throw new Error(`Public site has too many files: ${files.length}`);
  if (totalBytes > maximumBytes) throw new Error(`Public site is too large: ${totalBytes} bytes`);
  for (const file of files) {
    if (file.relative.startsWith("yps-crispy-carnival-vrt-baselines/") || file.relative.endsWith("/.report-meta.json")) {
      throw new Error(`Internal report data must not be public: ${file.relative}`);
    }
    const data = readFileSync(file.absolute);
    scanBufferForSecrets(data, file.relative);
    if (file.relative.endsWith("/index.html") && data.includes("data:application/zip;base64,")) {
      for (const [name, entry] of readEmbeddedPlaywrightReport(data)) {
        scanBufferForSecrets(entry, `${file.relative}:${name}`);
      }
    }
    if (file.relative.endsWith(".zip")) {
      for (const [name, entry] of readZipEntries(data)) scanBufferForSecrets(entry, `${file.relative}:${name}`);
    }
  }
  return {
    files: files.length,
    totalBytes,
    warning: totalBytes > warningBytes ? `Public site exceeds ${warningBytes} bytes` : null,
  };
}
