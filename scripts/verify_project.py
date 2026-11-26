"""No dependencies. Structural/source-policy checks, not external fact verification."""
import argparse, json, re, subprocess
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote, urljoin
from urllib.request import urlopen
from datetime import date
P=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--base-url');args=parser.parse_args()
errors=[]
def check(ok,msg):
 if not ok:errors.append(msg)
class Document(HTMLParser):
 def __init__(self,text):
  super().__init__(convert_charrefs=True);self.ids=set();self.refs=[];self.rows=[];self.row=None;self.row_policy='official';self.table_policy='official';self.table_id='';self.row_table_id='';self.body=False;self.feed(text)
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if 'id' in a:
   check(a['id'] not in self.ids,'duplicate id '+a['id']);self.ids.add(a['id'])
  for attr in ['href','src']:
   if a.get(attr):self.refs.append(a[attr])
  if t=='table':
   self.table_policy=a.get('data-source-policy','official');self.table_id=a.get('id','')
   check(self.table_policy in {'official','calendar-arithmetic'},'unknown table source policy '+self.table_policy)
   check(self.table_policy!='calendar-arithmetic' or self.table_id=='checkpoints','calendar-arithmetic policy is reserved for the booking-checkpoint table')
  if t=='tbody':self.body=True
  if t=='tr' and self.body:self.row=[];self.row_policy=self.table_policy;self.row_table_id=self.table_id
  if self.row is not None and t=='a':self.row.append(a.get('href',''))
 def handle_endtag(self,t):
  if t=='tr' and self.row is not None:self.rows.append((self.row_policy,self.row_table_id,self.row));self.row=None
  if t=='tbody':self.body=False
OFFICIAL={'guide.michelin.com','michelin.com','gov.cn','dpm.org.cn','ticket.dpm.org.cn','mallpc.cantontower.com','en.shanghaitower.com','marriott.com','ritzcarlton.com','hyatt.com','ihg.com','rosewoodhotels.com','hilton.com','shangri-la.com','okura-nikko.com','sukhothai.com','all.accor.com','peninsula.com','shanghaimuseum.net','yugarden.com.cn','english.shanghai.gov.cn','shanghaitower.com','orientalpearltower.com','powerstationofart.com','xintiandi.com','english.beijing.gov.cn','gz.gov.cn','cantontower.com','panda.org.cn','wuhouci.net.cn','suzhou.gov.cn','hangzhou.gov.cn','english.www.gov.cn','travel.state.gov','us.china-embassy.gov.cn','cdc.gov','bookings.taian-table.com','kingsjoy.com','trbhutong.com'}
def official(u):
 h=(urlsplit(u).hostname or '').removeprefix('www.');return h in OFFICIAL and u.startswith('https://')
files=list(P.glob('*.html'));docs={x:Document(x.read_text()) for x in files}
for f,d in docs.items():
 text=f.read_text();check('name="viewport"' in text,f'{f.name}: missing mobile viewport');check('id="main"' in text,f'{f.name}: missing main landmark')
 for ref in d.refs:
  u=urlsplit(ref)
  if u.scheme or u.netloc:continue
  target=(f.parent/unquote(u.path)).resolve() if u.path else f
  check(target.is_relative_to(P) and target.exists(),f'{f.name}: missing local resource {ref}')
  if u.fragment and target in docs:check(unquote(u.fragment) in docs[target].ids,f'{f.name}: missing anchor {ref}')
 for policy,table_id,row in d.rows:
  if policy=='calendar-arithmetic':check(table_id=='checkpoints' and any(u=='flagged.html#B01' for u in row),f'{f.name}: calculation-only table row lacks its B01 review flag: {row[:2]}')
  else:check(any(official(u) for u in row),f'{f.name}: table row has no official source: {row[:2]}')
 for stale in ['Feb 2026 (now)','~28','not yet released','Verify ↗','eastchinatrip.com','its.holiday','chinafortravelers.com']:
  check(stale not in text,f'{f.name}: stale unsupported assertion {stale}')
# Verify canonical data, all source links, blank official metrics, review references.
def load(n):return json.loads((P/'data'/f'{n}.json').read_text())
F=load('flags')['flags'];flagids={x['id'] for x in F}
for x in F:check(x['id'] in docs[P/'flagged.html'].ids,'unpublished flag '+x['id'])
for name,key in [('hotels','hotels'),('michelin','restaurants'),('activities','activities')]:
 rows=load(name)[key];ids=[x['id'] for x in rows];check(len(ids)==len(set(ids)),name+': duplicate records')
 for x in rows:
  check(official(x['official_url']),name+': non-official source '+x['id'])
  for extra in x.get('secondarySources',[]):check(official(extra['url']),name+': non-official additional source '+x['id'])
  check(bool(x['flags']),name+': missing flags '+x['id'])
  for flag in x['flags']:check(flag in flagids,'unknown flag '+flag)
  check(len(x.get('socials',{}))>=3 or name=='hotels',name+': missing discovery platforms '+x['id'])
  if name=='hotels':
   for k in ['total','transit','activityTransit','rank']:check(x[k]=='',x['id']+': unsupported official metric '+k)
 for city in ['Shanghai','Beijing','Guangzhou','Chengdu']:check(any(x['city']==city for x in rows),name+': missing city '+city)
holiday='https://www.gov.cn/zhengce/content/202611/content_7085101.htm'
for x in load('brief')['dates']:
 check(x['source']==holiday,'brief date has stale holiday notice citation')
for x in load('costs')['stay_options']:
 start=date.fromisoformat(x['checkin']);end=date.fromisoformat(x['checkout']);check((end-start).days==7,'stay not 7 nights');check(start>=date(2027,2,15) and end<=date(2027,3,23),'stay outside window');check(official(x['source']),'stay missing official source');check(x['source']==holiday,'stay has stale holiday notice citation')
for html_file in ['index.html','executive-summary.html']:
 check(holiday in (P/html_file).read_text(),html_file+': missing corrected State Council holiday citation')
for x in load('costs')['booking_windows']:
 for end,k in [(date(2027,2,15),'target_start'),(date(2027,2,18),'target_end')]:check((end-date.fromisoformat(x[k])).days==x['lead_days'],'wrong lead-time date')
# JavaScript syntax and deterministic generated-ledger parity.
for f in ['data.js','app.js','assets/js/app.js']:
 r=subprocess.run(['node','--check',str(P/f)],capture_output=True,text=True);check(r.returncode==0,r.stderr)
js=(P/'data.js').read_text();D=json.loads(js[js.index('=')+1:].strip().removesuffix(';'))
for n,k in [('hotels','hotels'),('michelin','restaurants'),('activities','activities'),('flags','flags')]:check(D[k]==load(n)[k],'dashboard dataset drift '+n)
check(D['dates']==load('brief')['dates'],'dashboard date/source drift brief')
check(D['costs']==load('costs'),'dashboard costs drift canonical data')
check(holiday in js,'dashboard ledger missing corrected State Council notice')
resources=[x for x in P.rglob('*') if x.is_file() and x.suffix in {'.html','.css','.js','.json'} and not any(v.startswith('.') or v in {'node_modules'} for v in x.relative_to(P).parts)]
if args.base_url:
 for f in resources:
  try:
   with urlopen(urljoin(args.base_url,f.relative_to(P).as_posix()),timeout=15) as response:check(response.status==200,'HTTP error '+str(f))
  except Exception as ex:errors.append(f'HTTP {f.relative_to(P)}: {ex}')
if errors:
 print('\n'.join('FAIL: '+v for v in errors));raise SystemExit(1)
print(f'PASS: {len(files)} HTML pages, all internal files/anchors, official links on evidence rows, B01 flags on calendar-arithmetic rows, canonical data parity, four-city coverage, flag coverage, dates and JS syntax.')
if args.base_url:print(f'PASS: HTTP 200 for {len(resources)} HTML/JSON/CSS/JS resources.')
print('External link reachability, source-content accuracy, live prices and transit eligibility are NOT proven by this structural test.')
