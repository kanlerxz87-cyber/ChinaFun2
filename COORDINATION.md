# COORDINATION.md — Shared Task Board

> **How this file works:** Every agent session MUST read this file before starting work.
> Claim a task by writing your session ID + file scope below, then **commit and push immediately**.
> Never start a task another session has claimed. Keep scopes non-overlapping.
> If you need a file owned by another session, log a request here instead of editing it.
> Small, frequent commits. `git pull --rebase` before every push.
> If a claim is >60 min old with no commits, any session may take it over and note the handoff.
> `needs review` = published on the Flagged for Review page; does not block anything.
> Never mark anything verified without an official-source link.

**Session ID for this branch:** `91622d32` (branch `arena/91622d32-chinafun2`, base `3ef9a88` of `main`)
**Repo:** `kanlerxz87-cyber/ChinaFun2`
**Trip window:** 15 Feb 2027 – 23 Mar 2027 (preferred start 15–18 Feb 2027), 7-night stays, 2 adults
**Primary base selected:** Shanghai (densest Michelin cluster + metro + 1-hour day trips) — see Executive Summary for rationale and alternatives.

---

## Task board

| ID | Task | Status | Owner (session) | Files in scope | Notes / handoff |
|----|------|--------|-----------------|----------------|-----------------|
| T01 | Coordination setup + repo scaffold (this file, README, folder structure) | **done** | 91622d32 | `COORDINATION.md`, `README.md`, `data/`, `assets/`, `*.html` | Starting from empty repo (only README). |
| T02 | Research: Michelin Guide Shanghai\|Jiangsu\|Zhejiang 2026 (official) + Beijing/Guangzhou context | **needs review** | 91622d32 | `data/michelin.json`, `michelin.html` | Official guide/star identities remain useful; several prices are from secondary aggregators and couple totals are derived. See `RESEARCH_REVIEW.md`; do not treat as official menu prices. |
| T03 | Research: Hotels (private bathroom, queen+ bed, 2 adults) + 1-hour Michelin ranking method | **needs review** | 91622d32 | `data/hotels.json`, `hotels.html` | Room details cite non-official sources in places; F9 explicitly uses district estimates rather than route timing. Candidate entries only until exact room and ≤60-minute routing are verified. |
| T04 | Research: Activities within 1 hr + hours/days/exceptions + social links | **needs review** | 91622d32 | `data/activities.json`, `activities.html` | Several URLs/ticket prices are not official, transit times are estimates or exclude rail station/first-mile legs. See `RESEARCH_REVIEW.md`. |
| T05 | Research: Costs, 7-night totals, booking-timing windows, visa, weather, holidays | **needs review** | 91622d32 | `data/costs.json`, `costs-booking.html` | Proxy rates and general booking-window sources do not establish exact official 2027 totals or a cheapest booking day. Keep official quote fields blank until captured. |
| T06 | Site build: landing dashboard + subpages, mobile-first CSS/JS, search/filter | **done** | 91622d32 + 77604d1c | root dashboard and category pages | Original category pages remain; root dashboard is replaced with a source-linked, unknowns-first executive view. |
| T07 | Verification pass: every table row source link; blanks flagged unverified; broken-link check | **needs review** | 91622d32 + 77604d1c | all `*.html`, `data/*.json`, `RESEARCH_REVIEW.md` | Root dashboard checks pass. Older category pages still contain secondary prices/estimated routes; full strict audit remains open and is documented. |
| T08 | Publish: GitHub Pages enable + deploy workflow + live URL check | **done** | 91622d32 + 77604d1c | `.github/workflows/pages.yml`, Pages settings | PR #3 merged; Pages API reports `built` from main root and main Pages run 45622361150 succeeded. Live URL: https://kanlerxz87-cyber.github.io/ChinaFun2/. |

### Status legend
- `unclaimed` — no owner yet
- `in progress` — claimed, actively worked
- `done` — finished, sources + verification recorded below
- `needs review` — published on Flagged for Review page (`flagged.html`); does not block

---

## Claim log

| Date (UTC) | Session | Action |
|------------|---------|--------|
| 2026-11-25 | 91622d32 | Created COORDINATION.md; claimed T01–T06 (single-session build, no other sessions active at start). |

## Change requests (file owned by another session)

_None yet._

## Handoffs / conflicts

_None yet._

## Verification log (per finished task)

### T02 — Michelin research (2026-11-25, session 91622d32)
- **Sources checked:** MICHELIN Guide official 2026 regional edition article (guide.michelin.com/en/article/michelin-guide-ceremony/michelin-guide-shanghai-jiangsu-zhejiang) — 409 restaurants, 77 starred (1×3★, 14×2★, 62×1★), 164 Bib Gourmand, 168 Selected; Shanghai 156 restaurants. Individual restaurant pages on guide.michelin.com (e.g., Taian Table, Fu He Hui, Canton 8). Official Taian Table FAQ (bookings.taian-table.com/faq) for menu price ¥2,588/¥2,888 + ¥2,000/person deposit, 90-day booking window.
- **Irregularities flagged:** (1) Fu He Hui star count differs across secondary sources (2024 Guide page shows 1★; 2026 regional article lists it among 2★ retainers) — flagged for review, 2026 official article takes precedence. (2) Canton 8 hours differ between Michelin page (11:00–14:00, 17:00–21:00) and secondary guide (11:00–15:00, 17:00–22:00) — Michelin page used, discrepancy flagged. (3) Per-person prices from secondary aggregators (e.g., eastchinatrip) are NOT official — marked as estimate, official ¥-tier shown alongside.
- **Status:** done → published; unverified cells blank + flagged.

### T03 — Hotels research (2026-11-25, session 91622d32)
- **Sources checked:** Official hotel/brand pages + Trip.com/Booking.com property pages for room/bed/bathroom/amenity facts (Hyatt on the Bund, Peninsula Shanghai, Marriott Marquis City Centre, Grand Hyatt Shanghai, Renaissance Yu Garden). Hilton locations page confirming Feb 2027 booking horizon limits.
- **Irregularities flagged:** Feb 2027 nightly rates are **not yet bookable** for most Chinese hotels (~3-month horizon) and only selectively for international brands (~12-month horizon). All 2027 price cells left blank / `UNVERIFIED — not yet released`. Proxy Feb-2026 rates shown in a separate clearly-labelled column with source + date, never presented as 2027 actuals.
- **Status:** done → published; 2027 prices flagged unverified.

### T04 — Activities research (2026-11-25, session 91622d32)
- **Sources checked:** Official venue sites (Shanghai Museum shanghaimuseum.net, Oriental Pearl Tower orientalpearltower.com, Shanghai Tower shanghaitower.com) + Shanghai Tourism / municipal guides for Bund, Yu Garden, Nanjing Road. Hours cross-checked across ≥2 sources where official page was Chinese-only.
- **Irregularities flagged:** Yu Garden hours vary by source (08:30–17:00 vs 09:00–16:30) and Lantern Festival timed entry (~¥80) applies Jan–Feb — both noted, official WeChat mini-program advised as final check. Shanghai Tower hours 08:30–22:00 vs 10:00–21:00 across sources — flagged.
- **Status:** done → published.

### T05 — Costs / booking / practical (2026-11-25, session 91622d32)
- **Sources checked:** State Council 2027 holiday notice via Xinhua summaries (Spring Festival 5–13 Feb 2027, makeup workdays 31 Jan + 14 Feb); Hotels.com 2026 Hotel Price Index (8–14-day sweet spot, ~23% saving vs 4+ months out); Booking.com booking-window guide (2–3 months standard, 3–6 months peak); Federal Reserve H.10 (USD/CNY 6.6770 on 2026-11-20); US-visa guides (L-visa $140, 10-year multi-entry; 240-hour transit alternative).
- **Irregularities flagged:** Booking-window advice conflicts across sources (8–14 days vs 2–3 months vs 4–8 weeks) — presented as a range with decision rule, not a single "best day". Exchange rate is a snapshot, not a forecast.
- **Status:** done → published.

### T06 — Site build (2026-11-25, session 91622d32)
- Static GitHub Pages site: `index.html` dashboard + 8 subpages, mobile-first CSS, vanilla JS search/filter/sort, JSON data files. No build step, no external JS dependencies.
- **Status:** done → published.

---

## Final integration checklist (for integration session)

- [x] Integration rebase completed; merged session files and workflow preserved.
- [ ] Every row across all legacy category pages has ≥1 official-source link; unverified cells blank + flagged (root dashboard passes; legacy data audit remains open).
- [ ] No unsupported prices/hours or route estimates in legacy pages (needs review; see `RESEARCH_REVIEW.md`).
- [x] Static root site / resource smoke tests passed; internal dashboard anchors resolve; main Pages build completed successfully.
- [x] GitHub Pages live URL: https://kanlerxz87-cyber.github.io/ChinaFun2/ (Pages API `built`; main deployment run 45622361150 succeeded).

## Session `77604d1c` handoff and final-integration notes

The initial review on branch `arena/77604d1c-chinafun2` found only the starter README and no coordination claims. While this session was building a standalone evidence-first dashboard, PR #1 from session `91622d32` was merged to `main` (commit `7546538`) and its overlapping dashboard/data files appeared. This was discovered after PR #3 was opened; do not discard the merged work. Session `77604d1c` is now acting as the final integration/review pass on the current branch, preserving the existing subpages and deployment workflow while making the root dashboard evidence-first.

| Review/integration task | Status | Owner | Scope |
|---|---|---|---|
| Replace root landing view with source-linked evidence-first dashboard; preserve existing pages/data/workflow | done | `77604d1c` / `arena/77604d1c-chinafun2` | `index.html`, `app.js`, `data.js`, `styles.css`, `README.md`, `.github/workflows/pages.yml`, this board |
| Audit already-published research claims and log corrections for final review | needs review | `77604d1c` / `arena/77604d1c-chinafun2` | `RESEARCH_REVIEW.md`, this board |

### Conflict / review notes
- PR #3 (`https://github.com/kanlerxz87-cyber/ChinaFun2/pull/3`) initially conflicted because the earlier session merged while this branch was active. This rebase is preserving the merged subpages, workflow, and task log. Never force-push or delete their files.
- GitHub Pages currently reports `built` from the `main` branch root. The main branch also has a successful Pages build action after PR #1; the exact public URL is `https://kanlerxz87-cyber.github.io/ChinaFun2/`.
- Audit issue: the existing `flagged.html` itself records secondary/aggregator-based restaurant price estimates and derived couple totals, estimated hotel Michelin counts based on districts rather than route times, and non-official activity URLs. These contradict the user's strict “official source or blank” rule; they are flagged in `RESEARCH_REVIEW.md`. The new root dashboard does not reuse those values.
- Audit issue: the existing flagged page states hotel rates are “not yet released” as a general statement and suggests proxy 2026 prices. Do not present proxy rates as verified 2027 rates; use official date-specific quote only or blank.
- Independent fact checks for the new root dashboard: the official 2027 State Council schedule; current official MICHELIN Guide pages and releases; hotel brand room pages; Taian Table official FAQ; Shanghai Museum official homepage; Shanghai government Yuyuan notice. New dashboard facts/unknowns are in `data.js` with direct official source links.
- Verification: Node syntax checks; data-source requirements; internal anchor audit; local static-server 200 smoke checks; `git diff --check`. Pages deploy status checked via GitHub API.
- Deployment irregularity: the inherited workflow triggered on `arena/*` and its protected `github-pages` environment rejected this branch (`Branch ... is not allowed to deploy`). Restrict workflow pushes to `main` and guard the deploy job to `refs/heads/main`; local preview remains available on the branch. The successful main-branch Pages deployment is the publication path.

## Session `55de3f9a` — evidence reconciliation and publication, 2026-11-25

**Scope:** root dashboard, existing category pages and JSON, cross-city extension, source-policy cleanup, entry audit integration, verification and publication. This is a reconciliation of merged work, not a replacement with the alternative `docs/` build. Original session claim log is retained at `research/session-55de3f9a-initial-coordination.md`; prior task/history entries above are historical.

| Task | Current status | Result / remaining discovery |
|---|---|---|
| Integrate merged main and retain independent audits | done | Root dashboard design and category paths retained; original `b679d5a6` entry audit linked and rendered. PR #4 reviewed, not merged wholesale. New PR #7 isolated subtree will be merged unchanged. |
| Four-city executive / hotel / dining / activity records | done · factual gaps need review | 16 hotel candidates, 24 restaurants, 22 activity records; Shanghai/Beijing/Guangzhou/Chengdu. City/edition distinctions explicit. |
| Remove unsupported official price / transit / ranking claims | done | Secondary cash-menu estimates, proxy 2026 totals and estimated district counts removed from official fields. Original research retained in labelled audit JSON. |
| Exact seven-night official quotes and cheapest booking lead time | needs review | No official date-specific quotes or comparable price history. Prior aggregator observations quarantined, not treated as 2027 rates or proven savings. Monitoring checkpoints are calendar arithmetic. |
| Exact Queen+/King private ensuite room fit | needs review | Preserve supported official room descriptions; newly checked Sofitel Superior King and St. Regis City-view King. Require explicit private-bathroom/category confirmation. |
| Complete <=60-minute public-transit matrix and rank | needs review | All rank/count/duration fields blank. Choose city and exact departure times, then record first/last mile, waits and transfers before ranking. |
| Search/sort, accessible controls and cross-page navigation | done | 11 root HTML pages; 10 static details generated from canonical JSON, no-JS fallback, mobile navigation, visible review flags. |
| Structural / local HTTP / DOM tests | done | `verify_project.py`: all root local links/anchors, official source on every table row, flags, dates, canonical parity and JS syntax. HTTP 200 for 24 current HTML/JSON/CSS/JS resources. JSDOM interaction tests pass. No visual-browser or complete external-link claim. |
| Main publication and live deployment check | in progress | Finish integration merge on this working branch; push only this branch, open PR, merge explicit PR number, check main Pages run and live content. |

### Important research corrections

- Today is Nov 25, 2026: preferred Feb 15–18 starts are **82–85 days away**, not “Feb 2026 now.” 90-day targets Nov 17–20; 60-day Dec 17–20; 30-day Jan 16–19; 14-day Feb 1–4. These are recheck dates, not a proven optimum.
- Official Shanghai 2026 city subset: **51 starred / 156 listed**, distinct from 77 regional. Guangzhou 2026 release: **20 starred / 117 listed; 52 Bib, 45 Selected** (earlier 51/46 snapshot superseded). Chengdu 2027: **15 starred / 84 listed**. Mixed editions clearly labelled.
- Published venue costs are separate from exact 2027 tickets/bills. Taian FAQ current menu arithmetic and Yu Garden current winter daytime adult pricing retained; unsupported Panda Base hours/tickets blank because the fetched official introduction does not substantiate them.
- Search shortcuts are labelled search, not verified official social posts. Renovation/closure/event notices remain a specific review item; Ultraviolet is not a bookable candidate. Hilton Wangfujing fetch failure is recorded, not quietly counted as a fresh room verification.
- Evidence notes and test limits: `research/integration-verification-2026-11-25.md`. Historical findings in `RESEARCH_REVIEW.md` remain below a current reconciliation update.
