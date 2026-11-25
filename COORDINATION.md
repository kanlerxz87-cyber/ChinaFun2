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
| **T1** | Repo Audit, Prompt Irregularity Analysis & Official 2027 China Calendar/Visa Verification | `done` | `bb2085d8` | `docs/REPO_AUDIT.md`, `README.md` | Completed audit of `3ef9a88`; verified 2027 State Council holidays, NIA visa rules, and Michelin city totals; flagged IRREG-01..05 (`needs review` on Flagged page). |
| **T2** | Michelin Guide Cluster Analysis & Verified Michelin Restaurants Dataset (Stars vs Guide-Listed + 2-Adult Total Cost + Hours + Social Links) | `done` | `bb2085d8` | `data/restaurants.json` | Verified 18 Shanghai MICHELIN restaurants (11 Starred: 1×3★, 6×2★, 4×1★; 7 Guide-Listed: 3 Bib Gourmand, 4 Selected), official PDF menu prices, PBOC FX (`6.7141`), hours/exceptions, YT/TT/IG links; unverified fields left blank & flagged. |
| **T3** | Hotel Selection, Michelin ≤60-Min Transit Ranking & Verified 7-Night Pricing Windows (Feb 15 – Mar 23, 2027) | `done` | `bb2085d8` | `data/hotels.json` | Verified 7 central Shanghai hotels (Queen/King + private bath) ranked by ≤60-min Metro/bus Michelin Star reach (`50/50` down to `47/50`); live 2027 7-night totals across Feb 15–22, Feb 22–Mar 1, and Mar 8–15 prove late Feb saves $302–$877 vs March. |
| **T4** | Verified ≤60-Min Subway/Bus Activities Dataset (Hours, Exceptions, Official & Social Links) | `in progress` | `bb2085d8` | `data/activities.json` | Official museum/landmark sites, ≤60-min metro routes from ranked hotels, hours/exceptions, YouTube/TikTok/Instagram links. |
| **T5** | Pre-Decision Questions, Missing Info Discovery Plan, Executive Summary & Improvement Suggestions Data | `unclaimed` | — | `data/analysis.json` | Known vs unknown matrix, actionable discovery plan, decision-making site suggestions for review, flagged items ledger. |
| **T6** | Static GitHub Pages Dashboard UI, Category Subpages & Mobile-Responsive Assets | `unclaimed` | — | `index.html`, `executive-summary.html`, `hotels.html`, `michelin-restaurants.html`, `activities.html`, `questions-decisions.html`, `suggestions.html`, `flagged-review.html`, `assets/styles.css`, `assets/app.js`, `.nojekyll` | Clean mobile-first dashboard, combined hotel + Michelin dining table, category subpages, flagged-for-review page. |
| **T7** | Final Integration, Line-by-Line Verification Script, Link Check & Live Preview Server | `unclaimed` | — | `scripts/verify_site.py`, `COORDINATION.md` | End-to-end validation of every row, official link, unverified flag, broken-link check, and live preview confirmation. |

---

## Session Activity & Verification Log

### 2026-11-25 — Session `bb2085d8` (Branch `arena/bb2085d8-chinafun2`)
- **Action:** Created `COORDINATION.md` in repo root (`3ef9a88` had only `README.md` containing `# ChinaFun2`).
- **Claimed:** Task **T1** (`docs/REPO_AUDIT.md`, `README.md`).
- **Completed T1:** Verified 2027 PRC public holidays ([State Council](https://english.www.gov.cn/policies/latestreleases/202611/06/content_WS6aed74dcc6d00ca5f9a0e22e.html)), Lantern Festival ([HKO 2027 Calendar](https://www.hko.gov.hk/en/gts/time/calendar/pdf/files/2027e.pdf)), 240-hour visa-free transit ([NIA](https://en.nia.gov.cn/n147413/c178106/content.html)), unilateral 30-day visa-free Dec 31, 2026 cutoff ([PRC Embassy](https://bh.china-embassy.gov.cn/eng/lsfw/202511/t20251104_11746880.htm)), and 2026/2027 Mainland China MICHELIN Guide totals ([Shanghai 156](https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-guide-shanghai-jiangsu-zhejiang), [Beijing 99](https://guide.michelin.com/en/article/news-and-views/michelin-guide-beijing-2026), [Chengdu 84](https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-stars-chengdu-2027), [Guangzhou & Shenzhen 176](https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-stars-guangzhou-shenzhen-2026)). Logged irregularities `IRREG-01` through `IRREG-05` (`needs review`).
- **Claimed:** Task **T2** (`data/restaurants.json`).
- **Completed T2:** Verified 18 Shanghai MICHELIN Guide restaurants across 6 metro-linked clusters; distinguished 11 currently Starred vs 7 Guide-Listed (Bib Gourmand / Selected); verified 2026 official hotel/restaurant PDF set & à la carte menus for 2 adults; left numeric prices blank & flagged `Unverified` where official pages list only `¥/¥¥/¥¥¥¥` tiers (`8 ½ Otto e Mezzo Bombana`, `Fu He Hui`, `Canton 8`, `le Comptoir de Pierre Gagnaire` lunch/dinner, `Da Hu Chun`, `Nanxiang Steamed Bun`); caught live Nov 2026 MICHELIN directory count (`154` active vs `156` at ceremony) and `Phénix` non-star status; verified PBOC USD/CNY central parity (`6.7141` on `2026-11-16`).
- **Claimed:** Task **T3** (`data/hotels.json`).
- **Completed T3:** Verified 7 Shanghai hotels (`Radisson Blu New World` #1, `The Shanghai EDITION` #2 [1 MICHELIN Key], `Crowne Plaza Nanjing Rd` #3 [#1 value at $820–$839 / 7n], `Treasury Hotel` #4 [$836 windowed / $686 windowless], `The Langham Xintiandi` #5, `Andaz Xintiandi` #6, `Jing An Shangri-La` #7) across 3 actual 2027 7-night windows (`2027-02-15..02-22`, `2027-02-22..03-01`, `2027-03-08..03-15`) plus 3-night `2027-02-15..02-18` benchmark; verified Shanghai Metro/bus fares via `english.shanghai.gov.cn` & `service.shmetro.com`; paired each hotel row with nearby Starred vs Guide-Listed 2-adult dining costs.
- **Claimed:** Task **T4** (`data/activities.json`).
