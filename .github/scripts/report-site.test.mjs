import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import {
  buildPagesSite,
  extractPlaywrightDataReferences,
  selectMainSitePaths,
  selectVrtImagePaths,
  validatePagesSite,
} from "./report-site.mjs";

const crcTable = Array.from({ length: 256 }, (_, value) => {
  let current = value;
  for (let bit = 0; bit < 8; bit += 1) current = current & 1 ? 0xedb88320 ^ (current >>> 1) : current >>> 1;
  return current >>> 0;
});

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const value of buffer) crc = crcTable[(crc ^ value) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function createStoredZip(files) {
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const [name, value] of Object.entries(files)) {
    const nameBuffer = Buffer.from(name);
    const data = Buffer.isBuffer(value) ? value : Buffer.from(value);
    const checksum = crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt32LE(checksum, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuffer.length, 26);
    locals.push(local, nameBuffer, data);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE((3 << 8) | 20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt32LE(checksum, 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBuffer.length, 28);
    central.writeUInt32LE((0o100644 << 16) >>> 0, 38);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, nameBuffer);
    offset += local.length + nameBuffer.length + data.length;
  }
  const centralDirectory = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(Object.keys(files).length, 8);
  end.writeUInt16LE(Object.keys(files).length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, centralDirectory, end]);
}

function playwrightIndex(references) {
  const archive = createStoredZip({
    "report.json": JSON.stringify({ files: references.map((filePath) => ({ path: filePath })) }),
  });
  return Buffer.from(
    `<html><body>report</body></html><script id="playwrightReportBase64" type="application/zip">data:application/zip;base64,${archive.toString("base64")}</script>`,
  );
}

function initRepository(root, files) {
  execFileSync("git", ["init", "-q", "-b", "main", root]);
  execFileSync("git", ["-C", root, "config", "user.name", "Test"]);
  execFileSync("git", ["-C", root, "config", "user.email", "test@example.invalid"]);
  for (const [filePath, value] of Object.entries(files)) {
    const absolute = path.join(root, filePath);
    mkdirSync(path.dirname(absolute), { recursive: true });
    writeFileSync(absolute, value);
  }
  execFileSync("git", ["-C", root, "add", "."]);
  execFileSync("git", ["-C", root, "commit", "-q", "-m", "fixture"]);
}

test("Playwright report archiveから現在参照されるdataだけを抽出する", () => {
  const references = [
    "data/0123456789abcdef0123456789abcdef01234567.zip",
    "data/abcdef0123456789abcdef0123456789abcdef01.webm",
  ];
  assert.deepEqual([...extractPlaywrightDataReferences(playwrightIndex(references))].sort(), references.sort());
});

test("Playwright report archiveのpath traversalを拒否する", () => {
  const archive = createStoredZip({ "../report.json": "{}" });
  const index = Buffer.from(
    `<script>data:application/zip;base64,${archive.toString("base64")}</script>`,
  );
  assert.throws(() => extractPlaywrightDataReferences(index), /unsafe segment/);
});

test("VRTは差分・追加・削除に必要な画像だけを選ぶ", () => {
  const root = "yps-crispy-carnival-vrt/pr-777";
  const result = {
    failedItems: ["変更.png"],
    newItems: ["new.png"],
    deletedItems: ["deleted.png"],
    passedItems: ["passed.png"],
  };
  const available = new Set([
    `${root}/actual/変更.png`,
    `${root}/expected/変更.png`,
    `${root}/diff/変更.png`,
    `${root}/actual/new.png`,
    `${root}/expected/deleted.png`,
    `${root}/actual/passed.png`,
    `${root}/expected/passed.png`,
  ]);
  assert.deepEqual([...selectVrtImagePaths(result, root, available)].sort(), [
    `${root}/actual/new.png`,
    `${root}/actual/変更.png`,
    `${root}/diff/変更.png`,
    `${root}/expected/deleted.png`,
    `${root}/expected/変更.png`,
  ].sort());
});

test("mainへのShiftori生成物の再混入を拒否する", () => {
  const temporary = mkdtempSync(path.join(tmpdir(), "hosting-pages-main-contract-"));
  initRepository(temporary, { "yps-crispy-carnival/777/index.html": playwrightIndex([]) });
  assert.throws(() => selectMainSitePaths(temporary), /Unknown top-level content/);
});

test("公開サイト構築はstale Playwright dataとVRT passed画像とbaselineを除外する", () => {
  const temporary = mkdtempSync(path.join(tmpdir(), "hosting-pages-test-"));
  const main = path.join(temporary, "main");
  const reports = path.join(temporary, "reports");
  const output = path.join(temporary, "public");
  const kept = "0123456789abcdef0123456789abcdef01234567";
  const stale = "abcdef0123456789abcdef0123456789abcdef01";

  initRepository(main, {
    "llms.txt": "ok",
    "online-draft/playwright/406/index.html": playwrightIndex([`data/${kept}.zip`]),
    [`online-draft/playwright/406/data/${kept}.zip`]: createStoredZip({ "trace.trace": "safe" }),
    [`online-draft/playwright/406/data/${stale}.zip`]: createStoredZip({ "trace.trace": "stale" }),
    "online-draft/playwright/406/trace/index.html": "trace viewer",
    "online-draft/storybook/406/index.html": "storybook",
    "online-draft/vrt/406/index.html": "vrt",
  });
  initRepository(reports, {
    ".snapshot-meta.json": "{}",
    "yps-crispy-carnival/777/index.html": playwrightIndex([]),
    "yps-crispy-carnival/777/.report-meta.json": "{}",
    "yps-crispy-carnival-vrt/pr-777/index.html": "reg",
    "yps-crispy-carnival-vrt/pr-777/.report-meta.json": "{}",
    "yps-crispy-carnival-vrt/pr-777/out.json": JSON.stringify({
      failedItems: ["changed.png"], newItems: [], deletedItems: [], passedItems: ["passed.png"],
    }),
    "yps-crispy-carnival-vrt/pr-777/actual/changed.png": "actual",
    "yps-crispy-carnival-vrt/pr-777/expected/changed.png": "expected",
    "yps-crispy-carnival-vrt/pr-777/diff/changed.png": "diff",
    "yps-crispy-carnival-vrt/pr-777/actual/passed.png": "passed actual",
    "yps-crispy-carnival-vrt/pr-777/expected/passed.png": "passed expected",
    "yps-crispy-carnival-vrt-baselines/develop/passed.png": "baseline",
  });

  buildPagesSite({ mainRepository: main, reportsRepository: reports, outputDirectory: output });
  const validation = validatePagesSite(output, { maximumBytes: 1024 * 1024, warningBytes: 512 * 1024 });
  assert.equal(validation.warning, null);
  assert.equal(readFileSync(path.join(output, `online-draft/playwright/406/data/${kept}.zip`)).length > 0, true);
  assert.throws(() => readFileSync(path.join(output, `online-draft/playwright/406/data/${stale}.zip`)), /ENOENT/);
  assert.throws(() => readFileSync(path.join(output, ".snapshot-meta.json")), /ENOENT/);
  assert.throws(() => readFileSync(path.join(output, "yps-crispy-carnival/777/.report-meta.json")), /ENOENT/);
  assert.throws(() => readFileSync(path.join(output, "yps-crispy-carnival-vrt/pr-777/.report-meta.json")), /ENOENT/);
  assert.throws(() => readFileSync(path.join(output, "yps-crispy-carnival-vrt/pr-777/actual/passed.png")), /ENOENT/);
  assert.throws(() => readFileSync(path.join(output, "yps-crispy-carnival-vrt-baselines/develop/passed.png")), /ENOENT/);
});

test("公開検査はsymlinkと高確度secretを拒否する", () => {
  const temporary = mkdtempSync(path.join(tmpdir(), "hosting-pages-validation-"));
  writeFileSync(path.join(temporary, "safe.txt"), "safe");
  symlinkSync("safe.txt", path.join(temporary, "link.txt"));
  assert.throws(() => validatePagesSite(temporary), /symlink/);

  const secretRoot = mkdtempSync(path.join(tmpdir(), "hosting-pages-secret-"));
  writeFileSync(path.join(secretRoot, "leak.txt"), `token=ghp_${"a".repeat(40)}`);
  assert.throws(() => validatePagesSite(secretRoot), /Potential secret/);

  const embeddedSecretRoot = mkdtempSync(path.join(tmpdir(), "hosting-pages-embedded-secret-"));
  mkdirSync(path.join(embeddedSecretRoot, "report"));
  writeFileSync(path.join(embeddedSecretRoot, "report", "index.html"), playwrightIndex([`ghp_${"b".repeat(40)}`]));
  assert.throws(() => validatePagesSite(embeddedSecretRoot), /Potential secret/);
});
