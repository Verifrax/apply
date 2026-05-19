# APPLY Terminal Intake Control Plane

A static page saying "submit" is not intake.

Finished APPLY completes:

`visitor -> self-selection filter -> bounded task -> structured artifact -> validation -> score -> receipt -> private queue -> sixty-second decision`

No public APPLY surface may make an applicant submission appear verified, authorized, proven, recognized, or accepted as truth.

## Release gates

1. Six bounded task lanes exist.
2. Form captures required structured signal.
3. Missing artifact is rejected.
4. Missing work link is rejected.
5. Honeypot is rejected.
6. Overlong narrative is rejected.
7. Submission receives deterministic score.
8. Submission writes to private queue.
9. Receipt is generated.
10. Admin queue requires bearer token.
11. Reviewer can transition queue state.
12. Full record read is protected.
13. Public confirmation is receipt-only.
14. Status route is APPLY-only.
15. PII never enters public repository.
16. Static contract tests pass.
