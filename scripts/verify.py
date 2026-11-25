"""Line-by-line verification checks for ChinaFun2 data (no network, no inference).
- JSON validity, required fields, source-link presence, flag consistency.
Run: python3 scripts/verify.py
"""
import json, pathlib, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
FAIL=[]
def check(cond, msg):
    print(("PASS " if cond else "FAIL ")+msg)
    if not cond: FAIL.append(msg)

for name in ["meta","hotels","restaurants","activities","social"]:
    p = ROOT/"data"/f"{name}.json"
    try:
        json.loads(p.read_text())
        check(True, f"{p.relative_to(ROOT)} is valid JSON")
    except Exception as e:
        check(False, f"{p.relative_to(ROOT)} invalid: {e}")

hotels = json.loads((ROOT/"data/hotels.json").read_text())["hotels"]
rests = json.loads((ROOT/"data/restaurants.json").read_text())["restaurants"]
acts = json.loads((ROOT/"data/activities.json").read_text())["activities"]

check(len(hotels)==7, f"hotels == 7 (got {len(hotels)})")
for h in hotels:
    check(bool(h.get("source_url")), f"hotel {h['id']} has source_url")
    check(h["seven_night_indicative_usd"] == round(h["indicative_nightly_usd"]*7), f"hotel {h['id']} 7-night == nightly*7")
    check("queen" in (h["bed"]+" "+h["room_type"]).lower() or "king" in (h["bed"]+" "+h["room_type"]).lower(), f"hotel {h['id']} bed is queen+")
    check("bathroom" in h["private_bathroom"].lower(), f"hotel {h['id']} bathroom stated")

check(len(rests)==20, f"restaurants == 20 (got {len(rests)})")
for r in rests:
    check(bool(r.get("michelin_url")), f"restaurant {r['id']} has michelin_url")
    check(bool(r.get("social")), f"restaurant {r['id']} has social links")
    if r["stars"] in (0,1,2,3):
        check(bool(r.get("hours")) or "Unverified" in r.get("verification",""), f"restaurant {r['id']} has hours or is flagged")
closed = [r for r in rests if r["stars"]==-1]
check(len(closed)==1 and closed[0]["id"]=="ultraviolet-closed", "exactly one closed entry (Ultraviolet)")
check(sum(1 for r in rests if r["stars"]==3)==1, "exactly one 3-star (Taian Table)")

check(len(acts)==8, f"activities == 8 (got {len(acts)})")
for a in acts:
    check(bool(a.get("official_url")), f"activity {a['id']} has official_url")
    check(bool(a.get("social")), f"activity {a['id']} has social links")

# docs mirror check
for name in ["meta","hotels","restaurants","activities","social"]:
    a=(ROOT/"data"/f"{name}.json").read_bytes(); b=(ROOT/"docs"/"data"/f"{name}.json").read_bytes()
    check(a==b, f"docs/data/{name}.json mirrors data/{name}.json")

for page in ["index","hotels","restaurants","activities","dates","summary","suggestions","questions","flagged"]:
    check((ROOT/"docs"/f"{page}.html").exists(), f"docs/{page}.html exists")

print(f"\n{'ALL CHECKS PASSED' if not FAIL else str(len(FAIL))+' FAILURES'}")
sys.exit(1 if FAIL else 0)
