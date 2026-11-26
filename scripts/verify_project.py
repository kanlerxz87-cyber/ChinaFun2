"""No dependencies. Structural/source-policy checks, not external fact verification."""
import argparse, json, subprocess
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote, urljoin
from urllib.request import urlopen
from datetime import date

P = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--base-url')
args = parser.parse_args()
errors = []

def check(ok, msg):
    if not ok:
        errors.append(msg)

class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.refs = []
        self.rows = []
        self.row = None
        self.body = False
        self.feed(text)

    def handle_starttag(self, t, attrs):
        a = dict(attrs)
        if 'id' in a:
            check(a['id'] not in self.ids, 'duplicate id ' + a['id'])
            self.ids.add(a['id'])
        for attr in ['href', 'src']:
            if a.get(attr):
                self.refs.append(a[attr])
        if t == 'tbody':
            self.body = True
        if t == 'tr' and self.body:
            self.row = []
        if self.row is not None and t == 'a':
            self.row.append(a.get('href', ''))

    def handle_endtag(self, t):
        if t == 'tr' and self.row is not None:
            self.rows.append(self.row)
            self.row = None
        if t == 'tbody':
            self.body = False

OFFICIAL = {
    'guide.michelin.com', 'michelin.com',
    'marriott.com', 'ritzcarlton.com', 'hyatt.com', 'ihg.com', 'rosewoodhotels.com',
    'hilton.com', 'shangri-la.com', 'okura-nikko.com', 'sukhothai.com', 'shanghai.sukhothai.com',
    'all.accor.com', 'peninsula.com', 'langhamhotels.com', 'bulgarihotels.com',
    'mandarinoriental.com', 'fourseasons.com', 'thehousecollective.com',
    'grandcentralhotelshanghai.com', 'gardenhotelshanghai.com', 'upperhouse.com',
    'bookings.taian-table.com', 'sh.taian-table.cn', 'ottoemezzobombana.com', 'davittorio.com',
    'jinxuanchineserestaurantshanghai.com', 'vivantshanghai.com', 'fabula.restaurant',
    'kingsjoy.com', 'trbhutong.com', 'bingsheng.com', 'xinrongji.com',
    'capellahotels.com', 'restaurantlinglong.com', 'stories.hilton.com',
    'shanghaimuseum.net', 'shanghaimuseum.cn', 'reservation.shanghaimuseum.net', 'yugarden.com.cn', 'english.shanghai.gov.cn',
    'shanghaitower.com', 'en.shanghaitower.com', 'orientalpearltower.com', 'powerstationofart.com',
    'xintiandi.com', 'shanghaidisneyresort.com', 'english.beijing.gov.cn', 'intl.dpm.org.cn', 'dpm.org.cn',
    'tiantanpark.com', 'summerpalace.net.cn', 'mutianyugreatwall.com',
    'en.mutianyugreatwall.com', 'pcticket.chnmuseum.cn',
    'gz.gov.cn', 'gzcjc.com.cn', 'lyylj.gz.gov.cn', 'cantontower.com', 'mallpc.cantontower.com', 'chimelong.com',
    'panda.org.cn', 'm.panda.org.cn', 'wuhouci.net.cn', 'en.wuhouci.net.cn', 'jinshasitemuseum.com',
    'cddfct.com', 'gochengdu.cn', 'suzhou.gov.cn', 'hangzhou.gov.cn',
    'english.www.gov.cn', 'travel.state.gov', 'us.china-embassy.gov.cn', 'cdc.gov',
}
BANNED_LINK_HOSTS = {'rachelgouk.com', 'lameloise.com.cn', 'uvbypp.cc', 'nswsw.zhanlingxc.top', 'traveldeals.com'}
SOCIAL_HOSTS = {'youtube.com', 'youtu.be', 'tiktok.com', 'instagram.com'}

def official(u):
    h = (urlsplit(u).hostname or '').lower().removeprefix('www.')
    return u.startswith('https://') and any(h == domain or h.endswith('.' + domain) for domain in OFFICIAL)

def social_ok(u):
    h = (urlsplit(u).hostname or '').removeprefix('www.')
    return h in SOCIAL_HOSTS and u.startswith('https://')

files = list(P.glob('*.html'))
docs = {x: Document(x.read_text()) for x in files}

for f, d in docs.items():
    text = f.read_text()
    check('name="viewport"' in text, f'{f.name}: missing mobile viewport')
    check('id="main"' in text, f'{f.name}: missing main landmark')
    for ref in d.refs:
        u = urlsplit(ref)
        if u.hostname and u.hostname.lower().removeprefix('www.') in BANNED_LINK_HOSTS:
            errors.append(f'{f.name}: quarantined/disallowed link {ref}')
        if u.scheme or u.netloc:
            continue
        target = (f.parent / unquote(u.path)).resolve() if u.path else f
        check(target.is_relative_to(P) and target.exists(), f'{f.name}: missing local resource {ref}')
        if u.fragment and target in docs:
            check(unquote(u.fragment) in docs[target].ids, f'{f.name}: missing anchor {ref}')
    for row in d.rows:
        check(any(official(u) for u in row), f'{f.name}: table row has no official source: {row[:2]}')
    for stale in [
        'Feb 2026 (now)', '~28', 'not yet released', 'Verify ↗',
        'eastchinatrip.com', 'its.holiday', 'chinafortravelers.com',
        'rachelgouk.com', '1 MICHELIN Stars', 'nswsw.zhanlingxc.top',
    ]:
        check(stale not in text, f'{f.name}: stale/disallowed assertion {stale}')

def load(n):
    return json.loads((P / 'data' / f'{n}.json').read_text())

F = load('flags')['flags']
flagids = {x['id'] for x in F}
for x in F:
    check(x['id'] in docs[P / 'flagged.html'].ids, 'unpublished flag ' + x['id'])
    check(official(x['source']), 'flag non-official source ' + x['id'])

for name, key in [('hotels', 'hotels'), ('michelin', 'restaurants'), ('activities', 'activities')]:
    rows = load(name)[key]
    ids = [x['id'] for x in rows]
    check(len(ids) == len(set(ids)), name + ': duplicate records')
    for x in rows:
        check(official(x['official_url']), name + ': non-official source ' + x['id'])
        if name == 'michelin' and x.get('venue'):
            check(official(x['venue']), f'michelin: non-official venue {x["id"]}: {x["venue"]}')
        if name == 'activities' and x.get('officialLink'):
            check(official(x['officialLink']), f'activities: non-official officialLink {x["id"]}: {x["officialLink"]}')
        check(bool(x['flags']), name + ': missing flags ' + x['id'])
        for flag in x['flags']:
            check(flag in flagids, 'unknown flag ' + flag)
        if name != 'hotels':
            check(len(x.get('socials', {})) >= 3, name + ': missing discovery platforms ' + x['id'])
            for s_url in x.get('socials', {}).values():
                check(social_ok(s_url), f'{name}: invalid social URL {x["id"]}: {s_url}')
            for rev in x.get('reviews', []):
                check(social_ok(rev.get('url', '')), f'{name}: invalid review URL {x["id"]}: {rev}')
        if name == 'hotels':
            for k in ['total', 'transit', 'activityTransit', 'rank']:
                check(x[k] == '', x['id'] + ': unsupported official metric ' + k)
    for city in ['Shanghai', 'Beijing', 'Guangzhou', 'Chengdu']:
        check(any(x['city'] == city for x in rows), name + ': missing city ' + city)

costs = load('costs')
for x in costs['stay_options']:
    start = date.fromisoformat(x['checkin'])
    end = date.fromisoformat(x['checkout'])
    check((end - start).days == 7, 'stay not 7 nights')
    check(start >= date(2027, 2, 15) and end <= date(2027, 3, 23), 'stay outside window')
    check(official(x['source']), 'stay missing official source')

for x in costs.get('extended_windows', []):
    start = date.fromisoformat(x['checkin'])
    end = date.fromisoformat(x['checkout'])
    check((end - start).days == x['nights'], 'extended stay night mismatch')
    check(start >= date(2027, 2, 15) and end <= date(2027, 3, 23), 'extended stay outside window')
    check(official(x['source']), 'extended stay missing official source')

for x in costs['booking_windows']:
    for end, k in [(date(2027, 2, 15), 'target_start'), (date(2027, 2, 18), 'target_end')]:
        check((end - date.fromisoformat(x[k])).days == x['lead_days'], 'wrong lead-time date')

for f in ['data.js', 'app.js', 'assets/js/app.js']:
    r = subprocess.run(['node', '--check', str(P / f)], capture_output=True, text=True)
    check(r.returncode == 0, r.stderr)

js = (P / 'data.js').read_text()
D = json.loads(js[js.index('=') + 1:].strip().removesuffix(';'))
for n, k in [('hotels', 'hotels'), ('michelin', 'restaurants'), ('activities', 'activities'), ('flags', 'flags')]:
    check(D[k] == load(n)[k], 'dashboard dataset drift ' + n)

resources = [
    x for x in P.rglob('*')
    if x.is_file() and x.suffix in {'.html', '.css', '.js', '.json'}
    and not any(v.startswith('.') or v in {'node_modules'} for v in x.relative_to(P).parts)
]
if args.base_url:
    for f in resources:
        try:
            with urlopen(urljoin(args.base_url, f.relative_to(P).as_posix()), timeout=15) as response:
                check(response.status == 200, 'HTTP error ' + str(f))
        except Exception as ex:
            errors.append(f'HTTP {f.relative_to(P)}: {ex}')

if errors:
    print('\n'.join('FAIL: ' + v for v in errors))
    raise SystemExit(1)

print(f'PASS: {len(files)} HTML pages, all internal files/anchors, official link on every table row, canonical data parity, four-city coverage, flag coverage, social review URL validation, dates and JS syntax.')
if args.base_url:
    print(f'PASS: HTTP 200 for {len(resources)} HTML/JSON/CSS/JS resources.')
print('External link reachability, source-content accuracy, live prices and transit eligibility are NOT proven by this structural test.')
