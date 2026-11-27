# COORDINATION.md — Shared Task Board

> **How this file works:** Every agent session MUST read this file before starting work.
> Claim a task by writing your session ID + file scope below, then **commit and push immediately**.
> Never start a task another session has claimed. Keep scopes non-overlapping.
> If you need a file owned by another session, log a request here instead of editing it.
> Small, frequent commits. `git pull --rebase` before every push.
> If a claim is >60 min old with no commits, any session may take it over and note the handoff.
> `needs review` = published on the Flagged for Review page; does not block anything.
> Never mark anything verified without an official-source link.

**Current active session:** `ba4eabb3` (branch `arena/ba4eabb3-chinafun2`, reconciled onto `origin/main` `d26aaf2` preserving PRs #12–#16 in full). Earlier session IDs below are historical.
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
| T09 | Current-session final audit: date freshness, evidence labels, source/social verification, build/tests, publish | **done** | `a16d9048` / `arena/a16d9048-chinafun2` | `COORDINATION.md`, `README.md`, `data/*.json`, `scripts/build_pages.py`, generated root pages, `research/final-verification-2026-11-26.md` | Targeted 22-activity source reconciliation and local build/validator/UI/HTTP checks passed; PR #12 merged, main validation and Pages deployment succeeded on `371b0dca`. Hotel, dining, cost, entry, and health data were not re-reviewed; unknowns remain blank/flagged. |
| T13 | Current session `6dd273f8`: independent external verification of official facts (State Council 2027 holiday, MICHELIN Guide Shanghai/Jiangsu/Zhejiang 2026 release, Taian Table FAQ) + publication PR/merge from `arena/6dd273f8-chinafun2` to `main` | **in progress** | `6dd273f8` / `arena/6dd273f8-chinafun2` | `COORDINATION.md` (claim log + verification log only) | Read-only external fact checks against official domains; no data files changed because all table rows already carry official-source links and unknowns stay blank. |

| T14 | Current-date arithmetic refresh and publication smoke test (no new factual-source claims) | **in progress** | `74e12331` / `arena/74e12331-chinafun2` | `README.md`, `index.html`, `data/{brief,costs,flags}.json`, `scripts/build_pages.py`, generated `costs-booking.html`, `questions.html`, `flagged.html`, `data.js`, `research/date-refresh-2026-11-27.md` | Date-only refresh; Nov 26 remains the latest factual-source audit date. Preserve parallel session 6dd273f8 external verification scope in COORDINATION.md. |

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
| 2026-11-26 | a16d9048 | Claimed T09 for current-session final audit, date/evidence cleanup, structural verification and publication; scope listed in the task board. Current session remains on the supplied active Arena branch. |
| 2026-11-27 | 74e12331 | Claimed T14 for date-only arithmetic refresh and publication smoke test on fixed active branch `arena/74e12331-chinafun2`; factual-source snapshot remains dated Nov 26. |

## Change requests (file owned by another session)

_None yet._

## Handoffs / conflicts

- Parallel overlap: session `6dd273f8` owns a read-only external-verification log in `COORDINATION.md`; session `74e12331` is preserving its entries while adding a separate date-only record. Resolved additively during rebase onto PR #20; no external-source audit claims were overwritten.

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

### Latest-main reconciliation and final pre-publication checks

- Merged `origin/main` at `6118a43` after discovering PR #7. Preserved the entire `shanghai-planner/` subtree unchanged; its independent validator passes (54 sources, 4 hotels, 8 restaurants, 4 activities).
- Re-ran local HTTP verification after the merge: **33 HTML/JSON/CSS/JS resources return 200**; the 11 primary HTML pages retain zero missing local links/anchors. Search/sort/dashboard DOM tests pass. Fifteen review groups now include external-source fetch limitations (`L01`).
- Added `.github/workflows/validate.yml` for deterministic generation, structural policy checks, retained-planner integrity and DOM interaction tests. The existing main-only Pages deployment remains intact.

### Publication completed — PR #8

- **Done:** PR #8 merged to `main` at `aba17cdc7a6ebb154243c7da7c0e6149ec8d10c9`; PR and main validation passed. GitHub's configured legacy Pages build/deploy run **45627648776 succeeded**; Pages API reports `built` from `main /`.
- Live HTML content checked via page fetches: executive summary (four cities), hotels (16 records), all fifteen review groups, costs/checkpoints and entry audit. Root update confirmed using `index.html?v=aba17cdc` because the unversioned fetch initially returned an older cached snapshot. Public URL remains https://kanlerxz87-cyber.github.io/ChinaFun2/.
- The separate custom Pages workflow initially reported no artifact despite an uploaded `github-pages` artifact being present afterward. The configured legacy deployment succeeded independently. Retried the failed custom run; do not confuse its initial failure with an unpublished site.
- Follow-up hardening: version CSS/JS URLs together to reduce mixed cached data/renderer releases, and remove incomplete aggregator numbers from visible comparison tables entirely. They remain only in clearly labelled JSON audit observations; no unrelated official property link is used to suggest price verification. All local checks still pass.
- Research gaps are still non-blocking publication flags, not claimed resolved: exact official 2027 rates, full route matrix/rankings, consistently explicit ensuite confirmation, exact 2027 venue notices, direct social post verification and traveler-specific entry eligibility.

### Final publisher reconciliation

- PR #9 merged as `eab882010c7b8a0cf4fe95ad194cc5f266820f95`; main validation and configured Pages run **45628202721 passed**. The cached-release hardening and cleaned costs page are published.
- The duplicate custom publisher again failed initial artifact lookup; a retry then found duplicate artifacts. This is isolated from the successful configured branch publisher. To avoid repeating two deployments per push, the inherited custom workflow is now a **manual main-only fallback**. Its build/deploy jobs are separated, with a unique immutable artifact name passed between them, so deploy-only retries do not upload duplicate artifacts. Current official upload/deploy action v5 releases are used.
- Automatic publication remains GitHub Pages **Deploy from a branch: main /**, confirmed by API and successful production builds. The validation workflow still runs automatically on pushes/PRs. No other session's planner or research is removed.

## Session `a16d9048` — targeted activity-source reconciliation (PR #12 merged `371b0dc` & PR #14 merged `593b8de`), 2026-11-26

- Corrected date arithmetic to **81–84 days** for Feb 15–18, 2027 as of Nov 26. README, dashboard, generated detail pages, and costs checkpoint copy stated explicitly that this was a targeted activity-source pass, not a re-review of hotel, dining, cost, entry, or health data.
- Reconciled all 22 activity records against specific official pages where available. Replaced unsupported Tower and Oriental Pearl schedules/fares with blanks, left other unverified admission prices blank, preserved Temple of Heaven hours/ticket snippet conflict and Wuhou concession disagreement, and added source-specific season/old-price caveats for West Lake, Mutianyu, Yu Garden night tour, and Huangpu cruise. Added linked official secondary sources to the activity table/source register.
- Specific facts and access failures are retained intact in `research/final-verification-2026-11-26.md`. Merged to `main` via PR #12 (`371b0dc`) and PR #14 (`593b8de`).

---

## Session `99044301` — Full 4-domain live audit, verified social media reviews & PR #12 reconciliation (PR #13 merged `e29fd91`, 2026-11-26)

**Branch:** `arena/99044301-chinafun2` (reconciled with `origin/main` `371b0dc` / PR #12; merged as PR #13 `e29fd91`)
**Reconciliation note:** Preserved `research/final-verification-2026-11-26.md`, PR #12's official domains (`gzcjc.com.cn`, `tiantanpark.com`, `summerpalace.net.cn`, `mutianyugreatwall.com`), and activity micro-facts (Chen Clan `gzcjc.com.cn` visitor rules, Panda Base No. 6 Villa/Museum Monday closure, Wuhou 14-day English ticket rules) alongside our full 4-domain live audit.

| ID | Task | Status | Owner (session) | Files in scope | Notes / handoff |
|----|------|--------|-----------------|----------------|-----------------|
| T10 | Full 4-domain live official audit (hotels, Michelin, activities, 2–4 wk dates & flags) + PR #12 reconciliation | **done** | `99044301` | `COORDINATION.md`, `README.md`, `research/live-audit-2026-11-26.md`, `data/*.json` | Audited hotels, Michelin, activities & dates live on `2026-11-26`; removed non-official blog link from Canton 8; fixed Ren He Guan slug & `"1 MICHELIN Stars"` typos; expanded to 20 hotels, 27 restaurants, 29 activities, 17 flags; added 2–4 week duration coverage; flagged Shanghai Museum People's Square Americas-only exhibit vs East permanent galleries, Shanghai Tower blanked hours, Ritz-Carlton Pudong Oct 2026 renovation, T'ang Court Monday conflict, King's Joy 2★ verification, Chen Clan `gzcjc.com.cn` visitor page, and Mar 1 / Mar 16 seasonal switches. |
| T11 | Verified social media review discovery (YouTube, TikTok, Instagram) for restaurants & activities | **done** | `99044301` | `data/michelin.json`, `data/activities.json` | Attached verified direct YouTube (`watch?v=`), TikTok (`@.../video/...` & `/discover/...`), and official venue/museum/tourism Instagram links in dedicated `reviews` arrays alongside clean search fallbacks; third-party commentary strictly separated from official venue facts. |
| T12 | Site UX upgrade, strict verification pass, build, PR #13 merge & live Pages confirmation | **done** | `99044301` | `scripts/build_pages.py`, `scripts/verify_project.py`, `scripts/test_ui.cjs`, `index.html`, `app.js`, `assets/js/app.js`, `assets/css/style.css`, `*.html`, `data.js`, `.github/workflows/validate.yml` | Added interactive City Filter Chips on Hotels/Michelin/Activities; split Hours, Exceptions, Official Links & Direct Social Review columns; added 2–4 week stay table; fixed `.github/workflows/validate.yml` branch trigger; passed `build_pages.py`, `verify_project.py` (incl. HTTP 200 across all static assets), `shanghai-planner/scripts/validate_research.py`, and `test_ui.cjs`. |

### Claim log (2026-11-26)
- `2026-11-26` · `99044301` · Read `COORDINATION.md`; claimed full audit, social review integration, and UX/validator upgrade on `arena/99044301-chinafun2`. Preserved `shanghai-planner/`, `research/final-verification-2026-11-26.md`, and all prior session archives intact.
- `2026-11-26` · `99044301` · Reconciled cleanly with merged PR #12 (`371b0dc`), re-verified all validators + JSDOM + local HTTP checks, proceeding to merge PR #13 & confirm live GitHub Pages deployment.

---

## Session `5e433db0` — Line-by-line room/menu/ticket primary-source reconciliation onto `main` (`e29fd91` / PR #15), 2026-11-26

**Branch:** `arena/5e433db0-chinafun2` (merged cleanly with `origin/main` `e29fd91` as PR #15 `f20df40`, preserving 100% of PRs #12, #13 & #14 plus `shanghai-planner/`)

| ID | Task | Status | Owner (session) | Files in scope | Notes / handoff |
|----|------|--------|-----------------|----------------|-----------------|
| T09-5e433db0 | Primary-source verification audit across 2027 State Council holidays, hotel room/bath pages, Michelin Guide + venue menus, attraction ticketing portals, and direct social review URLs | **done** | `5e433db0` | `research/session-5e433db0-audit.md`, `scripts/audit_5e433db0.py`, `COORDINATION.md` | Documented primary-source verification and automated content-integrity checks (`audit_5e433db0.py`). |
| T10-5e433db0 | Additive reconciliation onto merged `main` (`e29fd91`), factual bug fixes (`fabula` Selected vs 1★, `taian-table` current FAQ menu totals & 90-day window), hotel bed/bath fill (`14/20` beds, `7/20` baths), `trb-hutong` & `chen-clan` official pricing, and dashboard city filter pills | **done** | `5e433db0` | `data/{hotels,michelin,activities}.json`, `scripts/{build_pages,verify_project,audit_5e433db0,test_ui}.*`, `index.html`, `app.js`, `styles.css`, `*.html`, `data.js`, `RESEARCH_REVIEW.md`, `README.md`, `.github/workflows/validate.yml` | Merged as PR #15 (`f20df40`). |

---

## Session `ae77cbdf` — Additive primary-source verification, closure & security catches, and PR #12–#15 reconciliation (PR #16 `d26aaf2`, 2026-11-26)

**Active branch:** `arena/ae77cbdf-chinafun2` (merged as PR #16 `d26aaf2`, preserving `shanghai-planner/`, `research/final-verification-2026-11-26.md`, `research/live-audit-2026-11-26.md`, `research/session-5e433db0-audit.md`, `scripts/audit_5e433db0.py`, interactive city-filter chips/pills, and all prior sessions' records intact).

| ID | Task | Status | Owner (session) | Files in scope | Notes / handoff |
|----|------|--------|-----------------|----------------|-----------------|
| T09-ae77cbdf | Line-by-line primary-source verification & additive reconciliation onto `origin/main` (`f20df40`) | **done** | `ae77cbdf` | `COORDINATION.md`, `README.md`, `RESEARCH_REVIEW.md`, `research/line-by-line-audit-2026-11-26.md`, `data/*.json` | Expanded to **27 hotels (22 beds, 7 baths), 35 Michelin venues (8 published couple totals, 20 with direct social reviews), 31 activities (27 with direct social reviews), 19 flags**. Fixed `Renaissance Shanghai Yu Garden` Marriott code (`shasy`, replacing 404 `shayg`), updated `The Middle House` to **`Upper House Shanghai`** (`upperhouse.com`), populated `Zhujiajiao` Kezhi Garden `¥40 = 2 × ¥20`, and added **Jinsha Site Museum full-window closure (`Dec 5, 2025 – Apr 30, 2027`, `A04`)**, **Shanghai Disneyland (`from ¥950` for 2)**, **`lameloise.com.cn` script-injection quarantine (`R06`)**, `The House of Rong` (2★), `Ling Long` (1★), `le Comptoir de Pierre Gagnaire` (1★), `Da Hu Chun`, `Mi Thai`, `Yuge · Zhanjiang`, `Jing Hua Lou`, plus 7 verified hotel candidates (`Waldorf Astoria Bund`, `Andaz Xintiandi`, `Hilton City Center`, `Rosewood Beijing`, `China World Summit Wing`, `Ritz-Carlton Guangzhou`, `Upper House Chengdu`). |
| T10-ae77cbdf | Additional verified YouTube, TikTok & Instagram review links + quarantined-host hardening | **done** | `ae77cbdf` | `data/michelin.json`, `data/activities.json`, `scripts/verify_project.py` | Merged additional verified direct YouTube, TikTok, and official Instagram links into `reviews` arrays; enforced `BANNED_LINK_HOSTS` in `verify_project.py`. |
| T11-ae77cbdf | Rebuild static pages, pass all 5 validators & DOM/HTTP suites, merge PR to `main` & verify live Pages | **done** | `ae77cbdf` | `scripts/build_pages.py`, `scripts/test_ui.cjs`, `index.html`, `app.js`, `*.html`, `data.js` | Merged as PR #16 (`d26aaf2`). |

---

## Session `ba4eabb3` — 2026-11-26 live external URL audit, broken/wrong-city MICHELIN link fixes & Guide-listed completeness

**Session ID:** `ba4eabb3` (fixed workspace branch `arena/ba4eabb3-chinafun2`, rebased onto `origin/main` `d26aaf2` preserving PRs #12–#16 in full)

| ID | Task | Status | Owner | Files in scope | Notes / coordination rule |
|----|------|--------|-------|----------------|---------------------------|
| T09-ba4eabb3 | Line-by-line official-source verification of existing repo records (hotels, Michelin, activities, 2027 holiday/date window, 1–4 week duration framing), removal of remaining non-official table links, and verified YouTube/TikTok/Instagram review link enrichment | **done** | `ba4eabb3` | `COORDINATION.md`, `research/session-ba4eabb3-audit.md` (isolated research phase) | Completed full primary-source line-by-line audit across hotels, Michelin venues, activities, 2027 holidays, and direct social review/official links; documented in `research/session-ba4eabb3-audit.md`. Preserves `shanghai-planner/` and all prior audit files & scripts (`audit_5e433db0.py`, `final-verification-2026-11-26.md`, `live-audit-2026-11-26.md`, `session-5e433db0-audit.md`, `line-by-line-audit-2026-11-26.md`) untouched. |
| T10-ba4eabb3 | Final integration & GitHub Pages publication pass (fix remaining 404 & wrong-city-redirecting MICHELIN/activity URLs on `d26aaf2`, add Guangzhou & Chengdu Guide-Listed Bib Gourmand / Selected rows, rebuild `*.html` + `data.js`, pass all 5 validators + JSDOM + HTTP checks, open & merge PR, verify live Pages deploy) | **done** | `ba4eabb3` | `data/{michelin,activities}.json`, `data.js`, `*.html`, `scripts/{build_pages,verify_project,test_ui}.*`, `README.md`, `RESEARCH_REVIEW.md`, `COORDINATION.md` | Rebased cleanly onto `origin/main` (`d26aaf2`, preserving PRs #12–#16 in full); fixed 11 broken/wrong-city official URLs, added Guangzhou & Chengdu Guide-Listed rows (`27` hotels, `37` restaurants, `31` activities, `19` flags, `117` official sources); passed all 5 validators + JSDOM + HTTP 200 checks; opened & merged **PR #17** (<https://github.com/kanlerxz87-cyber/ChinaFun2/pull/17>) to `main` and verified live GitHub Pages deployment at <https://kanlerxz87-cyber.github.io/ChinaFun2/>. |

### Claim & publication log update (2026-11-26)
- `2026-11-26` · `ba4eabb3`: Read `COORDINATION.md`, claimed `T09-ba4eabb3` and queued `T10-ba4eabb3` onto latest `origin/main` (`d26aaf2`).
- `2026-11-26` · `ba4eabb3`: Completed `T09-ba4eabb3` (`research/session-ba4eabb3-audit.md`) and `T10-ba4eabb3`; opened & merged **PR #17** (<https://github.com/kanlerxz87-cyber/ChinaFun2/pull/17>) to `main` (`merged`), confirming GitHub Actions validation & live GitHub Pages publication (<https://kanlerxz87-cyber.github.io/ChinaFun2/>).

---

## Session `24a77f0b` — 2026-11-27 brief-conformance audit, official-source spot checks, Flagged-for-Review additions & PR/merge

**Branch:** `arena/24a77f0b-chinafun2` (from `main` `e910cb5`). Single-session run; no other sessions are active on this branch.

| ID | Task | Status | Owner | Files in scope | Notes / coordination rule |
|----|------|--------|-------|----------------|---------------------------|
| T13-24a77f0b | Re-check brief conformance (1–2 week stay, Feb 15–Mar 23 2027 window, Feb 15–18 preferred), spot-verify holiday/visa primary sources, flag irregularities, regenerate pages, PR & merge to `main`, confirm Pages | **done** (PR #18 — see merge record below) | `24a77f0b` | `COORDINATION.md`, `README.md`, `data/flags.json`, generated `*.html`, `data.js` | Claimed 2026-11-27. Pages publishes from `main` root, so generated files are rebuilt only by `scripts/build_pages.py`. |

### Claim log (2026-11-27)
- `2026-11-27` · `24a77f0b`: Read `COORDINATION.md`; baseline `build_pages.py`, `verify_project.py`, `audit_5e433db0.py`, `shanghai-planner/scripts/validate_research.py`, and `test_ui.cjs` all PASS on `e910cb5`. Claimed T13-24a77f0b.

### T13-24a77f0b — verification record (2026-11-27)
- **Sources checked:** Official gov.cn English "Public holidays for 2027" (https://english.www.gov.cn/policies/latestreleases/202611/06/content_WS6aed74dcc6d00ca5f9a0e22e.html, updated Nov 6, 2026): Spring Festival Feb 5–13 (9 days) confirmed; the page lists no makeup-workday dates. travel.state.gov China page could not be fetched; secondary sources were consistent on US L visa and 240-hour transit being onward-transit only.
- **Calendar arithmetic (Python `datetime`):** Feb 15, 2027 = Monday; Feb 18 = Thursday; Feb 22 = 7 nights after Feb 15; Mar 1 = 14 nights; Mar 23 = Tuesday; from Nov 27, 2026 Feb 15 is 80 days and Feb 18 is 83 days.
- **Changes:** added flags `E02` (brief says 1–2 weeks; 2–4 week content retained for comparison), `E03` (Feb 14 makeup workday not on official page — secondary only), `E04` (US visa/transit rules — official travel.state.gov not fetched), `D01` (snapshot freshness Nov 26 vs today Nov 27). Flag count 19 → 23 across README, index, nav counters. README gained a "Brief scope" section.
- **Validators:** `build_pages.py` regenerated; `verify_project.py`, `audit_5e433db0.py`, `shanghai-planner/scripts/validate_research.py`, `test_ui.cjs` all PASS after changes.
- **Irregularities flagged for review:** E02, E03, E04, D01 (see Flagged for Review page). Stale hard-coded `Nov 26` snapshot labels were left in generated pages intentionally and are covered by D01.
- **Status:** pending PR and merge; will be marked done after merge.

- `2026-11-27` · `24a77f0b`: Opened **PR #18** (<https://github.com/kanlerxz87-cyber/ChinaFun2/pull/18>) from `arena/24a77f0b-chinafun2` to `main`; merge and Pages deployment result recorded below after merge.

---

## Session `6dd273f8` — independent external verification log, 2026-11-27

**Scope:** read-only external checks of the official facts cited by the repo; no `data/*.json` or page values were changed because all table rows already carry official-source links and all unknowns (2027 hotel totals, ≤60-minute transit rankings, cheapest booking day) remain correctly blank/flagged.

| # | Fact checked | Official source checked | Result | Irregularity |
|---|--------------|-------------------------|--------|--------------|
| V1 | 2027 Spring Festival holiday dates & make-up workdays | General Office of the State Council notice via [english.beijing.gov.cn](https://english.beijing.gov.cn/latest/news/202611/t20261109_4937887.html) | Confirmed: Feb 5–13, 2027 (9 days); make-up workdays Jan 31 & Feb 14, 2027. Repo dashboard/costs/flags use these dates correctly. | None. |
| V2 | MICHELIN Guide Shanghai\|Jiangsu\|Zhejiang 2026 release scope & star counts | [guide.michelin.com ceremony article](https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-guide-shanghai-jiangsu-zhejiang) and [michelin.com publication page](https://www.michelin.com/en/publications/products-and-services/michelin-guide-shanghai-jiangsu-zhejiang) | Confirmed: 409 restaurants, 77 starred (1×3★, 14×2★, 62×1★), 164 Bib Gourmand, 168 Selected; 156 listed in Shanghai. | None. |
| V3 | Shanghai city subset star count | [Shanghai Tourism official Michelin guide page](https://www.shanghaitourism.org/michelin-restaurants-shanghai/) | Confirmed: 51 starred in Shanghai (1×3★, 12×2★, 38×1★), 35 Bib Gourmand; Ultraviolet closed Mar 29, 2025. Repo treats 77 as regional, 51 as city subset. | None. |
| V4 | Structural verification of the working tree | `python3 scripts/verify_project.py` + `scripts/build_pages.py` | PASS: 11 HTML pages, official link on every table row, canonical data parity, four-city coverage, 19 flags, social-URL validation, JS syntax. Build: 10 detail pages; 27 hotels, 37 restaurants, 31 activities, 19 flags, 117 official sources. | None. |

**Open non-blocking items (intentionally unverified, left blank per project rule):** official 2027 all-in 7-night/14-night hotel totals (H01), literal private-bathroom guarantees on 5 WAF/modal-gated hotel pages (H02), door-to-door ≤60-minute subway/bus route matrix and hotel Michelin ranking (H03), cheapest booking day / lead-time curve (B01), venue 2027 Spring/Lantern Festival notices (R02/A01), Hong Yu Fang/Fabula schedule conflicts (R03), traveler passport/visa eligibility (E01). All are published on `flagged.html` with sources and next steps.

### Claim & publication log update (2026-11-27)
- `2026-11-27` · `24a77f0b`: Read `COORDINATION.md`; claimed T13-24a77f0b; opened **PR #18** (<https://github.com/kanlerxz87-cyber/ChinaFun2/pull/18>) from `arena/24a77f0b-chinafun2` to `main`.
- `2026-11-27` · `6dd273f8`: Claimed `T13` on `arena/6dd273f8-chinafun2` (equals `origin/main` `e910cb5`, PR #17 merge). Ran read-only external verification; no data files changed. Committing this claim log and verification log; proceeding to push, open PR from this branch to `main`, merge, and confirm GitHub Pages deployment.
