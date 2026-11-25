# Integration evidence and verification — 25 November 2026

## Official-source spot checks during integration

These are content checks, separate from the structural validator. Full 2027 bookability and transit routing were not verified.

| Page checked | Relevant observed content | Handling |
|---|---|---|
| https://www.michelin.com/en/publications/products-and-services/michelin-guide-shanghai-jiangsu-zhejiang | 409 regional listings; 156 Shanghai listings. Shanghai has one 3-star, twelve 2-star (nine retained + three promoted), thirty-eight 1-star (35 retained + three new). | Shanghai city count 51, not regional 77; 2026 labelled. |
| https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-stars-chengdu-2027 | Release dated September 2026 for 2027 edition: 84 listings, 1 three-star, 1 two-star, 13 one-star, 32 Bib, 37 Selected. | Distinct edition shown. Xin Rong Ji 3-star; Yu Zhi Lan 2-star. |
| https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-stars-guangzhou-shenzhen-2026 | Official search excerpt: Guangzhou 117, 3 two-star, 17 one-star, 52 Bib, 45 Selected. | Supersedes earlier 51/46 snapshot; not mixed with Shenzhen. |
| https://bookings.taian-table.com/faq | Tue–Sat; first reservation 18:00, last 20:00; up to 90 days ahead; menus ¥2,588/¥2,888; deposit ¥2,000 per person. Seasonal price/add-ons caveat. | Two-person arithmetic ¥5,176/¥5,776; not final 2027 bill. |
| https://www.yugarden.com.cn/page/articleview/message.html | 09:00–16:30, last entry 16:00; Monday closed except national holidays; Dec–Mar adult ¥30. | Two-adult regular daytime ¥60. No festival/night-tour inference. |
| https://www.panda.org.cn/en/about/introduction/ | Confirms location at 1375 Panda Avenue, Chenghua District; introduction does not substantiate ticket/hour fields. | Price and hours blank. A guessed visitor-service URL failed; do not publish it. |
| https://all.accor.com/hotel/6318/index.en.shtml | Sofitel Guangzhou Sunrich; Superior 1 King, 48 m², max occupancy four; indoor pool and five dining venues. | King room recorded; exact private ensuite wording and 2027 total still blank. |
| https://www.marriott.com/en-us/hotels/ctuxr-the-st-regis-chengdu/rooms/ | Guest room 1 King, City view; separate 2 Double inventory. | Exact King candidate recorded; no date-specific inventory inference. |
| https://www.ritzcarlton.com/en/hotels/canrz-the-ritz-carlton-guangzhou/rooms/ | Standalone tubs and city/river views; property rooms exist. | No bed or explicit private ensuite inference from general copy. |
| https://www.okura-nikko.com/china/shanghai/okura-garden-hotel-shanghai/ | Redirected to official okura.com; confirms 58 Mao Ming Road South, property amenities. Widget included JPY0/no availability without exact trip query. | Never treat widget placeholders as a 2027 rate or inventory finding. |
| https://www.hilton.com/en/hotels/bjswfhi-hilton-beijing-wangfujing/ | Fetch failed. | Candidate retained but no fresh room facts asserted; follow-up source-access flag. |

## Local checks

- `python3 scripts/verify_project.py`: root HTML internal links/anchors, official-domain source link on every rendered data-table row, canonical JSON/JS parity, all four base cities, published flag references, unknown official quote/route/rank fields blank, valid seven-night stays, target lead-time arithmetic, Node syntax.
- `python3 scripts/verify_project.py --base-url http://127.0.0.1:8000/`: HTTP resource smoke check against the running server. The loopback address is test-only; browser code uses relative URLs and no loopback API endpoints.
- `NODE_PATH=.cache/browser-tests/node_modules node scripts/test_ui.cjs`: JSDOM executes actual scripts to test dashboard rendering, four cluster cards, mobile-menu state, suggestion state, detail-table search/reset/no results and keyboard-compatible sort buttons/aria-sort.
- `git diff --check`: whitespace/conflict check.

These checks **do not prove** external URL availability, all source contents, visual layout in an actual browser, current hotel quotes, user entry eligibility or complete public-transit travel time. No real browser screenshot was produced.

## Parallel work retained

The root dashboard and category filenames from merged sessions remain the primary site. The independent `research/entry-audit.md` is retained intact. The inherited pre-reconciliation JSON is explicitly marked superseded in `research/legacy-ledgers-2026-11-25.json`. PR #4's alternative `docs/` site was reviewed rather than merged wholesale. Newly merged PR #7's isolated `shanghai-planner/` subtree is retained separately and not silently substituted as the primary decision dataset.
