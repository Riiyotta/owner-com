# Changelog

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
