# Changelog

## 0.2.0 — 2026-10-29 (baseline revision R1-R14 + approval requirements; pageSpecVersion 0.2.0, allowlistVersion 2)

- **Evidence actually checked in a git clone.** The ledger cited rendered-HTML snapshots under `recon/mirror/src/`, which
  `.gitignore` excludes, so every published copy reported "evidence not shipped" and skipped citations and asset files.
  All 1,907 ledger entries now cite the clone's own JSX (`src/sections/<Component>.jsx` line ranges + the `usedAt` line in
  `src/pages/*.jsx`); `snapshotFolder` is `src/`. `verify_all.py` checks them whenever design-repo/ sits in its clone and
  FAILS if src/ or public/ is missing there; only a design-repo copied alone warns. Old snapshot ranges kept as
  historical `recon` / `reconMeasuredFrom`. Asset entries carry `inClone` (1,533 of 2,063 files ship in public/; the
  rest were crawl-only) and the flag is checked both ways.
- **Mode (R1/R2).** Required closed `mode: clone | generation`; generation mode rejects owner.com brand, people,
  customers, claims, copy (5-word shingles), source hosts / entity routes, embeds, clone-only / blocked assets and
  product screenshots (GENERATION_MODE_*), from `schema/source-identity.json` built by
  `extraction/build_source_identity.py` (rebuilt and compared by verify_all). The clone example is now `mode: clone`.
- **Assets (R3).** Closed `availability` on all 24 roles (14 source roles clone-only / blocked, 10 new generation-safe
  roles incl. placeholder brand mark, operator-supplied asset, generated illustration, placeholder screenshot, fictional
  avatar, placeholder company logo, placeholder URL, original copy); `generationSafeSubstitutes` + guidance; pinned in
  code in BOTH verify_all.py and semantic_validate.py and cross-checked. New `product-screenshot` role (13 assets whose
  file names say screenshot / dashboard). The real logo is clone-only.
- **Examples (R4).** One generation example per template family (10 families, `schema/examples/generated-*.pagespec.json`,
  fictional brand "Quillfern"), built by `extraction/build_generation_examples.py`.
- **Whole-page sections decomposed (R6).** Measured on the built clone, `hero.section-blog-content` held 92-95% of every
  blog post and `hero.section-legal` 91-94% of the legal pages. They are replaced by article header / cover / key
  takeaways / chapter (split before each h2) / FAQ / author / sidebar, and legal header / nav / part (split before each
  h2, or h3). The /reviews review wall (74%) is split into header / card clusters / photo bands.
- **/demo modelled.** The clone serves /demo (A/B overlay); it is now `template.demo` (hidden control + overlay modal,
  both `retrievalEligible: false`). Every route in `src/routes.js` is modelled or excluded with a reason (checked).
- **R7/R8.** Every contract has closed `source` / `semantic`, `retrievalEligible`, `generatedAssetRoles`, `layout.inFlow`,
  validated by the closed `schema/section-contract.schema.json`.
- **R9.** `extraction/wrapper_gate.py` (thresholds pinned in code), heights for all 145 routes at 1440px from
  `extraction/measure_sections.mjs`; two whitelist entries (agent attestation, not a human sign-off).
- **R10.** Token catalog derived by `extraction/build_token_catalog.py` (adds supported `fontFamily`, PageSpec slots,
  theme coverage); PageSpec nodes may pick catalog tokens; TOKEN_UNKNOWN / RAW_COLOR / ARBITRARY_SPACING /
  UNSUPPORTED_FONT / SLOT_MISMATCH / THEME_UNKNOWN / THEME_UNRESOLVED / INVALID_COMBINATION.
- **Policy.** `category: saas`, bound to `n0-saas-design-constraints-common` 0.1.0 with evidence and a recomputed contentHash.
- **R14.** The absolute machine path in `extraction/prove_drift.py` is now built at run time (the drift case is kept);
  verify_all builds its path patterns the same way. `prove_drift.py --scratch DIR`.
- Templates gained `family` and descriptive names (ids unchanged). Generic "Group" names were not semantic.
- Not done / limits: no human review; string-based leakage detection; mobile heights not re-measured for decomposed
  parts; visual parity not measured in this revision.

## Unreleased (2026-10-09)

- **Assets.** 749 tracker pixels (analytics.twitter.com, t.co, syndication.x.com, tvspix.com, q.quora.com, clickcease, ct.capterra.com, alb.reddit.com) removed from `assets/asset-roles.json`; counts recomputed (2812 → 2063).
- **Citations.** 9 ledger ranges re-anchored after their snapshot lines moved (/our-story +231 lines; four footers ended past EOF).
- **Route coverage.** Excluded routes now carry their real status: 13 `redirect`, 5 `404-on-live`, 1 `external-file`, and `/demo` `built-not-modelled` (built in the clone, no measured sections).

## 0.1.0 revision — 2026-10-07 (external punch-list pass on top of the 2026-10-06 rebuild; repositoryVersion unchanged)
- The page-wrapper split and the product/editorial template separation were already delivered by the 2026-10-06 rebuild (no section wraps a whole page; blog posts and product pages are different templates). This pass keeps them and adds guards: `verify_all.py` now fails if any route is modelled as one section or any template has one node, and the adversarial suite proves a blog post cannot open with the product hero (and vice versa).
- **Utility and vendor classes are out of the canonical vocabulary.** 43 components removed (13 `u-mb-*`/`u-mt-*`, 25 HubSpot `hs-*`/`hbs-form`, 2 Osano `osano-cm-*`, `nice-select`, `page-wrapper`, `main-wrapper`). They are recorded in `extraction/measured-values.json` under `excludedFromCanonicalVocabulary` as extraction/source metadata; `verify_all.py` fails if one comes back as a component or section.
- **Routes.** `ROUTES.md` is regenerated from the ledger (80 routes showed an em dash instead of their template) and `verify_all.py` now checks it against the ledger. `/demo` (snapshot present, no sections extracted) and 19 routes that captured pages link to but that were never snapshotted are listed as `out-of-scope` in `routeCoverage` (ledger + manifest), checked by `verify_all.py`.
- New drift-proof injections: utility class back in components, single-section route, stale ROUTES.md, manifest routeCoverage drift, stale schema node branch (the node `allOf` content branches are now checked against `sections/`).

## 0.1.0 — 2026-10-06T09:06:08Z
- Initial extraction from https://www.owner.com/: 67 sections, 25 templates, 144 routes.
