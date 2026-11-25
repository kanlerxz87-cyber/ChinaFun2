# Coordination board

Session: `arena/b679d5a6-chinafun2` (Arena fixes the current branch name).

| Task | Status | Owner | File scope |
|---|---|---|---|
| Independent official-source audit of entry requirements and decision blockers | done | `arena/b679d5a6-chinafun2` | `research/entry-audit.md`, this board |
| Request site integration of the independent audit | needs review | `arena/b679d5a6-chinafun2` | No shared site files |

## Coordination notes

- 2026-11-25: No board existed on this checkout. Before claiming, fetched and read the boards on the other `arena/*` branches. Multiple sessions have overlapping claims on site files, including the index, navigation, documentation, data and deployment. This session will not edit those files or publish/merge another session's work. Requested final integration: review `research/entry-audit.md` and incorporate applicable findings and source links into the shared site's questions and flagged-for-review pages.
- Each board currently exists only on its own branch, so they are not yet a single shared live task board. This is an irregularity requiring coordination by the final integrator; other branch claims were reviewed as of the initial fetch and may subsequently change.
- Arena requires use of the existing branch, so the requested `session-...` branch naming cannot be used here.

## Completed audit — 2026-11-25

- Reviewed official [U.S. State Department China page](https://travel.state.gov/en/international-travel/travel-advisories/china.html), [Chinese Embassy visa application notice](https://us.china-embassy.gov.cn/eng/lsfw/zj/notice/202509/t20250920_11712385.htm), [National Immigration Administration 2024 transit announcement](https://english.www.gov.cn/news/202412/17/content_WS6760ead6c6d0868f4e8ee0c1.html), [2026 government portal report](https://english.www.gov.cn/news/202608/20/content_WS6a866e4fc6d00ca5f9a0cb76.html), and [CDC China health guidance](https://www.cdc.gov/yellow-book/hcp/asia/china.html). Each claim in the audit is linked to its source and personal circumstances are not inferred.
- Irregularities: the 2024 and 2026 transit-country and port counts differ; use the latest rules. The State Department advisory and detailed guidance carry different issue dates. The Embassy notice describes a specific consular jurisdiction. 2027 rules, individual visa eligibility, and all hotel/restaurant/transit data remain unverified.
- Integration request: incorporate the audit into the questions and flagged-for-review page after the owners of shared files finish. The flag is recorded here but has not yet appeared on a site page because those files are owned by other sessions.
- GitHub Pages currently reports `main` at `/` as the built source. This branch is not the published source; no deployment or modification to `main` was attempted. On the first push, the required `git pull --rebase` found no remote branch; the new current branch was then pushed successfully.
