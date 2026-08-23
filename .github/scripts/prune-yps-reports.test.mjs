import assert from "node:assert/strict";
import test from "node:test";
import { decideYpsReportRetention, fetchPullRequests } from "./prune-yps-reports.mjs";

const record = (pullRequest, legacy = false) => ({
  root: `yps-crispy-carnival-vrt/pr-${pullRequest}`,
  reportType: "vrt",
  pullRequest,
  legacy,
  metadata: legacy ? null : { schemaVersion: 1 },
});

test("Open PRは番号が小さくても保持する", () => {
  const result = decideYpsReportRetention({
    records: [record(777), record(900)],
    pullRequests: {
      777: { state: "open", closed_at: null },
      900: { state: "closed", closed_at: "2026-08-01T00:00:00Z" },
    },
    now: "2026-08-23T00:00:00Z",
    legacyDeleteAfter: "2026-08-20T00:00:00Z",
  });
  assert.deepEqual(result.keep.map(({ pullRequest, reason }) => ({ pullRequest, reason })), [
    { pullRequest: 777, reason: "open" },
  ]);
  assert.deepEqual(result.remove.map(({ pullRequest, reason }) => ({ pullRequest, reason })), [
    { pullRequest: 900, reason: "closed-retention-expired" },
  ]);
});

test("Closed PRは7日の境界直前まで保持し、境界で削除する", () => {
  const result = decideYpsReportRetention({
    records: [record(1), record(2)],
    pullRequests: {
      1: { state: "closed", closed_at: "2026-08-16T00:00:01Z" },
      2: { state: "closed", closed_at: "2026-08-16T00:00:00Z" },
    },
    now: "2026-08-23T00:00:00Z",
    legacyDeleteAfter: "2026-08-01T00:00:00Z",
  });
  assert.deepEqual(result.keep.map(({ pullRequest }) => pullRequest), [1]);
  assert.deepEqual(result.remove.map(({ pullRequest }) => pullRequest), [2]);
});

test("metadataなし旧レポートは移行期限まで削除しない", () => {
  const result = decideYpsReportRetention({
    records: [record(777, true)],
    pullRequests: { 777: { state: "closed", closed_at: "2026-01-01T00:00:00Z" } },
    now: "2026-08-23T00:00:00Z",
    legacyDeleteAfter: "2026-09-06T00:00:00Z",
  });
  assert.deepEqual(result.keep.map(({ reason }) => reason), ["legacy-migration-window"]);
  assert.deepEqual(result.remove, []);
});

test("PR状態が取得できない場合は削除判断を行わない", () => {
  assert.throws(
    () =>
      decideYpsReportRetention({
        records: [record(777)],
        pullRequests: {},
        now: "2026-08-23T00:00:00Z",
        legacyDeleteAfter: "2026-09-06T00:00:00Z",
      }),
    /Missing or invalid Pull Request state/,
  );
});

test("PR状態取得にはsourceリポジトリ側tokenを使う", async () => {
  let request;
  const pullRequests = await fetchPullRequests([record(777)], {
    token: "source-token",
    fetchImpl: async (url, options) => {
      request = { url, options };
      return new Response(JSON.stringify({ state: "open", closed_at: null, merged_at: null }), { status: 200 });
    },
  });
  assert.equal(request.url, "https://api.github.com/repos/yn1323/yps-crispy-carnival/pulls/777");
  assert.equal(request.options.headers.Authorization, "Bearer source-token");
  assert.equal(request.options.headers["User-Agent"], "hosting-pages-retention");
  assert.deepEqual(pullRequests, { 777: { state: "open", closed_at: null, merged_at: null } });
});

test("source tokenがない場合はPR取得を開始しない", async () => {
  await assert.rejects(() => fetchPullRequests([record(777)]), /SOURCE_REPOSITORY_TOKEN is required/);
});
