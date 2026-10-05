# clone/ — Online Ordering and Restaurant Marketing System | Owner.com

A runnable **Vite + React + react-router + Tailwind v3** project written from the real rendered DOM of https://www.owner.com/?ref=saaspo.com: one component per section with that section's own markup, the site's own stylesheets, its real images, fonts and video under `public/`, routes declared in `src/routes.js`.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What is in it

- `src/sections/`: **438** component(s) (803 section instance(s) over 144 route(s); identical markup shared across routes is one component).
- `src/pages/` + `src/routes.js` + `src/App.jsx`: one page per captured route, sections in page order, react-router links between captured pages.
- `src/styles/`: the site's own CSS, copied as it was with every `url()` rewritten to a file under `public/`; `tokens.css` + `tailwind.config.cjs` carry the measured design tokens (Tailwind utilities load first, preflight is off, so the site's CSS wins).
- `public/`: **1534** real file(s), 232.3 MB (images, fonts, video, SVG). Nothing points outside the project.
- `clone-manifest.json`: route → page → component map, every still, every dropped file.

## Animation

- **Canvas / Rive areas: 2 still(s) captured** (4 canvas(es) drew nothing and are an empty, correctly sized box). The 0 `.riv` file(s) are **not** included: a remix cannot recolour or redraw a Rive file and would ship the original mascot on every generated site. Replace each still with an image slot, CSS or GSAP.
- **Scroll-driven motion is not reproduced.** The clone keeps one reveal-on-scroll observer only. Rebuild them with CSS or GSAP in the remix.
- **Scroll-reveal: 89 element(s)** that started hidden or offset and animated in are marked `data-reveal`; one IntersectionObserver (`src/lib/usePageChrome.js`) fades them up (off under reduced motion).
- **Not reproduced**: GSAP timelines / ScrollTrigger pins and scrubs (pin wrappers are removed, content flows normally), Lenis smooth scroll, menus, accordions, tabs, carousels and other script behaviour (only the state the page was in after load is captured), forms (submit is prevented), third-party frames (replaced by an empty box of the same size), shadow-DOM content.
- **No analytics or trackers**: none are in `src/` or `public/`.
- **No external links**: links to other sites (and to pages that were not captured) keep their element and styling but have no `href`; links between cloned pages go through the router. `--keep-external-links` keeps them.

## Checks run by the builder

| Check | Result |
|---|---|
| Every `src` / `url()` the code points at exists in `public/` | FAIL: /_ext/player.vimeo.com/progressive_redirect/playback/1176311571/rendition/2160p/file.mp4%20%282160p%29.mp4?loc=external&signature=5d553ea2575ef8655cd55c6f3b2286b73955945cf0c780356809af645fe0697c, /_ext/player.vimeo.com/progressive_redirect/playback/1177074455/rendition/2160p/file.mp4%20%282160p%29.mp4?loc=external&signature=1f9c4de5840ab2fe5b99d9896c0753bca052e3306548d2873a39e4749671f00e |
| No tracker host in code or `public/` | PASS |
| No external hyperlink in `src/` | FAIL: src/sections/ActualReviewsFromRestaurant.jsx |
| No placeholder boxes from the level-2 scaffold | PASS |
| Vite build + every route loads offline | FAIL: vite build ok; 144 route(s) loaded: 0 console/network error(s), 0 outside host(s), 1 empty page(s) |
| Parity vs the original page, per section (gate 80%) | PASS: average 99.1% over 6 route(s) |

### Parity detail

Each section of the built clone is compared with the same section of the **original page**: the crawl's own full-page screenshot at 1440 px (`extras/images/`, taken from the live site with its scripts running) cut at that section's rectangle, or a fresh screenshot of the offline mirror when that file is missing. Both sides are compared on a half-scale grid; a pixel matches when no channel differs by more than 40/255, and a section whose height differs by more than 10 % is scaled down by the height ratio (except GSAP-pinned sections, whose extra scroll length is a script's doing). The route score weights sections by height. Sections below the gate get a side-by-side picture (original | clone) in `qa/parity/`. Whole-page height is not scored: GSAP pin spacers add blank scroll length the clone does not reproduce. Live animation, video and carousels in motion differ by design.

**`/`**: 96.8% over 11 of 11 section(s) (reference: original crawl screenshot); page height 10663 → 10663 px. Below the gate: 2:GrowSalesLikeThese 75%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper` | 70 → 70 px | 100.0% | 100.0% |
| 1 | `TheAIPlatformRestaurants` | 1181 → 1181 px | 96.6% | 96.6% |
| 2 | `GrowSalesLikeThese` | 789 → 789 px | 75.4% | 75.4% ⚠ |
| 3 | `WithOwnerYouGet` | 1283 → 1283 px | 99.9% | 99.9% |
| 4 | `SeeWhyWeRe` | 1131 → 1131 px | 91.9% | 91.9% |
| 5 | `GiveYourRestaurantThe` | 2004 → 2004 px | 100.0% | 100.0% |
| 6 | `TrustedByOwners` | 979 → 979 px | 97.0% | 97.0% |
| 7 | `S3BeliefsThatGuide` | 1065 → 1065 px | 100.0% | 100.0% |
| 8 | `SeeOurFreeGuides` | 1064 → 1064 px | 100.0% | 100.0% |
| 9 | `TheEasiestWayTo` | 534 → 534 px | 100.0% | 100.0% |
| 10 | `Section` | 1012 → 1012 px | 100.0% | 100.0% |

**`/leadership`**: 99.9% over 8 of 8 section(s) (reference: original crawl screenshot); page height 5932 → 5932 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper25` | 70 → 70 px | 100.0% | 100.0% |
| 1 | `MeetOurLeadershipTeam` | 508 → 508 px | 99.5% | 99.5% |
| 2 | `BgColorBglighter4` | 1817 → 1817 px | 100.0% | 100.0% |
| 3 | `BoardOfDirectors` | 662 → 662 px | 100.0% | 100.0% |
| 4 | `QuotesFromInvestors` | 784 → 784 px | 100.0% | 100.0% |
| 5 | `WeReBackedBy` | 992 → 992 px | 99.7% | 99.7% |
| 6 | `IsProductPage` | 408 → 408 px | 100.0% | 100.0% |
| 7 | `Section25` | 1012 → 1012 px | 100.0% | 100.0% |

**`/case-studies/cyclo-noodles`**: 100.0% over 8 of 8 section(s) (reference: original crawl screenshot); page height 6634 → 6634 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper37` | 70 → 70 px | 100.0% | 100.0% |
| 1 | `HowCycloNoodlesGrew` | 1318 → 1318 px | 100.0% | 100.0% |
| 2 | `HowTheirOnlineExperience7` | 1357 → 1357 px | 100.0% | 100.0% |
| 3 | `BgColorTaupe27` | 832 → 832 px | 100.0% | 100.0% |
| 4 | `Section45` | 891 → 891 px | 99.9% | 99.9% |
| 5 | `BgColorBglighter12` | 1067 → 1067 px | 100.0% | 100.0% |
| 6 | `IsProductPage` | 408 → 408 px | 100.0% | 100.0% |
| 7 | `Section` | 1012 → 1012 px | 100.0% | 100.0% |

**`/blog-category/increase-sales`**: 100.0% over 5 of 5 section(s) (reference: original crawl screenshot); page height 4475 → 4475 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper36` | 70 → 70 px | 100.0% | 100.0% |
| 1 | `IsHero3` | 996 → 996 px | 100.0% | 100.0% |
| 2 | `IsCategoryPage` | 2117 → 2117 px | 100.0% | 100.0% |
| 3 | `IsProductPage` | 408 → 408 px | 100.0% | 100.0% |
| 4 | `Section` | 1012 → 1012 px | 100.0% | 100.0% |

**`/blog/restaurant-business-plan`**: 99.9% over 3 of 4 section(s) (reference: original crawl screenshot); page height 15131 → 15131 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper36` | 70 → 70 px | 88.5% | 88.5% |
| 1 | `HowToCreateA2` | 13706 → 13706 px | 100.0% | 100.0% |
| 2 | `IsProductPage` | 408 → 408 px | 100.0% | 100.0% |
| 3 | `Section` | 1012 → 1012 px | — | skipped |

**`/blog/restaurant-tech-stack`**: 98.2% over 3 of 4 section(s) (reference: original crawl screenshot); page height 13664 → 13664 px. Below the gate: 0:NavWrapper36 65%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavWrapper36` | 70 → 70 px | 65.4% | 65.4% ⚠ |
| 1 | `RestaurantTechStackGuide` | 12239 → 12239 px | 98.3% | 98.3% |
| 2 | `IsProductPage` | 408 → 408 px | 100.0% | 100.0% |
| 3 | `Section` | 1012 → 1012 px | — | skipped |

### Missing in the mirror

11 local URL(s) the rendered page used were not saved by the crawl: `/_ext/player.vimeo.com/progressive_redirect/playback/1177074455/rendition/2160p/file.mp4%20%282160p%29.mp4`, `/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c%2F6a1d6069e205aa2e95384565_ashleys-cafe-pos-short-comp_mp4.mp4,/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c%2F6a1d6069e205aa2e95384565_ashleys-cafe-pos-short-comp_webm.webm`, `/_ext/cdn.prod.website-files.com/placeholder.svg`, `/_ext/cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F67bcf345ebc3730d14fb4f00_Cynthia%20Trim%20v2-transcode.mp4,/_ext/cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F67bcf345ebc3730d14fb4f00_Cynthia%20Trim%20v2-transcode.webm`, `/_ext/cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F67aa323817479f6374c5e8af_careers-rob-loop-transcode.mp4,/_ext/cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F67aa323817479f6374c5e8af_careers-rob-loop-transcode.webm`, `/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69b9330c8b70142e4e5f830b_LM%20-%20Animation%201_Hero%20Desktop_mp4.mp4,/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69b9330c8b70142e4e5f830b_LM%20-%20Animation%201_Hero%20Desktop_webm.webm`, `/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69b9330c8b70142e4e5f830d_LM%20-%20Animation%201_Hero%20Mobile_1_mp4.mp4,/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69b9330c8b70142e4e5f830d_LM%20-%20Animation%201_Hero%20Mobile_1_webm.webm`, `/_ext/vz-9063af78-741.b-cdn.net/6c758236-744d-4bf3-adcc-49807284ee45/playlist.m3u8`

