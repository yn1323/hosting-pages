#!/usr/bin/env bash
set -euo pipefail

REPORT_REPOSITORY="${1:?report repository checkout is required}"
SCRIPT_DIRECTORY="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REMOTE_REF="refs/heads/yps-reports"
LEGACY_DELETE_AFTER="${LEGACY_DELETE_AFTER:-2026-09-06T00:00:00Z}"

git -C "$REPORT_REPOSITORY" config user.name "github-actions[bot]"
git -C "$REPORT_REPOSITORY" config user.email "41898282+github-actions[bot]@users.noreply.github.com"

for attempt in 1 2 3 4 5; do
  git -C "$REPORT_REPOSITORY" fetch --depth=1 origin "$REMOTE_REF"
  observed_sha="$(git -C "$REPORT_REPOSITORY" rev-parse FETCH_HEAD)"
  git -C "$REPORT_REPOSITORY" reset --hard "$observed_sha"

  node "$SCRIPT_DIRECTORY/prune-yps-reports.mjs" \
    --repo "$REPORT_REPOSITORY" \
    --legacy-delete-after "$LEGACY_DELETE_AFTER"

  if git -C "$REPORT_REPOSITORY" diff --cached --quiet; then
    echo "changed=false" >> "$GITHUB_OUTPUT"
    exit 0
  fi

  tree_sha="$(git -C "$REPORT_REPOSITORY" write-tree)"
  snapshot_sha="$(git -C "$REPORT_REPOSITORY" commit-tree "$tree_sha" -m "Prune expired Shiftori reports")"
  if git -C "$REPORT_REPOSITORY" push \
    --force-with-lease="${REMOTE_REF}:${observed_sha}" \
    origin "${snapshot_sha}:${REMOTE_REF}"; then
    echo "changed=true" >> "$GITHUB_OUTPUT"
    echo "snapshot_sha=$snapshot_sha" >> "$GITHUB_OUTPUT"
    exit 0
  fi

  if [[ "$attempt" -eq 5 ]]; then
    echo "::error::yps-reports changed concurrently on all five attempts"
    exit 1
  fi
  sleep "$((attempt * 2))"
done
