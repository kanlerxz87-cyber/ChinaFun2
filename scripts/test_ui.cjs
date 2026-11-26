/* Run after: npm install --prefix .cache/browser-tests --no-save --package-lock=false jsdom@26
   NODE_PATH=.cache/browser-tests/node_modules node scripts/test_ui.cjs
   DOM behavior tests, not visual browser/layout tests. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
function load(file, scripts) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, file), 'utf8'), { url: 'https://example.test/ChinaFun2/' + file, runScripts: 'outside-only' });
  for (const script of scripts) dom.window.eval(fs.readFileSync(path.join(root, script), 'utf8'));
  if (file !== 'index.html') dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  return dom;
}
const home = load('index.html', ['data.js', 'app.js']);
const d = home.window.document;
assert.equal(d.querySelectorAll('#hotel-list article').length, 3);
assert.equal(d.querySelectorAll('#dining-list article').length, 3);
assert.equal(d.querySelectorAll('#cluster-list article').length, 4);
assert.equal(d.querySelectorAll('#activity-list article').length, 3);
assert(d.querySelector('.verified-video-links a[href*="youtube.com/watch"]'));
assert(d.querySelector('.media-discovery summary').textContent.includes('not verified reviews'));
assert(!d.body.textContent.includes('undefined'));
for (const id of ['trb-hutong','chengdu-silver-pot','chengdu-mi-xun-teahouse']) {
  const record=home.window.TRIP_DATA.restaurants.find(x=>x.id===id);
  assert(record && !(record.directVideos||[]).length, id+' private/unavailable video excluded');
}
d.querySelector('.menu-toggle').click();
assert.equal(d.querySelector('.menu-toggle').getAttribute('aria-expanded'), 'true');
assert(d.querySelector('.sidebar').classList.contains('is-open'));
d.querySelector('.nav-list a').click();
assert.equal(d.querySelector('.menu-toggle').getAttribute('aria-expanded'), 'false');
d.querySelector('[data-suggestion]').click();
assert(d.querySelector('#suggestion-feedback').textContent.startsWith('Selected for review:'));
for (const [file,id,term,count] of [['hotels.html','hotels','guangzhou',2],['michelin.html','restaurants','chengdu',4],['activities.html','activities','beijing',4]]) {
  const dom = load(file, ['assets/js/app.js']);
  const doc=dom.window.document;
  const input=doc.querySelector('input[data-filter]');
  if(id==='restaurants')assert.equal(doc.querySelectorAll('#restaurants a[href*="youtube.com/watch"]').length,10,'direct restaurant videos');
  if(id==='activities')assert.equal(doc.querySelectorAll('#activities a[href*="youtube.com/watch"]').length,16,'direct activity videos');
  if(id!=='hotels')assert(doc.querySelector('details.social-discovery summary').textContent.includes('not verified reviews'));
  input.value=term;input.dispatchEvent(new dom.window.Event('input'));
  const rows=[...doc.querySelectorAll(`#${id} tbody tr`)];
  assert.equal(rows.filter(r=>r.style.display!=='none').length,count,file+' filtered rows');
  assert(doc.querySelector(`#${id}-count`).textContent.startsWith(count+' of '));
  const button=doc.querySelector(`#${id} th button`);
  button.click();assert.equal(button.parentNode.getAttribute('aria-sort'),'ascending');
  button.click();assert.equal(button.parentNode.getAttribute('aria-sort'),'descending');
  input.value='NO_MATCH_TEST';input.dispatchEvent(new dom.window.Event('input'));
  assert.equal(rows.filter(r=>r.style.display!=='none').length,0);
  input.value='';input.dispatchEvent(new dom.window.Event('input'));
  assert.equal(rows.filter(r=>r.style.display!=='none').length,rows.length);
  for(const anchor of doc.querySelectorAll('a[href]')) {
    const url=new URL(anchor.href);
    assert(!['localhost','127.0.0.1'].includes(url.hostname));
  }
  dom.window.close();
}
home.window.close();
console.log('PASS: dashboard rendering, four cities, mobile menu toggling, suggestions, detail filtering/reset/empty results, accessible sorting, relative Pages paths.');
