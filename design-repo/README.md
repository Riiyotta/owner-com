# owner-com — Design Repo

Machine-validated design system extracted from the owner.com clone (the Vite + React project this folder sits in),
structured per the design-repo BUILD-GUIDE and baseline R1-R14. Status: **design-review-pending**
(`productionApproved: false`, every `approvalFlags` entry false). The source is a real, live company's site: see
`assets/asset-roles.json` for what a generator may and may not reproduce. Nothing here was reviewed by a human.

## Counts

- Sections: 80
- Templates: 26
- Routes: 145
- Primitives: 16
- Components: 257
- Assets: 2063
- Foundation tokens: 186
- Semantic tokens: 19
- Rules: 7

Counts are recomputed from the files by `extraction/verify_all.py` (manifest and this list); also 24 asset roles and
10 generation examples (one per template family).

## Layout

- `tokens/00-foundation → 10-semantic → 20-component → 30-layout → themes`, and `tokens/llm/` (catalog built by
  `extraction/build_token_catalog.py`, policy with the TOKEN_* rules, component allowlist)
- `primitives/`, `components/`, `sections/` (one closed contract per section, `schema/section-contract.schema.json`),
  `templates/templates.json` (structured nodes + `family`)
- `compatibility/graph.json`, `assets/asset-roles.json`, `motion/motion-contract.json`, `policy/design-policy.json`
- `schema/` (PageSpec schema, clone example, `examples/generated-*.pagespec.json`, `source-identity.json`, semantic
  validator, adversarial suite)
- `extraction/` (citation ledger + measured heights, admission, drift proof, wrapper gate, measure / build scripts)

## Modes

Every PageSpec declares `mode`:

- `clone`: faithful reconstruction of owner.com. Real copy and clone-only assets may be used as evidence.
- `generation`: a new page for another brand. `schema/semantic_validate.py` rejects owner.com identity and content,
  one named rule per category: `GENERATION_MODE_BRAND` / `_PERSON` / `_CUSTOMER` / `_CLAIM` / `_COPY` / `_URL` /
  `_EMBED` / `_ASSET` / `_SCREENSHOT`. The patterns live in `schema/source-identity.json`, built by
  `extraction/build_source_identity.py` from the real clone source (src/sections, src/pages, src/routes.js,
  CLONE_SPEC.md, ASSET_MANIFEST.md) with file:line evidence; copy is stored as hashed 5-word shingles; strings are
  NFKC-normalised with zero-width characters removed and quotes / dashes folded before matching.

Honest limits: **no human reviewed the pinned patterns**; detection is **string-based** (verbatim or lightly
reformatted reuse, not paraphrase); the people / customer lists come from heuristics over the JSX and may miss names
or include a few non-names. Asset availability is pinned in code (`PINNED_AVAILABILITY` in both `verify_all.py` and
`semantic_validate.py`), as is retrieval eligibility (`PINNED_RETRIEVAL`: the /demo overlay modal and the hidden A/B
control are not retrievable).

## Evidence

The clone itself is the evidence tree: each ledger entry in `extraction/measured-values.json` cites a JSX line range
in `src/sections/<Component>.jsx` and the line in `src/pages/*.jsx` that renders it. `verify_all.py` re-reads every
range whenever this folder sits inside the clone (a fresh `git clone` included) and fails on any mismatch; only a copy
of `design-repo/` on its own degrades those checks to warnings. The original crawl's rendered-HTML snapshot ranges
(`recon/`, gitignored, never shipped) are kept per section as historical `recon` / `reconMeasuredFrom` and are not
re-checked.

Section heights (`sectionHeights`) were measured on the built clone (`npx vite build` + `npx vite preview`) at
1440 x 900 for all 145 routes with `extraction/measure_sections.mjs`. `extraction/wrapper_gate.py` gates them (HERO >
1800px warn / > 3000px error; one section > 50% of a page warn / > 60% error). Two whitelist entries remain (a
listicle chapter on two blog posts, the case-study index grid); they are **agent attestation, not a human sign-off**.
Mobile heights for the decomposed parts were not re-measured. **Visual parity against the live site was not measured
in this revision** (the clone's own CLONE.md reports an earlier builder parity run).

## Design policy

`category: saas`, bound to `n0-saas-design-constraints-common` 0.1.0 (Common IR 0.5, hard-and-soft). Owner sells a
monthly subscription platform (websites, online ordering, POS, marketing, dashboard) to restaurant businesses; the
evidence (file:line) is in `policy/design-policy.json`. The classification is an agent decision pending architecture
review. `designPolicy.contentHash` is recomputed by `verify_all.py` over the enforcing files.

## Admit this repo

```
python3 extraction/verify_all.py                       # everything above; needs jsonschema
python3 extraction/prove_drift.py --scratch <dir>      # proves each check fails on injected drift
python3 extraction/wrapper_gate.py                     # gate details (warnings listed)
python3 schema/semantic_validate.py <pagespec.json>    # one PageSpec
```

Rebuild derived files after a source change: `extraction/build_source_identity.py`, `extraction/build_token_catalog.py`,
`extraction/build_generation_examples.py`; re-measure heights with `extraction/measure_sections.mjs` (see its header).
