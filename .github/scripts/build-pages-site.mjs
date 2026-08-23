#!/usr/bin/env node
import { buildPagesSite } from "./report-site.mjs";

function parseArguments(argv) {
  const values = {};
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index];
    const value = argv[index + 1];
    if (!key?.startsWith("--") || value === undefined) throw new Error(`Invalid argument: ${key ?? ""}`);
    values[key.slice(2)] = value;
  }
  for (const required of ["main-repo", "reports-repo", "output"]) {
    if (!values[required]) throw new Error(`Missing --${required}`);
  }
  return values;
}

try {
  const args = parseArguments(process.argv.slice(2));
  const result = buildPagesSite({
    mainRepository: args["main-repo"],
    reportsRepository: args["reports-repo"],
    outputDirectory: args.output,
  });
  console.log(JSON.stringify(result));
} catch (error) {
  console.error(`::error::${error.message}`);
  process.exitCode = 1;
}
