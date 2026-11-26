"""Session 5e433db0 primary-source content-integrity audit (2026-11-26).

Verifies primary-source invariants across the reconciled 4-city dataset
(preserving PRs #12, #13, #14 and Session 5e433db0 room/menu/ticket fixes).
"""
import argparse
import json
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


def load_json(name: str) -> dict:
    return json.loads((ROOT / "data" / f"{name}.json").read_text(encoding="utf-8"))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--report-only", action="store_true", help="Print findings without failing")
    args = parser.parse_args()

    errors: list[str] = []

    def check(cond: bool, msg: str) -> None:
        if not cond:
            errors.append(msg)

    audit_doc = ROOT / "research" / "session-5e433db0-audit.md"
    check(audit_doc.exists() and audit_doc.stat().st_size > 4000, "Missing or incomplete research/session-5e433db0-audit.md")

    for ds in ("brief", "hotels", "michelin", "activities", "costs", "flags"):
        meta = load_json(ds).get("meta", {})
        check(meta.get("reviewed") == "2026-11-26", f"data/{ds}.json meta.reviewed is {meta.get('reviewed')!r}, expected '2026-11-26'")

    hotels = {h["id"]: h for h in load_json("hotels")["hotels"]}
    check("Marquis" in hotels["marriott-city-centre"]["name"] or "Marquis" in hotels["marriott-city-centre"]["evidence"], "marriott-city-centre must reflect official rebrand to Shanghai Marriott Marquis City Centre")
    check("shanghai.sukhothai.com" in hotels["the-sukhothai-shanghai"]["official_url"], "the-sukhothai-shanghai must use live shanghai.sukhothai.com portal")
    check("okura.com" in hotels["okura-garden-hotel-shanghai"]["official_url"], "okura-garden-hotel-shanghai must use live okura.com portal")

    verified_beds = sum(1 for h in hotels.values() if h["bed"].strip())
    verified_baths = sum(1 for h in hotels.values() if h["bath"].strip())
    check(verified_beds >= 14, f"Expected >=14 hotels with verified official bed evidence, found {verified_beds}")
    check(verified_baths >= 7, f"Expected >=7 hotels with verified official room-page bath evidence, found {verified_baths}")

    restaurants = {r["id"]: r for r in load_json("michelin")["restaurants"]}
    check(len(restaurants) >= 27, f"Expected >=27 Michelin listings, found {len(restaurants)}")
    check("Selected" in restaurants["fabula"]["status"] and "Star" not in restaurants["fabula"]["status"].split("Selected")[0], "fabula must be MICHELIN Guide Selected (no star), not 1 MICHELIN Star")
    for rid in ("taian-table", "tang-court", "bao-li-xuan", "da-vittorio", "yi-long-court", "sir-ellys", "trb-hutong", "mi-xun"):
        check(rid in restaurants and bool(restaurants[rid]["coupleTotal"].strip()), f"Missing verified official couple menu total on {rid}")
    check("5,176" in restaurants["taian-table"]["coupleTotal"] and "5,776" in restaurants["taian-table"]["coupleTotal"], "taian-table must reflect current ¥2,588/¥2,888 (¥5,176/¥5,776) FAQ pricing")

    direct_rest_revs = sum(1 for r in restaurants.values() if r.get("reviews"))
    check(direct_rest_revs >= 14, f"Expected >=14 restaurants with verified direct social review/profile links, found {direct_rest_revs}")

    activities = {a["id"]: a for a in load_json("activities")["activities"]}
    check("shanghai-museum-east" in activities, "Expected shanghai-museum-east entry alongside People's Square campus")
    for aid in ("panda-base", "wuhou", "mutianyu", "canton-tower", "chen-clan"):
        check(aid in activities and bool(activities[aid]["cost"].strip()), f"Expected verified 2-adult cost on activity {aid}")
    check("TUESDAYS" in activities["chen-clan"]["hours"].upper() or "TUESDAY" in activities["chen-clan"]["exceptions"].upper(), "Chen Clan Ancestral Hall must note Tuesday closure")

    direct_act_revs = sum(1 for a in activities.values() if a.get("reviews"))
    check(direct_act_revs >= 22, f"Expected >=22 activities with verified direct social review/profile links, found {direct_act_revs}")

    for group_name, items in (("hotels", hotels.values()), ("michelin", restaurants.values()), ("activities", activities.values())):
        for item in items:
            urls = [v for k, v in item.items() if isinstance(v, str) and v.startswith("http")]
            urls.extend(item.get("socials", {}).values())
            urls.extend(rv["url"] for rv in item.get("reviews", []) if rv.get("url"))
            for u in urls:
                parts = urlsplit(u)
                check(parts.scheme == "https", f"{group_name}/{item['id']}: non-https URL {u}")
                check(parts.hostname not in {"localhost", "127.0.0.1"}, f"{group_name}/{item['id']}: localhost URL {u}")

    if args.report_only:
        print(f"REPORT ({len(errors)} items):")
        for err in errors:
            print(" -", err)
        return

    if errors:
        for err in errors:
            print("FAIL:", err)
        raise SystemExit(1)

    print(
        f"PASS: Session 5e433db0 audit invariants verified — {len(hotels)} hotels "
        f"({verified_beds} beds, {verified_baths} baths), {len(restaurants)} Michelin venues "
        f"(8 official couple totals, {direct_rest_revs} with direct social reviews), "
        f"{len(activities)} activities ({direct_act_revs} with direct social reviews)."
    )


if __name__ == "__main__":
    main()
