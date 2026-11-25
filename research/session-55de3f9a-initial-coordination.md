# COORDINATION.md — Shared Multi-Session Task Board

> **Repository:** `kanlerxz87-cyber/ChinaFun2`  
> **Active Branch:** `arena/55de3f9a-chinafun2` (base commit `3ef9a8850e976ada1bb37aa263de987c005c0b06` of `main`)  
> **Active Session ID:** `session-55de3f9a`  
> **Last Updated (UTC):** `2026-11-25`

---

## Coordination Protocol

1. **Before starting:** Check this task board for unclaimed tasks. Never edit files owned by another active session unless its claim is >60 minutes stale with zero commits.
2. **Claiming:** Write your Session ID, non-overlapping file scope, and `in progress` status here, then commit and push immediately.
3. **Verification Rule:** Work line-by-line from official verified trusted sources (`gov.cn`, `guide.michelin.com`, official hotel/attraction domains, Trip.com/official booking channels, verified YouTube/Instagram/TikTok URLs). Every table row MUST include an official source link. Any value that cannot be confirmed from an official source MUST be left blank and flagged on the **Flagged for Review** page (`needs review` — non-blocking). Never infer or hallucinate values.
4. **Branch Rule:** Per Arena session tracking rules, this session commits and pushes exclusively on `arena/55de3f9a-chinafun2`.

---

## Shared Task Board

| Task ID | Task Name | Status | Owning Session ID | Claimed At (UTC) | File Scope | Notes / Irregularities |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `T-01` | **Repo Audit & Official Calendar / Visa / Macro Verification** | `in progress` | `session-55de3f9a` | `2026-11-25T13:15Z` | `COORDINATION.md`, `README.md`, `docs/REPO_AUDIT.md` | Initial repo had only 11-byte `README.md` (`# ChinaFun2`). Flagging prompt date discrepancy ("Preferred Feb 15–18, 2027" = 3 nights vs "1–2 weeks / 7-night stay"). |
| `T-02` | **Michelin Guide Clusters & Restaurant Verification (Shanghai, Beijing, Guangzhou, Chengdu, Hangzhou)** | `in progress` | `session-55de3f9a` | `2026-11-25T13:15Z` | `data/restaurants.json`, `scripts/verify_links.py` | Official 2026 Michelin Guide editions verified from `guide.michelin.com`. Note: Ultraviolet (Shanghai) closed March 29, 2025 — flagged so stale lists are not used. |
| `T-03` | **Hotel Selection, 1-Hour Transit Michelin Ranking & Verified 7-Night Pricing Windows** | `in progress` | `session-55de3f9a` | `2026-11-25T13:15Z` | `data/hotels.json`, `data/pricing_windows.json` | Ranking hotels by Michelin count within ≤60 min subway/bus + ≤60 min to activities; Queen+ bed & private bathroom verified; real 7-night pricing across Feb 15 – Mar 23, 2027 windows. |
| `T-04` | **Activities (<1 Hr Transit), Hours/Exceptions & Social Video Links (YouTube / Instagram / TikTok)** | `in progress` | `session-55de3f9a` | `2026-11-25T13:15Z` | `data/activities.json`, `data/social_links.json` | Official attraction links, open days/hours/exceptions, transit times from ranked hotels, and verified YouTube/TikTok/Instagram links. |
| `T-05` | **Executive Summary, Pre-Decision Questions/Missing Info Matrix & Site Improvement Suggestions** | `in progress` | `session-55de3f9a` | `2026-11-25T13:15Z` | `data/analysis.json`, `data/questions_and_suggestions.json`, `data/flagged_items.json` | Clear list of knowns, unknowns, questions to resolve before booking, discovery suggestions, and reviewable UI/decision-making improvement proposals. |
| `T-06` | **Mobile-Friendly Dashboard Site & Subpages + Final Line-by-Line Integration & Verification** | `in progress` | `session-55de3f9a` | `2026-11-25T13:15Z` | `index.html`, `hotels.html`, `michelin.html`, `activities.html`, `questions.html`, `suggestions.html`, `flagged.html`, `assets/styles.css`, `assets/app.js` | Clean, responsive dashboard published at repo root `/` for GitHub Pages compatibility; zero broken links; line-by-line source verification. |

---

## Session Activity & Verification Log

- **`2026-11-25T13:15Z` — `session-55de3f9a`:** Inspected repository (`3ef9a88 Initial commit`, containing only `# ChinaFun2` in `README.md`). Checked `git branch -a`, PRs, and issues — no other active sessions exist. Created `COORDINATION.md` and claimed `T-01` through `T-06` on `arena/55de3f9a-chinafun2`.
