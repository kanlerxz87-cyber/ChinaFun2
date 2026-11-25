#!/usr/bin/env python3
"""Small offline integrity checks for the source-linked dashboard data."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "research.json"
DATA = json.loads(DATA_PATH.read_text(encoding="utf-8"))
SOURCES = DATA.get("sources", {})
errors: list[str] = []

if not SOURCES:
    errors.append("No source records found")

for source_id, source in SOURCES.items():
    for field in ("title", "url", "type", "checkedOn", "supports", "limitation"):
        if not source.get(field):
            errors.append(f"Source {source_id!r} is missing {field!r}")
    if not str(source.get("url", "")).startswith("https://"):
        errors.append(f"Source {source_id!r} does not use HTTPS")
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(source.get("checkedOn", ""))):
        errors.append(f"Source {source_id!r} has an invalid checkedOn date")

referenced: set[str] = set()

def check_references(value: object, path: str = "data") -> None:
    if isinstance(value, dict):
        for key, child in value.items():
            child_path = f"{path}.{key}"
            if key in {"sources", "social", "media"} or key.endswith("Sources"):
                if isinstance(child, list):
                    for item in child:
                        if isinstance(item, str):
                            referenced.add(item)
                            if item not in SOURCES:
                                errors.append(f"Unknown source ID {item!r} at {child_path}")
            check_references(child, child_path)
    elif isinstance(value, list):
        for index, child in enumerate(value):
            check_references(child, f"{path}[{index}]")

check_references({key: value for key, value in DATA.items() if key != "sources"})

for collection_name in ("hotels", "restaurants", "activities"):
    for index, item in enumerate(DATA.get(collection_name, [])):
        if not item.get("sources"):
            errors.append(f"{collection_name}[{index}] has no source links")

for hotel in DATA.get("hotels", []):
    quote = hotel.get("quote", {})
    if quote.get("status") == "unverified" and any(
        quote.get(field) is not None
        for field in ("lowestNightlyAverage", "lowestPreTaxSevenNightMath", "allInPayableTotal")
    ):
        errors.append(f"Unverified hotel quote for {hotel.get('name')} contains a numeric price")

for restaurant in DATA.get("restaurants", []):
    cost = restaurant.get("coupleCost", {})
    if cost.get("value") is None and cost.get("status") != "unverified":
        errors.append(f"Blank restaurant cost for {restaurant.get('name')} is not marked unverified")

for activity in DATA.get("activities", []):
    if activity.get("admissionCost") is None and activity.get("costStatus") != "unverified":
        errors.append(f"Blank activity price for {activity.get('name')} is not marked unverified")

if errors:
    print("Research-data validation failed:")
    for error in errors:
        print(f"- {error}")
    raise SystemExit(1)

print(
    f"Research data OK: {len(SOURCES)} sources, "
    f"{len(DATA.get('hotels', []))} hotels, "
    f"{len(DATA.get('restaurants', []))} restaurants, "
    f"{len(DATA.get('activities', []))} activities, "
    f"{len(referenced)} referenced source IDs."
)
