# Date-only refresh — 2026-11-27

## Scope

This update recalculates only the calendar distance from **2026-11-27** to the preferred **2027-02-15–2027-02-18** start window. It does **not** refresh the Nov 26 official-source research or assert that hotel rates, restaurant schedules, ticket availability, transit routes, or any other factual field were checked today.

## Arithmetic

- 2027-02-15 minus 2026-11-27 = **80 days**.
- 2027-02-18 minus 2026-11-27 = **83 days**.
- 90-day lead dates for the preferred starts were **2026-11-17–2026-11-20**; these dates have passed.
- 60-day checkpoints remain **2026-12-17–2026-12-20**.
- 30-day checkpoints remain **2027-01-16–2027-01-19**.
- 14-day checkpoints remain **2027-02-01–2027-02-04**.

These are calendar targets, **not evidence of the cheapest day to book**. No verified historical, like-for-like hotel rate series was found in the existing audit. Hotel quote cells remain blank unless supported by a captured official quote for exact dates, room occupancy, taxes and cancellation terms.

## Verification performed

- Recomputed the date intervals with Python `datetime.date` arithmetic.
- Regenerated the static category pages and `data.js` from canonical JSON.
- Ran `scripts/verify_project.py`, `scripts/audit_5e433db0.py`, and `shanghai-planner/scripts/validate_research.py`.
- Ran the JSDOM UI suite after installing its test-only dependency in the ignored `.cache` directory.
- Local HTTP smoke-tested all root pages and linked site assets.

## Limits and follow-up

The most recent factual-source audit remains dated **2026-11-26** and is documented in the linked line-by-line audit files. Exact 2027 hotel totals, room-level private-bath guarantees, complete <=60-minute public transit matrices, and a proven cheapest booking time remain unresolved and should stay flagged until checked against official sources / comparable official quotes.
