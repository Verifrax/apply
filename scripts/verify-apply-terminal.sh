#!/usr/bin/env bash
set -euo pipefail
npm test
grep -R "INTAKE_ONLY_NOT_TRUTH" -n functions schemas public docs README.md >/dev/null
grep -R "recognize terminal truth" -n public README.md docs >/dev/null
grep -R "assign recourse" -n public README.md docs >/dev/null
test "$(cat CNAME)" = "apply.verifrax.net"
echo "APPLY_TERMINAL_VERIFY_OK=true"
