#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { listGitEntries, readGitPath } from "./report-site.mjs";

const SOURCE_REPOSITORY = "yn1323/yps-crispy-carnival";
const DEFAULT_CLOSED_RETENTION_MS = 7 * 24 * 60 * 60 * 1000;

function parseDate(value, label) {
  const parsed = Date.parse(value);
  if (!Number.isFinite(parsed)) throw new Error(`Invalid ${label}: ${value}`);
  return parsed;
}

function validateMetadata(metadata, record) {
  if (!metadata || typeof metadata !== "object") throw new Error(`Invalid metadata: ${record.root}`);
  const expectedType = record.reportType;
  if (
    metadata.schemaVersion !== 1 ||
    metadata.sourceRepository !== SOURCE_REPOSITORY ||
    metadata.reportType !== expectedType ||
    metadata.pullRequest !== record.pullRequest ||
    typeof metadata.sourceSha !== "string" ||
    !/^(?:[0-9a-f]{40}|legacy)$/.test(metadata.sourceSha) ||
    !Number.isSafeInteger(metadata.runId) ||
    metadata.runId < 0 ||
    !Number.isSafeInteger(metadata.runAttempt) ||
    metadata.runAttempt < 0
  ) {
    throw new Error(`Metadata contract mismatch: ${record.root}`);
  }
  parseDate(metadata.updatedAt, `updatedAt in ${record.root}`);
  return metadata;
}

export function discoverYpsReports(repository) {
  const entries = listGitEntries(repository);
  const roots = new Map();
  const errors = new Set();
  const topLevel = new Set(entries.map((entry) => entry.path.split("/")[0]));
  for (const top of topLevel) {
    if (!["yps-crispy-carnival", "yps-crispy-carnival-vrt", "yps-crispy-carnival-vrt-baselines", ".snapshot-meta.json"].includes(top)) {
      errors.add(`Unknown top-level content: ${top}`);
    }
  }

  for (const entry of entries) {
    let match = entry.path.match(/^yps-crispy-carnival\/(\d+)(?:\/|$)/);
    if (match) {
      const pullRequest = Number(match[1]);
      roots.set(`yps-crispy-carnival/${match[1]}`, {
        root: `yps-crispy-carnival/${match[1]}`,
        reportType: "playwright",
        pullRequest,
      });
      continue;
    }
    if (entry.path.startsWith("yps-crispy-carnival/") && !match) {
      errors.add(`Unknown Playwright report path: ${entry.path}`);
      continue;
    }

    match = entry.path.match(/^yps-crispy-carnival-vrt\/pr-(\d+)(?:\/|$)/);
    if (match) {
      const pullRequest = Number(match[1]);
      roots.set(`yps-crispy-carnival-vrt/pr-${match[1]}`, {
        root: `yps-crispy-carnival-vrt/pr-${match[1]}`,
        reportType: "vrt",
        pullRequest,
      });
      continue;
    }
    if (
      entry.path.startsWith("yps-crispy-carnival-vrt/") &&
      !/^yps-crispy-carnival-vrt\/branches\/(?:develop|main)\//.test(entry.path)
    ) {
      errors.add(`Unknown VRT report path: ${entry.path}`);
    }
    if (
      entry.path.startsWith("yps-crispy-carnival-vrt-baselines/") &&
      !/^yps-crispy-carnival-vrt-baselines\/(?:develop|main)\//.test(entry.path)
    ) {
      errors.add(`Unknown baseline path: ${entry.path}`);
    }
  }
  if (errors.size) throw new Error([...errors].sort().join("\n"));

  const paths = new Set(entries.map((entry) => entry.path));
  const records = [...roots.values()].sort((left, right) => left.root.localeCompare(right.root));
  for (const record of records) {
    const metadataPath = `${record.root}/.report-meta.json`;
    record.legacy = !paths.has(metadataPath);
    record.metadata = record.legacy
      ? null
      : validateMetadata(JSON.parse(readGitPath(repository, metadataPath).toString("utf8")), record);
  }
  return records;
}

export function decideYpsReportRetention({
  records,
  pullRequests,
  now,
  closedRetentionMs = DEFAULT_CLOSED_RETENTION_MS,
  legacyDeleteAfter,
}) {
  const nowMs = typeof now === "number" ? now : parseDate(now, "now");
  const legacyCutoffMs = typeof legacyDeleteAfter === "number" ? legacyDeleteAfter : parseDate(legacyDeleteAfter, "legacy cutoff");
  const keep = [];
  const remove = [];

  for (const record of records) {
    const pull = pullRequests[String(record.pullRequest)] ?? pullRequests[record.pullRequest];
    if (!pull || !["open", "closed"].includes(pull.state)) {
      throw new Error(`Missing or invalid Pull Request state: #${record.pullRequest}`);
    }
    if (pull.state === "open") {
      keep.push({ ...record, reason: "open" });
      continue;
    }
    if (record.legacy && nowMs < legacyCutoffMs) {
      keep.push({ ...record, reason: "legacy-migration-window" });
      continue;
    }
    const closedAt = parseDate(pull.closed_at ?? pull.merged_at, `closed_at for #${record.pullRequest}`);
    if (nowMs - closedAt >= closedRetentionMs) remove.push({ ...record, reason: "closed-retention-expired" });
    else keep.push({ ...record, reason: "recently-closed" });
  }
  return { keep, remove };
}

export async function fetchPullRequests(records, { token, fetchImpl = fetch } = {}) {
  if (!token) throw new Error("SOURCE_REPOSITORY_TOKEN is required");
  const results = {};
  for (const pullRequest of [...new Set(records.map((record) => record.pullRequest))]) {
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "hosting-pages-retention",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    headers.Authorization = `Bearer ${token}`;
    const response = await fetchImpl(`https://api.github.com/repos/${SOURCE_REPOSITORY}/pulls/${pullRequest}`, {
      headers: {
        ...headers,
      },
    });
    if (!response.ok) throw new Error(`GitHub Pull Request lookup failed for #${pullRequest}: HTTP ${response.status}`);
    const pull = await response.json();
    results[String(pullRequest)] = { state: pull.state, closed_at: pull.closed_at, merged_at: pull.merged_at };
  }
  return results;
}

function removeReportRoots(repository, records) {
  for (const record of records) {
    execFileSync("git", ["-C", repository, "rm", "-q", "-r", "-f", "--sparse", "--", record.root], {
      stdio: "inherit",
    });
  }
}

function parseArguments(argv) {
  const options = { dryRun: false, now: new Date().toISOString() };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--dry-run") options.dryRun = true;
    else if (argument === "--repo") options.repository = argv[++index];
    else if (argument === "--now") options.now = argv[++index];
    else if (argument === "--legacy-delete-after") options.legacyDeleteAfter = argv[++index];
    else if (argument === "--states") options.statesPath = argv[++index];
    else throw new Error(`Unknown argument: ${argument}`);
  }
  if (!options.repository) throw new Error("Missing --repo");
  if (!options.legacyDeleteAfter) throw new Error("Missing --legacy-delete-after");
  return options;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    const options = parseArguments(process.argv.slice(2));
    const records = discoverYpsReports(options.repository);
    const pullRequests = options.statesPath
      ? JSON.parse(readFileSync(options.statesPath, "utf8"))
      : await fetchPullRequests(records, { token: process.env.SOURCE_REPOSITORY_TOKEN });
    const result = decideYpsReportRetention({
      records,
      pullRequests,
      now: options.now,
      legacyDeleteAfter: options.legacyDeleteAfter,
    });
    if (!options.dryRun && result.remove.length) removeReportRoots(options.repository, result.remove);
    console.log(
      JSON.stringify({
        dryRun: options.dryRun,
        kept: result.keep.map(({ root, reason }) => ({ root, reason })),
        removed: result.remove.map(({ root, reason }) => ({ root, reason })),
      }),
    );
  } catch (error) {
    console.error(`::error::${error.message}`);
    process.exitCode = 1;
  }
}
