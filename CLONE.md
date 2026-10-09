# clone/ — Online Ordering and Restaurant Marketing System | Owner.com

A runnable **Vite + React + react-router + Tailwind v3** project written from the real rendered DOM of https://www.owner.com/: one component per section with that section's own markup, the site's own stylesheets, its real images, fonts and video under `public/`, routes declared in `src/routes.js`.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What is in it

- `src/sections/`: **438** component(s) (803 section instance(s) over 144 route(s); identical markup shared across routes is one component).
- `src/pages/` + `src/routes.js` + `src/App.jsx`: one page per captured route, sections in page order, react-router links between captured pages.
- `src/styles/`: the site's own CSS, copied as it was with every `url()` rewritten to a file under `public/`; `tokens.css` + `tailwind.config.cjs` carry the measured design tokens (the Tailwind utilities are not bundled, because Tailwind v3 output is unlayered and would override a site whose own CSS uses native `@layer`; the site's CSS alone styles the clone).
- `public/`: **1534** real file(s), 232.3 MB (images, fonts, video, SVG). Nothing points outside the project.
- `clone-manifest.json`: route → page → component map, every still, every dropped file.

## Animation and behaviour (updated 2026-10-09)

The builder captured the DOM but dropped every script. The original's own behaviour scripts (`index-new.js`, `homepage.js`, `owner-animations.js`, the inline rotating-text / highlight-text scripts and the Webflow IX chunks, all in the evidence mirror) are now ported into `src/lib/interactions/`. They run per route (`pageScripts.json` limits page-specific scripts to the routes that loaded them on the original) and are torn down on navigation. Dependencies are the original's own versions: `gsap` 3.15.0 and `smooothy` 0.0.35.

- **Reproduced:**
  - nav dropdowns and the mobile menu
  - accordions / FAQs
  - hero rotating text
  - testimonial slider
  - logo / review marquees
  - stat odometers
  - board modals
  - feature tabs
  - star canvases and star-rating fill
  - CTA / timeline scroll scrubs
  - highlight text
  - Bunny video player, playing local MP4s from `public/_videos/`
- **Not reproduced:** anything that needs a network service:
  - Google Places search (homepage field, `/demo`)
  - the careers jobs list (Ashby API)
  - the `/demo` form's final step
  - cookie consent, analytics
- **Forms:** submission is prevented everywhere.
- **Links:** external links are outbound. Links to the 5 pages that 404 on the live site point at the live URLs, as broken as on the original.
- **No trackers:** none are in `src/` or `public/`.

## Checks run by the builder

| Check | Result |
|---|---|
| Every `src` / `url()` the code points at exists in `public/` | PASS (1981 image reference(s), 1981 resolved) |
| No tracker host in code or `public/` | PASS |
| External links | Restored 2026-10-09 (1,599 hrefs back from the snapshots); the builder had removed them. |
| No placeholder boxes from the level-2 scaffold | PASS |
| Vite build + every route loads offline | PASS: vite build ok; 144 route(s) loaded: 0 console/network error(s), 0 outside host(s), 0 empty page(s) |
| Parity vs the original page, per section (gate 80%) | PASS: average 93.9% over 6 route(s) |

### Parity detail

Each section of the built clone is compared with the same section of the **original page**: the crawl's own full-page screenshot at 1440 px (`extras/images/`, taken from the live site with its scripts running) cut at that section's rectangle, or a fresh screenshot of the offline mirror when that file is missing. Both sides are compared on a half-scale grid; a pixel matches when no channel differs by more than 40/255, and a section whose height differs by more than 10 % is scaled down by the height ratio (except GSAP-pinned sections, whose extra scroll length is a script's doing). The route score weights sections by height. Sections below the gate get a side-by-side picture (original | clone) in `qa/parity/`. Whole-page height is not scored: GSAP pin spacers add blank scroll length the clone does not reproduce. Live animation, video and carousels in motion differ by design.

**`/`**: 94.5% over 11 of 11 section(s) (reference: original crawl screenshot); page height 10663 → 10663 px. Below the gate: 1:TheAIPlatformRestaurants 74%, 2:GrowSalesLikeThese 75%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper` | 70 → 70 px | 99.8% | 99.8% |
| 1 | `TheAIPlatformRestaurants` | 1181 → 1181 px | 73.9% | 73.9% ⚠ |
| 2 | `GrowSalesLikeThese` | 789 → 789 px | 75.2% | 75.2% ⚠ |
| 3 | `WithOwnerYouGet` | 1283 → 1283 px | 99.9% | 99.9% |
| 4 | `SeeWhyWeRe` | 1131 → 1131 px | 92.9% | 92.9% |
| 5 | `GiveYourRestaurantThe` | 2004 → 2004 px | 100.0% | 100.0% |
| 6 | `TrustedByOwners` | 979 → 979 px | 97.0% | 97.0% |
| 7 | `S3BeliefsThatGuide` | 1065 → 1065 px | 100.0% | 100.0% |
| 8 | `SeeOurFreeGuides` | 1064 → 1064 px | 100.0% | 100.0% |
| 9 | `TheEasiestWayTo` | 534 → 534 px | 100.0% | 100.0% |
| 10 | `Section` | 1012 → 1012 px | 100.0% | 100.0% |

**`/careers`**: 97.2% over 10 of 10 section(s) (reference: original crawl screenshot); page height 11082 → 11082 px. Below the gate: 1:ProtectTheFutureOf 61%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper25` | 70 → 70 px | 99.7% | 99.7% |
| 1 | `ProtectTheFutureOf` | 820 → 820 px | 60.8% | 60.8% ⚠ |
| 2 | `BgColorBglighter2` | 1997 → 1997 px | 99.7% | 99.7% |
| 3 | `WhatItSLike` | 2662 → 2662 px | 100.0% | 100.0% |
| 4 | `BgColorBglighter3` | 2031 → 2031 px | 100.0% | 100.0% |
| 5 | `SeeIfOurValues` | 866 → 866 px | 100.0% | 100.0% |
| 6 | `WeReBackedBy` | 992 → 992 px | 99.8% | 99.8% |
| 7 | `Roles` | 610 → 610 px | 100.0% | 100.0% |
| 8 | `TheEasiestWayTo6` | 534 → 534 px | 100.0% | 100.0% |
| 9 | `Section25` | 1012 → 1012 px | 100.0% | 100.0% |

**`/case-studies/cyclo-noodles`**: 96.3% over 8 of 8 section(s) (reference: original crawl screenshot); page height 6634 → 6634 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper37` | 70 → 70 px | 99.7% | 99.7% |
| 1 | `HowCycloNoodlesGrew` | 1318 → 1318 px | 80.3% | 80.3% |
| 2 | `HowTheirOnlineExperience7` | 1357 → 1357 px | 100.0% | 100.0% |
| 3 | `BgColorTaupe27` | 832 → 832 px | 100.0% | 100.0% |
| 4 | `Section45` | 891 → 891 px | 99.9% | 99.9% |
| 5 | `BgColorBglighter12` | 1067 → 1067 px | 100.0% | 100.0% |
| 6 | `IsProductPage` | 408 → 408 px | 100.0% | 100.0% |
| 7 | `Section` | 1012 → 1012 px | 100.0% | 100.0% |

**`/blog-category/increase-sales`**: 93.4% over 5 of 5 section(s) (reference: original crawl screenshot); page height 4475 → 4475 px. Below the gate: 1:IsHero3 70%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper2` | 70 → 70 px | 99.8% | 99.8% |
| 1 | `IsHero3` | 996 → 996 px | 69.6% | 69.6% ⚠ |
| 2 | `IsCategoryPage` | 2117 → 2117 px | 100.0% | 100.0% |
| 3 | `IsProductPage` | 408 → 408 px | 100.0% | 100.0% |
| 4 | `Section` | 1012 → 1012 px | 100.0% | 100.0% |

**`/blog/how-to-increase-average-check-size`**: 90.4% over 3 of 4 section(s) (reference: original crawl screenshot); page height 18141 → 18141 px. Below the gate: 0:NavWrapper2 57%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper2` | 70 → 70 px | 57.2% | 57.2% ⚠ |
| 1 | `S13EffectiveWaysTo` | 16716 → 16716 px | 90.3% | 90.3% |
| 2 | `IsProductPage` | 408 → 408 px | 100.0% | 100.0% |
| 3 | `Section` | 1012 → 1012 px | — | skipped |

**`/blog/restaurant-branding-more-direct-orders`**: 91.8% over 4 of 4 section(s) (reference: original crawl screenshot); page height 6458 → 6458 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper2` | 70 → 70 px | 89.9% | 89.9% |
| 1 | `RestaurantBrandingAQuick` | 5032 → 5032 px | 89.5% | 89.5% |
| 2 | `IsProductPage` | 408 → 408 px | 100.0% | 100.0% |
| 3 | `Section` | 1012 → 1012 px | 100.0% | 100.0% |

### Missing in the mirror

11 local URL(s) the rendered page used were not saved by the crawl: `/_ext/player.vimeo.com/progressive_redirect/playback/1177074455/rendition/2160p/file.mp4%20%282160p%29.mp4`, `/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c%2F6a1d6069e205aa2e95384565_ashleys-cafe-pos-short-comp_mp4.mp4,/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c%2F6a1d6069e205aa2e95384565_ashleys-cafe-pos-short-comp_webm.webm`, `/_ext/cdn.prod.website-files.com/placeholder.svg`, `/_ext/cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F67bcf345ebc3730d14fb4f00_Cynthia%20Trim%20v2-transcode.mp4,/_ext/cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F67bcf345ebc3730d14fb4f00_Cynthia%20Trim%20v2-transcode.webm`, `/_ext/cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F67aa323817479f6374c5e8af_careers-rob-loop-transcode.mp4,/_ext/cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F67aa323817479f6374c5e8af_careers-rob-loop-transcode.webm`, `/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69b9330c8b70142e4e5f830b_LM%20-%20Animation%201_Hero%20Desktop_mp4.mp4,/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69b9330c8b70142e4e5f830b_LM%20-%20Animation%201_Hero%20Desktop_webm.webm`, `/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69b9330c8b70142e4e5f830d_LM%20-%20Animation%201_Hero%20Mobile_1_mp4.mp4,/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69b9330c8b70142e4e5f830d_LM%20-%20Animation%201_Hero%20Mobile_1_webm.webm`, `/_ext/vz-9063af78-741.b-cdn.net/6c758236-744d-4bf3-adcc-49807284ee45/playlist.m3u8`

