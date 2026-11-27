# China trip planning desk

Mobile-friendly, evidence-first China research for **two adults**, **Feb 15–Mar 23, 2027**, with **Feb 15–18 preferred starts** supporting both **1–2 week** and **2–4 week** itineraries.

**Live site:** https://kanlerxz87-cyber.github.io/ChinaFun2/

## Start here (as of Nov 27, 2026 · 80–83 days out)

- [Dashboard](index.html) and [executive summary](executive-summary.html): Shanghai is the provisional 7-night research base; Beijing, Guangzhou and Chengdu remain full alternatives (or multi-city 2–4 week pairings), with zero fabricated value rankings.
- [Hotels](hotels.html): 27 candidates across 4 cities with interactive city filter chips, Swire Upper House Shanghai/Chengdu rebrands, corrected Marriott/Hilton property codes (`shasy`, `shamshi`), and live-verified official room specs where published; dated 2027 all-in totals, literal private-bath confirmation and ≤60m transit ranks stay blank when unverified.
- [Michelin](michelin.html): 37 curated listings across 4 cities (explicitly contrasting Currently Starred vs. MICHELIN Guide Listed Bib Gourmand & Selected in all four cities) with separated Days/Hours, Exceptions/Deposits, Official Links (MICHELIN + venue), corrected Taian Table FAQ couple basis (`¥5,176–¥5,776`), `lameloise.com.cn` script-injection quarantine (`R06`), and clearly labelled third-party YouTube/TikTok/Instagram reviews.
- [Activities](activities.html): 31 verified attractions across 4 cities including **Jinsha Site Museum's full-window closure (`Dec 5, 2025 – Apr 30, 2027`, `A04`)**, Shanghai Disneyland (`from ¥950` for 2), Zhujiajiao Kezhi Garden (`¥40` for 2), Shanghai Museum East vs People's Square Americas-only notice, Mar 1 Panda Base & Mar 16 Mutianyu seasonal switches, and direct third-party walkthrough videos.
- [Dates & costs](costs-booking.html): 7-night and 2–4 week stay windows through Mar 23, plus 90/60/30/14-day calendar checkpoints.
- [Questions](questions.html), [suggestions](suggestions.html), [review flags](flagged.html) (24 flags), [sources](sources.html), and [entry/health audit](entry-audit.html).

As of **Nov 27, 2026**, the preferred starts are **80–83 days away**; Feb 15, 2027 is a Monday, and the Taian Table record reflects its Tue–Sat dinner-only schedule. Full live audit logs are recorded in [research/line-by-line-audit-2026-11-26.md](research/line-by-line-audit-2026-11-26.md), [research/session-5e433db0-audit.md](research/session-5e433db0-audit.md), [research/live-audit-2026-11-26.md](research/live-audit-2026-11-26.md), and [research/final-verification-2026-11-26.md](research/final-verification-2026-11-26.md), and the 2026-11-27 spot-check in [research/session-cb12e6ac-audit.md](research/session-cb12e6ac-audit.md). Monitoring refundable rates is actionable, but a proven cheapest booking day is **not established**. Prior aggregator observations lack exact stay/room/tax/cancellation query evidence and are quarantined in `data/costs.json`, never copied into official quote columns.

## Brief scope (2026-11-27)

The stated brief is a **1–2 week** trip between **Feb 15 and Mar 23, 2027** (preferred Feb 15–18, 2027), for two adults. Items for 2–4 week (21–36 night) windows are kept only for comparison and are flagged as out of brief scope ([E02](flagged.html#E02)) until the owner confirms the length.

## Research discipline

Every table row links directly to an official property, MICHELIN Guide, museum, or government domain. Empty cells mean **unverified on static official pages**, never zero. Relative MICHELIN `¥–¥¥¥¥` symbols are never converted into cash guesses; hotel single-night baselines and quarantined OTA observations are never multiplied into 7-night 2027 quotes; and `<=60`-minute public-transit counts remain blank until timestamped subway/bus routes are recorded.

## Maintain / test / preview

Canonical records live in `data/{brief,hotels,michelin,activities,costs,flags}.json`.

```sh
python3 scripts/build_pages.py                     # Regenerate 10 detail pages and data.js
python3 scripts/verify_project.py                  # Links, anchors, official domains, banned hosts, flags, dates, JS syntax
python3 shanghai-planner/scripts/validate_research.py
npm install --prefix .cache/browser-tests --no-save --package-lock=false jsdom@26
NODE_PATH=.cache/browser-tests/node_modules node scripts/test_ui.cjs
python3 -m http.server 8000 --bind 0.0.0.0
python3 scripts/verify_project.py --base-url http://127.0.0.1:8000/
```

## Publication

GitHub Pages publishes automatically from the `main` branch root (`/`). `.github/workflows/validate.yml` validates reproducible page generation, official-domain rules, retained `shanghai-planner` integrity, and DOM search/sort/menu interactions on pushes and pull requests. `.github/workflows/pages.yml` remains a manual `workflow_dispatch` fallback only. See [COORDINATION.md](COORDINATION.md) and [RESEARCH_REVIEW.md](RESEARCH_REVIEW.md) for the full multi-session audit log.
