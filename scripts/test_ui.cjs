/* Run after: npm install --prefix .cache/browser-tests --no-save --package-lock=false jsdom@26
   NODE_PATH=.cache/browser-tests/node_modules node scripts/test_ui.cjs
   DOM behavior tests, not visual browser/layout tests. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');

const root = path.resolve(__dirname, '..');

function load(file, scripts) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, file), 'utf8'), {
    url: 'https://example.test/ChinaFun2/' + file,
    runScripts: 'outside-only',
  });
  for (const script of scripts) dom.window.eval(fs.readFileSync(path.join(root, script), 'utf8'));
  if (file !== 'index.html') dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  return dom;
}

const home = load('index.html', ['data.js', 'app.js']);
const d = home.window.document;
assert.equal(d.querySelectorAll('#date-table article').length, 3);
assert.equal(d.querySelectorAll('#hotel-list article').length, 3);
assert.equal(d.querySelectorAll('#dining-list article').length, 3);
assert.equal(d.querySelectorAll('#cluster-list article').length, 4);
assert.equal(d.querySelectorAll('#activity-list article').length, 3);
assert(!d.body.textContent.includes('undefined'));

d.querySelector('.menu-toggle').click();
assert.equal(d.querySelector('.menu-toggle').getAttribute('aria-expanded'), 'true');
assert(d.querySelector('.sidebar').classList.contains('is-open'));
d.querySelector('.nav-list a').click();
assert.equal(d.querySelector('.menu-toggle').getAttribute('aria-expanded'), 'false');

d.querySelector('[data-suggestion]').click();
assert(d.querySelector('#suggestion-feedback').textContent.startsWith('Selected for review:'));

for (const [file, id, city, count] of [
  ['hotels.html', 'hotels', 'Guangzhou', 3],
  ['michelin.html', 'restaurants', 'Chengdu', 4],
  ['activities.html', 'activities', 'Beijing', 6],
]) {
  const dom = load(file, ['assets/js/app.js']);
  const doc = dom.window.document;
  const rows = [...doc.querySelectorAll(`#${id} tbody tr`)];

  // Test interactive City Filter Chip
  const cityChip = doc.querySelector(`button[data-city-filter="${id}"][data-city="${city}"]`);
  assert(cityChip, `${file}: missing city chip for ${city}`);
  cityChip.click();
  assert.equal(cityChip.getAttribute('aria-pressed'), 'true');
  assert.equal(rows.filter(r => r.style.display !== 'none').length, count, `${file} city-chip filtered rows`);
  assert(doc.querySelector(`#${id}-count`).textContent.startsWith(count + ' of '));

  // Reset city chip to All
  const allChip = doc.querySelector(`button[data-city-filter="${id}"][data-city=""]`);
  allChip.click();
  assert.equal(rows.filter(r => r.style.display !== 'none').length, rows.length, `${file} reset All chip`);

  // Test text search filter
  const input = doc.querySelector('input[data-filter]');
  input.value = city.toLowerCase();
  input.dispatchEvent(new dom.window.Event('input'));
  assert.equal(rows.filter(r => r.style.display !== 'none').length, count, `${file} search filtered rows`);

  // Test accessible column sort
  const button = doc.querySelector(`#${id} th button`);
  button.click();
  assert.equal(button.parentNode.getAttribute('aria-sort'), 'ascending');
  button.click();
  assert.equal(button.parentNode.getAttribute('aria-sort'), 'descending');

  // Empty & reset search
  input.value = 'NO_MATCH_TEST';
  input.dispatchEvent(new dom.window.Event('input'));
  assert.equal(rows.filter(r => r.style.display !== 'none').length, 0);
  input.value = '';
  input.dispatchEvent(new dom.window.Event('input'));
  assert.equal(rows.filter(r => r.style.display !== 'none').length, rows.length);

  for (const anchor of doc.querySelectorAll('a[href]')) {
    const url = new URL(anchor.href);
    assert(!['localhost', '127.0.0.1'].includes(url.hostname));
  }
  dom.window.close();
}

home.window.close();
console.log('PASS: dashboard rendering, 3 date scopes, four cities, mobile menu toggling, suggestions, city-chip & text filtering/reset/empty results, accessible sorting, relative Pages paths.');
