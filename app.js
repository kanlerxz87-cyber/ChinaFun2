(() => {
  const D = window.TRIP_DATA;
  const esc = (v = '') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const link = (url, label, cls = 'source-link') => url ? `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : '<span class="unknown">Not verified</span>';
  const video = title => `https://www.youtube.com/results?search_query=${encodeURIComponent(title)}`;
  const field = (label, value, opts = {}) => `<div class="data-field ${opts.wide ? 'field-wide' : ''}"><span>${esc(label)}</span><div>${value ? (opts.html ? value : esc(value)) : `<span class="unknown">Not verified</span>`}</div></div>`;
  const renderDates = () => {
    document.querySelector('#date-table').innerHTML = D.dates.map(x => `<article class="data-card date-card"><div class="data-card-head"><div><span class="card-kicker">DATE WINDOW</span><h4>${esc(x.title)}</h4><p class="card-sub">${esc(x.fit)}</p></div><span class="tag tag-amber">${esc(x.nights)}</span></div><div class="field-grid">${field('Check-in → check-out',x.dates)}${field('Stay total · 2 adults',x.price,{html:true})}${field('Price status',x.priceNote,{wide:true})}</div><div class="card-foot">${link(x.source,x.sourceLabel)}</div></article>`).join('');
  };
  const renderHotels = () => {
    document.querySelector('#hotel-list').innerHTML = D.hotels.slice(0, 3).map((x,i) => `<article class="data-card hotel-card"><div class="data-card-head"><div><span class="card-kicker">CANDIDATE ${String(i+1).padStart(2,'0')} · ${esc(x.city.toUpperCase())}</span><h4>${esc(x.name)}</h4><p class="card-sub">${esc(x.area)}</p></div><span class="tag tag-rose">Not ranked</span></div><div class="field-grid">${field('Bed shown on official page',x.bed)}${field('Private bathroom verified?',x.bath)}${field('7-night total · 2 adults',x.total)}${field('Hotel → Michelin ≤60 min',x.transit)}${field('Room evidence',x.evidence,{wide:true})}${field('Amenities',x.amenities,{wide:true})}${field('Qualification note',x.fitNote,{wide:true})}</div><div class="card-foot card-foot-multi">${link(x.roomSource,'Official room details')}${link(x.propertySource,'Official hotel page')}${link(x.bookSource,'Official rates / booking')}${link(video(x.youtube || x.name),'YouTube search','video-link')}</div></article>`).join('');
  };
  const renderClusters = () => {
    document.querySelector('#cluster-list').innerHTML = D.clusters.map(x => `<article class="cluster-card"><div class="cluster-top"><span class="cluster-pin">✦</span><span class="tag tag-blue">${esc(x.edition)}</span></div><h3>${esc(x.city)}</h3><strong class="cluster-number">${esc(x.count)}</strong><p>${esc(x.detail)}</p><div class="cluster-note">${esc(x.comparability)}</div><div class="card-foot">${link(x.source,'Official MICHELIN selection')}</div>${x.regionalSource ? `<div class="card-foot">${link(x.regionalSource,'2026 regional scope')}</div>` : ''}</article>`).join('');
  };
  const renderDining = () => {
    document.querySelector('#dining-list').innerHTML = D.restaurants.slice(0, 3).map(x => `<article class="data-card dining-card"><div class="data-card-head"><div><span class="card-kicker">${esc(x.city.toUpperCase())} · ${esc(x.cuisine)}</span><h4>${esc(x.name)}</h4></div><span class="tag tag-green">${esc(x.distinction)}</span></div><div class="field-grid">${field('Current MICHELIN status',x.status)}${field('Official Guide price band',x.guideBand)}${field('Published menu basis · 2 adults',x.coupleTotal)}${field('Open days / hours',x.hours,{wide:true})}${field('Hours / holiday exceptions',x.exceptions,{wide:true})}</div><div class="card-foot card-foot-multi">${link(x.guide,'MICHELIN Guide source')}${link(x.venue,'Official venue source')}${link(video(x.video || x.name),'YouTube search','video-link')}</div></article>`).join('');
  };
  const renderActivities = () => {
    document.querySelector('#activity-list').innerHTML = D.activities.slice(0, 3).map(x => `<article class="data-card activity-card"><div class="data-card-head"><div><span class="card-kicker">${esc(x.city.toUpperCase())} · ACTIVITY</span><h4>${esc(x.name)}</h4></div><span class="tag tag-purple">Hours source-linked</span></div><div class="field-grid">${field('Days & hours',x.schedule,{wide:true})}${field('Exceptions / 2027 caveat',x.exception,{wide:true})}${field('Ticket cost for 2 adults',x.cost)}</div><div class="card-foot card-foot-multi">${link(x.source,'Official museum / government source')}${link(x.officialLink,'Official visitor site')}${x.socials ? Object.entries(x.socials).map(([label,u])=>link(u,label,'video-link')).join('') : link(video(x.video),'YouTube search','video-link')}</div></article>`).join('');
  };
  const renderQuestions = () => {
    document.querySelector('#question-list').innerHTML = D.questions.map((x,i) => `<article class="data-card question-card"><div class="question-index">${String(i+1).padStart(2,'0')}</div><div class="question-main"><div class="question-title"><h4>${esc(x.q)}</h4><span class="tag ${x.state.includes('blocker')?'tag-rose':'tag-amber'}">${esc(x.state)}</span></div><div class="field-grid question-fields">${field('Known / answer',x.answer,{wide:true})}${field('Suggested verification',x.next,{wide:true})}</div></div></article>`).join('');
  };
  const renderSuggestions = () => {
    document.querySelector('#suggestion-list').innerHTML = D.suggestions.map((x,i) => `<article class="suggestion-card"><div class="suggestion-number">0${i+1}</div><span class="tag ${i===0?'tag-green':'tag-purple'}">${esc(x.rec)}</span><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p><div class="suggestion-meta"><span><small>VALUE</small>${esc(x.impact)}</span><span><small>EFFORT</small>${esc(x.effort)}</span></div><button class="suggestion-button" data-suggestion="${esc(x.id)}" type="button">Review this option <span>→</span></button></article>`).join('');
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
