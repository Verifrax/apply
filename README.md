# APPLY

![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![Role](https://img.shields.io/badge/role-intake%20surface-111111)
![Host](https://img.shields.io/badge/host-apply.verifrax.net-1f6feb)
![Boundary](https://img.shields.io/badge/boundary-intake%20only-d73a49)

Canonical intake repository for `https://apply.verifrax.net/`, responsible only for applicant intake, intake routing, submission structure, and intake-surface presentation, while remaining outside authority issuance, governed execution, proof publication, public verification, archive publication, documentation authority, status reporting, and evidence-root artifact registration.

## Status

* Repository role: intake surface only
* Public host ownership: `https://apply.verifrax.net/`
* Surface class: intake and submission boundary
* Deployment model: static or intake-owned deployment only
* Stack position: intake edge adjacent to public-facing Verifrax surfaces
* Authority relation: no authority issuance
* Execution relation: no governed runtime execution
* Proof relation: no proof publication
* Verification relation: no verifier ownership
* Artifact relation: must stay aligned with the artifact-0005 perimeter without claiming authorship, execution, verification, or registration of artifact-0005
* License: Apache License Version 2.0

## One-sentence role

`apply` is the Verifrax intake repository and sole owner of `apply.verifrax.net`, giving the public system one bounded applicant-entry surface without turning intake into execution, proof, authority, verification, archive, or evidence-root behavior.

## What this repository is

This repository is the intake boundary.

It exists for:

* applicant-facing intake entry
* structured submission capture
* bounded intake flow
* applicant confirmation surfaces
* intake challenge or task surfaces when intentionally present
* intake-specific UX and copy
* role separation between contribution funnel and protocol/runtime surfaces

A reader should be able to determine immediately:

* where applications are supposed to begin
* what intake owns
* what intake explicitly does not own
* which neighboring surfaces handle execution, proof, authority, and verification instead

## What this repository is not

This repository is not:

* the commercial primary landing surface
* the execution API
* the authority issuer
* the governed runtime
* the proof publication surface
* the public verifier surface
* the seal archive
* the canonical documentation surface
* the status surface
* the evidence-root artifact registry

Specifically, this repository must not act as:

* `https://api.verifrax.net/`
* `https://proof.verifrax.net/`
* `https://auctoriseal.verifrax.net/`
* `https://corpiform.verifrax.net/`
* `https://verify.verifrax.net/`
* `https://sigillarium.verifrax.net/`
* `https://docs.verifrax.net/`
* `https://status.verifrax.net/`
* `https://www.verifrax.net/`

It must not publish:

* proof artifacts
* runtime receipts
* authority objects
* archive catalogs
* verifier semantics as the verifier of record
* artifact-0005 registration as the evidence root of record

The limiting case is simple:

If `apply` can also execute, publish proof, or issue authority, then role separation is gone and the subdomain map is cosmetic only.

So this repository must stay narrow.

## Why this repository exists

The stack needs one public place where applications start.

Without a dedicated intake boundary, the system collapses into cross-surface noise:

* proof becomes intake by accident
* verifier becomes intake by confusion
* docs become intake by fallback
* execution becomes intake by misuse

That is exactly what this repository prevents.

`apply` gives the system one explicit answer to the question:

> Where does applicant submission begin?

Answer:

> `https://apply.verifrax.net/`

Not `api`.
Not `proof`.
Not `verify`.
Not `auctoriseal`.
Not `corpiform`.
Not `sigillarium`.

## Verifrax system path labels

The governed Verifrax path that this README must stay compatible with is:

1. `.github` — organization governance and governed repository boundary
2. `AUCTORISEAL` — authority issuance and public authority reference
3. `CORPIFORM` — governed execution and receipt emission
4. `VERIFRAX` — authored protocol, evidence root, and artifact-chain registration boundary
5. `VERIFRAX-SPEC` — derived specification publication surface
6. `VERIFRAX-PROFILES` — deterministic profile-constraint surface
7. `VERIFRAX-SAMPLES` — pinned sample and reproducibility surface
8. `VERIFRAX-verify` — public verification repository and UI boundary
9. `VERIFRAX-DOCS` — explanatory documentation surface
10. `cicullis` — enforcement boundary
11. `proof` — proof publication surface
12. `SIGILLARIUM` — seal and archive reference surface
13. `apply` — intake surface

The live host-label map that must remain explicit and non-contradictory is:

* `https://api.verifrax.net/` — execution surface
* `https://proof.verifrax.net/` — proof publication surface
* `https://auctoriseal.verifrax.net/` — authority issuance and authority reference surface
* `https://corpiform.verifrax.net/` — runtime and receipt reference surface
* `https://cicullis.verifrax.net/` — enforcement reference surface
* `https://verify.verifrax.net/` — public verification surface
* `https://sigillarium.verifrax.net/` — seal and archive reference surface
* `https://apply.verifrax.net/` — intake surface
* `https://docs.verifrax.net/` — documentation surface

This README must remain compatible with `artifact-0005` as the load-bearing authority → execution → verification → evidence boundary without claiming that this repository alone authors, proves, seals, or registers `artifact-0005` unless that role is actually true for this repository.

## Public host ownership

This repository owns:

* `https://apply.verifrax.net/`

That host should remain intake-only.

It may contain bounded paths such as:

* `/`
* `/submit`
* `/task`
* `/confirm`

if those paths are actually implemented and remain intake-only.

It must not become a generic mirror of another surface.

## Intake boundary

The intake surface is responsible for applicant-facing entry and structured signal capture.

That includes material such as:

* intake forms
* structured submission prompts
* applicant tasks or challenge surfaces
* confirmation states
* intake explanations
* bounded applicant instructions

It does not include:

* public proof retrieval
* governed execution endpoints
* authority object issuance
* receipt publication
* verifier-grade proof checking
* seal archive browsing
* general documentation hosting

## Position in the Verifrax system

The repository-to-surface split is:

* [`.github`](https://github.com/Verifrax/.github) — organization governance perimeter
* [`VERIFRAX`](https://github.com/Verifrax/VERIFRAX) — authored source and evidence-root chain context
* [`AUCTORISEAL`](https://github.com/Verifrax/AUCTORISEAL) — authority issuance and authority reference
* [`CORPIFORM`](https://github.com/Verifrax/CORPIFORM) — governed execution and receipt boundary
* [`VERIFRAX-SPEC`](https://github.com/Verifrax/VERIFRAX-SPEC) — derived specification publication
* [`VERIFRAX-verify`](https://github.com/Verifrax/VERIFRAX-verify) — public verifier surface
* [`proof`](https://github.com/Verifrax/proof) — public proof publication
* [`SIGILLARIUM`](https://github.com/Verifrax/SIGILLARIUM) — archive and seal reference
* [`VERIFRAX-DOCS`](https://github.com/Verifrax/VERIFRAX-DOCS) — documentation surface
* [`apply`](https://github.com/Verifrax/apply) — intake surface

The correct reading is not “all public sites do everything.”
It is “each public site has one bounded role.”

`apply` is the intake role.

## Relationship to artifact-0005

This repository must stay aligned with the artifact-0005 perimeter because public-facing role drift weakens chain trust.

But the boundary is strict.

`apply` does not:

* author artifact-0005
* issue the artifact-0005 authority object
* execute the artifact-0005 governed runtime path
* verify artifact-0005 as the verifier of record
* register artifact-0005 in the evidence root

What it can do is link outward correctly to the system that does.

That means this repository may reference the neighboring verification and evidence surfaces while staying clear that intake is not the artifact boundary of record.

## Relationship to verification

Verification belongs to:

* repository: [`VERIFRAX-verify`](https://github.com/Verifrax/VERIFRAX-verify)
* public verifier host: `https://verify.verifrax.net/`

Proof publication belongs to:

* repository: [`proof`](https://github.com/Verifrax/proof)
* public proof host: `https://proof.verifrax.net/`

A useful counterexample:

If an applicant can submit through `apply`, that does not mean `apply` verifies anything.
If a submission exists, that does not make it proof.
If a form is valid, that does not make it an authority object.

Intake validity is not proof validity.

## Relationship to authority and execution

Authority belongs to:

* repository: [`AUCTORISEAL`](https://github.com/Verifrax/AUCTORISEAL)
* host: `https://auctoriseal.verifrax.net/`

Governed execution belongs to:

* repository: [`CORPIFORM`](https://github.com/Verifrax/CORPIFORM)
* execution host: `https://api.verifrax.net/`
* runtime reference host: `https://corpiform.verifrax.net/`

This repository must not imply that applicant submission creates authority or triggers governed execution by itself.

## Inputs and outputs

### Inputs

This repository accepts applicant-facing input only, such as:

* form submissions
* structured answers
* applicant metadata where intentionally requested
* task responses where intentionally requested

### Outputs

This repository emits intake outputs only, such as:

* submission acknowledgements
* bounded applicant feedback
* confirmation surfaces
* intake-state transitions

It does not emit:

* authority objects
* runtime receipts
* proof artifacts
* verifier verdicts
* archive records
* evidence-root artifact registration

## What a reader should solve here

A reader should land here to answer:

* where does Verifrax applicant intake live?
* what does `apply.verifrax.net` own?
* what is the intake boundary?
* how is intake separated from proof, verify, authority, and execution?

A reader should not land here expecting:

* API execution
* proof browsing
* proof verification
* authority issuance
* archive browsing
* chain artifact registration

## Reading order

For system understanding, the correct reading order is:

1. `.github` — governance perimeter
2. `VERIFRAX` — authored source and evidence-root chain context
3. `AUCTORISEAL` — authority layer
4. `CORPIFORM` — execution layer
5. `VERIFRAX-verify` — verification surface
6. `proof` — proof publication surface
7. `apply` — intake surface

If a reader starts here and expects protocol authorship, they started on the wrong edge of the system.

## Deployment rule

This repository must be the sole owning repository for `apply.verifrax.net`.

That means:

* one host
* one owning repository
* one intake role
* no hidden deployment overlap with proof, verify, docs, or execution surfaces

If another repository can silently deploy the same host, the README truth is already broken.

## CI and truth-surface expectations

This repository should remain compatible with:

* deterministic build behavior for the intake surface
* host-ownership clarity
* no cross-surface claim drift
* no execution/proof/authority overclaim
* no accidental conversion into a generic jobs board or marketing catch-all

The failure mode to avoid is not merely bad prose.
It is role contamination.

## Neighboring surfaces this README must point to correctly

This repository should preserve correct separation and correct links with:

* [`.github`](https://github.com/Verifrax/.github)
* [`VERIFRAX`](https://github.com/Verifrax/VERIFRAX)
* [`AUCTORISEAL`](https://github.com/Verifrax/AUCTORISEAL)
* [`CORPIFORM`](https://github.com/Verifrax/CORPIFORM)
* [`VERIFRAX-verify`](https://github.com/Verifrax/VERIFRAX-verify)
* [`proof`](https://github.com/Verifrax/proof)
* [`SIGILLARIUM`](https://github.com/Verifrax/SIGILLARIUM)
* [`VERIFRAX-DOCS`](https://github.com/Verifrax/VERIFRAX-DOCS)

But it must not flatten them into “one site that does everything.”

## Reader contract

A reader should be able to answer these instantly:

1. Does this repo own `apply.verifrax.net`? Yes.
2. Is this repo intake-only? Yes.
3. Does it issue authority? No.
4. Does it execute governed runtime? No.
5. Does it publish proof? No.
6. Does it verify proof as the verifier surface? No.
7. Does it register artifact-0005? No.
8. Must it stay aligned with the artifact-0005 perimeter? Yes.

If those answers are not immediate, the README is still too weak.

## Security

Treat submission handling, intake-data exposure, cross-surface leakage, and unintended execution/proof coupling as security-relevant defects.

Do not use public issues for sensitive findings if a private route exists.

An intake surface that accidentally behaves like an execution or proof surface is not merely confusing; it breaks system separation.

## Contributing

A contribution here is wrong if it:

* turns intake into a generic marketing surface
* turns intake into a jobs claim surface with ungrounded promises
* turns intake into proof or verifier language
* turns intake into authority or runtime language
* claims artifact-0005 ownership or registration
* makes `apply.verifrax.net` sound like anything other than the intake boundary
* introduces role overlap with `proof`, `verify`, `api`, `auctoriseal`, `corpiform`, `sigillarium`, or `docs`

## License

Apache License Version 2.0. See `LICENSE`.
