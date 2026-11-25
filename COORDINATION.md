# Coordination board

This board is the source of truth for parallel work on this repository. No other claims were present when this board was created.

> Arena did not expose a separate session ID. The active branch name below is used as this session's coordination identifier; all work remains on this branch.

| Task | Status | Owner / session identifier | Files in scope |
|---|---|---|---|
| Build the China trip-planning dashboard, research/source ledger, verification flags, and GitHub Pages setup | in progress | `arena/98127de1-chinafun2` | `COORDINATION.md`, `README.md`, `index.html`, `hotels.html`, `restaurants.html`, `activities.html`, `analysis.html`, `sources.html`, `styles.css`, `app.js`, `data/`, `.github/workflows/pages.yml`, `scripts/`, `.gitignore` |

## Work log

- **2026-11-25** — Read the repository before starting. It initially contained only a one-line `README.md`; no existing application or other coordination claim was visible. Claimed the dashboard/research task above.
- **2026-11-25** — Published the research snapshot as `data/research.json` with 54 dated source records, explicit limitations, four hotel candidates, eight restaurants, four activities, the sample-week museum calendar, suggestions and open questions. Rechecked the JSON structure and source URL/date coverage. The single usable hotel quote remains pre-tax; no hotel ranking or transit density has been asserted.
- **2026-11-25** — Fetched the Ritz-Carlton’s official spa/amenities page to support the hotel amenity details and record its current hours and renovation caveat.
- **2026-11-25** — Rechecked the Shanghai Museum’s official visit-page footer and added its linked Douyin profile; recorded the Shanghai Tower Instagram result as a related profile, not a verified official channel.
- **2026-11-25** — Built a mobile-friendly static dashboard with an overview and separate hotel, dining, activity, analysis/review, and searchable source pages. Added direct source links beside comparison and detail rows.
- **2026-11-25** — Added a GitHub Pages Actions workflow for the current branch and `main`. Deployment is not marked successful until the workflow runs and its published URL is checked.
- **Verification policy:** publish a value as verified only when an official source supports it. MICHELIN Guide pages support edition-specific distinction labels. Calculations are labelled as calculations. Leave unavailable or unconfirmed values blank and flag them for review. Third-party travel/social pages do not verify prices or schedules; related social profiles are identified as related rather than official when no official-site cross-link was captured.

## Sources and verification record

The detailed source register is maintained in `data/research.json` and rendered on `sources.html`. All 54 source records were checked on 25 November 2026; each record contains the URL, source type, supported claim and known limitation. Important outstanding limitations:

- The Peninsula Shanghai is the only usable dated hotel quote for 15–22 February 2027; its seven-night arithmetic excludes taxes/fees and is not a final checkout total.
- Exact private-bathroom confirmation and equivalent room/occupancy confirmation remain open under the strict room requirement.
- No same-basis dated hotel quotes for Langham, Bvlgari or Ritz-Carlton were obtained.
- No hotel-to-restaurant public-transit routes or one-hour MICHELIN catchment counts were verified; hotels are deliberately unranked.
- Menus are 2026 snapshots; 2027 restaurant availability, select operating days, and date-specific activity hours/prices need rechecking.
- The sample-week calendar maps current museum weekday rules to the working dates; it is not a future-operation confirmation or final itinerary.
