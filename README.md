# China trip planning desk

Mobile-friendly, primary-source-verified China vacation research for **two adults**, **Feb 15–Mar 23, 2027** (preferred start **Feb 15–18, 2027**; **1–2 weeks** or extended **2–4 weeks**, standardized on **7-night hotel comparison blocks**).

**Live site:** https://kanlerxz87-cyber.github.io/ChinaFun2/

## Start here (verified Nov 26, 2026 · 81–84 days out)

- [Dashboard](index.html) and [executive summary](executive-summary.html): compares **Shanghai** (provisional deepest dining/sightseeing shortlist), **Beijing**, **Guangzhou**, and **Chengdu** without fabricating hotel ranks or transit catchments.
- [Hotels](hotels.html): **24 audited hotel candidates** across all four cities with verified King/Double-Queen bed classes, marble/spa bath details, Upper House Shanghai/Chengdu rebrands, corrected Marriott/Hilton property codes (`shasy`, `shamshi`, `shaaz`), and The Ritz-Carlton Shanghai, Pudong's Oct 1, 2026 public-area renovation notice. Official 2027 7-night totals and `<=60`-minute transit counts stay blank until live checkout and route sessions are run.
- [Michelin](michelin.html): **33 audited MICHELIN Guide venues** separating **Starred (1★–3★)** from **Bib Gourmand** and **MICHELIN Selected (0★)**, including **5 Shanghai venues with verified official published 2-adult menu totals** (`Yi Long Court` ¥695 lunch / ¥2,304 dinner; `T'ang Court` ¥888 lunch / ¥2,288 set; `Sir Elly's` ¥3,004 5-course set; `Bao Li Xuan` ¥3,576 degustation; `Taian Table` ¥5,176 / ¥5,776 tasting). Flags 2025/2026 closures (`Ultraviolet`, `Lan Ting`), renames (`The House of Rong`), star corrections (`Ling Long` 1★), and quarantines `lameloise.com.cn` due to third-party script injection.
- [Activities](activities.html): **26 audited sightseeing records** with official visitor links, 2-adult ticket pricing (`Shanghai Disneyland` from ¥950, `Shanghai Tower` ¥360, `Chengdu Panda Base` ¥110, `Wuhou Shrine` ¥100, `Forbidden City` ¥80, `Yu Garden` ¥60, `Temple of Heaven` ¥56, `Summer Palace` ¥40/¥100, `Zhujiajiao Kezhi Garden` ¥40), verified YouTube/TikTok/Instagram review links, and **confirmed 2026–2027 closures** (`Jinsha Site Museum` closed Dec 5, 2025 – Apr 30, 2027; `Shanghai Museum People's Square` running paid special exhibition only Jul 9, 2026 – Nov 14, 2027 while `East Campus` offers free permanent galleries).
- [Dates & costs](costs-booking.html): standardized 7-night stay blocks inside Feb 15–Mar 23, 2027 plus 14- to 28-night visa/transit framing and upcoming **60-day (Dec 17–20)**, **30-day (Jan 16–19)**, and **14-day (Feb 1–4)** repricing checkpoints.
- [Questions](questions.html), [suggestions](suggestions.html), [review flags](flagged.html) (**19 flag groups**), [sources](sources.html), [entry/health audit](entry-audit.html), and retained parallel subtree [`shanghai-planner/`](shanghai-planner/index.html).

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
