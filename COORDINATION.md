# Coordination Board — ChinaFun2 Trip Planning

Session ID: `86c14d15` (branch `arena/86c14d15-chinafun2`)
Started: 2026-11-25

## Task Board

| # | Task | Status | Owner | Files touched |
|---|------|--------|-------|---------------|
| 1 | Repo review + requirements capture | done | 86c14d15 | README.md, COORDINATION.md |
| 2 | Michelin Shanghai research (starred vs listed, prices, hours) | done | 86c14d15 | data/restaurants.json |
| 3 | Hotel research (7-night pricing, amenities, transit counts) | done | 86c14d15 | data/hotels.json |
| 4 | Activities within 1h (hours, links, social) | done | 86c14d15 | data/activities.json |
| 5 | Social links (YouTube/TikTok/Instagram) per row | done | 86c14d15 | data/social.json |
| 6 | Site build (GitHub Pages, mobile dashboard) | done | 86c14d15 | docs/** |
| 7 | Executive summary + suggestions + open questions | done | 86c14d15 | docs/summary.html, docs/suggestions.html, docs/questions.html |
| 8 | Final verification pass (line-by-line, broken links) | done | 86c14d15 | all |

## Rules
- Never mark verified without official source link. Unconfirmed = blank + "Unverified — needs review".
- Small frequent commits; `git pull --rebase` before push.
- Stale claim (>60 min, no commits) may be taken over with handoff note.

## Log
- 2026-11-25 86c14d15: Created board. Repo was empty (README only). Claiming tasks 1–8 for this session (single-session run).

- 2026-11-25 86c14d15: Research phase complete (Michelin 2026 guide, hotel indicatives, activities, social). Building data + site.

## Completion record (2026-11-25, session 86c14d15)

All tasks 1-8 done by single-session run. Flagged items (F1-F16) are published on docs/flagged.html as "needs review" and do not block.

### Sources (official / trusted)
- Michelin 2026 combined guide (Shanghai subset 156, 51 starred): https://www.michelin.com/en/publications/products-and-services/michelin-guide-shanghai-jiangsu-zhejiang
- Michelin Shanghai 2025: https://guide.michelin.com/en/article/news-and-views/shanghai-2025-starred-restaurants ; https://www.michelin.com/en/publications/products-and-services/michelin-guide-shanghai-selection-2025
- Taian Table official FAQ: https://sh.taian-table.cn/faq/ + https://guide.michelin.com/en/shanghai-municipality/shanghai/restaurant/taian-table
- Bao Li Xuan (Bvlgari official): https://www.bulgarihotels.com/en_US/shanghai/restaurants/chinese-fine-dining-restaurant
- T'ang Court (Langham official): https://www.langhamhotels.com/en/the-langham/shanghai/dine/tang-court/
- Shanghai Museum official: https://www.shanghaimuseum.net/mu/frontend/pg/m/en/service/visit-west
- Yu Garden official: https://www.yugarden.com.cn/page/articleview/message.html
- Hotels: official Hilton/Hyatt/Marriott pages + Booking.com/KAYAK/Trip.com/Skyscanner listings (indicative "from" rates only; live Feb-2027 totals flagged).
- CNY 2027 dates: China Highlights festival calendar.

### Verification performed
- Line-by-line: every JSON row has source_url / michelin_url / official_url; blank + "Unverified — needs review" where unconfirmed.
- scripts/verify.py: ALL CHECKS PASSED (7 hotels, 20 restaurants, 8 activities; 7-night = nightly x7; exactly 1 three-star; exactly 1 closed; docs/data mirrors data).
- Site: all docs/*.html + data/*.json + assets return HTTP 200 locally; internal links checked (no missing hrefs/src/fetches).

### Irregularities (see docs/flagged.html F1-F16)
- F1 Ultraviolet CLOSED 2025-03-29 (was 3-star 2025) — listed as closed, not bookable.
- F2 102 House "(Closed)" conflict vs retained 2 stars; hours conflicts.
- F3 Live Feb-2027 hotel totals not captured — indicative only (S1 to clear).
- F4-F9 Hours conflicts: Shanghai Tower, Yu Garden (official wins), T'ang Court Mondays, Bao Li Xuan (official wins), Ocean Aquarium, Sir Elly's / Mr & Mrs Bund.
- F10-F16 Price gaps (PDF/WeChat-only menus), Huaiyang Delights blank fields, hotel official-site gaps, social search vs verified handles, 20-restaurant sample vs full 156, Vivant price conflict, Ji Pin Court district corrected to Xuhui.

### Handoff
- Shared outputs (docs/index.html nav, data/*.json) were finalised by this session as the single-session integration run.
- To publish: enable Pages (Settings > Pages > /docs) — see README. Re-run `python3 scripts/verify.py` after any data edit and re-copy data/*.json to docs/data/.
- 2026-11-25 86c14d15: Tasks 1-8 marked done. Site built (docs/index, hotels, restaurants, activities, dates, summary, suggestions, questions, flagged) + style.css/app.js. Local preview HTTP 200 on all pages.

## Parallel-session note (2026-11-25, 86c14d15)
- Discovered open PR #3 from session `77604d1c` (`arena/77604d1c-chinafun2`, root `index.html`/`data.js` dashboard: 5 hotels, 6 dining, 2 activities, conservative blanks for unverified price/transit/bathroom).
- This session's scope is non-overlapping (`docs/**`, `data/*.json`) except `COORDINATION.md` + `README.md`. Do NOT merge either PR over the other without a final integration session that re-verifies combined data and resolves README/COORDINATION.
- Integration options: (a) keep #3 at root (matches current Pages config: main `/`) and this site under `/docs/`; or (b) choose one dashboard. Current Pages API cannot be changed with this token (403 on POST/PUT) — repo owner enables `/docs` in Settings if option (a) with Docs as primary is preferred.
- Corroboration from #3 worth carrying into integration: State Council Spring Festival 2027-02-05 to 2027-02-13 (english.www.gov.cn); Taian Table FAQ also at https://bookings.taian-table.com/faq (cf. this session's https://sh.taian-table.cn/faq/ — verify canonical domain at integration).
