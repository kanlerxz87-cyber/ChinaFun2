# COORDINATION.md — Shared Multi-Session Task Board

> **Repository:** `kanlerxz87-cyber/ChinaFun2`  
> **Session Branch:** `arena/8b2127b9-chinafun2` (Session ID: `8b2127b9`)  
> **Base Commit:** `3ef9a8850e976ada1bb37aa263de987c005c0b06` (`main`)  
> **Last Updated:** `2026-11-25T13:15:00Z`

---

## 1. Coordination Rules & Active Branch Status

1. Read `COORDINATION.md` before starting any task.
2. Claim tasks with explicit Session ID, timestamp, and non-overlapping file scope, then commit and push immediately.
3. Every row in every published dataset/table must link directly to an official verified source. Any field that cannot be confirmed from an official source must remain blank (`""` / `—`) and be explicitly marked `UNVERIFIED` and listed on the **Flagged for Review** page.
4. Note on parallel branches observed on remote at session start (`2026-11-25T13:11Z`): `main` is at `3ef9a88` (containing only `# ChinaFun2` in `README.md`, with no trailing newline — flagged as Repo Irregularity `REPO-001`). Remote branches `arena/dd6d5c6a-chinafun2`, `arena/86c14d15-chinafun2`, and `arena/77604d1c-chinafun2` exist independently in their own sandboxes; per Arena session branch isolation rules, session `8b2127b9` works exclusively on `arena/8b2127b9-chinafun2` without touching other branches.

---

## 2. Shared Task Board

| Task ID | Task Name | Status | Owning Session ID | Claimed At (UTC) | File Scope | Notes / Verification Log |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `TASK-01` | Repository Audit & Irregularity Log | `in progress` | `8b2127b9` | `2026-11-25T13:15Z` | `README.md`, `data/repo_audit.json` | Line-by-line review of initial commit `3ef9a88`, GitHub Pages config, and 2027 China holiday / prompt date anomalies. |
| `TASK-02` | Michelin Star & Guide-Listed Restaurant Dataset + Clusters + Social Media Links | `in progress` | `8b2127b9` | `2026-11-25T13:15Z` | `data/restaurants.json` | Official `guide.michelin.com` verification for Shanghai (highest Mainland China concentration: 156+ guide restaurants, 50 starred) & Beijing comparison, hours/days/exceptions, couple total cost, official links, YouTube/TikTok/Instagram links. |
| `TASK-03` | Verified Hotel Pricing (7-Night Total), Amenities, Transit Reachability & Michelin Cluster Ranking | `in progress` | `8b2127b9` | `2026-11-25T13:15Z` | `data/hotels.json`, `data/booking_windows.json` | Queen+ bed, private bathroom, 2 adults, 7-night total verified pricing across Feb 15–Mar 23, 2027 windows, cheapest upcoming dates & booking timing analysis, <=60 min subway/bus Michelin count ranking. |
| `TASK-04` | Activities & <=60-Minute Transit Matrix + Social Video Links | `in progress` | `8b2127b9` | `2026-11-25T13:15Z` | `data/activities.json` | Official museum/attraction hours, closed-day exceptions (e.g., Monday closures), admission for 2 adults, transit time from ranked hotels, YouTube/TikTok/Instagram links. |
| `TASK-05` | Executive Summary, Decision Questions, Missing Info Discovery & Site Improvement Suggestions | `in progress` | `8b2127b9` | `2026-11-25T13:15Z` | `data/analysis.json` | Executive summary, pre-decision Q&A matrix, missing info discovery roadmap, and site/decision-making improvement proposals. |
| `TASK-06` | Mobile-Friendly Dashboard Site & Multi-Page Category Subpages + Final Line-by-Line Verification | `in progress` | `8b2127b9` | `2026-11-25T13:15Z` | `index.html`, `hotels.html`, `restaurants.html`, `activities.html`, `itinerary.html`, `questions.html`, `suggestions.html`, `flagged.html`, `assets/*`, `scripts/verify_data.py` | Clean static dashboard for GitHub Pages, responsive tables, filters, badges, zero broken links, automated + line-by-line verification. |

---

## 3. Session Activity Log

- **`2026-11-25T13:15:00Z` (`8b2127b9`)**: Created `COORDINATION.md` on `arena/8b2127b9-chinafun2`. Inspected initial repo (`3ef9a88`), noted `README.md` (`11 bytes`, `# ChinaFun2`, missing trailing newline) and GitHub Pages legacy build configuration (`main` `/`). Claimed tasks `TASK-01` through `TASK-06` on `arena/8b2127b9-chinafun2`. Pushing claim immediately.
