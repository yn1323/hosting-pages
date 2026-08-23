import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const workflowUrl = new URL("../workflows/deploy-pages.yml", import.meta.url);

test("Pages検証の失敗をパイプで成功扱いにしない", () => {
  const workflow = readFileSync(workflowUrl, "utf8");
  assert.match(workflow, /validate-pages-site\.mjs/);
  assert.doesNotMatch(workflow, /validate-pages-site\.mjs[^\n]*\|/);
});
