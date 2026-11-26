# Independent verification, 26 November 2026

This is a targeted audit, not a claim that all venue rows were reverified.

## Corrected: People's Square museum admission

- The [museum's official Chinese visitor notice](https://reservation.shanghaimuseum.net/) states that all People's Square visitors need to buy a ticket during the Americas exhibition, 9 July 2026–14 November 2027. Its [official English visitor page](https://www.shanghaimuseum.cn/mu/frontend/pg/en/service/visit-west) states no other exhibitions will be hosted there during this period, offers individual booking information, and lists regular day and separate evening session hours. It does not provide a two-adult price.
- Removed the misleading free-admission entry. A blank price means unverified, not free or unavailable; review flag A04 explains what remains. Availability and the amount payable by these particular visitors remain unconfirmed.
- The [museum's domain notice](https://www.shanghaimuseum.net/mu/frontend/pg/index?id=211658&code=20240001) says the official domain changed to `.cn` and `.net` will be discontinued 1 January 2027. The primary listing now points to the new official English visitor page.
- The separate retained `shanghai-planner` already leaves museum admission prices blank and uses `.cn`; it was not modified.

## Checks and limitations

The project's structural tests check internal root links and anchors, source-domain presence, flags and data parity; they cannot prove individual external links work or that each individual claim is supported by its cited page. The retained planner has a separate structural validator. Review flags continue to identify missing official exact-date hotel quotes, date-specific prices, public-transit catchment counts and direct creator reviews. No hotel ranking, cheapest booking time, or full one-hour itinerary can responsibly be asserted from the current evidence. Previously completed research has not been independently reverified line by line in this session. External domain access can be limited; no claim of a complete external broken-link check is made.
