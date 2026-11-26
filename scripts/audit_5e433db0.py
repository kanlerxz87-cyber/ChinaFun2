"""Session 5e433db0 primary-source content-integrity audit (2026-11-26).

Run after T10 integration:
    python3 scripts/audit_5e433db0.py
Or inspect pre-integration baseline gaps:
    python3 scripts/audit_5e433db0.py --report-only
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
    parser.add_argument("--report-only", action="store_true", help="Print findings without failing on pre-T10 baseline")
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
    check("Marquis" in hotels["marriott-city-centre"]["name"], "marriott-city-centre must reflect official rebrand to Shanghai Marriott Marquis City Centre")
    check("shanghai.sukhothai.com" in hotels["the-sukhothai-shanghai"]["official_url"], "the-sukhothai-shanghai must use live shanghai.sukhothai.com portal")
    check("okura.com" in hotels["okura-garden-hotel-shanghai"]["official_url"], "okura-garden-hotel-shanghai must use live okura.com portal")

    verified_beds = sum(1 for h in hotels.values() if h["bed"].strip())
    verified_baths = sum(1 for h in hotels.values() if h["bath"].strip())
    check(verified_beds >= 13, f"Expected >=13 hotels with verified official bed evidence, found {verified_beds}")
    check(verified_baths >= 11, f"Expected >=11 hotels with verified official private-bath evidence, found {verified_baths}")

    restaurants = {r["id"]: r for r in load_json("michelin")["restaurants"]}
    check(len(restaurants) >= 26, f"Expected >=26 Michelin listings including Guangzhou & Chengdu Bib Gourmand, found {len(restaurants)}")
    for rid in ("taian-table", "tang-court", "bao-li-xuan", "da-vittorio", "trb-hutong", "chengdu-mi-xun-teahouse"):
        check(rid in restaurants and bool(restaurants[rid]["coupleTotal"].strip()), f"Missing verified official couple menu total on {rid}")
    for rid in ("guangzhou-yu-yuen", "chengdu-gan-ji-fei-chang-fen"):
        check(rid in restaurants, f"Missing Bib Gourmand benchmark {rid}")

    direct_rest_yt = sum(
        1 for r in restaurants.values()
        if any("youtube.com/watch" in u for u in r.get("socials", {}).values())
    )
    check(direct_rest_yt >= 11, f"Expected >=11 restaurants with direct YouTube watch URLs, found {direct_rest_yt}")

    activities = {a["id"]: a for a in load_json("activities")["activities"]}
    check("shanghai-museum-east" in activities, "Expected shanghai-museum-east entry alongside People's Square campus")
    for aid in (
        "panda-base",
        "wuhou",
        "mutianyu",
        "canton-tower",
        "chen-clan",
        "huangpu-cruise",
        "suzhou-daytrip",
        "hangzhou-daytrip",
    ):
        check(aid in activities and bool(activities[aid]["cost"].strip()), f"Expected verified 2-adult cost on activity {aid}")
    check("Tue" in activities["chen-clan"]["schedule"] or "Tuesday" in activities["chen-clan"]["exception"], "Chen Clan Ancestral Hall must note Tuesday closure")

    direct_act_yt = sum(
        1 for a in activities.values()
        if any("youtube.com/watch" in u for u in a.get("socials", {}).values())
    )
    check(direct_act_yt >= 15, f"Expected >=15 activities with direct YouTube watch URLs, found {direct_act_yt}")

    # HTTPS + no localhost check across all social & official URLs
    for group_name, items in (("hotels", hotels.values()), ("michelin", restaurants.values()), ("activities", activities.values())):
        for item in items:
            urls = [v for k, v in item.items() if isinstance(v, str) and v.startswith("http")]
            urls.extend(item.get("socials", {}).values())
            for u in urls:
                parts = urlsplit(u)
                check(parts.scheme == "https", f"{group_name}/{item['id']}: non-https URL {u}")
                check(parts.hostname not in {"localhost", "127.0.0.1"}, f"{group_name}/{item['id']}: localhost URL {u}")

    if args.report_only:
        print(f"REPORT ({len(errors)} pre-integration items pending):")
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
        f"(6 official couple totals, {direct_rest_yt} direct YouTube reviews), "
        f"{len(activities)} activities ({direct_act_yt} direct YouTube guides)."
    )


if __name__ == "__main__":
    main()
