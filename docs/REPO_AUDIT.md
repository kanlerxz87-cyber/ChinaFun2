# Repository Audit & Official Policy Verification (`T1`)

**Session ID:** `bb2085d8`  
**Branch:** `arena/bb2085d8-chinafun2` (branched from `main` @ `3ef9a8850e976ada1bb37aa263de987c005c0b06`)  
**Audit Date:** 2026-11-25 (UTC)

---

## 1. Line-by-Line Initial Repository Review

| File / Config Inspected | Initial State (`3ef9a88`) | Verification Status | Notes / Findings |
| :--- | :--- | :--- | :--- |
| `README.md` (line 1) | `# ChinaFun2` (11 bytes, 1 line) | Verified | Placeholder title only; no trip requirements, data tables, or documentation present. |
| `COORDINATION.md` | Missing at `3ef9a88` | Verified & Created | Initialized in commit `3be20e7` per multi-session coordination rules. |
| GitHub Pages API (`/repos/kanlerxz87-cyber/ChinaFun2/pages`) | `status: "built"`, `build_type: "legacy"`, `source: main /` | Verified | Configured to serve root `/` at `https://kanlerxz87-cyber.github.io/ChinaFun2/`. Placing static `.html`, `assets/`, `data/`, and `.nojekyll` in repo root ensures zero-build-step compatibility. |

---

## 2. Official 2027 Calendar, Visa & Michelin Macro Verification

Every foundational constraint for the **February 15, 2027 – March 23, 2027** travel window was verified against official primary sources:

| Topic | Official Finding | Primary Official Source Link |
| :--- | :--- | :--- |
| **2027 China Public Holidays (Spring Festival)** | Official Spring Festival holiday runs **Feb 5 – Feb 13, 2027** (9 days; Chinese New Year's Day is **Sat, Feb 6, 2027**). Make-up working days: **Sun, Jan 31, 2027** and **Sun, Feb 14, 2027**. Zero public holidays occur inside **Feb 15 – Mar 23, 2027** (Qingming begins **Apr 3, 2027**). | [State Council of the PRC — Public Holidays for 2027](https://english.www.gov.cn/policies/latestreleases/202611/06/content_WS6aed74dcc6d00ca5f9a0e22e.html) · [Beijing Municipal Govt Notice](https://english.beijing.gov.cn/latest/news/202611/t20261109_4937887.html) |
| **Lantern Festival 2027** | **Sat, Feb 20, 2027** (15th day of the 1st lunar month). Impacts crowd density and special evening ticketing at Yu Garden / temple fairs during the **Feb 15 – Feb 22, 2027** window. | [Hong Kong Observatory — Gregorian-Lunar Calendar Conversion Table 2027](https://www.hko.gov.hk/en/gts/time/calendar/pdf/files/2027e.pdf) |
| **240-Hour (10-Day) Visa-Free Transit Policy** | Citizens of **57 eligible countries** (including USA, Canada, UK, EU states, Australia) transiting to a **third country/region** with confirmed onward tickets may stay up to **240 hours (10 days)** across designated ports/regions including Shanghai and Beijing. Does **not** cover a 14-day stay or simple round-trip flights (e.g., US → Shanghai → US). | [National Immigration Administration (NIA) — 240-Hour Visa-Free Transit](https://en.nia.gov.cn/n147413/c178106/content.html) · [NIA Announcement No. 4 of 2026](https://en.nia.gov.cn/n147418/n147468/c217849/content.html) |
| **30-Day Unilateral Visa-Free Policy** | Extended for 45 countries plus UK & Canada only until **24:00 on December 31, 2026** (Beijing Time) as of Nov 25, 2026; **US ordinary passports are not included** in the unilateral 30-day list and require a Chinese Tourist (`L`) visa unless qualifying for 240-hour transit to a third country/region. | [PRC Embassy Notice — Unilateral Visa-Free Extension to Dec 31, 2026](https://bh.china-embassy.gov.cn/eng/lsfw/202511/t20251104_11746880.htm) · [PRC Embassy Notice — Canada & UK Visa-Free Policy](https://ee.china-embassy.gov.cn/eng/tzygg/202602/t20260223_11862095.htm) |
| **Mainland China MICHELIN Guide City Density** | **Shanghai ranks #1** in Mainland China with **156 MICHELIN Guide restaurants** in the 2026 selection (**51 Starred**: 1 Three-Star, 12 Two-Star, 38 One-Star; **35 Bib Gourmand**; **70 MICHELIN Selected**), ahead of **Beijing** (**99** total; **32 Starred**), **Chengdu 2027** (**84** total; **15 Starred**), and **Guangzhou 2026** (**20 Starred** within the 176-venue Guangzhou & Shenzhen edition). | [MICHELIN Guide Shanghai, Jiangsu & Zhejiang 2026](https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-guide-shanghai-jiangsu-zhejiang) · [MICHELIN Guide Beijing 2026](https://guide.michelin.com/en/article/news-and-views/michelin-guide-beijing-2026) · [MICHELIN Guide Chengdu 2027](https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-stars-chengdu-2027) · [MICHELIN Guide Guangzhou & Shenzhen 2026](https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-stars-guangzhou-shenzhen-2026) |

---

## 3. Irregularities Flagged for Manual Review

| Flag ID | Irregularity / Conflict | Details & Analytical Handling | Status |
| :--- | :--- | :--- | :--- |
| **IRREG-01** | **Trip Duration vs. Preferred Dates Conflict** | Requirements specify *"anywhere from 1-2 weeks long"* (7–14 nights) and *"total price for a 7 night stay"*, yet state *"Preferred vacation time is February 15 2027 to February 18 2027"* (only **3 nights / 4 days**). We model a 7-night preferred-anchor window (**Feb 15 – Feb 22, 2027**) alongside cheaper 7-night March 2027 windows (**Mar 2 – Mar 9, 2027** and **Mar 9 – Mar 16, 2027**), and flag exact trip length for traveler confirmation. | `needs review` |
| **IRREG-02** | **Unspecified Destination City in China** | Prompt states *"Trip Planning China"* without naming a city. Based on the requirement to maximize Michelin restaurants within ≤60 min by subway/bus, **Shanghai** (156 Michelin venues, compact Metro core) is selected as the primary hub, with **Beijing** (99 Michelin venues) evaluated as the #2 benchmark cluster. | `needs review` |
| **IRREG-03** | **Unspecified Passports & Origin Airport** | Traveler nationalities and departure city are not stated in the requirements. Visa eligibility (L-Visa vs. 240-hour transit vs. unilateral visa-free expiring Dec 31, 2026) depends directly on passport country and routing. | `needs review` |
| **IRREG-04** | **Post-Spring Festival / Lantern Festival Schedule Exceptions** | Feb 15, 2027 immediately follows the 9-day Spring Festival break (Feb 5–13) and Feb 14 make-up workday, and precedes Lantern Festival (Sat, Feb 20, 2027). Restaurants that have not yet published 2027 Lunar New Year operating exceptions have holiday exceptions marked `Unverified` rather than inferred. | `needs review` |
| **IRREG-05** | **Advance 2027 Booking Horizon & Dynamic OTA/Direct Rates** | Hotel and restaurant rates in China quote primarily in CNY (`¥`), with some hotel channels opening 2027 promotional/member tiers progressively 90–180 days ahead. Exact dated rates verified as of 2026-11-25 are recorded with exact check-in/check-out dates and official source links; any unconfirmed field is left blank and flagged `Unverified`. | `needs review` |
