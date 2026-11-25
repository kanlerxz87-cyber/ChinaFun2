# Coordination Board

## Active Sessions
| Task | Status | Session ID | Branch | Files Touched |
| :--- | :--- | :--- | :--- | :--- |
| Initialize COORDINATION.md & Build China Trip 2027 GitHub Pages Site | done | c65277d0 | arena/c65277d0-chinafun2 | `COORDINATION.md`, `index.html`, `hotels.html`, `restaurants.html`, `activities.html`, `questions-suggestions.html`, `review.html`, `assets/style.css`, `assets/app.js` |

## Verification & Irregularities Log
- **2026-11-25 (Session c65277d0)**:
  - **Sources Verified**: Official MICHELIN Guide (`guide.michelin.com`, `michelin.com` 2027 Beijing & Tianjin press release), Shanghai Museum official site (`shanghaimuseum.net`), Palace Museum official site (`en.dpm.org.cn`), official hotel sites (`fairmont.com`, `peninsula.com`, `waldorfastoria3.hilton.com`, `rosewoodbj.cn`).
  - **Irregularities Flagged**:
    1. `Le Royal Meridien Shanghai` closed and rebranded to `Conrad Shanghai` — excluded from ranked hotels.
    2. Official hotel 7-night rates for Feb 15–22, 2027 and cheapest booking windows are dynamic/JS-rendered and not statically crawlable — left blank and flagged on `review.html`.
    3. Several Michelin Guide restaurant pages list price symbols (`¥¥¥¥`) without exact CNY ranges or omit opening hours — left blank and flagged on `review.html`.
    4. `Yu Garden` hours/price came from secondary guides; official site not crawled — flagged on `review.html`.
