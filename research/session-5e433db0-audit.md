# Session `5e433db0` Primary-Source Verification Audit (2026-11-26)

**Audit date:** November 26, 2026 (UTC) — 81 days before Mon Feb 15, 2027 and 84 days before Thu Feb 18, 2027  
**Branch:** `arena/5e433db0-chinafun2`  
**Scope:** Line-by-line primary-source verification across 2027 State Council holidays, all 16 hotel candidates, 26 Michelin Guide listings (including Guangzhou & Chengdu Bib Gourmand additions), 23 cultural/sightseeing activities across Shanghai, Beijing, Guangzhou, Chengdu + Suzhou/Hangzhou excursions, and direct YouTube / Instagram / TikTok review links.

---

## 1. Official 2027 Holiday & Lead-Time Calendar

| Item | Verified Official Fact | Official Source |
|---|---|---|
| **2027 Spring Festival statutory break** | **Fri Feb 5 – Sat Feb 13, 2027** (9 consecutive days) | [State Council Circular, Nov 6, 2026](https://english.www.gov.cn/policies/latestreleases/202611/06/content_WS6aed74dcc6d00ca5f9a0e22e.html) |
| **Adjusted make-up workdays** | **Sun Jan 31, 2027** and **Sun Feb 14, 2027** | [Beijing Municipal Gov Holiday Notice, Nov 9, 2026](https://english.beijing.gov.cn/latest/news/202611/t20261109_4937887.html) |
| **Mon Feb 15, 2027 status** | First regular Monday after the national break — **Monday museum/garden closures apply** (Shanghai Museum People's Square, Yu Garden, Palace Museum, Temple of Heaven inner sites) | State Council Circular + venue visitor pages |
| **Sat Feb 20, 2027 status** | **Lantern Festival (`正月十五`)** — peak evening crowds and separate festival/night-illumination ticketing around Yu Garden Bazaar, Qinhuai/Canton waterfronts | Lunar calendar + [Yu Garden visitor notice](https://www.yugarden.com.cn/page/articleview/message.html) |
| **Lead-time arithmetic on Nov 26, 2026** | **81 days** to Feb 15, 2027; **84 days** to Feb 18, 2027 — inside Taian Table's 90-day reservation window (`bookings.taian-table.com/faq`) and between the 90-day (Nov 17–20, 2026) and 60-day (Dec 17–20, 2026) hotel monitoring checkpoints | Calendar arithmetic |

---

## 2. Hotel Room, Bed & Private-Bathroom Verification (16 Candidates)

Live 7-night Feb 2027 checkout quotes (`total`) and door-to-door `<=60 min` public-transit route matrices (`transit`, `activityTransit`, `rank`) remain intentionally blank (`""`) and flagged (`H01`, `H03`) because interactive brand booking engines require live JS session tokens and no official city-metro route matrix has been captured for every hotel-to-venue pair. However, static official property and room pages yielded substantial new room-category evidence:

| ID | Official Property Name (Nov 26, 2026) | Verified Bed Evidence | Verified Private Bathroom Evidence | Portal / Domain Update |
|---|---|---|---|---|
| `the-shanghai-edition` | The Shanghai EDITION | `1 King` / `1 Queen` (`Guest Room`, `Loft`) | En-suite bathroom with double vanity, white stone soaking tub, rainforest shower, Le Labo amenities | `marriott.com/en-us/hotels/shaeb-the-shanghai-edition/rooms/` |
| `grand-hyatt-shanghai` | Grand Hyatt Shanghai | `1 Queen Bed` (40 m²) & `1 King Bed` (42 m², floors 57+) | En-suite bathroom with separate deep-soaking bathtub | `hyatt.com/grand-hyatt/en-US/shagh-grand-hyatt-shanghai/rooms` |
| `hyatt-on-the-bund-shanghai` | Hyatt on the Bund, Shanghai | `1 King Bed` (Pearl Tower / River View, 42–45 m²) | En-suite marble bath with double basin, robes and slippers | `hyatt.com/grand-hyatt/en-US/shang-hyatt-on-the-bund-shanghai/rooms` |
| `peninsula-shanghai` | The Peninsula Shanghai | `1 King` (`Deluxe Room`, 54–59 m², max 2 adults) | Spacious marble bathroom with built-in TV, dressing area & walk-in closet | `peninsula.com/en/shanghai/luxury-hotel-room-suite-types/deluxe-room` |
| `marriott-city-centre` | **Shanghai Marriott Marquis City Centre** *(rebranded from Shanghai Marriott Hotel City Centre)* | `1 King` (`Deluxe Guest Room, 1 King`) | Marble bathroom with robe, slippers & double vanity; M Club 06:30–23:00 (`¥466.20`/day pass) | `marriott.com/en-us/hotels/shamc-shanghai-marriott-marquis-city-centre/rooms/` |
| `okura-garden-hotel-shanghai` | Okura Garden Hotel Shanghai | `1 Queen Bed` (`Superior Queen`, 29 m²) & `1 King Bed` (`Deluxe Double`, 32–36 m², 180×205 cm) | Private in-room bathroom with Washlet, bathrobe, hairdryer & scale | Redirected `okura-nikko.com` → `okura.com/china/shanghai/okura-garden-hotel-shanghai/rooms-suites/` |
| `jing-an-shangri-la-shanghai` | Jing An Shangri-La, Shanghai | `Premier King Room` (52 m²) / `Deluxe Room` (42 m²) | Spacious marble bathroom with heated marble floor, rain shower, towel warmer & mirror TV | `shangri-la.com/en/shanghai/jinganshangrila/rooms-suites/rooms/premier-room/` |
| `the-sukhothai-shanghai` | The Sukhothai Shanghai | `King` or `Hollywood King` (`Executive Room` 45 m², `Studio Room` 55 m²) | En-suite bathroom with freestanding bathtub, walk-in rain shower & PAÑPURI amenities | Moved to `shanghai.sukhothai.com/en/` (`www.sukhothai.com/shanghai/en` redirects to corporate root) |
| `renaissance-yugarden` | Renaissance Shanghai Yu Garden Hotel on the Bund | Unverified on static fetch (WAF/JS-gated; confirm King/Queen at checkout) | Unverified on static fetch (`H02`, `L01`) | `marriott.com/en-us/hotels/shayg-renaissance-shanghai-yu-garden-hotel/overview/` |
| `hilton-city-center` | Hilton Shanghai City Center | Unverified on static fetch (Hilton Akamai HTTP 500 on non-browser fetch) | Unverified on static fetch (`H02`, `L01`) | `hilton.com/en/hotels/shaocis-hilton-shanghai-city-center/` |
| `rosewood-beijing` | Rosewood Beijing | `1 King` (`Grand Deluxe Room`, 56 m², max 2 adults, floors 7–23) | `1 full marble bath` explicitly stated on official room page | `rosewoodhotels.com/en/beijing/accommodation/rooms/grand-deluxe-room` |
| `regent-beijing` | Regent Beijing | `1 King` (`Classic Room` 45 m², `Regent Club` 60 m²) | Marble bathroom with freestanding tub and rain shower | `ihg.com/regent/hotels/us/en/beijing/pekjb/hoteldetail/rooms-and-suites` |
| `hilton-beijing-wangfujing` | Hilton Beijing Wangfujing | Unverified on static fetch (Hilton Akamai HTTP 500 on non-browser fetch) | Unverified on static fetch (`H02`, `L01`) | `hilton.com/en/hotels/bjswfhi-hilton-beijing-wangfujing/` |
| `sofitel-guangzhou-sunrich` | Sofitel Guangzhou Sunrich | `1 King size bed` (`Superior Room` 48 m², `Magnifique Room` 45 m², `Luxury Room` 60 m², Sofitel MYBED) | Lanvin bath toiletries listed on property page; confirm exact bath fixture layout on room modal (`H02`) | `all.accor.com/hotel/6318/index.en.shtml` |
| `the-ritz-carlton-guangzhou` | The Ritz-Carlton, Guangzhou | Deluxe Guest Room (50 m²+; King bed selectable at checkout; Club/Suite categories specify King bedroom) | En-suite bathroom with 2 sinks, standalone bathtub, separate toilet & shower cabinet | `ritzcarlton.com/en/hotels/canrz-the-ritz-carlton-guangzhou/rooms/` |
| `the-st-regis-chengdu` | The St. Regis Chengdu | King / Double guest rooms among 282 rooms & suites at Tianfu Square | St. Regis Butler Service confirmed; exact room bathroom fixture text is JS-gated (`H02`) | `marriott.com/en-us/hotels/ctuxr-the-st-regis-chengdu/rooms/` |

---

## 3. Michelin Dining Verification & Official Couple Menu Totals (26 Venues)

All 24 prior `data/michelin.json` venues were re-fetched on `guide.michelin.com` on Nov 26, 2026, plus 2 official Bib Gourmand value benchmarks (`Yu Yuen` in Guangzhou and `Gan Ji Fei Chang Fen` in Chengdu) so all 4 cities include both starred and high-value dining options.

### Six Verified Official Two-Adult Menu Totals (Before Optional Wine/Beverage Add-Ons)

1. **Taian Table (Shanghai · 3 Stars · `¥¥¥¥`):** Classic `¥2,588`/person = **`¥5,176` for 2**; Seasonal `¥2,888`/person = **`¥5,776` for 2**; booking up to 90 days out with `¥2,000`/person deposit ([bookings.taian-table.com/faq](https://bookings.taian-table.com/faq); official website updated to `https://sh.taian-table.cn/`).
2. **T'ang Court (Shanghai · 2 Stars · `¥¥¥¥`):** Published PDF 6-course Lunch Set `¥444`/person = **`¥888` for 2**; All-Day Tasting Menu `¥1,144`/person = **`¥2,288` for 2**, inclusive of service charge & tax; **closed Mondays** ([Langham Shanghai T'ang Court](https://www.langhamhotels.com/en/the-langham/shanghai/dine/tang-court/)).
3. **Bao Li Xuan (Shanghai · 2 Stars · `¥¥¥¥`):** Published Seasonal Tasting Menu `¥1,788`/person = **`¥3,576` for 2** ([Bvlgari Hotel Shanghai Bao Li Xuan](https://www.bulgarihotels.com/en_US/shanghai/bar-and-restaurants/bao-li-xuan)).
4. **Da Vittorio Shanghai (Shanghai · 2 Stars · `¥¥¥¥`):** Published *Carta Bianca* `¥2,388`/person + 10% service charge = **`¥5,253.60` for 2**; *In The Mood For Truffle* `¥4,388`/person + 10% service charge = **`¥9,653.60` for 2**; **closed Mondays** ([davittorio.com](https://www.davittorio.com/en/where-we-are/shanghai.html)).
5. **TRB Hutong (Beijing · 1 Star · `¥¥¥¥`):** Published 3/4-course Lunch `¥788–¥888`/person + 15% service charge = **`¥1,812.40–¥2,042.40` for 2**; 5-course *Discovery* `¥1,688`/person + 15% SC = **`¥3,882.40` for 2**; 6-course *Degustation* `¥2,288`/person + 15% SC = **`¥5,262.40` for 2** ([trbhutong.com/menu](https://trbhutong.com/menu)).
6. **Mi Xun Teahouse (Chengdu · 1 Star + Green Star · `¥¥`):** Published Vegetarian Hot Pot Set Menu for two = **`¥620` for 2** (`¥68` tea pairing/person optional) ([The Temple House / Upper House Chengdu](https://www.upperhouse.com/en/chengdu/restaurants-and-bars/mi-xun-teahouse/)).

### Additional Venue Updates Verified on Nov 26, 2026
- **8 ½ Otto e Mezzo Bombana (Shanghai · 2 Stars):** Official branch page (`https://www.ottoemezzobombana.com/branch/shanghai/`) specifies **Lunch Thu–Sun 12:00–13:30, Dinner daily 18:00–21:00** (tighter than generic Guide hours).
- **Vivant by Johnny Pham (Shanghai · 1 Star):** Official site confirmed on Guide as `https://www.vivantshanghai.com/`; Tue–Sat 18:00–22:00 (closed Sun–Mon).
- **Fabula (Shanghai · Selected):** Official site `https://fabula.restaurant/` confirms Wed–Sun 19:00–23:00 (closed Mon–Tue; Guides lists Tue–Sun 18:00–22:00 — flagged so diners reconfirm Tuesday/start time).
- **Jiang by Chef Fei (Guangzhou · 2 Stars):** Official Mandarin Oriental Guangzhou page confirms **Sat–Sun & public holiday dim sum lunch opens earlier at 10:00–14:30** (Mon–Fri 11:30–14:30; dinner daily 17:30–22:00).
- **Yu Yuen (`裕苑`, Guangzhou · Bib Gourmand · `¥¥`):** Added from 2026 Guangzhou Guide (`https://guide.michelin.com/en/guangdong-province/guangzhou/restaurant/yu-yuen`), 38 Baishun North Rd, Baiyun District; hours omitted on Guide (`R02`).
- **Gan Ji Fei Chang Fen (`甘记肥肠粉`, Chengdu · Bib Gourmand · `¥`):** Added from 2027 Chengdu Guide (`https://guide.michelin.com/en/chengdu-municipality/chengdu/restaurant/gan-ji-fei-chang-fen`), 18 Ma'an North Rd, Jinniu District; daily `10:00–22:00`.

---

## 4. Sightseeing & Cultural Activities Verification (23 Entries)

Eight previously blank two-adult admission cells were resolved from official museum and municipal government portals, and two critical scheduling traps were surfaced:

| Activity | City | Verified Schedule & Closure Trap | Verified Two-Adult Cost | Primary Official Source |
|---|---|---|---|---|
| **Shanghai Museum (People's Square)** | Shanghai | Tue–Sun `09:00–17:00` (last entry `15:00`), **closed Mon**. **Renovation alert:** Jul 2026 – Nov 2027 only *Ancient Civilizations of the Americas* gallery is open while permanent galleries undergo major upgrade | **`¥0` free** (7-day passport reservation required; special exhibitions extra if applicable) | `shanghaimuseum.net/mu/frontend/pg/en/service/visit-west` |
| **Shanghai Museum East** | Shanghai | Wed–Mon `10:00–18:00` (last entry `17:00`), **closed Tue** | **`¥0` free** (walk-in with passport) | `shanghaimuseum.net/mu/frontend/pg/en/service/visit-east` |
| **Yu Garden (Classical Garden)** | Shanghai | Tue–Sun `09:00–16:30` (last entry `16:00`, cleared `16:30`), **closed Mon** except statutory holidays | **`¥60` for 2** off-season Dec–Mar (`¥30`/adult; Apr–Jun & Sep–Nov `¥40`/adult = `¥80`/2; excludes Lantern Festival bazaar night tickets) | `yugarden.com.cn/page/articleview/message.html` |
| **Power Station of Art (PSA)** | Shanghai | Tue–Sun `11:00–19:00` (last entry `18:00`), **closed Mon** | **`¥0` free** permanent building access; special exhibitions priced per show (e.g., 15th Shanghai Biennale through Mar 31, 2026 was `¥60`/pp) | `powerstationofart.com/visit-and-tickets` |
| **Huangpu River Cruise (Shiliupu)** | Shanghai | Daytime & evening sailings (confirm pier timetable on sailing date) | **`¥240` for 2** Essence Day Tour (`¥120`/adult via WeChat `"浦江游览集团"`; Oriental Pearl + Cruise combo `¥279`/adult) | `english.shanghai.gov.cn/en-CityTour/20251107/961bba2de75a44b1ab4d20b5ce9c5d62.html` |
| **Suzhou Humble Administrator's Garden** | Shanghai (excursion) | Daily `07:30–17:00` Nov 1 – Feb 28/29 (`07:30–17:30` Mar 1 – Oct 31) | **`¥140` for 2** off-season Jan–Mar (`¥70`/adult; peak Apr–May & Jul–Oct `¥80`/adult = `¥160`/2); HSR + Metro >60 min door-to-door | `english.suzhou.gov.cn/szsrmzf/2024_classic_gardens/202404/43680636abee46f3a7220ce37ec064cb.shtml` |
| **Hangzhou West Lake Scenic Area** | Shanghai (excursion) | Open 24h lakeshore; sightseeing electric car `08:30–17:00` | **`¥0` free** lakeshore walk (`¥80` for 2 full-lake electric car loop at `¥40`/adult; boat islands separate); HSR >60 min door-to-door | `wgly.hangzhou.gov.cn/art/2023/8/9/art_1229740545_58948166.html` |
| **Palace Museum (Forbidden City)** | Beijing | Tue–Sun `08:30–16:30` Nov 1 – Mar 31 (last entry `15:30`), **closed Mon** | **`¥80` for 2** low-season gate (`¥40`/adult Nov–Mar; Treasure Gallery & Clock Gallery `+¥10`/adult each; 7-day passport booking at 20:00) | `intl.dpm.org.cn/Visit.html?l=en` |
| **Temple of Heaven** | Beijing | Park daily `06:30–22:00` Nov–Mar; inner historic halls `08:00–17:00`, **closed Mon** | **`¥56` for 2** off-season through-ticket (`¥28`/adult Nov–Mar; gate-only `¥10`/adult = `¥20`/2; Apr–Oct combo `¥34`/adult = `¥68`/2; 1–7 day WeChat booking) | `english.beijing.gov.cn/specials/ticketing/parks/202407/t20240719_3753312.html` |
| **Summer Palace** | Beijing | Park daily `06:30–19:00` Nov–Mar (entry until `18:00`); inner gardens `08:30–17:00`, **closed Mon** | **`¥40` gate / `¥100` combo for 2** off-season Nov–Mar (`¥20` gate / `¥50` through-ticket per adult; Apr–Oct `¥30`/`¥60` per adult) | `english.beijing.gov.cn/specials/ticketing/parks/202407/t20240719_3753037.html` |
| **Mutianyu Great Wall** | Beijing | Daily `08:00–17:30` Nov 16 – Mar 15 (`07:30–18:00` Mar 16 – Nov 15) | **`¥90` for 2** base wall gate (`¥45`/adult; shuttle bus, cable car & chairlift/toboggan priced separately; >60 min from central Beijing) | `english.beijing.gov.cn/specials/ticketing/attractions/202407/t20240717_3751593.html` |
| **Canton Tower** | Guangzhou | Daily `09:30–22:30` (timed entry slots) | **`¥300` for 2** 433m Cloud & Starry Sky Sightseeing Hall (`¥150`/adult; 450m outdoor look-out `¥228`/adult; 460m Bubble Tram combo `¥298`/adult) | `mallpc.cantontower.com/ticket` |
| **Chen Clan Ancestral Hall** | Guangzhou | Wed–Mon `09:00–17:30` (ticket/entry stop `17:00`), **CLOSED TUESDAYS** (except national statutory holidays) | **`¥20` for 2** (`¥10`/adult; 7-day WeChat real-name booking on `广东民间工艺博物馆`) | `gz.gov.cn/zwgk/zdly/shgysyjs/ggwhty/ggwh/content/post_9864493.html` |
| **Chengdu Panda Base** | Chengdu | Daily `08:00–16:30` Nov–Feb (`07:30–17:00` Mar–Oct; AM/PM timed entry) | **`¥110` for 2** (`¥55`/adult; sightseeing shuttle separate; 14-day passport booking) | `panda.org.cn/en/service/ticket/` |
| **Chengdu Wuhou Shrine Museum** | Chengdu | Daily `09:00–18:00` (ticket sales stop `17:00`) | **`¥100` for 2** (`¥50`/adult; 14-day passport booking) | `en.wuhouci.net.cn/visit-ticket` |

---

## 5. Direct Social Media Review & Official Profile Verification

Instead of relying solely on generic search queries, direct indexed URLs were verified via live search metadata and clearly labelled to distinguish direct video/profile links from search fallbacks:
- **Direct YouTube video reviews (`youtube.com/watch?v=...`):** Taian Table (`RYsEUZJSrN8`), Canton 8 (`1V1Yqa9yCYQ`), Bao Li Xuan (`6zxepoFgqJk`), 8 ½ Otto e Mezzo Bombana (`LtmHnG6sU3Q`), Ren He Guan (`szt1Lu7IeHs`), King's Joy (`mT6hdUcRRIs`), Xin Rong Ji (`6SvqIT2SW7M`), BingSheng Mansion (`P7PDzqeJhQY`), Yu Zhi Lan (`N0sUApoNLlg`), Silver Pot (`HghLw5mcsNU`), Mi Xun Teahouse (`cjUKLVJud1I`), Shanghai Museum (`DDFm2tWnaBM`), Yu Garden (`ZECRsQ6umRw`), The Bund (`ZKTpt6JDLzU`), Nanjing Road (`BxRhDjhXi7I`), Former French Concession (`KmZ7GnWbG8s`), Shanghai Tower (`a44qhff-eX8`), Oriental Pearl Tower (`hm_VpGy8tzc`), Power Station of Art (`hr0IhUbi8xY`), Huangpu River Cruise (`pTFCawVsBt4`), Suzhou Humble Administrator's Garden (`WkrHOCR3eTE`), Forbidden City (`6VIfGt8JVw0`), Temple of Heaven (`twuqkZWmwGs`), Summer Palace (`5HC1FUTVM_k`), Mutianyu Great Wall (`RBL6ZBA2J34`), Canton Tower & Shamian Island (`geodDGr-jUg`), Chen Clan Ancestral Hall (`8zt9um_tkBk`), Chengdu Panda Base (`ctSmsWF4-Vo`), plus Renaissance Shanghai Yu Garden Hotel (`pFF4hgEC9CQ`).
- **Verified Instagram profiles (`instagram.com/...`):** `@stefan_stiller_taian_table`, `@ottoemezzobombanashanghai`, `@bulgarihotels`, `@theshanghaimuseum`, `@shanghaitower_official`, `@mutianyu_greatwall_official`, `@hangzhou_china`.
- **Verified TikTok videos & curated topic hubs (`tiktok.com/...`):** `@xataka/video/7652472559098727702` & `@cityvlg/video/7376511503031192848` (Shanghai Tower), `@megsandalex/video/7687658288120450307` & `discover/wall-of-china` (Mutianyu Great Wall), `@demas/video/7418946011114016007` (Bund Finance Centre / Da Vittorio building), `discover/taian-table-shanghai-prices`, `discover/chengdu-teahouse`, `discover/yu-garden-shanghai-how-to-go`, `discover/unusual-buildings-shanghai`, `discover/beijing-photo-spots`.
- All unverified creator/platform combinations retain explicit `(search)` labels and `#S01` review flags so users never confuse a search shortcut with a verified post.
