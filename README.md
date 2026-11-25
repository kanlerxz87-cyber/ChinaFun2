# ChinaFun2 — Trip Planning China (Shanghai base)

Mobile-first trip dashboard for **2 adults, 7 nights in Shanghai**, built line-by-line from official/trusted sources with no inferred values.

**Live site (GitHub Pages, served from `docs/`):** open `docs/index.html` — or, once Pages is enabled, `https://kanlerxz87-cyber.github.io/ChinaFun2/`

## What is inside

| Page | Contents |
|---|---|
| [Home](docs/index.html) | Dashboard, top hotel picks, budget calculator |
| [Hotels](docs/hotels.html) | 7 hotels ranked by Michelin restaurants ≤1h, 7-night totals (total for stay) |
| [Restaurants](docs/restaurants.html) | 20 entries: 17 starred + 2 Selected + 1 closed. Cost = total for 2 adults |
| [Activities](docs/activities.html) | 8 activities ≤1h, costs for 2, hours, social links |
| [Dates & Booking](docs/dates.html) | Recommended 15–22 Feb 2027, CNY/Lantern calendar, cheapest booking window with actual dates, methodology |
| [Summary](docs/summary.html) | Executive summary |
| [Suggestions](docs/suggestions.html) | Site-improvement proposals (P0/P1/P2) — review before implementing |
| [Questions](docs/questions.html) | Open questions & gaps with discovery steps |
| [Flagged](docs/flagged.html) | Flagged-for-Review board (needs review ≠ blocked) |

## Requirements captured

- Trip 1–2 weeks between **2027-02-15 and 2027-03-23**; preferred start **2027-02-15 to 2027-02-18** → recommended **Mon 15 Feb – Mon 22 Feb 2027 (7 nights)**.
- 2 adults; private bathroom; queen bed or larger.
- Activities/restaurants ≤60 minutes from the hotel by subway/bus.
- Hotels ranked by Michelin count within 1 hour; starred vs Guide-listed (Selected/Bib) distinguished.
- Hotel cost = total for 7 nights; restaurant/activities cost = total for 2 adults (exact or ranged).
- Every restaurant/activity row: YouTube/TikTok/Instagram links, open days/hours/exceptions, official link.

## Verification rule (strict)

Every table row links to an official/trusted source for manual review. If a value could not be confirmed from an official source it is **left blank or ranged and flagged `Unverified — needs review`** (see the Flagged page). Indicative hotel nightly rates are verified “from” rates × 7 — they are **not** locked Feb-2027 quotes; the live booking page is the final price. Star authority: MICHELIN Guide Shanghai | Jiangsu | Zhejiang 2026. Exchange: 1 USD = 6.67 CNY (2026-11-25, indicative).

## Data files (single source of truth)

- `data/meta.json` — trip parameters, exchange rate, guide edition
- `data/hotels.json` — 7 hotels (mirrored to `docs/data/` for the site)
- `data/restaurants.json` — 20 restaurants incl. social links per row
- `data/activities.json` — 8 activities incl. social links per row
- `data/social.json` — social-coverage index

Edit `data/*.json`, then re-copy to `docs/data/` (the site fetches `docs/data/*.json`).

## Coordination

See `COORDINATION.md` for the shared task board, rules, sources and verification log. Small, frequent commits; `git pull --rebase` before every push.

## Run locally

```bash
python3 -m http.server 8000 --directory docs --bind 0.0.0.0
# open http://localhost:8000/
```

## Enable GitHub Pages (one-time)

Repo **Settings → Pages → Build and deployment → Deploy from a branch → Branch: `arena/86c14d15-chinafun2` (or `main` after merge) / Folder: `/docs`**. The site is plain HTML/CSS/JS — no build step.
