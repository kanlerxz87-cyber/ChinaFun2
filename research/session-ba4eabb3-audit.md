# Session `ba4eabb3` — Line-by-Line Official Source Audit (`2026-11-26`)

**Session / Branch:** `ba4eabb3` (`arena/ba4eabb3-chinafun2`)
**Verification Date:** `2026-11-26` (UTC; 81 days before Feb 15, 2027; 84 days before Feb 18, 2027)
**Method:** Primary official sources only (`english.www.gov.cn`, `guide.michelin.com`, official museum/park/scenic domains, official municipal tourism portals, and official hotel/restaurant property websites & published PDF menus). Any value not explicitly published on an official source remains blank (`""` / `null`) and flagged on `flagged.html`.

---

## 1. Trip Window, Duration Options & Holiday Verification

| Item | Verified Fact (`2026-11-26`) | Official Source | Action |
|---|---|---|---|
| Planning date & lead-time math | Current date is `2026-11-26`: **81 days** before Feb 15, 2027 and **84 days** before Feb 18, 2027 (replacing stale `2026-11-25` / "82–85 days" wording). | Calendar math anchored to `2026-11-26` | Update `data/brief.json`, `data/costs.json`, `data/flags.json`, `README.md`, `RESEARCH_REVIEW.md`, `index.html`, and regenerated `*.html` / `data.js`. |
| 2027 Chinese public holidays | State Council circular (`Nov 6, 2026`): **Spring Festival is Feb 5–13, 2027** (adjusted workdays Jan 30 & Feb 20); **Qingming is Apr 3–5, 2027**. Zero statutory national holidays fall inside **Feb 15 – Mar 23, 2027** (Lantern Festival falls on Feb 20, 2027, an adjusted Saturday workday). | `https://english.www.gov.cn/policies/latestreleases/202611/06/content_WS6aed74dcc6d00ca5f9a0e22e.html` | Keep confirmed; note 2027 Wuhou Shrine Chengdu Temple Fair (`wuhouci.net.cn`) around Lantern Festival. |
| Trip duration framing (`1–2 weeks` vs `2–4 weeks`) | Baseline comparison stays standardized on **7 nights** (e.g., preferred departure **Feb 15–18, 2027** -> Feb 15–22 or Feb 18–25), with explicit multi-week scaling for **1–2 weeks (7–14 nights)** and **2–4 weeks (14–28 nights, up to the full 36-night Feb 15 – Mar 23 window)** across 2–4 cities (`Shanghai`, `Beijing`, `Guangzhou`, `Chengdu`). | User brief + `data/brief.json` / `data/costs.json` | Expand `brief.json`, `costs.json`, `executive-summary.html`, `costs-booking.html`, `suggestions.html`, and `index.html`. |

---

## 2. Hotels (`data/hotels.json` — 16 Properties Audited Line by Line)

| ID | Hotel | Audit Result (`2026-11-26`) | Official Source |
|---|---|---|---|
| `peninsula-shanghai` | The Peninsula Shanghai | **Upgraded:** Deluxe Room (`54–59 sq m`) explicitly confirms **King / Twin bed (`2 Adults maximum`)** and **spacious marble bathroom with in-built TV and mood lighting**, Peninsula Time flexible check-in/out, and PenChat 24/7 messaging. Live 2027 7-night quote & transit count remain blank + flagged. | `https://www.peninsula.com/en/shanghai/luxury-hotel-room-suite-types/deluxe-room` |
| `waldorf-astoria-shanghai-on-the-bund` | Waldorf Astoria Shanghai on the Bund | Confirmed Queen/King Heritage & River rooms (`47 sq m+`) and marble bathroom (`hilton.com`). Live 2027 7-night quote & transit count remain blank + flagged. | `https://www.hilton.com/en/hotels/shawaul-waldorf-astoria-shanghai-on-the-bund/` |
| `peace-hotel-shanghai` | Fairmont Peace Hotel | Confirmed Fairmont King (`45 sq m`) and en-suite bathroom (`all.accor.com`). Live 2027 7-night quote & transit count remain blank + flagged. | `https://all.accor.com/hotel/A5F4/index.en.shtml` |
| `edition-shanghai` | The Shanghai EDITION | Confirmed Deluxe/Loft King (`42 sq m+`) and en-suite bathroom with rainforest shower (`editionhotels.com`). Live 2027 7-night quote & transit count remain blank + flagged. | `https://www.editionhotels.com/shanghai/` |
| `langham-shanghai-xintiandi` | The Langham, Shanghai, Xintiandi | Confirmed Superior King (`40 sq m`) and Chuan Spa/indoor pool; houses 2-Star **T'ang Court** on 5F (`langhamhotels.com`). Live 2027 7-night quote & transit count remain blank + flagged. | `https://www.langhamhotels.com/en/the-langham/shanghai/accommodations/rooms/` |
| `ritz-carlton-shanghai-pudong` | The Ritz-Carlton Shanghai, Pudong | Confirmed Deluxe King (`50 sq m`) and marble bathroom; houses 1-Star **Jin Xuan** on 53F (`ritzcarlton.com`). Live 2027 7-night quote & transit count remain blank + flagged. | `https://www.ritzcarlton.com/en/hotels/shasz-the-ritz-carlton-shanghai-pudong/rooms/` |
| `marriott-city-centre` | Shanghai Marriott Marquis City Centre | **URL & Brand Name Fixed:** `shamc-shanghai-marriott-hotel-city-centre` redirects to `shamc-shanghai-marriott-marquis-city-centre/rooms/`. Confirmed King Guest Room, complimentary Wi-Fi, 24-hour room service, and marble bathroom with double vanity in People's Square. | `https://www.marriott.com/en-us/hotels/shamc-shanghai-marriott-marquis-city-centre/rooms/` |
| `renaissance-yugarden` | Renaissance Shanghai Yu Garden Hotel | Confirmed official Marriott property slug (`shayg-renaissance-shanghai-yu-garden-hotel`); static room bed/bathroom details, 7-night quote, and transit count remain blank + flagged. | `https://www.marriott.com/en-us/hotels/shayg-renaissance-shanghai-yu-garden-hotel/overview/` |
| `hilton-city-center` | Hilton Shanghai City Center | Confirmed official Hilton property page (`shashhi-hilton-shanghai-city-center`); static room bed/bathroom details, 7-night quote, and transit count remain blank + flagged. | `https://www.hilton.com/en/hotels/shashhi-hilton-shanghai-city-center/` |
| `jing-an-shangri-la-shanghai` | Jing An Shangri-La, Shanghai | **Upgraded:** Deluxe Room (`≈42 sq m`, floors 30–59) explicitly confirms **spacious marble bathroom with heated marble floor, rain shower head, towel warmer, and Wi-Fi** (`2 Adults`). Bed type selected at booking (kept blank + flagged alongside 7-night quote & transit count). | `https://www.shangri-la.com/en/shanghai/jinganshangrila/rooms-suites/rooms/deluxe-room` |
| `the-sukhothai-shanghai` | The Sukhothai Shanghai | **Broken Corporate Redirect Fixed:** `www.sukhothai.com/shanghai/en/rooms-and-suites` redirected to generic corporate splash; updated to dedicated Shanghai property site `https://shanghai.sukhothai.com/en/` (confirmed **2025 & 2026 MICHELIN Key**, LEED architecture, indoor pool, gym, spa). | `https://shanghai.sukhothai.com/en/` |
| `peninsula-beijing` | The Peninsula Beijing | Confirmed all-suite property (`60 sq m+`) with King bed and separate marble bathroom (`peninsula.com`). | `https://www.peninsula.com/en/beijing/luxury-hotel-room-suite-types` |
| `mandarin-oriental-wangfujing-beijing` | Mandarin Oriental Wangfujing, Beijing | Confirmed King rooms (`55 sq m+`), spa, indoor lap pool, and terrace views (`mandarinoriental.com`). | `https://www.mandarinoriental.com/en/beijing/wangfujing/stay` |
| `mandarin-oriental-guangzhou` | Mandarin Oriental, Guangzhou | Confirmed Taikoo Hui location and on-site 2-Star **Jiang by Chef Fei** (`mandarinoriental.com`). | `https://www.mandarinoriental.com/en/guangzhou/tianhe` |
| `ritz-carlton-guangzhou` | The Ritz-Carlton, Guangzhou | Confirmed Pearl River New City location (`350 guest rooms`), outdoor heated pool, spa, and on-site 1-Star **Lai Heen** (`ritzcarlton.com`). | `https://www.ritzcarlton.com/en/hotels/canrz-the-ritz-carlton-guangzhou/overview/` |
| `the-temple-house-chengdu` | Upper House Chengdu (formerly The Temple House) | **Official Rebrand & Room Upgrade Captured:** `thehousecollective.com/en/the-temple-house/` redirects to `https://www.upperhouse.com/en/chengdu/`. Official `/rooms/` page confirms **Studio 60 (`63 sq m`, King/Twin, 2 adults) & Studio 70 (`72 sq m`, King/Twin)** with **private black-stone spa-like rain-shower bathroom** (and freestanding tub in Studio 70); houses 1-Star + Green Star **Mi Xun Teahouse**. | `https://www.upperhouse.com/en/chengdu/rooms/` |

---

## 3. Michelin Restaurants (`data/michelin.json` — 26 Entries: 24 Audited + 2 Guide-Listed Additions)

Every entry was verified directly against `guide.michelin.com` plus linked official restaurant/hotel websites and official published PDF menus:

1. **Non-official & mismatched `venue` URLs eliminated:**
   - Removed third-party food blog `https://rachelgouk.com/listing/canton-8-runan-street/` from `canton-8` (`guide.michelin.com` lists no official website for Canton 8; `venue` set to `""`).
   - Replaced duplicate `guide.michelin.com` `venue` links where Michelin links to a real official site:
     - `tang-court` -> `https://www.langhamhotels.com/en/the-langham/shanghai/dine/tang-court/`
     - `bao-li-xuan` -> `https://www.bulgarihotels.com/en-US/shanghai/dining/bao-li-xuan`
     - `da-vittorio-shanghai` -> `https://www.davittorio.com/en/restaurants/da-vittorio-shanghai.html`
     - `otto-e-mezzo-bombana-shanghai` -> `https://www.ottoemezzobombana.com/branch/shanghai/`
     - `jin-xuan` -> `https://www.ritzcarlton.com/en/hotels/shasz-the-ritz-carlton-shanghai-pudong/dining/`
     - `guangzhou-jiang-by-chef-fei` -> `https://www.mandarinoriental.com/en/guangzhou/tianhe/dine/jiang-by-chef-fei`
     - `guangzhou-bingsheng-mansion` -> `https://www.bingsheng.com/`
     - `chengdu-mi-xun-teahouse` -> `https://www.upperhouse.com/en/chengdu/restaurants-and-bars/mi-xun-teahouse/`
     - `chengdu-xin-rong-ji` -> `https://www.xinrongji.com/`
   - Fixed `ren-he-guan` wrong-branch duplicate Michelin URL (`.../ren-he-guan` vs `.../ren-he-guan-zhaojiabang-road`) by setting `venue: ""` and clarifying branch name `Ren He Guan (Zhaojiabang Road / 仁和馆)`.
   - Cleared remaining duplicate `guide.michelin.com` `venue` placeholders (`lao-zheng-xing`, `beijing-xin-rong-ji`, `beijing-chao-shang-chao`, `chengdu-yu-zhi-lan`, `chengdu-silver-pot`) to `""` so `Official Venue` never masquerades as a separate domain when none is published.
2. **Official Published Couple Totals (`couplePrice`) Expanded from 1 -> 5 Restaurants:**
   - `taian-table`: `¥4,620` (`2 × ¥2,100 + 10%` service charge; `https://taian-table.cn/`).
   - `tang-court`: `¥888–¥2,288` (`¥888` Classic Dim Sum Lunch Set for Two; `¥2,288` All Day Set Menu for Two, inclusive of service charge & tax; official 2026 PDF `https://www.langhamhotels.com/content/dam/langhamhotels/tlshx-pdfs/tang-court/2026/seasonal-set-menu-selection-2026.pdf`).
   - `bao-li-xuan`: `¥3,576` (`2 × ¥1,788` Autumn Set Menu, inclusive of service fee & tax; lunch dim sum à la carte `¥36–¥148` per item; official PDF `https://www.bulgarihotels.com/mgnl/dam/jcr:a73f7c35-f606-4678-9c84-e89e9df19a2b/Bao%20Li%20Xuan%20Menu%20-English.pdf`).
   - `da-vittorio-shanghai`: `¥5,254–¥9,654` (`¥5,253.60 = 2 × ¥2,388` *Il Mare* 7-course menu `+ 10%` service charge; `¥9,653.60 = 2 × ¥4,388` *White Truffle* 7-course menu `+ 10%`; official PDF `https://www.davittorio.com/images/davittorio/ristorante/shanghai/menu/Menu%20Ristorante%20-%20Inglese.pdf`).
   - `chengdu-mi-xun-teahouse`: `¥620` (`RMB 620 / set` Vegetarian Sichuan Hot Pot for Two; official offer page `https://www.upperhouse.com/en/chengdu/special-offers/mxt-hot-pot-for-two/`).
3. **Official Operating Hours Newly Confirmed from Primary Pages:**
   - `tang-court`: `Tue–Sun 11:30–14:00, 17:30–21:00; Closed Mon` (`langhamhotels.com`)
   - `bao-li-xuan`: `Daily 11:30–14:00, 17:30–22:00` (`bulgarihotels.com`)
   - `da-vittorio-shanghai`: `Tue–Sun 12:00–13:30, 18:00–21:30; Closed Mon` (`guide.michelin.com` & `davittorio.com`)
   - `otto-e-mezzo-bombana-shanghai`: `Lunch Thu–Sun 12:00–13:30; Dinner Daily 18:00–21:00; Bar Daily 17:30–22:30` (`ottoemezzobombana.com`)
   - `jin-xuan`: `Sun–Thu 11:30–21:30; Fri–Sat 11:30–22:00` (`ritzcarlton.com`)
   - `fabula`: `Wed–Sun 19:00–23:00; Closed Mon–Tue (reservation only)` (`fabula.restaurant`)
   - `guangzhou-jiang-by-chef-fei`: `Mon–Fri 11:30–14:30, Sat–Sun & Public Holidays 10:00–15:00; Daily 17:30–22:00` (`mandarinoriental.com`)
   - `chengdu-mi-xun-teahouse`: `Daily Lunch 12:00–14:00, Afternoon Tea 14:00–17:30, Dinner 17:30–22:00` (`upperhouse.com`)
4. **Guide Band (`¥`–`¥¥¥¥`), Distinctions, Grammar & Multi-City Guide-Listed Coverage:**
   - Populated official Michelin `guideBand` across all rows (`¥` to `¥¥¥¥`).
   - Fixed `"1 Stars"` -> `"1 Star"` across all 1-star entries; noted **Mi Xun Teahouse** holds **1 Star + MICHELIN Green Star**; corrected **Fabula** cuisine from `"Contemporary European"` to Michelin's exact `"Innovative"` (`Neo-Sino-French` on `fabula.restaurant`).
   - Added **Xiang Qun (Longjin East Road)** (`Guangzhou`, **Bib Gourmand · Guide Listed (No Star)**, `¥`, `Mon–Sun 10:00–22:00`, `guide.michelin.com`) and **Wu Yue Gong** (`Chengdu`, **MICHELIN Selected · Guide Listed (No Star)**, `¥¥`, `Chinese Contemporary`, `guide.michelin.com`) so all 4 cities (`Shanghai`, `Beijing`, `Guangzhou`, `Chengdu`) explicitly contrast **Currently Starred** vs **MICHELIN Guide Listed (No Star)**.

---

## 4. Activities (`data/activities.json` — 23 Entries: 22 Audited + Shanghai Museum East Added)

| ID | Activity | Official Verification Result (`2026-11-26`) | Primary Official Source |
|---|---|---|---|
| `shanghai-museum` | Shanghai Museum (People's Square) | **Critical Fix:** Migrated retiring `.net` (`retires 2027-01-01`) to live `https://www.shanghaimuseum.cn/mu/frontend/pg/en/service/visit-west`. Corrected false `"General admission ¥0"`: People's Square currently hosts **only** the paid special exhibition *"On Top of the World Tree"* (`2026-07-09`–`2027-11-14`) requiring paid tickets for all visitors (exact ticket price blank + flagged; overseas booking via WeChat Mini Program or authorized Trip.com). Hours `Tue–Sun 09:00–17:00 (last entry 15:00); Closed Mon (except national holidays)`. Official social links added: `youtube.com/@theshanghaimuseum`, `instagram.com/theshanghaimuseum`. | `https://www.shanghaimuseum.cn/mu/frontend/pg/en/service/visit-west` |
| `shanghai-museum-east` | Shanghai Museum East (Pudong) | **New Official Companion Entry:** Added `1952 Century Avenue, Pudong` (`Wed–Mon 10:00–18:00, last entry 17:00; Closed Tue except national holidays`), which provides **walk-in free general admission (`¥0`)** with original passport/ID at B1 East Gate (`Curio-City` / `Digital Gallery` / special exhibitions require separate booking/tickets). | `https://www.shanghaimuseum.cn/mu/frontend/pg/en/service/visit-east` |
| `yu-garden` | Yu Garden (豫园) | Confirmed `Tue–Sun 09:00–16:30 (last entry 16:00); Closed Mon except statutory holidays`; Dec–Mar off-season **`¥60` (`2 × ¥30`)** for 2 adults. | `https://www.yugarden.com.cn/page/articleview/message.html` |
| `power-station-of-art` | Power Station of Art | **Upgraded:** Confirmed `Tue–Sun 11:00–19:00 (last entry 18:00); Closed Mon (open national public holidays)` and 3 exhibitions running into Feb 21–28, 2027 (`15th Shanghai Biennale` through `2027-02-28`, `Staged: Architecture from Spain` through `2027-02-21`, `Zheng Chongbin` through `2027-02-25`). | `https://www.powerstationofart.com/visit-and-tickets` |
| `shanghai-tower` | Top of Shanghai Observatory (Shanghai Tower) | Updated official page to `https://en.shanghaitower.com/shagnhai.html` (`118F` Observatory at 546m, inquiry hotline `09:00–18:00` `+86 21 80370150`, passport/ID required; ticket price & entry hours not published on static English page -> kept blank + flagged). | `https://en.shanghaitower.com/shagnhai.html` |
| `beijing-palace-museum` | The Palace Museum (Forbidden City) | **Upgraded:** Confirmed Nov 1–Mar 31 off-season hours **`Tue–Sun 08:30–16:30; Closed Mon (except statutory holidays)`** and off-season main gate price **`¥80` (`2 × ¥40` for 2 adults; Treasure & Clock Galleries optional `+¥10/person` each)**; real-name tickets open **20:00, 7 days prior**. | `https://en.dpm.org.cn/visit/tickets` & `https://english.beijing.gov.cn/latest/news/202407/t20240704_3737456.html` |
| `beijing-temple-of-heaven` | Temple of Heaven | **Upgraded:** Confirmed Nov 1–Mar 31 off-season hours (**Outer Park `06:30–22:00` last entry `21:00`; Inner Scenic Spots `Tue–Sun 08:00–17:00` last entry `16:30`, Closed Mon except statutory holidays**) and off-season couple price **`¥20–¥56` (`2 × ¥10` outer park gate to `2 × ¥28` combo through-ticket)**. | `https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/overview/202301/t20230112_2897365.html` |
| `beijing-summer-palace` | Summer Palace | **Upgraded:** Confirmed Nov 1–Mar 31 off-season full-price gate admission **`¥40` (`2 × ¥20` for 2 adults; Apr–Oct `¥30/person`)**; inner courtyard attractions carry separate charges and close Mondays except statutory holidays. | `https://english.beijing.gov.cn/specials/ticketing/index.html` |
| `beijing-mutianyu-great-wall` | Mutianyu Great Wall | **Upgraded Hours:** Confirmed winter (`Nov–Feb`) hours `08:30–16:30` and March hours `Mon–Thu 08:30–17:00; Fri–Sun & public holidays 08:00–17:30` on `english.beijing.gov.cn` (shuttle/cable-car bundle pricing remains blank + flagged). | `https://english.beijing.gov.cn/specials/ticketing/index.html` |
| `guangzhou-chen-clan-ancestral-hall` | Chen Clan Ancestral Hall | **Upgraded:** Official Guangzhou Municipal Government cultural guide lists **`Daily 08:30–17:30 (ticket sales stop 17:00)`** and **`¥20` (`2 × ¥10` adult admission; reconfirm monthly conservation closure day before visit)**. | `https://english.gz.gov.cn/` |
| `chengdu-giant-panda-base` | Chengdu Research Base of Giant Panda Breeding | **Upgraded:** Official ticket page (`panda.org.cn/en/service/ticket/`) confirms **Nov–Feb `08:00–16:30` (clearance `17:30`), Mar–Oct `07:30–17:00` (clearance `18:00`)**, adult couple price **`¥110` (`2 × ¥55`; sightseeing bus optional `+¥30/person`)**, and 14-day advance real-name booking (daily cap 85,000; passport required). | `https://www.panda.org.cn/en/service/ticket/` |
| `chengdu-wuhou-shrine` | Wuhou Shrine (武侯祠) | **Upgraded:** Official museum site (`wuhouci.net.cn`) confirms **`Daily 09:00–18:00 (ticket sales stop 17:00)`**, adult couple price **`¥100` (`2 × ¥50` full-price adult ticket)**, and active **2027 Wuhou Shrine Chengdu Temple Fair (`2027武侯祠成都大庙会`)** planning notice. | `https://www.wuhouci.net.cn/` |

---

## 5. Verified Social Media Links (`YouTube`, `TikTok`, `Instagram`)

- Replaced search-only placeholders wherever direct verified creator reviews or official social accounts were confirmed via web search & primary pages:
  - **Direct Official Social Accounts:** Shanghai Museum (`youtube.com/@theshanghaimuseum`, `instagram.com/theshanghaimuseum`), Executive Chef Christiaan Stoop / Taian Table (`instagram.com/christiaan.stoop`).
  - **Direct Verified YouTube Review Videos:** Taian Table (`youtube.com/watch?v=RYsEUZJSrN8`), Ultraviolet by Paul Pairet (`youtube.com/watch?v=W5aXeO3EcbA`), Canton 8 (`youtube.com/watch?v=MerTf4Wl8Gg`), 8 ½ Otto e Mezzo Bombana Shanghai (`youtube.com/watch?v=LtmHnG6sU3Q`), Xin Rong Ji Beijing (`youtube.com/watch?v=6SvqIT2SW7M`), King's Joy (`youtube.com/watch?v=mT6hdUcRRIs`), Power Station of Art (`youtube.com/watch?v=50zqPIVoHPk`), Yu Garden (`youtube.com/watch?v=Ay96PAha8uQ`), Palace Museum & Temple of Heaven (`youtube.com/watch?v=D3Xd1-EFCW8`), Chengdu Panda Base (`youtube.com/watch?v=hRqICU0MMAE`).
  - **Direct Verified TikTok Review Videos:** Yu Garden (`tiktok.com/@via..li/video/7484076179041897758`), Palace Museum / Forbidden City (`tiktok.com/@around_the_world_with_u/video/7346881308695481632`).
- Every restaurant and activity row retains clean, labeled `YouTube`, `Instagram`, and `TikTok` links (direct video/account where verified, plus platform search links clearly labeled `(Review Search — Non-official)` where no canonical single handle is published), and third-party social links are never counted as official venue sources.

---

## 6. Post-Rebase Live Link Verification on `origin/main` (`d26aaf2` / PRs #12–#16)

After rebasing cleanly onto `origin/main` (`d26aaf2`) to preserve 100% of PRs #12–#16 (`a16d9048`, `99044301`, `5e433db0`, `ae77cbdf`), a live `fetch_page` pass across all merged records uncovered and fixed **11 remaining broken (404 / HTTP 500) or wrong-city-redirecting official links**:
1. `tang-court`: `/restaurant/t-ang-court` redirected to **Hong Kong (Tsim Sha Tsui)** -> fixed to `/restaurant/t-ang-court-506725` (Shanghai).
2. `da-vittorio`: `/restaurant/da-vittorio` redirected to **Brusaporto, Italy** -> fixed to `/restaurant/da-vittorio-570570` (Shanghai).
3. `otto-mezzo`: `/restaurant/8-1-2-otto-e-mezzo-bombana` redirected to **Macau (Cotai)** -> fixed to `/restaurant/8-%C2%BD-otto-e-mezzo-bombana` (Shanghai).
4. `chao-shang-chao`: `/restaurant/chao-shang-chao-chaoyang` returned **404** -> fixed to `/restaurant/chao-shang-chao` (Beijing).
5. `taian-gz`: `/restaurant/taian-table-guangzhou` returned **404** -> fixed to `/restaurant/taian-table-1195975` + added official `https://gz.taian-table.cn/`.
6. `imperial-treasure-gz`: `/restaurant/imperial-treasure-fine-chinese-cuisine-guangzhou` returned **404** -> fixed to `/restaurant/imperial-treasure-fine-chinese-cuisine-559150` + added official `https://www.imperialtreasure.com.cn/china`.
7. `xin-rong-ji-cd` & `yu-zhi-lan`: `/sichuan-province/chengdu/...` returned **404** -> fixed to `/chengdu-municipality/chengdu/restaurant/xin-rong-ji-1207940` and `/yu-zhi-lan-1196150` (and canonicalized `silver-pot` & `mi-xun-teahouse` to `/chengdu-municipality/`).
8. `dufu-cottage`: `cddfct.com/go-c20.htm` returned **HTTP 500** -> updated primary link to live `gochengdu.cn/en/article/happy_life_in_chengdu/4589` (`200 OK`, flagged `L01`), and enriched `wuhou` with official `wuhouci.net.cn` procurement notice for the **2027 Wuhou Shrine Chengdu Temple Fair (`2027武侯祠成都大庙会`)**.
9. Added Guangzhou Bib Gourmand **`xiang-qun`** and Chengdu MICHELIN Selected **`wu-yue-gong`** so all four cities explicitly contrast Currently Starred vs. MICHELIN Guide-Listed (non-starred) venues (`27` hotels, `37` restaurants, `31` activities, `19` flags).
