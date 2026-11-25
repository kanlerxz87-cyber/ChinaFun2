# COORDINATION.md — Shared Task Board & Session Log

## Coordination Protocol
1. **Before starting work:** Read this file, check active claims, claim an unclaimed task with your session ID and non-overlapping file scope, and commit + push immediately.
2. **Branch note:** This session runs on Arena's assigned tracking branch `arena/bb2085d8-chinafun2` (Session ID: `bb2085d8`), which is fixed per platform rules.
3. **Verification standard:** Every data row and claim must be verified line-by-line against an official/trusted primary source with a direct link. Any field that cannot be confirmed from an official source must be left blank (`""`) and explicitly flagged as `Unverified` (status `needs review` -> published on `flagged-review.html`, non-blocking).
4. **Commit hygiene:** Make small, frequent commits; run `git pull --rebase` on the tracked remote branch if needed before pushing.

---

## Task Board

| Task ID | Task Name | Status | Owning Session ID | File Scope | Notes / Blockers |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **T1** | Repo Audit, Prompt Irregularity Analysis & Official 2027 China Calendar/Visa Verification | `in progress` | `bb2085d8` | `docs/REPO_AUDIT.md`, `README.md` | Auditing initial repo commit `3ef9a88` and verifying 2027 State Council holiday dates, visa rules, and date window conflicts. |
| **T2** | Michelin Guide Cluster Analysis & Verified Michelin Restaurants Dataset (Stars vs Guide-Listed + 2-Adult Total Cost + Hours + Social Links) | `unclaimed` | — | `data/restaurants.json` | Official `guide.michelin.com` verification, 2-adult total cost, open days/hours/exceptions, YouTube/TikTok/Instagram links. |
| **T3** | Hotel Selection, Michelin ≤60-Min Transit Ranking & Verified 7-Night Pricing Windows (Feb 15 – Mar 23, 2027) | `unclaimed` | — | `data/hotels.json` | Queen+ bed, private bathroom, 2 adults, real 7-night total prices across actual 2027 dates, cheapest booking window. |
| **T4** | Verified ≤60-Min Subway/Bus Activities Dataset (Hours, Exceptions, Official & Social Links) | `unclaimed` | — | `data/activities.json` | Official museum/landmark sites, ≤60-min metro routes from ranked hotels, hours/exceptions, YouTube/TikTok/Instagram links. |
| **T5** | Pre-Decision Questions, Missing Info Discovery Plan, Executive Summary & Improvement Suggestions Data | `unclaimed` | — | `data/analysis.json` | Known vs unknown matrix, actionable discovery plan, decision-making site suggestions for review, flagged items ledger. |
| **T6** | Static GitHub Pages Dashboard UI, Category Subpages & Mobile-Responsive Assets | `unclaimed` | — | `index.html`, `executive-summary.html`, `hotels.html`, `michelin-restaurants.html`, `activities.html`, `questions-decisions.html`, `suggestions.html`, `flagged-review.html`, `assets/styles.css`, `assets/app.js`, `.nojekyll` | Clean mobile-first dashboard, combined hotel + Michelin dining table, category subpages, flagged-for-review page. |
| **T7** | Final Integration, Line-by-Line Verification Script, Link Check & Live Preview Server | `unclaimed` | — | `scripts/verify_site.py`, `COORDINATION.md` | End-to-end validation of every row, official link, unverified flag, broken-link check, and live preview confirmation. |

---

## Session Activity & Verification Log

### 2026-11-25 — Session `bb2085d8` (Branch `arena/bb2085d8-chinafun2`)
- **Action:** Created `COORDINATION.md` in repo root (`3ef9a88` had only `README.md` containing `# ChinaFun2`).
- **Claimed:** Task **T1** (`docs/REPO_AUDIT.md`, `README.md`).
