(() => {
  const D = window.TRIP_DATA;
  const esc = (v = '') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const link = (url, label, cls = 'source-link') => url ? `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : '';
  const field = (label, value, opts = {}) => `<div class="data-field ${opts.wide ? 'field-wide' : ''}"><span>${esc(label)}</span><div>${value ? (opts.html ? value : esc(value)) : `<span class="unknown">Not verified</span>`}</div></div>`;
  const renderReviewFoot = (x) => {
    const rev = (x.reviews || []).slice(0, 2).map(r => link(r.url, `${r.platform}: ${r.label}`, 'video-link')).join('');
    if (rev) return rev;
    if (x.socials && x.socials.youtube) return link(x.socials.youtube, 'YouTube search', 'video-link');
    return '';
  };

  const renderDates = () => {
    document.querySelector('#date-table').innerHTML = D.dates.map(x => `<article class="data-card date-card"><div class="data-card-head"><div><span class="card-kicker">DATE WINDOW</span><h4>${esc(x.title)}</h4><p class="card-sub">${esc(x.fit)}</p></div><span class="tag tag-amber">${esc(x.nights)}</span></div><div class="field-grid">${field('Check-in → check-out',x.dates)}${field('Stay total · 2 adults',x.price,{html:true})}${field('Price status',x.priceNote,{wide:true})}</div><div class="card-foot">${link(x.source,x.sourceLabel)}</div></article>`).join('');
  };

  const setupFilteredSection = ({ listSel, filterSel, badgeSel, items, noun, renderItem }) => {
    const listEl = document.querySelector(listSel);
    const filterEl = document.querySelector(filterSel);
    const badgeEl = document.querySelector(badgeSel);
    const featuredItems = items.filter(x => x.dashboard);
    const baseFeatured = featuredItems.length ? featuredItems : items.slice(0, 3);
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Chengdu'];
    const modes = [
      { key: 'featured', label: `Featured (${baseFeatured.length})` },
      { key: 'all', label: `All (${items.length})` },
      ...cities.map(c => ({ key: c, label: `${c} (${items.filter(x => x.city === c).length})` }))
    ];
    let active = 'featured';
    const draw = () => {
      const subset = active === 'featured'
        ? baseFeatured
        : active === 'all'
          ? items
          : items.filter(x => x.city === active);
      listEl.innerHTML = subset.map((x, i) => renderItem(x, i)).join('');
      if (badgeEl) {
        badgeEl.textContent = active === 'featured'
          ? `${baseFeatured.length} featured · ${items.length} total`
          : `${subset.length} of ${items.length} ${noun}`;
      }
      if (filterEl) {
        filterEl.innerHTML = modes.map(m => `<button type="button" class="city-pill ${m.key === active ? 'is-active' : ''}" data-city-mode="${esc(m.key)}" aria-pressed="${m.key === active ? 'true' : 'false'}">${esc(m.label)}</button>`).join('');
        filterEl.querySelectorAll('[data-city-mode]').forEach(btn => btn.addEventListener('click', () => {
          active = btn.dataset.cityMode;
          draw();
        }));
      }
    };
    draw();
  };

  const renderHotels = () => setupFilteredSection({
    listSel: '#hotel-list',
    filterSel: '#hotel-filters',
    badgeSel: '#hotel-count-badge',
    items: D.hotels,
    noun: 'hotels',
    renderItem: (x, i) => `<article class="data-card hotel-card"><div class="data-card-head"><div><span class="card-kicker">CANDIDATE ${String(i+1).padStart(2,'0')} · ${esc(x.city.toUpperCase())}</span><h4>${esc(x.name)}</h4><p class="card-sub">${esc(x.area)}</p></div><span class="tag tag-rose">Not ranked</span></div><div class="field-grid">${field('Bed shown on official page',x.bed)}${field('Private bathroom verified?',x.bath)}${field('2027 all-in total · 2 adults',x.total)}${field('Hotel → Michelin ≤60 min',x.transit)}${field('Official room evidence',x.evidence,{wide:true})}${field('Qualification note',x.fitNote,{wide:true})}</div><div class="card-foot card-foot-multi">${link(x.roomSource,x.sourceLabel || 'Official room page')}${link('hotels.html','Full 20-hotel comparison','video-link')}</div></article>`
  });

  const renderClusters = () => {
    document.querySelector('#cluster-list').innerHTML = D.clusters.map(x => `<article class="cluster-card"><div class="cluster-top"><span class="cluster-pin">✦</span><span class="tag tag-blue">${esc(x.edition)}</span></div><h3>${esc(x.city)}</h3><strong class="cluster-number">${esc(x.count)}</strong><p>${esc(x.note)}</p><div class="card-foot">${link(x.source,x.sourceLabel || 'Official MICHELIN release')}</div></article>`).join('');
  };

  const renderDining = () => setupFilteredSection({
    listSel: '#dining-list',
    filterSel: '#dining-filters',
    badgeSel: '#dining-count-badge',
    items: D.restaurants,
    noun: 'venues',
    renderItem: x => `<article class="data-card dining-card"><div class="data-card-head"><div><span class="card-kicker">${esc(x.city.toUpperCase())} · ${esc(x.cuisine)}</span><h4>${esc(x.name)}</h4><p class="card-sub">${esc(x.area)}</p></div><span class="tag ${x.status.includes('no star') ? 'tag-amber' : 'tag-green'}">${esc(x.status)}</span></div><div class="field-grid">${field('Official Guide price band',x.guideBand)}${field('Published menu basis · 2 adults',x.coupleTotal)}${field('Open days / hours',x.hours,{wide:true})}${field('Exceptions & booking notes',x.exceptions,{wide:true})}</div><div class="card-foot card-foot-multi">${link(x.official,'MICHELIN Guide source')}${link(x.venue,'Official venue / menu')}${renderReviewFoot(x)}</div></article>`
  });

  const renderActivities = () => setupFilteredSection({
    listSel: '#activity-list',
    filterSel: '#activity-filters',
    badgeSel: '#activity-count-badge',
    items: D.activities,
    noun: 'activities',
    renderItem: x => `<article class="data-card activity-card"><div class="data-card-head"><div><span class="card-kicker">${esc(x.city.toUpperCase())} · ACTIVITY</span><h4>${esc(x.name)}</h4><p class="card-sub">${esc(x.area)}</p></div><span class="tag tag-purple">${esc(x.duration || 'Official schedule')}</span></div><div class="field-grid">${field('Days & hours',x.hours,{wide:true})}${field('Closures & 2027 caveats',x.exceptions,{wide:true})}${field('Ticket cost · 2 adults',x.cost)}</div><div class="card-foot card-foot-multi">${link(x.officialLink,x.officialLabel || 'Official visitor site')}${renderReviewFoot(x)}</div></article>`
  });

  const renderQuestions = () => {
    document.querySelector('#question-list').innerHTML = D.questions.map((x,i) => `<article class="data-card question-card"><div class="question-index">${String(i+1).padStart(2,'0')}</div><div class="question-main"><div class="question-title"><h4>${esc(x.q)}</h4><span class="tag ${x.state.includes('blocker')?'tag-rose':'tag-amber'}">${esc(x.state)}</span></div><div class="field-grid question-fields">${field('Known / verified status',x.answer,{wide:true})}${field('Suggested next step',x.next,{wide:true})}</div></div></article>`).join('');
  };

  const renderSuggestions = () => {
    document.querySelector('#suggestion-list').innerHTML = D.suggestions.map((x,i) => `<article class="suggestion-card"><div class="suggestion-number">0${i+1}</div><span class="tag ${i<2?'tag-green':'tag-purple'}">${esc(x.rec)}</span><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p><div class="suggestion-meta"><span><small>VALUE</small>${esc(x.impact)}</span><span><small>EFFORT</small>${esc(x.effort)}</span></div><button class="suggestion-button" data-suggestion="${esc(x.id)}" type="button">Review this option <span>→</span></button></article>`).join('');
    document.querySelectorAll('[data-suggestion]').forEach(btn => btn.addEventListener('click', () => {
      const s = D.suggestions.find(item => item.id === btn.dataset.suggestion);
      document.querySelectorAll('[data-suggestion]').forEach(b => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');
      const box = document.querySelector('#suggestion-feedback');
      box.textContent = `Selected for review: “${s.title}”. This is a proposal only; it has not been implemented.`;
      box.classList.add('has-selection');
    }));
  };

  renderDates(); renderHotels(); renderClusters(); renderDining(); renderActivities(); renderQuestions(); renderSuggestions();

  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    document.querySelector('.sidebar').classList.toggle('is-open', !expanded);
  });
  document.querySelectorAll('.nav-list a').forEach(a => a.addEventListener('click', () => {
    document.querySelectorAll('.nav-list a').forEach(n => n.classList.remove('active'));
    a.classList.add('active');
    document.querySelector('.sidebar').classList.remove('is-open');
    menu.setAttribute('aria-expanded','false');
  }));
})();
