# Session cb12e6ac — 2026-11-27 live spot-check & date-freshness audit

**Scope:** `T09-cb12e6ac` on branch `arena/cb12e6ac-chinafun2` (from `origin/main` `e910cb5`, after PR #17).
**Method:** Live `fetch_page` calls to official primary sources on 2026-11-27 (UTC), compared line by line with the records in `data/*.json`. Calendar values computed with Python `date` arithmetic.
**Limit (stated plainly):** This is a *spot-check* of 10 official sources, not a full line-by-line re-verification of all 117 official sources or the ~300 social-search links in the register. Everything not listed below keeps its earlier verification date and is still subject to re-check.

## 1. Calendar facts (computed, not sourced — see flag C01)

| Item | Value (2026-11-27 as "today") | Check |
|---|---|---|
| Days to Mon Feb 15, 2027 | **80** | `date(2027,2,15) - date(2026,11,27)` |
| Days to Thu Feb 18, 2027 | **83** | same method |
| Days to Tue Mar 23, 2027 | **116** | same method |
| Weekday of Feb 15, 2027 | **Monday** | Taian Table (Tue–Sat) is closed that day |
| Weekday of Mar 23, 2027 | Tuesday | — |
| Taian Table 90-day booking window opens for Feb 15 / Feb 18 | Nov 17 / Nov 20, 2026 | Already open today |

## 2. Live official-source spot-checks (2026-11-27)

| # | Official source (fetched) | What it says | Repo record compared | Result | Action taken |
|---|---|---|---|---|---|
| 1 | English gov.cn — *Public holidays for 2027* (updated Nov 6, 2026) — <https://english.www.gov.cn/policies/latestreleases/202611/06/content_WS6aed74dcc6d00ca5f9a0e22e.html> | Spring Festival **Feb 5 — Feb 13** (nine days). Notice does **not** list the Feb 14 makeup workday. | Brief: Spring Festival Feb 5–13; Feb 14 makeup workday | ✅ Holiday dates match. The Feb 14 makeup workday is not on this page, but it **is** on the official Beijing reprint in row 1a below | Flag E03 updated to confirmed |
| 1a | English Beijing municipal government reprint of the State Council notice (2026-11-09) — <https://english.beijing.gov.cn/latest/news/202611/t20261109_4937887.html> | Spring Festival nine days Feb 5 (Fri)–13 (Sat); **make-up workdays Sun Jan 31 and Sun Feb 14, 2027**; National Day make-up days Sep 26 and Oct 9 | ✅ Confirms E03 | Flag E03 updated (source now this page); Chinese State Council original not opened |
| 2 | MICHELIN Guide — regional launch article (9 Apr 2026 ceremony) — <https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-guide-shanghai-jiangsu-zhejiang> | 409 restaurants; **156 Shanghai**; **77 starred** (1×3★, 14×2★, 62×1★); **164 Bib Gourmand**; **168 Selected** | Michelin/clusters records | ✅ Match | None |
| 3 | Taian Table official FAQ — <https://bookings.taian-table.com/faq> | **Dinner Tue–Sat only**; first booking 6:00 pm, last 8:00 pm; bookings up to **90 days** ahead; tasting menus **¥2,588 (10 courses) / ¥2,888 (12)**; deposit **¥2,000 per person** | Taian Table hours/exceptions/couple total ¥5,176 / ¥5,776 | ✅ Prices, deposit and 90-day window match. ➕ Hours text sharpened to first/last booking times | **Monday Feb 15, 2027 closure now stated on the record** (Feb 16–18 open) |
| 4 | MICHELIN Guide — Taian Table page — <https://guide.michelin.com/en/shanghai-municipality/shanghai/restaurant/taian-table> | Three MICHELIN Star icons; "This establishment manages its own bookings"; official site sh.taian-table.cn | Taian status "3 MICHELIN Stars · 2026" | ✅ Match (opening hours not on the fetched chunk; left as FAQ-sourced) | None |
| 5 | Bvlgari Hotel Shanghai — Deluxe Room — <https://www.bulgarihotels.com/en-US/shanghai/accommodation/rooms/deluxe-room> | 52 sqm; **king beds**; "his and hers wash basins", "walk-in rain shower", Toto heated toilets, walk-in closet. **The word "marble" does not appear.** | Record said "marble bathroom" | ❌ **Mismatch corrected** — "marble" removed from hotel record, brief Q2 and flag H02. Bath field remains blank (no literal private-ensuite wording) | Corrected in `data/hotels.json`, `data/brief.json`, `data/flags.json` |
| 6 | Upper House Shanghai — Rooms — <https://www.upperhouse.com/en/shanghai/rooms/> | Studio 50 (50 m², **King, Twin**, deep soaking bathtub); Studio 60 (60 m², **King**, spa-like bathroom); Studio 70 (70 m², **King**, walk-in wardrobe); Landmark Studio (60 m², King) | Record said "1 King (Studio 50 / 60 / 70 · 50–70 m²)" | ❌ **Partial mismatch corrected** — Studio 50 can be King *or* Twin | Bed field and evidence updated in `data/hotels.json` |
| 7 | The Peninsula Shanghai — Deluxe Room — <https://www.peninsula.com/en/shanghai/luxury-hotel-room-suite-types/deluxe-room> | King / Twin; 2 adults maximum; 54–59 sq m; city view 4/F–12/F; "**Spacious marble bathroom with in-built TV and mood lighting**" | Record: 54–59 m², King or Twin, marble bathroom with built-in TV | ✅ Match (literal private-ensuite wording still not printed) | None |
| 8 | Shanghai Museum — People's Square — <https://www.shanghaimuseum.cn/mu/frontend/pg/en/service/visit-west> | Americas exhibition ("On Top of the World Tree") **9 Jul 2026 – 14 Nov 2027**; no other exhibitions at People's Square; **Tue–Sun 09:00–17:00 (last entry 15:00)**, closed Mondays except national holidays | Flag A03 and Activities record | ✅ Match. Note: the museum says "Tuesday to Sunday" and Mon closure, so **Mon Feb 15 is closed** | None (already reflected in the executive summary) |
| 9 | Yu Garden official visitor notice (Chinese) — <https://www.yugarden.com.cn/page/articleview/message.html> | Hours **9:00–16:30** (last entry 16:00); **closed every Monday** (national holidays excepted; Spring Festival hours follow announcements); adult ticket ¥40 peak (Apr 1–Jun 30, Sep 1–Nov 30) / **¥30 off-season (Dec 1–Mar 31)** | Activities record: Tue–Sun 09:00–16:30; ¥60 = 2 × ¥30 (Dec 1–Mar 31) | ✅ Match. Resolves the earlier 08:30 vs 09:00 hours conflict in favour of the official notice | None |
| 10 | US State Department — China travel advisory — <https://travel.state.gov/en/international-travel/travel-advisories/china.html> | **Level 2 — Exercise increased caution**, issued **Oct 19, 2026**; cites arbitrary enforcement of local laws, exit bans and wrongful-detention risk. The visa/transit sections were **not** re-checked | Flag E01 did not state the advisory level; flag E04 (said the page could not be fetched) | ➕ Added to E01; E04 note updated | `data/flags.json` E01 and E04 updated |

## 3. Date-freshness corrections (countdown copy)

Every "today" countdown was moved from **Nov 26 (81–84 days)** to **Nov 27, 2026 (80–83 days)** in: `README.md`, `index.html` (hand-written dashboard), `scripts/build_pages.py` (costs card), `data/brief.json`, `data/costs.json`, `data/flags.json` (B01), `data.js` (regenerated), and the Taian Table exceptions. Historical "verified on Nov 26" stamps on individual claims and `meta.reviewed` were **left unchanged**, because they record when each claim was actually checked. The audit script `scripts/audit_5e433db0.py` asserts those stamps.

## 4. Still open / not re-verified today (non-blocking, flagged)

- US L-visa fee/processing and 240-hour transit rules (flag E04) — the advisory page loads, but the visa sections were not checked.
- Lantern Festival date (Feb 20, 2027) — lunar derivation, flag C01.
- The other official-source links, all social-search links, all hotel rate/room claims not listed above, transit times, and Michelin star status for venues not listed above.
- Shanghai Museum East Tuesday-closure statement; Shanghai Tower and Oriental Pearl hours (already flagged A03).
- Chengdu Panda Base, Chen Clan, Mutianyu seasonal switches (already flagged).

## 5. Irregularities found this session

1. **Bvlgari "marble" claim not supported by the official page** — corrected (not an overclaim that survived to the site).
2. **Upper House Shanghai bed type overstated** (Studio 50 can be Twin) — corrected.
3. **Taian Table Monday trap** — the record already said "Closed Sun & Mon", but did not call out that the preferred arrival day, Feb 15, 2027, is a Monday. Now stated on the record and in the README.
4. **Stale "81–84 days" countdown** on the dashboard, README, costs card, generator, and data records — updated to 80–83 days (Nov 27).
5. **Lantern Festival date** used in a stay option is not in the official notice — flagged C01.

## 6. Merge with concurrent sessions (2026-11-27)

While this session worked, `origin/main` advanced with PR #18 (`24a77f0b`: flags E02–E04 and D01, flag count 19 → 23) and PR #20 (`6dd273f8`: read-only external verification log). The rebase conflicted in `COORDINATION.md`, `README.md`, `index.html`, `data/flags.json` and generated pages. Resolution: both sessions' sections and flags were kept; the countdown and C01 changes were re-applied on top; E03 and E04 were updated with the new official evidence; D01 was marked as countdown-resolved; generated pages were rebuilt from source. Final flag count: **24** (E02–E04 and D01 from the other session, plus C01 from this one).

