#!/usr/bin/env node
import { validatePagesSite } from "./report-site.mjs";

const root = process.argv[2];
if (!root) {
  console.error("Usage: validate-pages-site.mjs <public-directory>");
  process.exit(2);
}

try {
  const result = validatePagesSite(root);
  if (result.warning) console.warn(`::warning::${result.warning}`);
  console.log(JSON.stringify(result));
} catch (error) {
  console.error(`::error::${error.message}`);
  process.exitCode = 1;
}
