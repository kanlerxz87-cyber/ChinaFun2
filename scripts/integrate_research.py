"""One-time evidence reconciliation of the two inherited ledgers (2026-11-25).
Run against the pre-integration data only. Ongoing publication: build_pages.py.
"""
import json, re
from pathlib import Path
from datetime import date, timedelta
P=Path(__file__).resolve().parents[1]
def load(n): return json.loads((P/n).read_text())
def save(n,v): (P/n).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
if (P/'research/legacy-ledgers-2026-11-25.json').exists():
 raise SystemExit('Integration already applied. Edit canonical JSON and run build_pages.py instead.')
D=load('research/dashboard-ledger.json')
old={n:load('data/'+n+'.json') for n in ['hotels','michelin','activities','costs']}
# Keep the inherited research as an audit artifact, not a live decision dataset.
save('research/legacy-ledgers-2026-11-25.json',{'warning':'Superseded, contains unsupported estimates. NOT booking evidence.',**old})
meta={'reviewed':'2026-11-25','travelers':2,'window':['2027-02-15','2027-03-23'],'unknown':'Empty means unverified, never zero. Current schedules/prices are not guaranteed 2027 inventory.','route_policy':'No door-to-door route set has been recorded. All <=60-minute metrics and rankings remain blank.'}
H=[]
for x in D['hotels']:
 H.append(dict(x,city='Beijing' if 'Beijing' in x['name'] else 'Shanghai',id=re.sub('[^a-z0-9]+','-',x['name'].lower()).strip('-'),official_url=x['roomSource'],rank='',activityTransit='',flags=['H01','H02','H03'],quote_date='',checkin='',checkout=''))
for x in old['hotels']['hotels']:
 if x['id'] in ['hyatt-bund','grand-hyatt-jinmao']: continue
 H.append({'id':x['id'],'name':x['name'],'city':'Shanghai','area':'Shanghai · exact location on official page','bed':'','bath':'','evidence':'Inherited candidate retained. Exact room claims from secondary sources removed; recheck brand room page.','amenities':'','total':'','transit':'','activityTransit':'','rank':'','fitNote':'Select one Queen/King room for two; require written ensuite confirmation.','roomSource':x['official_url'],'propertySource':x['official_url'],'bookSource':x['official_url'],'official_url':x['official_url'],'flags':['H01','H02','H03'],'quote_date':'','checkin':'','checkout':''})
for name,city,url in [
 ('Okura Garden Hotel Shanghai','Shanghai','https://www.okura-nikko.com/china/shanghai/okura-garden-hotel-shanghai/'),
 ('Jing An Shangri-La Shanghai','Shanghai','https://www.shangri-la.com/shanghai/jinganshangrila/'),
 ('The Sukhothai Shanghai','Shanghai','https://www.sukhothai.com/shanghai/en'),
 ('Hilton Beijing Wangfujing','Beijing','https://www.hilton.com/en/hotels/bjswfhi-hilton-beijing-wangfujing/'),
 ('Sofitel Guangzhou Sunrich','Guangzhou','https://all.accor.com/hotel/6318/index.en.shtml'),
 ('The Ritz-Carlton Guangzhou','Guangzhou','https://www.ritzcarlton.com/en/hotels/canrz-the-ritz-carlton-guangzhou/overview/'),
 ('The St. Regis Chengdu','Chengdu','https://www.marriott.com/en-us/hotels/ctuxr-the-st-regis-chengdu/overview/')]:
 H.append({'id':re.sub('[^a-z0-9]+','-',name.lower()).strip('-'),'name':name,'city':city,'area':city,'bed':'','bath':'','evidence':'Official property candidate; exact Queen+/King room and ensuite wording still require room-category confirmation.','amenities':'','total':'','transit':'','activityTransit':'','rank':'','fitNote':'No room is approved for purchase until exact room, occupancy, bath and cancellation terms are confirmed.','roomSource':url,'propertySource':url,'bookSource':url,'official_url':url,'flags':['H01','H02','H03'],'quote_date':'','checkin':'','checkout':''})
D['hotels']=H
regional='https://www.michelin.com/en/publications/products-and-services/michelin-guide-shanghai-jiangsu-zhejiang'
beijing='https://guide.michelin.com/en/article/news-and-views/michelin-guide-beijing-2026'
guangzhou='https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-stars-guangzhou-shenzhen-2026'
chengdu='https://guide.michelin.com/en/article/michelin-guide-ceremony/michelin-stars-chengdu-2027'
D['clusters']=[
 {'city':'Shanghai','edition':'2026 · city subset of regional release','count':'51 starred · 156 listed','detail':'1 three-star · 12 two-star · 38 one-star. The 77-starred regional count is NOT Shanghai.','comparability':'City counts are not hotel transit catchments. Shanghai is the provisional research-first choice, not a proven cheapest winner.','source':regional},
 {'city':'Beijing','edition':'2026 · city selection','count':'32 starred','detail':'2 three-star · 6 two-star · 24 one-star. Culture-led alternative.','comparability':'Choose if imperial monuments outweigh the Shanghai restaurant shortlist; rates and routes unresolved.','source':beijing},
 {'city':'Guangzhou','edition':'2026 · city subset of Guangzhou–Shenzhen','count':'20 starred · 117 listed','detail':'3 two-star · 17 one-star; 52 Bib Gourmand and 45 Selected in the release.','comparability':'Cantonese-food alternative; live listings can change after release. Do not combine Shenzhen counts.','source':guangzhou},
 {'city':'Chengdu','edition':'2027 · city selection','count':'15 starred · 84 listed','detail':'1 three-star · 1 two-star · 13 one-star; 32 Bib Gourmand and 37 Selected.','comparability':'Sichuan-food / panda alternative; edition differs from other cities, not a same-year league table.','source':chengdu}]
R=D['restaurants'][:]
for x in R:
 x['id']=re.sub('[^a-z0-9]+','-',x['name'].lower()).strip('-')
for x in old['michelin']['restaurants']:
 if x['id'] in ['taian-table','fu-he-hui','bib-example','selected-example']: continue
 R.append({'id':x['id'],'name':x['name'],'city':'Shanghai','cuisine':x['cuisine'],'distinction':'2 Stars' if x['status'].startswith('Two') else '1 Star','status':x['status'].split(' — ')[0]+' · 2026','guideBand':'','coupleTotal':'','hours':'','exceptions':'Exact service days and 2027 calendar require direct confirmation. Secondary menu estimates removed.','guide':x['official_url'],'venue':x.get('restaurant_url','')})
for city,name,slug,stars,cuisine,band in [
 ('Beijing','Xin Rong Ji (Xinyuan South Road)','xin-rong-ji-xinyuan-south-road',3,'Taizhou','¥¥¥¥'),
 ('Beijing','Chao Shang Chao','chao-shang-chao',3,'Chao Zhou','¥¥¥¥'),
 ('Guangzhou','Jiang by Chef Fei','jiang-by-chef-fei',2,'Cantonese','¥¥¥'),
 ('Guangzhou','BingSheng Mansion (Xiancun Road)','bingsheng-mansion',1,'Cantonese','¥¥¥'),
 ('Chengdu','Yu Zhi Lan','yu-zhi-lan-1196150',2,'Sichuan','¥¥¥¥'),
 ('Chengdu','Silver Pot','silver-pot',1,'Sichuan','¥¥¥'),
 ('Chengdu','Mi Xun Teahouse','mi-xun-teahouse',1,'Vegetarian','¥¥'),
 ('Chengdu','Xin Rong Ji','xin-rong-ji-1207940',3,'Taizhou','¥¥¥')]:
 region={'Beijing':'beijing-municipality/beijing','Guangzhou':'guangdong-province/guangzhou','Chengdu':'chengdu-municipality/chengdu'}[city]
 R.append({'id':city.lower()+'-'+slug,'name':name,'city':city,'cuisine':cuisine,'distinction':str(stars)+' Stars','status':str(stars)+' MICHELIN Stars · '+('2027' if city=='Chengdu' else '2026'),'guideBand':band+' (relative band, not cash)','coupleTotal':'','hours':'','exceptions':'Regular service and 2027 exceptions need confirmation from the venue.','guide':'https://guide.michelin.com/en/'+region+'/restaurant/'+slug,'venue':''})
for x in R:
 x['official_url']=x['guide'];x['flags']=['R01','R02','S01']
 if x['name']=='Hong Yu Fang': x['flags'].append('R03')
 if x['id']=='ren-he-guan':x['guide']=x['official_url']='https://guide.michelin.com/en/shanghai-municipality/shanghai/restaurant/ren-he-guan-zhaojiabang-road'
 x['socials']={}
 # Search links are explicitly discovery, not evidence or official profiles.
 from urllib.parse import quote
 q=quote(x['name']+' '+x['city'])
 x['socials']={'YouTube search':'https://www.youtube.com/results?search_query='+q,'Instagram search':'https://www.instagram.com/explore/search/keyword/?q='+q,'TikTok search':'https://www.tiktok.com/search?q='+q}
D['restaurants']=R
A=[]
def activity(id,name,city,schedule,cost,source,exception='Current published information, not a date-specific 2027 ticket. Recheck before booking.'):
 q=quote(name+' '+city)
 A.append({'id':id,'name':name,'city':city,'schedule':schedule,'cost':cost,'source':source,'officialLink':source,'official_url':source,'exception':exception,'transit':'','flags':['A01','A02','S01'],'socials':{'YouTube search':'https://www.youtube.com/results?search_query='+q,'Instagram search':'https://www.instagram.com/explore/search/keyword/?q='+q,'TikTok search':'https://www.tiktok.com/search?q='+q}})
activity('shanghai-museum','Shanghai Museum — People’s Square','Shanghai','09:00–17:00; last entry 15:00 under current exhibition notice. Closed Monday except national holidays.','General admission ¥0; special exhibitions may charge.','https://www.shanghaimuseum.net/mu/frontend/pg/en/index','Advance reservation required under exhibition notice through Nov 14, 2027; recheck specific exhibition fees. Closed Mon Feb 15 and 22 under normal rules.')
A[-1]['socials'].update({'Museum YouTube profile':'https://www.youtube.com/@theshanghaimuseum','Museum Instagram profile':'https://www.instagram.com/theshanghaimuseum'})
activity('yu-garden','Yu Garden — daytime garden (not bazaar)','Shanghai','09:00–16:30; last entry 16:00. Closed Monday except national holidays.','¥60 = 2 × ¥30 (Dec–Mar standard adult daytime admission)','https://www.yugarden.com.cn/page/articleview/message.html','Monday closure includes Feb 15 and 22 under regular rules. Night tour and Lantern Festival tickets are separate; no 2027 event price confirmed.')
activity('yuyuan-night','Yu Garden — winter/spring night tour','Shanghai','Published seasonal notice: Fri–Sun 18:00–21:20; last entry 20:30.','','https://english.shanghai.gov.cn/en-UniqueExperience-travelinshanghai/20250729/25cfb8bce97d4e798f99ac62986255ff.html','Seasonal notice, not a confirmed Feb 2027 program. Mon–Thu closed except public holidays.')
for id,name in [('the-bund','The Bund promenade'),('nanjing-road','Nanjing Road pedestrian street'),('french-concession','Wukang / Anfu Road neighborhood walk')]:
 activity(id,name,'Shanghai','Public outdoor area; access may be restricted for events.','¥0 for public street walk','https://english.shanghai.gov.cn/')
activity('xintiandi','Xintiandi','Shanghai','Outdoor precinct; individual shops have separate hours.','','https://www.xintiandi.com/')
activity('shanghai-tower','Shanghai Tower — 118F','Shanghai','08:30–22:00 (current published schedule)','¥360 = 2 × ¥180; standard observation product','https://www.shanghaitower.com/','Ticket product, last entry and 2027 schedule require reconfirmation; conflicting older hours retained as A03.')
activity('oriental-pearl','Oriental Pearl Tower','Shanghai','09:00–21:00 (current schedule)','','https://www.orientalpearltower.com/','Multiple ticket bundles: no single two-person product confirmed for the travel dates.')
activity('power-station-art','Power Station of Art','Shanghai','Tue–Sun 11:00–19:00; closed Monday.','General entry ¥0; paid exhibitions separate','https://www.powerstationofart.com/')
activity('huangpu-cruise','Huangpu River cruise','Shanghai','','','https://english.shanghai.gov.cn/','Operator, route, timetable and fare not confirmed. Discovery candidate only; not an approved one-hour activity.')
for id,name,city,source in [('suzhou-daytrip','Suzhou day trip','Suzhou','https://www.suzhou.gov.cn/'),('hangzhou-daytrip','Hangzhou day trip','Hangzhou','https://www.hangzhou.gov.cn/')]:
 activity(id,name,city,'','',''+source,'Outside the four base-city shortlist. Intercity train time alone does not meet the <=60 minute door-to-door requirement. Not included in a qualified itinerary.')
activity('forbidden-city','Forbidden City','Beijing','Nov–Mar 08:30–16:30; closed Monday (holiday exceptions).','¥80 = 2 × ¥40 off-season general entry','https://english.beijing.gov.cn/specials/ticketing/index.html','Book via official Palace Museum channel; regular 7-day release. Extra exhibitions separate. Monday Feb 15 is unsuitable under normal rules.')
activity('temple-heaven','Temple of Heaven','Beijing','Park and inner monuments have different schedules; inner monuments closed Monday.','¥56 = 2 × ¥28 off-season combination ticket','https://english.beijing.gov.cn/specials/ticketing/index.html')
activity('summer-palace','Summer Palace','Beijing','Winter schedule; exact gate/inner-site hours need reconfirmation.','¥40 general entry for two; combination ticket ¥100 for two','https://english.beijing.gov.cn/specials/ticketing/index.html')
activity('mutianyu','Mutianyu Great Wall','Beijing','','','https://english.beijing.gov.cn/','Outlying destination; no <=60 minute public-transit route established. Treat as a separate day-trip, not a qualified near-hotel activity.')
activity('canton-tower','Canton Tower','Guangzhou','09:30–22:30 (current schedule)','','https://www.cantontower.com/','Observation height and ticket bundle must be chosen before quoting a couple total.')
activity('chen-clan','Chen Clan Ancestral Hall','Guangzhou','09:00–17:30; Tuesday closure reported, confirm current museum notice.','','https://www.gz.gov.cn/','Municipal discovery source only; precise 2027 museum closure/ticket notice remains unverified.')
activity('shamian','Shamian Island','Guangzhou','Public outdoor streets; event restrictions possible.','¥0 for public street walk','https://www.gz.gov.cn/')
activity('panda-base','Chengdu Research Base of Giant Panda Breeding','Chengdu','','','https://www.panda.org.cn/en/about/introduction/','Official introduction confirms location, not ticket price or opening hours. Those cells remain blank pending visitor-service notice; no one-hour hotel route established.')
activity('wuhou','Wuhou Shrine / Jinli','Chengdu','Shrine and adjacent Jinli have separate opening rules.','','https://www.wuhouci.net.cn/','Do not combine paid shrine admission with free street access; exact 2027 product pending.')
D['activities']=A
D['questions'][0]['answer']='No city chosen. Shanghai, Beijing, Guangzhou and Chengdu are compared. Shanghai is a provisional planning choice only.'
D['questions'].append({'q':'Seven nights, three nights, or up to two weeks?','answer':'Seven nights is the working comparison, not a confirmed reservation. Feb 15–18 is treated as a preferred start window, not a three-night stay.','next':'Confirm exact start, duration, total hotel/food budget, dietary needs and both passport nationalities without posting document numbers.','state':'Open · blocker'})
C={'meta':meta,'stay_options':[],'booking_windows':[],'practical':[],'aggregator_observations':[]}
holiday='https://english.www.gov.cn/policies/latestreleases/202611/06/content_WS6aed74dcc6d00ca5f9a0e22e.html'
for start in [date(2027,2,15),date(2027,2,16),date(2027,2,17),date(2027,2,18),date(2027,3,1),date(2027,3,16)]:
 C['stay_options'].append({'checkin':start.isoformat(),'checkout':(start+timedelta(days=7)).isoformat(),'nights':7,'official_total':'','source':holiday,'flags':['H01']})
for days in [90,60,30,14]:
 C['booking_windows'].append({'lead_days':days,'target_start':(date(2027,2,15)-timedelta(days=days)).isoformat(),'target_end':(date(2027,2,18)-timedelta(days=days)).isoformat(),'action':{90:'Past reference checkpoint, not a proven cheapest day.',60:'Compare like-for-like refundable official quotes now through this checkpoint.',30:'Reprice; do not assume a spike is inevitable.',14:'Recheck only if the existing rate can still be cancelled without penalty.'}[days],'source':'https://www.ihg.com/regent/hotels/us/en/beijing/pekjb/hoteldetail','flags':['H01','B01']})
# Prior research observations lack durable query parameters/room/tax metadata.
# Keep them separate, explicitly unusable as actual 2027 quotes or savings proof.
for city,name,p60,p90,p30 in [('Shanghai','Okura Garden',901,901,992),('Shanghai','Holiday Inn Nanjing Road',1038,1055,2372),('Shanghai','Westin Bund Center',1287,1388,2113),('Beijing','Regent',1434,None,2155),('Guangzhou','Sofitel Sunrich',764,893,1170),('Chengdu','St. Regis',1068,None,1589)]:
 C['aggregator_observations'].append({'city':city,'hotel':name,'reported_usd_7night_60d':p60,'reported_usd_7night_90d':p90,'reported_usd_7night_30d':p30,'source':'https://traveldeals.com/prices/'+city.lower(),'observed':'2026-11-25','checkin':'','checkout':'','room':'','taxes_and_cancellation':'','status':'UNVERIFIED prior research observation; missing exact stay/room/query evidence. Not a quote, forecast, official rate or demonstrated saving.','flags':['B01','B02']})
flags=[
 ('H01','All hotels and date windows','No official 2027 seven-night total for two captured. No cheapest hotel/date claim; inventory is unknown, not necessarily unreleased.','Capture exact stay, room, occupancy, currency, taxes, cancellation deadline and timestamp from brand engine.',H[0]['official_url']),
 ('H02','All hotels','Exact Queen+/King room and explicit ensuite/private-bathroom fit not consistently confirmed. Existing official room descriptions retained; secondary specifications removed.','Confirm the bookable room category directly with the property.',H[0]['official_url']),
 ('H03','All hotels and activities','No complete <=60-minute subway/bus route set. Counts, ranks and door-to-door times intentionally blank.','Record origin, destination, departure time, first/last-mile walking, wait and transfer time using official transit directions.',regional),
 ('R01','All restaurants except published Taian menu','No reliable official cash total for two, including service/tax/drinks. ¥ tiers are not amounts.','Obtain dated venue menu; Taian arithmetic excludes add-ons and is not a 2027 guarantee.','https://bookings.taian-table.com/faq'),
 ('R02','All dining / city counts','Mixed Guide editions; city selection totals are not hotel catchments. Some restaurant hours and 2027 closures unconfirmed.','Recheck individual Guide and venue calendar before reservations.',regional),
 ('R03','Hong Yu Fang','Guide hours table says 10:00–22:00 while text says morning only.','Confirm directly before scheduling.','https://guide.michelin.com/us/en/shanghai-municipality/shanghai/restaurant/hong-yu-fang'),
 ('R04','Ultraviolet','Reported closed March 2025; excluded from active shortlist and 2026 Shanghai count.','Do not reserve against historical 2025 three-star listings; reconfirm any reopening.','https://guide.michelin.com/en/article/news-and-views/shanghai-2025-starred-restaurants'),
 ('A01','All activities','Current prices and schedules are not guaranteed date-specific 2027 inventory; blank costs are unknown, not free.','Recheck ticket product, reservation release, special exhibitions and 2027 notices on linked official pages.','https://www.shanghaimuseum.net/mu/frontend/pg/en/index'),
 ('A02','Museum / garden closures; outlying trips','Monday/Tuesday closures constrain planning. Suzhou/Hangzhou/Mutianyu are not demonstrated <=60-minute trips.','Use Monday for public outdoor sights; record full public-transit routes before approving excursions.','https://www.yugarden.com.cn/page/articleview/message.html'),
 ('A03','Shanghai Tower / Yu Garden / renovation notices','Older conflicting hours and garden prices superseded by current official visitor rules; renovation/event closures remain unverified, not assumed absent.','Recheck official dated operating notices; do not mix garden, bazaar, festival and night tickets.','https://www.shanghaitower.com/'),
 ('B01','Booking lead-time analysis','30/60/90-day aggregator observations lack comparable query evidence. No proven cheapest lead time or 30–56% savings claim.','Use the dated checkpoints as a monitoring plan, not a price prediction.','https://www.ihg.com/regent/hotels/us/en/beijing/pekjb/hoteldetail'),
 ('B02','OTA observations / Sukhothai anomaly','Aggregator figures are quarantined from official columns. Prior $35,148 Sukhothai observation is an unexplained outlier, not a validated seven-night price.','Exclude until room/date/currency/tax data are reproducible; never use 2026 proxies as 2027 prices.','https://www.sukhothai.com/shanghai/en'),
 ('S01','Social / video links','Search shortcuts are not verified direct posts or evidence for hours/costs. Only explicitly labelled museum profiles are treated as official profiles.','Verify creator, venue and upload date before relying on a post.','https://www.shanghaimuseum.net/mu/frontend/pg/en/index'),
 ('E01','Entry / visa / health / dates','Passport nationality, visa eligibility, onward routing and exact duration unknown. 240h transit is conditional; a 14-night stay cannot be assumed eligible.','Confirm with applicable consulate, airline and current official rules; see entry audit.','https://travel.state.gov/en/international-travel/travel-advisories/china.html')]
F=[dict(id=i,scope=s,issue=v,next=n,source=u,status='needs review · non-blocking publication') for i,s,v,n,u in flags]
D['meta']=meta;D['flags']=F;D['costs']=C
save('data/hotels.json',{'meta':meta,'hotels':H});save('data/michelin.json',{'meta':meta,'clusters':D['clusters'],'restaurants':R});save('data/activities.json',{'meta':meta,'activities':A});save('data/costs.json',C);save('data/flags.json',{'meta':meta,'flags':F});save('data/brief.json',{'meta':meta,**{k:D[k] for k in ['dates','questions','suggestions']}})
(P/'data.js').write_text('/* Generated by scripts/build_pages.py. Unknown official values stay empty. */\nwindow.TRIP_DATA = '+json.dumps(D,ensure_ascii=False,indent=2)+';\n')
