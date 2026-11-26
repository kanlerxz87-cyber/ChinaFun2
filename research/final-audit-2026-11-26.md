# Final integration audit — 26 November 2026

## Scope and snapshot

This is a bounded refresh of the published root site, not a blanket re-verification of every external claim. The audit snapshot date is **2026-11-26**. The preferred Feb 15–18, 2027 starts are **81–84 days away**. Existing source dates remain attached to claims that were not rechecked; the snapshot date does not renew them. Unsupported prices, schedules and transit claims are left blank, not inferred to be zero.

Canonical activity and restaurant data live in `data/activities.json` and `data/michelin.json`; `data.js` and static detail pages are generated with `python3 scripts/build_pages.py`. Direct creator videos are third-party context only; they are not evidence for current MICHELIN status, official hours, ticket prices, routes or 2027 operations.

## Direct creator-video integration

- Added date/content/caveat-labelled watch links to **10 restaurant records**: Taian Table, Fu He Hui, King’s Joy, Canton 8, Bao Li Xuan, Ren He Guan, Beijing Xin Rong Ji, Jiang by Chef Fei, Bingsheng Mansion and Yu Zhi Lan.
- Added **16 activity links**: Yu Garden, The Bund, Nanjing Road, Wukang/Anfu, Xintiandi, Oriental Pearl Tower, Power Station of Art, Huangpu cruise, Forbidden City, Temple of Heaven, Mutianyu, Canton Tower, Chen Clan Ancestral Hall, Shamian Island, Panda Base and Wuhou/Jinli. The Bund and Nanjing records share one walk video; Shamian appears in a broader city vlog, and Yu Zhi Lan is a segment in a multi-restaurant video.
- Renderers show publisher, upload date, content description and a caveat. Search/profile links are collapsed and labelled **“not verified reviews”**. The hotel search shortcut is explicitly labelled discovery-only. Private/unavailable direct videos for TRB Hutong, Silver Pot and Mi Xun Teahouse remain excluded.
- Caveats preserve known mismatches: the King’s Joy video's three-star claim conflicts with the current 2026 Guide record (two stars); Canton 8's creator-reported price is not an official menu quote and the Huangpu branch is not established; the Beijing Xin Rong Ji video does not identify the Xinyuan South Road branch. Creator opinions and visit details never replace official sources.

## Official activity-source changes and limitations

| Record | Current source-backed display / correction | Evidence boundary |
|---|---|---|
| Shanghai Museum — People’s Square | 09:00–17:00, last entry 15:00, Tuesday–Sunday; closed Monday except national holidays. General admission left blank. | The current official visitor page describes the “On Top of the World Tree” exhibition through 2027-11-14 and gives current booking guidance. The linked Aug 25, 2025 notice instead says individual visitors generally do not need reservations and lists 16:00 last entry. The official pages conflict; confirm date-specific admission, reservation and exhibition ticket rules. Sources: [current visitor page](https://www.shanghaimuseum.net/mu/frontend/pg/en/service/visit-west), [2025 notice](https://www.shanghaimuseum.net/mu/frontend/pg/m/article/id/I00004797). |
| Bund / East Nanjing Road / Wukang–Anfu | Replaced generic city homepage citations with the official municipal citywalk guide; no fixed admission cost is asserted. | The guide suggests routes and durations; it is not a 2027 event/access notice. [Shanghai citywalk guide](https://english.shanghai.gov.cn/en-FAQs-StudyinShanghai/20251124/9f1658ae899240d19c52784bddfed782.html). |
| Shanghai Tower | Unsupported older 08:30–22:00 hours and ¥180 price removed; schedule and cost are blank. | Official pages checked did not establish current date-specific hours or a standard two-adult ticket product. [Official attraction page](https://www.shanghaitower.com/shagnhai.html). |
| Oriental Pearl Tower | Schedule and two-adult cost remain blank. | Multiple ticket bundles exist; a single current product and schedule were not established from the official source. [Official site](https://www.orientalpearltower.com/). |
| Power Station of Art | Current page lists Tuesday–Sunday 11:00–19:00, last entry 18:00, Monday closure and national-holiday opening. General-entry price remains blank. | Official page describes ticketing for special exhibitions but does not establish a general-entry price. [Visitor information](https://www.powerstationofart.com/visit-and-tickets). |
| Huangpu cruise | Official municipal article linked; fare and sailing schedule remain blank. | Article identifies an official ticket channel but is not a 2027 operator timetable or fare. [Municipal cruise article](https://english.shanghai.gov.cn/en-CityTour/20251107/961bba2de75a44b1ab4d20b5ce9c5d62.html). |
| Palace Museum / Forbidden City | Current official-site search results list Nov–Mar 08:30–16:30, last entry 15:40, Monday closure and ¥40 general admission; two-adult arithmetic is ¥80. | English visitor pages returned HTTP 500 in this audit. These values are search-result-derived, not direct-page verification, and are not 2027 guarantees. Confirm on the [official ticket channel](https://ticket.dpm.org.cn/). |
| Temple of Heaven | Current winter schedule and ¥28 combo ticket/person recorded; two-adult arithmetic is ¥56. | English page did not load. Hours are official-site search-result-derived; the official Chinese site lists ¥10 park / ¥28 combination prices. Reconfirm product and rules directly: [English page](https://www.tiantanpark.com/english/), [official Chinese site](https://www.tiantanpark.com/). |
| Summer Palace | Current municipal reference lists winter gate hours and ¥20 basic admission/person; two-adult base arithmetic is ¥40, excluding separately ticketed attractions. | The official municipal listing is dated 2024, not a 2027 guarantee. [Beijing municipal ticket listing](https://english.beijing.gov.cn/specials/ticketing/parks/202407/t20240719_3753037.html). |
| Canton Tower | Official guide lists tower business hours 09:30–22:30 and visitor/ticket entry 09:30–22:00. Product price left blank. | Bundles have different prices/hours; select a product and reconfirm the visit date. [Official visitor guidelines](https://www.cantontower.com/en/ticket/guidelines/), [ticket channel](https://mallpc.cantontower.com/ticket). |
| Chen Clan / Shamian | Chen Clan schedule and cost blank; Shamian fixed admission cost blank. | The replacement Chen Clan government source is an exhibition announcement, not a current admission notice. The Shamian municipal feature does not establish a 2027 event or fixed paid entry. |
| Wuhou Shrine Museum | Official English page lists daily 09:00–18:00, no admission after 17:00, and ¥50/person; two-adult arithmetic is ¥100. | Page says official website/WeChat ticketing and 14-day advance sale. Figures are current posted terms, not a 2027 guarantee; adjacent Jinli is separate. [Official visitor/ticket page](https://en.wuhouci.net.cn/visit-ticket). |

## Other retained limitations

- No official 2027 seven-night hotel totals, full room-category private-ensuite confirmation, complete hotel-to-venue public-transit route matrix, or defensible ≤60-minute hotel ranking was established.
- Restaurant bills, all 2027 opening/holiday exceptions, renovation/event notices and traveler-specific China entry eligibility remain unresolved. Passport nationality and personal circumstances were not provided; see the retained [entry audit](entry-audit.md).
- Current published prices and schedules above are not guarantees for February 2027. Check official booking channels close to the date.
- PR #4 remains **open** (`docs/` proposal, head `arena/86c14d15-chinafun2`) and is outside this audit’s file scope.
- This refresh is committed on `arena/c7463ba9-chinafun2` at `642e753` and proposed in [PR #11](https://github.com/kanlerxz87-cyber/ChinaFun2/pull/11), which remains open pending review. Its `Validate planning desk` check (run `45884160205`) passed. PR #11 is not merged, so its changes are not yet deployed.
- The GitHub API reports current `main` at `04b6d65` (2026-11-25 13:55 UTC) and Pages `built`, public, HTTPS-enforced, from `main /`; the latest Pages build record points to that same `04b6d65` commit. A manual-fallback deploy at the preceding `eab8820` revision (run `45628203203`) failed, while the current main Pages build is successful. This verifies the configured build target/status, not rendered public content. Public `github.io` content was not fetched in this environment.

## Local verification

After regeneration, the following checks passed in this workspace:

- `python3 scripts/build_pages.py` — generated 10 detail pages from canonical JSON.
- `python3 scripts/verify_project.py` — 11 HTML pages, internal files/anchors, official source link on every table row, canonical parity, four-city coverage, flags, date arithmetic and JavaScript syntax.
- `python3 scripts/verify_project.py --base-url http://127.0.0.1:8000/` — local static-server smoke check passed for 33 HTML/JSON/CSS/JS resources.
- `NODE_PATH=.cache/browser-tests/node_modules node scripts/test_ui.cjs` — dashboard rendering, direct-video/discovery disclosures, private-video exclusions, navigation/menu, suggestion state, detail filters/sort, and relative Pages paths.
- `python3 shanghai-planner/scripts/validate_research.py` — 54 sources, 4 hotels, 8 restaurants, 4 activities, 54 referenced source IDs.
- `node --check app.js`, `python3 -m py_compile scripts/build_pages.py scripts/verify_project.py`, `git diff --check`.

These structural/UI checks do **not** establish external-link reachability, complete source truth, visual browser layout, live Pages content or personal travel eligibility. No real-browser visual test was run.
