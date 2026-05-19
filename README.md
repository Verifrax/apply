# APPLY

APPLY is the VERIFRAX terminal intake control plane.

`APPLY = intake(filter(humans)) -> structured_signal`

APPLY accepts structured intake, rejects incomplete intake, normalizes applicant signal, scores reviewability, issues intake receipts, routes records into a private queue, exposes protected reviewer workflow, and emits review state.

APPLY does not decide truth.

APPLY may not define law, accept canonical state, issue authority, execute governed actions, verify artifacts, publish proof, archive evidence, recognize terminal truth, assign terminal recourse, or publish applicant PII.

## Live host

https://apply.verifrax.net

## Required routes

Public: `/`, `/task`, `/submit`, `/confirm`, `/status`, `/privacy`, `/admin`.

API: `/api/submit`, `/api/confirm`, `/api/status`, `/api/admin/submissions`, `/api/admin/submission/:id`.

## Tracks

- protocol-review
- security-adversarial-review
- verifier-engineering
- surface-frontend
- enterprise-compliance
- documentation-systems

## Queue states

`new`, `review`, `accepted`, `rejected`, `deferred`, `spam`, `quarantined`.

## Scoring law

`S = 0.5 * output_presence + 0.2 * link_quality + 0.2 * alignment + 0.1 * clarity`

## Runtime

Cloudflare Pages Functions + D1:

- `APPLY_DB`
- `ADMIN_TOKEN`
- `RECEIPT_HMAC_SECRET`
- `TURNSTILE_SECRET`
- `APPLY_WEBHOOK_URL`
