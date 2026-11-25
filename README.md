# China Trip Planning

An evidence-first, mobile-friendly planning dashboard for a two-adult China trip in the **February 15–March 23, 2027** window. It separates confirmed source facts from open questions; values not supported by a reviewed official source are intentionally left blank.

## Open the site

- GitHub repository Pages is already configured to publish the `main` branch root: <https://kanlerxz87-cyber.github.io/ChinaFun2/>.
- This working branch is not the Pages source. Once this branch is merged into `main`, GitHub Pages' existing legacy root publishing should build the root `index.html` automatically. Until then use the local preview or GitHub branch files.
- Local preview (from the repository root):

  ```sh
  python3 -m http.server 8000
  ```

  Then open `http://localhost:8000`.

## Project files

- `index.html` — dashboard sections: executive summary, dates, hotel candidates, Michelin clusters, activities, decision questions, suggestions, and review flags.
- `styles.css` — responsive layouts, navigation, card/table-like data blocks, and small-screen behavior.
- `data.js` — source-linked data ledger. Empty values mean **unverified**, not zero.
- `app.js` — renders cards and source links; suggestion buttons only select an option for review and do not modify any research or apply a proposal.
- `COORDINATION.md` — shared task board, source and verification notes, and flagged issues.

## Research scope and verified facts

- The official mainland China public-holiday page lists the 2027 Spring Festival holiday as **February 5–13, 2027**: [State Council, 2027 public holidays](https://english.www.gov.cn/policies/latestreleases/202611/06/content_WS6aed74dcc6d00ca5f9a0e22e.html). The sample stay dates in the dashboard are calendar calculations from the requested preferred start, not hotel bookings.
- The **February 15–22, 2027** sample is 7 nights; **February 15–March 1, 2027** is 14 nights. These satisfy the requested 1–2 week length, although the user’s preferred vacation span (Feb 15–18) is only four calendar days.
- The official MICHELIN Beijing 2026 release reports 32 starred restaurants: 2 with three stars, 6 with two, 24 with one: [MICHELIN Guide Beijing 2026](https://guide.michelin.com/en/article/news-and-views/michelin-guide-beijing-2026).
- The MICHELIN Shanghai 2025 city release reported 52 starred restaurants: 2 three-star, 9 two-star, 41 one-star: [MICHELIN Guide Shanghai 2025](https://guide.michelin.com/en/article/news-and-views/shanghai-2025-starred-restaurants). The 2026 Shanghai–Jiangsu–Zhejiang release is a different regional scope: [MICHELIN Guide regional 2026 release](https://www.michelin.com/en/publications/products-and-services/michelin-guide-shanghai-jiangsu-zhejiang). These totals are not presented as like-for-like city rankings.
- Restaurant star labels, Michelin-only/Bib Gourmand distinctions and listed hours are sourced to individual MICHELIN Guide venue pages; Taian Table’s published menu prices/hours link to its official FAQ. Restaurant-couple total arithmetic is shown only for its currently published menu examples and is not a 2027 quote. Hong Yu Fang’s MICHELIN page contains conflicting hours in its own table and description; both are flagged.
- Hotel candidates appear only where the reviewed official hotel page identifies a king bed or equivalent room category: The Shanghai EDITION, Grand Hyatt Shanghai, Hyatt on the Bund, Rosewood Beijing and Regent Beijing. The exact private-bathroom requirement, 2027 room allocation and live date-specific rate were not confirmed; candidates are therefore not labelled compliant or ranked.
- Shanghai Museum hours, current exhibition end date, entry/reservation rules and official social profiles are linked to the museum homepage; Yuyuan winter/spring evening schedule is linked to Shanghai Municipal Government. Re-check exact-date exceptions in 2027.
- YouTube search shortcuts are discovery links, not claims that an individual creator/video is official. The Shanghai Museum row links its verified official YouTube and Instagram profiles. No third-party post was treated as a source of fact.

## Existing detail-page audit

The main branch already contained older research subpages and JSON data. A review found secondary-source pricing, proxy-rate guidance, estimated hotel-Michelin route counts, and transit legs that omit station/first-mile time. Those entries were not reused in the root dashboard; see [RESEARCH_REVIEW.md](RESEARCH_REVIEW.md) for specific official sources and recommended corrections. The older pages remain in the repository and should not be treated as fully source-audited until those flags are closed.

## Important unverified items

No live official seven-night hotel totals for two adults, “cheapest day to book,” hotel-specific one-hour public-transit reachability, or Michelin-restaurant counts inside those transit catchments were verified. Those values are blank by design. The site lists the question and a concrete next verification step rather than inventing a number.

The project does **not** decide the city, nationality/visa needs, exact outbound/return flights, meal budget, accessibility requirements, dietary constraints, or the preferred balance between sightseeing and fine dining. The site’s “Open questions” and “Suggestions” sections explain why each item matters and how to discover it.
