# Shanghai Vacation Fieldnotes

This standalone, source-linked planner is packaged under `/shanghai-planner/` for deployment alongside the repository's existing Pages dashboard and research pages.

- `index.html` — executive summary and current evidence snapshot
- `hotels.html`, `restaurants.html`, `activities.html` — comparison pages
- `analysis.html` — ranking limits, suggestions for review and open questions
- `sources.html` — searchable manual-review source register
- `data/research.json` — source-linked facts, calculations, schedules and explicit gaps

Research snapshot: 25 November 2026. The Shanghai destination and 15–22 February 2027 dates are provisional. Only one dated hotel quote was usable, it excludes taxes and fees, no candidate is explicitly confirmed against every room requirement, and no hotel-to-restaurant public-transit time was verified. Hotels therefore remain unranked and there is no final itinerary claim.

To validate the data from this directory, run `python3 scripts/validate_research.py`. To preview it locally from the repository root, serve the root over HTTP and open `/shanghai-planner/`.
