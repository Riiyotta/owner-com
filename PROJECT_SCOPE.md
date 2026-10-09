# Project scope — owner-com

Decisions and open questions for the Owner.com clone, IA and design-repo, following the consolidated clone workflow.

Last updated 2026-10-09.

## Reference

| Item | Decision |
|---|---|
| Target | https://www.owner.com/ |
| Authority | The 2026-10-06 website-builder crawl (`recon/mirror/`, not in git) is the baseline. The live site is re-measured where the mirror is missing or suspect. Live checks made on 2026-10-09 are dated where they are used. |
| Live drift noted | `/demo` serves an A/B variant (`body.spz_1004_v1`), a full-screen qualifying-question overlay. The clone reproduces what visitors see. The control layout is in the markup but hidden, as it is live. |

## Route scope

- **In scope:** every same-domain page. That is 144 captured routes plus `/demo`, which was built on 2026-10-09. The full list is in `ROUTES.md`.
- **Linked same-domain URLs that are not pages.** Each was checked on the live site on 2026-10-09:
  - **13 redirects** (301/302) to captured pages. The clone serves them as client redirects (`src/redirects.json`).
  - **5 return 404 on the live site:**
    - `/case-studies/aburaya`
    - `/blog/restaurants-delivery-fee`
    - `/blog/restaurant-industry`
    - `/downloads/restaurant-growth-checklist`
    - `/blog/97-best-burrito-captions-for-instagram`

    Links to them point at the live URL, which is as broken as on the original.
  - **`/culture-deck`** redirects to a PDF on another host. It is kept as an outbound link.
- **Other domains are never cloned.** These stay outbound links: help, grader and dashboard subdomains, G2, Capterra, LinkedIn, YouTube, X and others.

## Policies

| Topic | Decision |
|---|---|
| External links | Kept as outbound links (`target`/`rel` as on the original). Links between cloned pages go through the router. |
| Forms | Never submit (`preventDefault`). There are no live submissions. |
| Trackers / analytics | None in `src/` or `public/`. Tracker pixels are also kept out of the design-repo asset registry. |
| Network services | Not reproduced: Google Places, the Ashby jobs API, cookie consent and analytics. The affected UI shows its unfilled or initial state. |
| Text, images, fonts | Copied from the original as captured. The repository is public, and redistribution rights have not been reviewed. Assets are evidence, not licensed material (see `design-repo/assets/asset-roles.json` `defaultPolicy`). |
| Video | The 44 Bunny HLS streams and 2 Vimeo renditions were downloaded with the user's approval on 2026-10-09. They are stored in `public/_videos/` through **Git LFS**. Bunny streams are kept at their 1080p source. The two Vimeo files were re-encoded from 2160p to 1080p. |
| Motion | Only evidenced motion: ports of the original scripts, or values measured on the live site. Generic effects are not allowed. |

## Deliverables

| Deliverable | Location | State |
|---|---|---|
| Clone | project root (`src/`, `public/`) | Built. Full-site QA pending. |
| IA | `ia/` | Validated: 145 routes, 26 templates. |
| Design-repo | `design-repo/` | Admission and drift proof pass with the evidence present. `/demo` is not modelled. |
| Composition IR | removed (user decision, 2026-10-09) | — |

## Delivery

- **Remote:** `github.com/Riiyotta/owner-com`, which is **public**.
- **Branch:** work is pushed to `fix/clone-process-gaps`. Nothing goes to `main` without a pull request.
- **LFS quota:** pushing ~9 GB of LFS video needs the GitHub account's LFS quota. Check it before the video push.

## Open decisions

- **Network-only features:** whether to stub them (Places search results, the careers job list, the final `/demo` form step) or accept them as documented deviations.
- **Code-health cleanup:** whether to run it at the end. The generated sections duplicate the nav (38 copies), footer (64) and FAQ (21).
