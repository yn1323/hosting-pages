#!/usr/bin/env bash
set -euo pipefail

case "${1:-}" in
  *Username*) printf '%s\n' 'x-access-token' ;;
  *Password*) printf '%s\n' "${GIT_AUTH_TOKEN:?GIT_AUTH_TOKEN is required}" ;;
  *) exit 1 ;;
esac
