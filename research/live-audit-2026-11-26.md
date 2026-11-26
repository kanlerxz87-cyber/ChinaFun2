# Live Official-Source & Social Review Audit (2026-11-26)

- **Session:** `99044301` (`arena/99044301-chinafun2`)
- **Audit date:** November 26, 2026 (81–84 days before preferred start window Feb 15–18, 2027; hard return limit Mar 23, 2027)
- **Scope:** Full line-by-line official verification across all 4 cities (`Shanghai`, `Beijing`, `Guangzhou`, `Chengdu`), direct YouTube/TikTok/Instagram third-party review collection, 1–2 week & 2–4 week stay modeling, and UX/validator hardening.

## 1. Critical Live Official Audit Catches (2026-11-26)

1. **Shanghai Museum — People's Square vs Shanghai Museum East (`A03`):**
   - Official visit notice (`shanghaimuseum.cn/mu/frontend/pg/en/service/visit-west`) confirms that from **July 9, 2026 through November 14, 2027** (covering the entire Feb–Mar 2027 window), the People's Square building hosts **ONLY** the ticketed special exhibition *On Top of the World Tree: Ancient Civilizations of the Americas* — **no permanent galleries are open there**.
   - Added **Shanghai Museum East** (`shanghaimuseum.cn/.../visit-east`): Wed–Mon `10:00–18:00` (last entry `17:00`), **closed Tuesdays** (meaning it is **OPEN Mondays** when People's Square, Yu Garden, and PSA close!), free permanent galleries with ID scan at B1 East Gate.
2. **Shanghai Tower (`A03`) & Oriental Pearl Tower (`A03`, `L01`):**
   - Verified Shanghai Tower 118F regular adult ticket `¥180/pp` (`¥360`/2) via Shanghai Municipal Government (`english.shanghai.gov.cn`, May 2026). However, `en.shanghaitower.com/shagnhai.html` only publishes the inquiry hotline (`09:00–18:00`) and **does not publish observatory operating hours** — previously assumed `08:30–22:00` hours were **blanked** for manual verification.
   - `orientalpearltower.com` failed automated fetch on 2026-11-26; both hours and standalone base ticket remain blank (only Shanghai Gov combo reference `¥259/pp` noted).
3. **Seasonal Schedule Switches Inside Feb 15–Mar 23, 2027 (`A02`):**
   - **Chengdu Panda Base (`m.panda.org.cn/en/service/ticket/`):** Nov–Feb `08:00–16:30` (clears `17:30`) switches on **March 1** to Mar–Oct `07:30–17:00` (clears `18:00`); `¥55/pp` (`¥110`/2), 14-day advance passport reservation.
   - **Mutianyu Great Wall (`en.mutianyugreatwall.com/pdf/one-day`):** Nov 16–Mar 15 `08:00–17:30` switches on **March 16** to peak hours Mon–Fri `07:30–18:00`, Sat–Sun `07:30–18:30`; basic `¥40/pp` (`¥80`/2) + optional shuttle `¥15/pp` + RT cable car `¥140/pp`.
   - **Chen Clan Ancestral Hall (`gz.gov.cn`):** Corrected closure rule from "Tuesday" to **LAST Monday of each month** (which falls on **Feb 22, 2027** inside our window!).
4. **Michelin Restaurant Corrections (`R01`, `R05`):**
   - Removed non-official dining blog link from **Canton 8** (`guide.michelin.com` lists no official website; added blog domain to `verify_project.py` stale blocklist).
   - Fixed broken **Ren He Guan** Michelin URL to live `/restaurant/ren-he-guan-zhaojiabang-road`.
   - Fixed `"1 MICHELIN Stars"` grammar typos across Guangzhou/Chengdu listings and added `"1 MICHELIN Stars"` to validator blocklist.
   - Verified **King's Joy (Beijing)** live on `guide.michelin.com`: currently **2 MICHELIN Stars** (daily `11:00–22:00`), despite older third-party YouTube videos referencing 3 Stars.
   - Flagged **T'ang Court (Langham Shanghai)** official-page contradiction (`"daily"` vs `"Off on Monday"`).
   - Flagged **The Ritz-Carlton Shanghai, Pudong / Jin Xuan (`H04`, `R05`)** for ongoing public-area enhancement works starting **October 1, 2026** (1F lobby/retail, 3F banquet, 55F spa; no end date).
   - Verified official 2026 published menu bases for **Taian Table**, **T'ang Court** (`¥888`/`¥2,288` sets for two), **Bao Li Xuan** (`¥3,576` = 2×`¥1,788` incl. fee/tax), **Yi Long Court** (`¥788.22` weekday dim sum for two), **Sir Elly's** (Selected/no star, `¥3,003.62` for two), **Da Vittorio** (English menu PDF tasting notes + `$100/pp` Resvea deposit), and **Mi Xun Teahouse** (1★ + MICHELIN Green Star, `¥620` Vegetarian Hot Pot for Two).
5. **Hotel Evidence & Strict No-Inference Policy (`H01`, `H02`, `H04`):**
   - Verified live official room specs for **The Peninsula Shanghai** (Deluxe 54–59 m², King/Twin), **The Langham Xintiandi** (Superior 40 m², King/Twin), **Bvlgari Shanghai** (Deluxe 52 m², King), **The Ritz-Carlton Pudong** (1 King + Oct 1, 2026 enhancement alert), **Jing An Shangri-La** (Deluxe 42 m²), **Shanghai Marriott Marquis City Centre** (canonical URL), and **Mandarin Oriental Guangzhou** (Deluxe 60 m², King/Twin).
   - Kept ALL dated 2027 hotel totals (`total`), `rank`, `transit`, `activityTransit`, and unstated literal `"private/en-suite"` `bath` fields strictly blank (`""`) and flagged. Excluded prior pre-tax Peninsula SH observation (`¥24,850`) and undated "from" widgets from official quote columns.

## 2. Direct Third-Party Social Review Integration (`S01`)

- Collected verified direct **YouTube (`watch?v=`)**, **TikTok (`@.../video/...` & `/discover/...`)**, and **Instagram** (official venue/museum/tourism profiles) links across Shanghai, Beijing, Guangzhou, and Chengdu.
- Separated official venue/MICHELIN/municipal links from third-party social reviews in dedicated table columns with clear `Direct video`, `Official profile`, `TikTok discover`, and `Search fallback` badges.

## 3. Verification Summary

- `python3 scripts/build_pages.py` → Regenerated `data.js` and 10 static detail HTML pages (`20 hotels, 27 restaurants, 29 activities, 17 flags, 93 official sources`).
- `python3 scripts/verify_project.py` → PASS (11 HTML pages, internal links/anchors, official source per table row, social review URL validation, stale-claim blocklist, date arithmetic, JS syntax, HTTP 200 across 33 local resources).
- `python3 shanghai-planner/scripts/validate_research.py` → PASS (retained subtree intact: 54 sources, 4 hotels, 8 restaurants, 4 activities).
- `NODE_PATH=.cache/browser-tests/node_modules node scripts/test_ui.cjs` → PASS (dashboard rendering, 3 date scopes, interactive city filter chips, text search, accessible column sort, mobile menu toggle, suggestion review preview).
