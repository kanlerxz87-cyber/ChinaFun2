# China trip planning desk

Mobile-friendly, evidence-first China research for **two adults**, **Feb 15–Mar 23, 2027**, with **Feb 15–18 preferred starts** and a **seven-night working stay**.

**Live site:** https://kanlerxz87-cyber.github.io/ChinaFun2/

## Start here

- [Dashboard](index.html) and [executive summary](executive-summary.html): Shanghai is the provisional research-first base; Beijing, Guangzhou and Chengdu remain real alternatives, not a fabricated value ranking.
- [Hotels](hotels.html): 16 candidates, exact Queen+/King and private ensuite fit where supported; room confirmation, official seven-night total and route rank stay blank when unverified.
- [Michelin](michelin.html): 24 actual venues, distinctions/editions, hours and current published menu arithmetic where available. No secondary cash estimates.
- [Activities](activities.html): 22 records, published schedules, closure traps, product-specific couple tickets, and explicitly unqualified excursions.
- [Dates & costs](costs-booking.html): preferred-start and later seven-night windows through Mar 23; actual 90/60/30/14-day calendar checkpoints.
- [Questions](questions.html), [suggestions](suggestions.html), [review flags](flagged.html), [sources](sources.html), and [entry/health audit](entry-audit.html).

As of **Nov 26, 2026**, the preferred starts are **81–84 days away**. This updates the calendar arithmetic and records a targeted activity-source pass only; hotel, dining, cost, entry and health records were not re-reviewed and retain their prior review dates. Monitoring refundable rates is actionable, but a proven cheapest booking day is **not established**. Prior aggregator observations lack exact stay/room/tax/cancellation query evidence and are quarantined, never used as official quotes or savings proof.

## Research discipline

A source link verifies only its stated scope. Empty official fields mean **unverified**, never zero or unavailable inventory. A published regular admission price is not a confirmed 2027 ticket. A Guide ¥ band is not a cash meal estimate. No hotel has a recorded complete ≤60-minute public-transit catchment; no rank is assigned.

MICHELIN release comparisons are labelled by city scope and edition: Shanghai's 2026 city subset has 51 starred venues (not the 77 regional total), Beijing 2026 has 32, Guangzhou 2026 has 20, and Chengdu 2027 has 15. These are not hotel accessibility scores or a same-edition league table. All sources and remaining caveats are linked on the site.

Both travelers' passport nationality, entry eligibility, exact duration, budget and dietary needs remain unknown. The [original independent entry audit](research/entry-audit.md) is retained intact. Do not infer nationality from location. Social searches and independent videos are discovery aids, not official evidence.

## Maintain / test / preview

Canonical records: `data/{brief,hotels,michelin,activities,costs,flags}.json`.

```sh
python3 scripts/build_pages.py       # Regenerate 10 detail pages and data.js
python3 scripts/verify_project.py    # Links, anchors, sources, flags, dates, data parity
node --check app.js
node --check assets/js/app.js
python3 -m http.server 8000 --bind 0.0.0.0
# In another shell, optionally check all resources over HTTP:
python3 scripts/verify_project.py --base-url http://127.0.0.1:8000/
```

Open local port 8000. All browser resource paths are relative, including under the GitHub Pages `/ChinaFun2/` prefix. Detail pages are static and usable without JavaScript; search and keyboard-accessible sort progressively enhance them. The dashboard uses generated `data.js`; its no-JavaScript message links the static summary.

The root dashboard design from session `77604d1c`, category architecture/search from `91622d32`, and audit from `b679d5a6` are retained and reconciled. `research/legacy-ledgers-2026-11-25.json` preserves superseded research **for audit only**, not as booking evidence. `scripts/integrate_research.py` documents the one-time migration and must not be rerun on the reconciled datasets. Use `build_pages.py` for ongoing edits.

## Publication

Pages uses the configured automatic branch publisher, `main` root. `.github/workflows/pages.yml` is an explicit main-only manual fallback, not a second publisher on every push; working branches are previews, not the public site. Merging into main publishes automatically. See [COORDINATION.md](COORDINATION.md) for prior claims, integration review and verification results, and [RESEARCH_REVIEW.md](RESEARCH_REVIEW.md) for resolved presentation defects versus still-unverified research.
