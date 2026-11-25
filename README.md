# China Vacation Fieldnotes

A compact, source-linked planning dashboard for a provisional Shanghai stay for two adults, **15–22 February 2027** (seven nights). The trip is not booked, and Shanghai remains a working destination rather than a confirmed choice.

## Open the dashboard

- [Overview](index.html) — executive summary, date context and evidence snapshot
- [Hotels](hotels.html) — room requirements, dated quote status and amenity comparison
- [Dining](restaurants.html) — edition-specific Michelin labels, official menu snapshots, couple-cost calculations and hours
- [Things to do](activities.html) — visitor information, weekly museum schedule and unresolved ticket prices
- [Analysis & review](analysis.html) — ranking limits, separate suggestions and known/unknown questions
- [Sources](sources.html) — searchable manual-review source register

## Run locally

The pages load `data/research.json` with `fetch`, so serve the repository root over HTTP rather than opening an HTML file directly:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Then visit `http://localhost:8000/`.

## Evidence policy and current limits

Research snapshot checked **25 November 2026**. Official and trusted source links are attached to the relevant records; the source register records what each page supports and its limitations. Missing figures remain blank and flagged. Menu totals and seven-night hotel arithmetic are explicitly identified as calculations from published prices, not future quotes.

The Peninsula Shanghai is the only candidate with a usable dated hotel rate, and the displayed seven-night amounts exclude taxes and fees. No candidate is yet confirmed against every bed/private-bathroom requirement, comparable all-in hotel totals are missing, and no hotel-to-restaurant public-transit route has been verified. Accordingly, hotels are not ranked, one-hour Michelin density is not scored, and the dated activity/menu snapshot is not presented as a final itinerary.

## GitHub Pages

A GitHub Actions workflow is provided in `.github/workflows/pages.yml`. It builds and deploys the static files through the `github-pages` environment when the repository’s Pages deployment permission and workflow settings allow it. The site should be treated as published only after the workflow completes successfully and its deployed URL is checked.
