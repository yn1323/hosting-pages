#!/usr/bin/env bash
set -euo pipefail

KEEP_VRT_PR_REPORTS="${KEEP_VRT_PR_REPORTS:-5}"
KEEP_PLAYWRIGHT_REPORTS="${KEEP_PLAYWRIGHT_REPORTS:-12}"

collect_numbered_dirs() {
  local base_dir="$1"
  local prefix="$2"

  [[ -d "$base_dir" ]] || return 0

  find "$base_dir" -mindepth 1 -maxdepth 1 -type d -name "${prefix}[0-9]*" | while IFS= read -r dir; do
    local name number
    name="${dir##*/}"
    number="${name#"$prefix"}"

    case "$number" in
      ''|*[!0-9]*) continue ;;
    esac

    printf '%s\t%s\n' "$number" "$dir"
  done | sort -n | awk -F '\t' '{print $2}'
}

prune_numbered_dirs() {
  local base_dir="$1"
  local prefix="$2"
  local keep="$3"
  local label="$4"
  local dirs=()

  while IFS= read -r dir; do
    dirs+=("$dir")
  done < <(collect_numbered_dirs "$base_dir" "$prefix")

  local total="${#dirs[@]}"
  local remove_count=$((total - keep))

  if ((remove_count <= 0)); then
    echo "Keeping all ${total} ${label} report directories."
    return 0
  fi

  echo "Removing ${remove_count} old ${label} report directories; keeping ${keep} newest."

  local index
  for ((index = 0; index < remove_count; index++)); do
    echo "Removing ${dirs[$index]}"
    rm -rf -- "${dirs[$index]}"
  done
}

prune_numbered_dirs "yps-crispy-carnival-vrt" "pr-" "$KEEP_VRT_PR_REPORTS" "VRT PR"
prune_numbered_dirs "yps-crispy-carnival" "" "$KEEP_PLAYWRIGHT_REPORTS" "Playwright PR"
