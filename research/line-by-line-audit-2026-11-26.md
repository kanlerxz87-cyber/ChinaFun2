# Line-by-Line Primary-Source Verification Audit — 2026-11-26 (Session `ae77cbdf`)

**Review date:** `2026-11-26` (UTC) — `81–84 days` prior to the `2027-02-15` to `2027-02-18` preferred start window (`2027-02-15` to `2027-03-23` overall window).
**Scope:** Canonical datasets `data/{brief,hotels,michelin,activities,costs,flags}.json`, generated `data.js` + 10 root static HTML pages, root dashboard (`index.html`, `app.js`), and validators (`scripts/verify_project.py`, `scripts/test_ui.cjs`). Preserved `shanghai-planner/` and prior `research/*` files intact.

---

## 1. Critical Ground-Truth Closures, Delistings & Security Findings Caught

1. **Jinsha Site Museum, Chengdu (`jinshasitemuseum.com/info/4707`) — FULL CLOSURE ACROSS TRIP WINDOW (`A04`)**
   - Official museum notice states Jinsha Site Museum is **closed from `2025-12-05` through `2027-04-30`** for comprehensive facility upgrades (enquiry `028-87303511`).
   - Impact: Closed for 100% of `2027-02-15` to `2027-03-23`. Added explicit warning row in `data/activities.json` and `A04` flag on `flagged.html`.
2. **Shanghai Museum Campus Split (`shanghaimuseum.cn/mu/frontend/pg/infomation/visit-west` & `visit-east`) — PARTIAL GALLERY CLOSURE (`A04`)**
   - **People's Square Campus (`201 Renmin Ave`)**: Official visitor notice states that from **`2026-07-09` through `2027-11-14`**, only a paid special exhibition is open (advance reservation required at `reservation.shanghaimuseum.net`; exact fee not stated on general visitor page; `09:00–17:00`, last entry `15:00`, closed Mondays).
   - **East Campus (`1952 Century Ave, Pudong`)**: Open **`Wed–Mon 10:00–18:00` (last entry `17:00`, closed Tuesdays)** with **walk-in permanent-gallery admission (`¥0`)** via valid passport/ID.
3. **Ultraviolet by Paul Pairet & Lan Ting — CLOSED / DELISTED IN 2026 MICHELIN GUIDE (`R04`)**
   - Official `2026 MICHELIN Guide Shanghai | Jiangsu | Zhejiang` release (`guide.michelin.com/en/article/michelin-guide-ceremony/michelin-guide-shanghai-jiangsu-zhejiang`, unveiled April 9, 2026) lists **only 1 Three-MICHELIN-Star restaurant (`Taian Table`)**. `Ultraviolet` closed in March 2025 (`uvbypp.cc` returns HTTP 500; `guide.michelin.com/.../ultraviolet-by-paul-pairet` returns 404). Legacy Bib Gourmand slug `/lan-ting` also returns 404.
4. **Standalone `lameloise.com.cn` Script-Injection Quarantine (`R05`)**
   - Static fetch of `lameloise[.]com[.]cn` on `2026-11-26` returned an injected external script (`nswsw[.]zhanlingxc[.]top/h5.js`) inside menu link markup. Added `lameloise.com.cn` to `BANNED_LINK_HOSTS` in `scripts/verify_project.py` and linked only the verified Shanghai MICHELIN page (`guide.michelin.com/en/shanghai-municipality/shanghai/restaurant/maison-lameloise-563686`).
5. **Removed Non-Official Blog Link & Fixed Stale Slugs / Rebrands (`R06`, `H04`)**
   - Removed non-official food blog URL `rachelgouk.com` from `canton-8` and broken `/ren-he-guan` duplicate from `ren-he-guan`.
   - Updated `Xin Rong Ji (Nanyang Road)` to its live 2026 MICHELIN Guide identity **The House of Rong** (`the-house-of-rong`, 2★).
   - Verified **Ling Long** (`ling-long-1209951`, 1F Waldorf Astoria on the Bund) holds **1 MICHELIN Star** (`16:00–01:00` daily), correcting older 2-Star references.
   - Updated Swire Hotels rebrands: **Upper House Shanghai** (`upperhouse.com/en/shanghai/`, formerly The Middle House) and **Upper House Chengdu** (`upperhouse.com/en/chengdu/`, formerly The Temple House).
   - Fixed broken hotel property codes: Marriott `shasy` (`Renaissance Shanghai Yu Garden Hotel`, replacing 404 `shayg`), Hilton `shamshi` (`Hilton Shanghai City Center`, replacing HTTP 500 `shaocis`), and Hyatt `shaaz` (`Andaz Xintiandi, Shanghai`, replacing `shazc`).
   - Added renovation alert for **The Ritz-Carlton Shanghai, Pudong (`Jin Xuan`)**: official `jinxuanchineserestaurantshanghai.com` notice announces public-area enhancement work in 1F lobby/retail, 3F banquet hall, and 55F spa starting `2026-10-01`.

---

## 2. Official Published 2-Adult Menu Totals Verified (`data/michelin.json`)

| Venue | 2026 Distinction | Verified 2-Adult Basis (CNY) | Official Primary Source |
|---|---|---|---|
| **Taian Table** | 3 MICHELIN Stars | `¥5,176` (10-course) / `¥5,776` (12-course) = `2 × ¥2,588 / ¥2,888` before add-ons | `https://bookings.taian-table.com/faq` |
| **Bao Li Xuan** | 2 MICHELIN Stars | `¥3,576` = `2 × ¥1,788` Chef's Degustation Menu (incl. 10% service + 6% VAT) | `https://www.bulgarihotels.com/.rest/dam/jcr:090d737a-581c-4633-9ba4-76cdbc8ba5e4/bao-li-xuan-menu-en.pdf` |
| **T'ang Court** | 2 MICHELIN Stars | `¥888` Seasonal Dim Sum Lunch Set for Two / `¥2,288` All-Day Set Menu for Two (incl. charges) | `https://www.langhamhotels.com/content/dam/langham-hotels/hotels/asia/tlshx/dining/tang-court/documents/seasonal-set-menu-selection-2026.pdf` |
| **Yi Long Court** | 1 MICHELIN Star | `¥695` Dim Sum Lunch (`2 × ¥298 + 16.6%`) / `¥2,304` Tasting Dinner (`2 × ¥988 + 16.6%`) | `https://www.peninsula.com/en/shanghai/special-offers/dining/sumptuous-set-menus-at-yi-long-court` |
| **Sir Elly's** | MICHELIN Selected (0★) | `¥3,004` 5-course dinner (`2 × ¥1,288 + 16.6%`) | `https://www.peninsula.com/-/media/03-shanghai-property/dining/2026/q1/new-menu-in-se.pdf` |

All other 28 restaurants publish only relative `¥–¥¥¥¥` MICHELIN tiers or omit online menu tariffs (including Capella Shanghai's `le Comptoir de Pierre Gagnaire`, whose PDFs omit main set-menu price digits in custom font encoding); their `coupleTotal` fields remain strictly blank (`""`) and flagged (`R01`).

---

## 3. Verified Attraction Fares & Schedules (`data/activities.json`)

- **Shanghai Disneyland** (`shanghaidisneyresort.com/en/commerce/product?id=ThemePark`): `From ¥950 = 2 × ¥475` 1-Day Ticket (`2-Day Early Bird from ¥1,508`; `1-Day + Premier Access from ¥1,740`).
- **Shanghai Tower 118F** (`english.shanghai.gov.cn/.../ee03e0a7bc6e4d87acc0a1cbe5d8ca49.html` & `en.shanghaitower.com/shagnhai.html`): `¥360 = 2 × ¥180` standard adult ticket.
- **Yu Garden** (`yugarden.com.cn/page/articleview/message.html`): `¥60 = 2 × ¥30` Dec–Mar daytime garden (`Tue–Sun 09:00–16:30`, last entry `16:00`, closed Mon); seasonal night tour notice `¥300–¥436 = 2 × ¥150–¥218` (`Fri–Sun 18:00–21:20`).
- **The Bund & Bund Ferry** (`english.shanghai.gov.cn/.../11c79bb6632944aea9814cee6ec823bb.html`): `¥0` promenade (`17:00–21:00` Nov–Apr architectural lighting); `¥4 = 2 × ¥2` public Bund Ferry.
- **Zhujiajiao & Kezhi Garden** (`english.shanghai.gov.cn/.../d16e922011a9404fae8d4b78f7fa2b2e.html`): `¥0` canal streets; `¥40 = 2 × ¥20` Kezhi Garden (`08:30–17:00`).
- **Forbidden City** (`intl.dpm.org.cn/visit.html`): `¥80 = 2 × ¥40` Nov–Mar off-season (`Tue–Sun 08:30–16:30`, last entry `15:30`, closed Mon).
- **Mutianyu Great Wall** (`en.mutianyugreatwall.com/article/4KFdNO5ybgr`): `08:00–17:30` daily (`Nov 16–Mar 15`, check-in ends `17:00`); `07:30–18:00/18:30` (`Mar 16–Nov 15`); JS ticket portal left blank (`L01`).
- **Chengdu Panda Base** (`panda.org.cn/en/service/ticket/`): `¥110 = 2 × ¥55` adult ticket; `08:00–16:30` (`Nov–Feb`) shifting to `07:30–17:00` (`Mar–Oct`).
- **Wuhou Shrine** (`wuhouci.net.cn/`): `¥100 = 2 × ¥50` shrine admission (`09:00–18:00`, stop `17:00`).

---

## 4. Intentionally Open Blockers (`H01`–`H03`, `B01`, `E01`)

- **Dated Feb–Mar 2027 7-night hotel checkout totals (`H01`)**: Interactive browser rate calendars are required; room-page baselines (`CNY 2,623.50/night` at Mandarin Oriental Guangzhou) and quarantined OTA observations (`B02`) are never multiplied into official 7-night totals.
- **Written private-ensuite confirmation (`H02`)**: Official room pages confirm King/Double-Queen beds and marble/spa bath fixtures, but checkout rate rules must explicitly lock bed type and private ensuite status.
- **Timestamped `<=60`-minute public-transit matrices & hotel ranks (`H03`)**: Left blank until base city and finalist hotels are selected.
- **Passport nationality & 240-hour transit vs L-visa (`E01`)**: Stays beyond 10 days (`14–28 nights`) cannot use China's 240-hour transit-without-visa policy.
