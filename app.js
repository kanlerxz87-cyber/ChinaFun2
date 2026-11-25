(() => {
  'use strict';

  const PAGE = document.body.dataset.page || 'home';
  const NAV = [
    ['home', 'index.html', 'Overview'],
    ['hotels', 'hotels.html', 'Hotels'],
    ['restaurants', 'restaurants.html', 'Dining'],
    ['activities', 'activities.html', 'Things to do'],
    ['analysis', 'analysis.html', 'Analysis'],
    ['sources', 'sources.html', 'Sources']
  ];

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const nl2br = (value) => esc(value).replace(/\n/g, '<br>');
  const shortDate = (value) => {
    const date = new Date(`${value}T12:00:00Z`);
    return new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
  };
  const money = (value) => value == null ? '—' : esc(value);
  const sourceMap = (data) => data.sources || {};

  function citeLabel(source) {
    const title = (source.title || '').toLowerCase();
    const type = (source.type || '').toLowerCase();
    if (type.includes('michelin')) return 'MICHELIN Guide';
    if (title.includes('menu') || type.includes('menu')) return 'Official menu';
    if (title.includes('booking') || type.includes('booking engine')) return 'Dated booking';
    if (title.includes('fact sheet')) return 'Hotel fact sheet';
    if (title.includes('social') || title.includes('instagram') || title.includes('youtube')) return 'Social profile';
    if (title.includes('visit information')) return 'Official visitor info';
    if (title.includes('spa')) return 'Official spa info';
    if (title.includes('room')) return 'Official room details';
    if (title.includes('route') || title.includes('transport')) return 'Official transit';
    if (title.includes('faq')) return 'Official FAQ';
    if (title.includes('official hotel')) return 'Official hotel';
    if (title.includes('restaurant')) return 'Official restaurant';
    if (title.includes('ticket')) return 'Official ticket info';
    if (title.includes('tower')) return 'Official attraction';
    return 'Official source';
  }

  function cites(ids, data, options = {}) {
    const { compact = false, extraClass = '' } = options;
    const known = sourceMap(data);
    const list = (ids || []).filter((id) => known[id]);
    if (!list.length) return '<span class="source-note">No source link recorded for this item yet.</span>';
    return `<div class="citation-list ${extraClass}">${list.map((id) => {
      const source = known[id];
      const label = compact ? citeLabel(source) : (source.title || 'Official source');
      return `<a class="cite external" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer" title="${esc(source.title)} — ${esc(source.supports)}" aria-label="Open source: ${esc(source.title)}">${esc(label)}</a>`;
    }).join('')}</div>`;
  }

  function badge(status, label) {
    const normalized = String(status || '').toLowerCase();
    let cls = 'neutral';
    if (normalized.includes('verif') && !normalized.includes('unverif')) cls = 'verified';
    if (normalized.includes('partial') || normalized.includes('snapshot') || normalized.includes('calculation') || normalized.includes('current-faq')) cls = 'partial';
    if (normalized.includes('unverif') || normalized.includes('not ranked') || normalized.includes('not verified')) cls = 'unverified';
    if (normalized.includes('listed')) cls = 'listed';
    return `<span class="badge ${cls}">${esc(label || status || 'Review')}</span>`;
  }

  function header(data) {
    const current = NAV.find(([id]) => id === PAGE)?.[1] || 'index.html';
    return `<header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="China Vacation Fieldnotes overview">
          <span class="brand-mark" aria-hidden="true">中</span>
          <span class="brand-name"><strong>China · Fieldnotes</strong><span>Source-led trip planning</span></span>
        </a>
        <nav class="primary-nav" aria-label="Main navigation">
          ${NAV.map(([id, href, label]) => `<a href="${href}"${href === current ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
        </nav>
      </div>
    </header>`;
  }

  function footer(data) {
    return `<footer class="site-footer"><div class="footer-inner">
      <div class="footer-brand">China · Fieldnotes</div>
      <p class="footer-note">Research snapshot checked ${shortDate(data.meta.checkedOn)}. Shanghai and 15–22 February 2027 are provisional comparison dates, not a confirmed destination or booking. Prices and schedules are snapshots; the source register preserves limitations and manual-review links. Nothing is ranked where the evidence is not comparable.</p>
    </div></footer>`;
  }

  function shell(data, content) {
    const root = document.getElementById('site');
    root.innerHTML = `${header(data)}<main id="main-content" class="page-shell">${content}</main>${footer(data)}`;
  }

  function findingCard(item, data) {
    return `<article class="card">
      <div class="card-top"><h3 class="card-title">${esc(item.title)}</h3>${badge(item.status, item.status === 'verified-current-edition' ? '2026 edition' : item.status === 'verified-current-menu' ? 'Current menu snapshot' : item.status === 'verified-current-schedule' ? 'Current schedule' : item.status === 'partial' ? 'Partial' : 'Not established')}</div>
      <p>${esc(item.text)}</p>${cites(item.sources, data, { compact: true })}
    </article>`;
  }

  function homePage(data) {
    const meta = data.meta;
    const stay = meta.stay;
    const pen = data.hotels.find((hotel) => hotel.id === 'peninsula');
    const quote = pen.quote;
    const summary = data.overview;
    const stats = summary.stats.map((item) => `<div class="stat-card"><span class="stat-value">${esc(item.value)}</span><span class="stat-label">${esc(item.label)}</span><span class="stat-note">${esc(item.note)}</span>${cites(item.sources, data, { compact: true })}</div>`).join('');
    const shortlist = data.hotels.map((hotel) => {
      const roomCites = hotel.sources.filter((id) => /Room|FactSheet/.test(id));
      const quoteText = hotel.quote.lowestPreTaxSevenNightMath
        ? `${hotel.quote.lowestPreTaxSevenNightMath} pre-tax (non-refundable); ${hotel.quote.flexiblePreTaxSevenNightMath} pre-tax (flexible)`
        : '—';
      const rankCites = [...hotel.sources, 'metroPlanner'].filter((id, index, arr) => arr.indexOf(id) === index);
      return `<tr>
        <td><strong>${esc(hotel.name)}</strong><br>${esc(hotel.area)}<div class="row-cites">${cites(hotel.sources.filter((id) => /Hotel/.test(id)), data, { compact: true })}</div></td>
        <td>${esc(hotel.room)}<br>${esc(hotel.bed)}<div class="row-cites">${cites(roomCites.length ? roomCites : hotel.sources, data, { compact: true })}</div></td>
        <td>${badge(hotel.bathroom.status, hotel.bathroom.status === 'unverified' ? 'Unverified' : 'Needs private-bath confirmation')}<br>${esc(hotel.bathroom.text)}<div class="row-cites">${cites(hotel.sources.filter((id) => /Room|FactSheet/.test(id)), data, { compact: true })}</div></td>
        <td>${quoteText === '—' ? '—' : `<strong>${esc(quoteText)}</strong>`}<br>${hotel.quote.status === 'unverified' ? 'No dated quote captured.' : 'Final payable total: —'}<div class="row-cites">${cites(hotel.sources.filter((id) => /Rates|Offers/.test(id)).length ? hotel.sources.filter((id) => /Rates|Offers/.test(id)) : hotel.sources, data, { compact: true })}</div></td>
        <td>${esc(hotel.onPropertyRestaurants.join('; '))}<br>${badge('not ranked', 'Transit reach not scored')}<div class="row-cites">${cites(rankCites, data, { compact: true })}</div></td>
      </tr>`;
    }).join('');
    const priority = data.openQuestions.filter((question) => question.priority === 'high');

    return `<section class="hero" aria-labelledby="home-title">
      <div class="hero-content">
        <p class="eyebrow">Research brief · ${shortDate(meta.checkedOn)}</p>
        <h1 id="home-title">Shanghai, with the unknowns left visible.</h1>
        <p class="lede">A source-linked working plan for two adults. Keep what is confirmed, mark what is provisional, and leave unsupported prices and comparisons blank.</p>
        <div class="hero-meta">
          <span><span class="dot" aria-hidden="true"></span>${esc(stay.nights)} nights · ${esc(stay.adults)} adults</span>
          <span>${shortDate(stay.checkIn)} — ${shortDate(stay.checkOut)}</span>
          <span>${badge('partial', 'Provisional dates')}</span>
        </div>
      </div>
      <aside class="hero-quote" aria-label="Only captured dated hotel quote">
        <p class="label">Only usable dated hotel quote · The Peninsula Shanghai</p>
        <h2>One rate, not an all-in total.</h2>
        <span class="price">${esc(quote.lowestPreTaxSevenNightMath)}</span>
        <span class="price-caption">7 nights · New Year offer · before taxes and fees</span>
        <div class="quote-row"><span>Flexible Premier Rate</span><strong>${esc(quote.flexiblePreTaxSevenNightMath)}*</strong></div>
        <div class="quote-row"><span>Final payable total</span><strong>—</strong></div>
        <p class="micro" style="color:#c5cfcb;margin:10px 0 0">*Also before taxes and fees. The lower offer is non-refundable/non-amendable and says “Book before 8 Dec.”</p>
        ${cites(['penRates', 'penRoom', 'penFactSheet'], data, { compact: true })}
      </aside>
    </section>

    <div class="stats-grid" aria-label="Trip research snapshot">${stats}</div>

    <section class="section" aria-labelledby="executive-title">
      <div class="section-head"><div><span class="section-kicker">Executive summary</span><h2 id="executive-title">A useful shortlist. Not a booking decision yet.</h2><p>${esc(summary.executiveSummary)}</p></div></div>
      <div class="callout gold"><p><strong>Dates and destination remain provisional.</strong> The working stay is 15–22 February 2027, within the requested travel window and preferred dates. The official 2027 Spring Festival break is 5–13 February, with 14 February a make-up workday; that holiday notice does not confirm individual hotel, restaurant or attraction schedules.</p>${cites(['holiday'], data, { compact: true })}</div>
    </section>

    <section class="section" aria-labelledby="findings-title">
      <div class="section-head"><div><span class="section-kicker">What the sources support</span><h2 id="findings-title">Strong facts, carefully bounded.</h2><p>The labels distinguish published facts from calculations and open questions. Menu snapshots and awards are edition-specific, not a guarantee of February 2027 service.</p></div><a class="section-link" href="analysis.html">Read the analysis →</a></div>
      <div class="grid-2">${summary.findings.map((item) => findingCard(item, data)).join('')}</div>
    </section>

    <section class="section" aria-labelledby="hotel-snapshot-title">
      <div class="section-head"><div><span class="section-kicker">Hotel comparison · no rank assigned</span><h2 id="hotel-snapshot-title">Four stays to investigate.</h2><p>Only one dated quote is usable. A bathroom feature is not treated as an explicit private-bathroom confirmation; the one-hour transit restaurant catchment is unverified.</p></div><a class="section-link" href="hotels.html">Open hotel comparison →</a></div>
      <div class="table-wrap"><table>
        <caption>Every row links to the official hotel, room, price or restaurant source used. Dashes indicate no verified value.</caption>
        <thead><tr><th>Hotel & area</th><th>Room & bed</th><th>Bathroom requirement</th><th>Seven-night quote</th><th>Dining & transit reach</th></tr></thead>
        <tbody>${shortlist}</tbody>
      </table></div>
    </section>

    <section class="section" aria-labelledby="review-title">
      <div class="section-head"><div><span class="section-kicker">Open before booking</span><h2 id="review-title">Three high-priority research gaps.</h2><p>These are being handled as independent research tasks. No manual input is required from you at this stage.</p></div><a class="section-link" href="analysis.html#open-questions">See all questions →</a></div>
      <div class="grid-3">${priority.slice(0, 3).map((item) => `<article class="card"><span class="card-label">High priority · research gap</span><h3>${esc(item.topic)}</h3><p>${esc(item.unknown)}</p>${cites(item.sources, data, { compact: true })}</article>`).join('')}</div>
    </section>

    <section class="section" aria-labelledby="next-title">
      <div class="section-head"><div><span class="section-kicker">Explore the planner</span><h2 id="next-title">Research in six parts.</h2><p>Each page includes direct manual-review links and status notes beside the data.</p></div></div>
      <div class="grid-4">
        <article class="card"><span class="card-label">01 / Stay</span><h3>Compare rooms & rates</h3><p>Bed configuration, bathroom evidence, amenities and seven-night totals.</p><a class="link-arrow" href="hotels.html">Hotels</a></article>
        <article class="card"><span class="card-label">02 / Table</span><h3>Michelin, with labels</h3><p>Current 2026 stars kept distinct from Guide-listed or unverified status.</p><a class="link-arrow" href="restaurants.html">Dining</a></article>
        <article class="card"><span class="card-label">03 / Visit</span><h3>Hours & open days</h3><p>Official activity schedules, closures, ticket gaps and a sample-week calendar.</p><a class="link-arrow" href="activities.html">Things to do</a></article>
        <article class="card"><span class="card-label">04 / Verify</span><h3>Sources & decisions</h3><p>Review suggestions, unresolved questions and the complete source register.</p><a class="link-arrow" href="analysis.html">Analysis & review</a></article>
      </div>
    </section>`;
  }

  function hotelRatePanel(hotel, data) {
    const q = hotel.quote;
    if (q.status === 'unverified') {
      return `<div class="quote-panel no-quote">
        <div class="quote-panel-head"><strong>Seven-night dated quote</strong>${badge('unverified', 'Not captured')}</div>
        <p class="small-note" style="margin:0 0 8px">Rate: — · Seven-night total: — · Taxes/fees: —<br>${esc(q.terms)}</p>
        ${cites(hotel.sources.filter((id) => /Rates|Offers|Hotel/.test(id)).length ? hotel.sources.filter((id) => /Rates|Offers|Hotel/.test(id)) : hotel.sources, data, { compact: true })}
      </div>`;
    }
    return `<div class="quote-panel">
      <div class="quote-panel-head"><strong>${esc(q.dateRange)} · ${esc(q.guests)}</strong>${badge(q.status, 'Dated quote · partial total')}</div>
      <div class="quote-costs">
        <div class="quote-cost"><span>${esc(q.lowestRateLabel)} · avg/night</span><strong>${esc(q.lowestNightlyAverage)}</strong><span>7-night math: ${esc(q.lowestPreTaxSevenNightMath)} before tax/fees · non-refundable</span></div>
        <div class="quote-cost"><span>${esc(q.flexibleRateLabel)} · avg/night</span><strong>${esc(q.flexibleNightlyAverage)}</strong><span>7-night math: ${esc(q.flexiblePreTaxSevenNightMath)} before tax/fees · flexible rate</span></div>
      </div>
      <p class="small-note" style="margin:10px 0 0">Final payable total: —. ${esc(q.taxesAndFees)} ${esc(q.terms)} Offer deadline: ${esc(q.offerDeadline)}</p>
      ${q.otherRate ? `<p class="small-note" style="margin:8px 0 0">${esc(q.otherRate)}</p>` : ''}
      ${cites(hotel.sources.filter((id) => /Rates|Room|FactSheet/.test(id)), data, { compact: true })}
    </div>`;
  }

  function hotelCard(hotel, index, data) {
    const bathroomLabel = hotel.bathroom.status === 'unverified' ? 'Private bathroom unverified' : 'Private bathroom not yet explicit';
    const bedCites = hotel.sources.filter((id) => /Room/.test(id));
    const amenities = (hotel.amenities || []).map((item) => `<span class="tag">${esc(item)}</span>`).join(' ');
    const allCites = [...hotel.sources, 'metroPlanner'].filter((id, i, arr) => arr.indexOf(id) === i);
    return `<article class="card hotel-card">
      <div class="hotel-card-head"><div><h3>${esc(hotel.name)}</h3><span class="area">${esc(hotel.area)} · ${esc(hotel.room)}</span></div><span class="hotel-number">0${index + 1} / 04</span></div>
      <p class="small-note" style="margin:0">${esc(hotel.location)}</p>
      <div class="hotel-facts">
        <div class="fact"><span class="fact-label">Bed setup</span><div class="fact-value">${esc(hotel.bed)}<br>${cites(bedCites.length ? bedCites : hotel.sources, data, { compact: true })}</div></div>
        <div class="fact"><span class="fact-label">Guest capacity</span><div class="fact-value">${esc(hotel.capacity)}<br>${cites(bedCites.length ? bedCites : hotel.sources, data, { compact: true })}</div></div>
        <div class="fact"><span class="fact-label">Private bathroom</span><div class="fact-value">${badge(hotel.bathroom.status, bathroomLabel)}<br>${esc(hotel.bathroom.text)}<br>${cites(hotel.sources.filter((id) => /Room|FactSheet/.test(id)), data, { compact: true })}</div></div>
        <div class="fact"><span class="fact-label">Location / amenities</span><div class="fact-value">${(hotel.amenities || []).map(esc).join('; ')}<br>${cites(hotel.sources.filter((id) => /Hotel|Spa/.test(id)), data, { compact: true })}</div></div>
      </div>
      ${hotelRatePanel(hotel, data)}
      <div><span class="card-label">On-property restaurants · not a transit catchment</span><p class="small-note">${esc(hotel.onPropertyRestaurants.join(' · '))}<br>One-hour subway/bus Michelin count: — · Hotel rank: not assigned.</p></div>
      ${cites(allCites, data, { compact: true })}
    </article>`;
  }

  function hotelsPage(data) {
    const hotels = data.hotels;
    const comparisonRows = hotels.map((hotel) => {
      const sources = [...hotel.sources, 'metroPlanner'].filter((id, index, arr) => arr.indexOf(id) === index);
      const roomSources = hotel.sources.filter((id) => /Room|FactSheet/.test(id));
      const cost = hotel.quote.lowestPreTaxSevenNightMath
        ? `<strong>${esc(hotel.quote.lowestPreTaxSevenNightMath)}</strong> pre-tax; flexible ${esc(hotel.quote.flexiblePreTaxSevenNightMath)} pre-tax`
        : '—';
      return `<tr>
        <td><strong>${esc(hotel.name)}</strong><br>${esc(hotel.area)}<div class="row-cites">${cites(hotel.sources.filter((id) => /Hotel/.test(id)), data, { compact: true })}</div></td>
        <td>${esc(hotel.room)} · ${esc(hotel.bed)}<br>Capacity: ${esc(hotel.capacity)}<div class="row-cites">${cites(roomSources.length ? roomSources : hotel.sources, data, { compact: true })}</div></td>
        <td>${badge(hotel.bathroom.status, hotel.bathroom.status === 'unverified' ? 'Unverified' : 'Not explicit')}<br>${esc(hotel.bathroom.text)}<div class="row-cites">${cites(roomSources.length ? roomSources : hotel.sources, data, { compact: true })}</div></td>
        <td>${cost}<br>Final payable total: —<br>${hotel.quote.status === 'unverified' ? 'No dated quote captured.' : esc(hotel.quote.taxesAndFees)}<div class="row-cites">${cites(hotel.sources.filter((id) => /Rates|Offers/.test(id)).length ? hotel.sources.filter((id) => /Rates|Offers/.test(id)) : hotel.sources, data, { compact: true })}</div></td>
        <td>${esc(hotel.onPropertyRestaurants.join('; '))}<br>One-hour transit count: —<div class="row-cites">${cites(sources, data, { compact: true })}</div></td>
      </tr>`;
    }).join('');
    return `<div class="page-intro">
      <p class="eyebrow">01 · Hotel shortlist</p><h1>Compare stays. Keep the gates strict.</h1>
      <p class="lede">Four Shanghai hotels have room, location and amenity information from official pages. Only one has a usable quote for the sample dates, and it is not a final payable total.</p>
      <p>${badge('unverified', 'No complete requirement match confirmed')} <span class="small-note">The strict room test is a king/queen-size-or-larger bed for two adults plus a private bathroom. The pages describe bed and bathroom features, but private/en-suite wording or selected-room confirmation remains open for these candidates.</span></p>
    </div>

    <div class="callout"><p><strong>Ranking withheld by design.</strong> Price cannot be compared across hotels without same-date, same-occupancy all-in quotes. The public-transit Michelin catchment has not been route-checked. On-site restaurants and neighborhood descriptions are shown as context only; they do not substitute for one-hour subway/bus route evidence.</p>${cites(['penRates', 'langhamHotel', 'bvlgariHotel', 'ritzHotel', 'metroPlanner'], data, { compact: true })}</div>

    <section class="section" aria-labelledby="hotel-cards-title">
      <div class="section-head"><div><span class="section-kicker">Room fit · amenities · quote status</span><h2 id="hotel-cards-title">The four candidates</h2><p>Bed choices and bathroom features are linked to the room-specific sources. Where exact occupancy, private-bath wording or rate is missing, it stays unverified.</p></div></div>
      <div class="hotel-grid">${hotels.map((hotel, index) => hotelCard(hotel, index, data)).join('')}</div>
    </section>

    <section class="section" aria-labelledby="hotel-table-title">
      <div class="section-head"><div><span class="section-kicker">Side-by-side</span><h2 id="hotel-table-title">What can be compared today</h2><p>Every row carries source links. “—” means no confirmed value has been captured.</p></div></div>
      <div class="table-wrap"><table>
        <caption>Room and price evidence checked ${shortDate(data.meta.checkedOn)}. The seven-night calculations are based on displayed averages and exclude unconfirmed costs.</caption>
        <thead><tr><th>Property & area</th><th>Room / bed / guests</th><th>Private bathroom gate</th><th>7-night price evidence</th><th>MICHELIN & transit</th></tr></thead>
        <tbody>${comparisonRows}</tbody>
      </table></div>
    </section>

    <section class="section">
      <div class="section-head"><div><span class="section-kicker">How to close the comparison</span><h2>Request equivalent answers, in writing.</h2></div></div>
      <div class="grid-3">
        <article class="card"><span class="card-label">Room requirement</span><h3>Confirm the exact category</h3><p>Ask for a room with a king (or equivalent/larger) bed, occupancy for two adults, and an en-suite/private bathroom, explicitly confirmed for the booked room.</p>${cites(['penRoom', 'langhamRoom', 'bvlgariRoom', 'ritzRoom'], data, { compact: true })}</article>
        <article class="card"><span class="card-label">Rate requirement</span><h3>Use the same date-and-fee basis</h3><p>Request 15–22 February 2027, one room, two adults, seven nights, all taxes/fees, breakfast inclusion, cancellation cutoff and a final payable total.</p>${cites(['penRates', 'langhamHotel', 'bvlgariHotel', 'ritzHotel'], data, { compact: true })}</article>
        <article class="card"><span class="card-label">Transit requirement</span><h3>Save route evidence</h3><p>Record each starting hotel station, restaurant stop, transfers, fare and estimated journey time in the official planner. Until then, the one-hour Michelin count remains blank.</p>${cites(['metroPlanner', 'transportApp'], data, { compact: true })}</article>
      </div>
    </section>`;
  }

  function michelinPresentation(restaurant) {
    const award = restaurant.michelin;
    if (award.kind === 'starred') {
      return `<span class="michelin-pill"><span class="star-mark" aria-hidden="true">${'★'.repeat(award.stars)}</span> ${esc(award.stars)} Michelin ${award.stars === 1 ? 'star' : 'stars'} · ${esc(award.guideYear)}</span>`;
    }
    if (award.kind === 'guide-listed') return `<span class="michelin-pill guide-listed">2026 Guide-listed · no star shown</span>`;
    return `<span class="michelin-pill unverified">Shanghai Guide distinction not verified</span>`;
  }

  function restaurantCard(restaurant, data) {
    const cost = restaurant.coupleCost;
    const costText = cost.value == null ? '—' : cost.value;
    const costLabel = cost.value == null ? 'Price for two not verified' : cost.status.includes('calculation') ? 'Calculated from published menu' : 'Published menu snapshot';
    const costSources = restaurant.sources.filter((id) => /Menu|FAQ/.test(id));
    const hoursSources = restaurant.sources.filter((id) => !/Menu|Michelin/.test(id));
    const social = (restaurant.social || []).map((id) => {
      const source = data.sources[id];
      if (!source) return '';
      return `<a class="text-link" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer" title="${esc(source.title)}">${esc(source.title.split('—').slice(-1)[0].trim())} ↗</a>`;
    }).filter(Boolean).join(' · ');
    return `<article class="card restaurant-card">
      <div class="card-top"><div><span class="card-label">${esc(restaurant.cluster)}${restaurant.onProperty ? ' · on property' : ''}</span><h3 class="card-title">${esc(restaurant.name)}</h3><p class="card-subtitle">${esc(restaurant.cuisine)} · ${esc(restaurant.address)}</p></div></div>
      <div style="margin-top:12px">${michelinPresentation(restaurant)}</div>
      <div class="restaurant-detail">
        <div class="detail-box"><span class="detail-label">Two-person menu / meal cost</span><div class="cost-figure">${esc(costText)} <small>${cost.value == null ? '' : 'for two'}</small></div><p>${esc(costLabel)}. ${esc(cost.basis)}</p><p style="margin-top:5px;color:#8d5b45">${esc(cost.limitation)}</p>${cites(costSources.length ? costSources : restaurant.sources, data, { compact: true })}</div>
        <div class="detail-box"><span class="detail-label">Hours & exceptions</span><p>${esc(restaurant.hours)}</p><p style="margin-top:5px">${esc(restaurant.booking)}</p>${cites(hoursSources.length ? hoursSources : restaurant.sources, data, { compact: true })}</div>
      </div>
      <p class="small-note" style="margin:0">One-hour subway/bus reach from candidate hotels: —; no route time has been verified. Social: ${social || 'No confirmed venue-specific account.'} ${restaurant.socialNote ? `<br>${esc(restaurant.socialNote)}` : ''}</p>
      ${cites(restaurant.sources, data, { compact: true })}
    </article>`;
  }

  function restaurantsPage(data) {
    const restaurants = data.restaurants;
    const starred = restaurants.filter((restaurant) => restaurant.michelin.kind === 'starred').length;
    const guideListed = restaurants.filter((restaurant) => restaurant.michelin.kind === 'guide-listed').length;
    const unknown = restaurants.filter((restaurant) => restaurant.michelin.kind === 'unverified').length;
    return `<div class="page-intro">
      <p class="eyebrow">02 · Dining & guide distinctions</p><h1>Michelin, menus and hours—labelled precisely.</h1>
      <p class="lede">This researched shortlist has six restaurants with 2026 Michelin stars, one 2026 Guide listing with no star shown in the captured page, and one Shanghai Guide distinction not verified. Current menu prices are snapshots, not February 2027 promises.</p>
    </div>
    <div class="metric-strip" aria-label="Michelin classification counts"><div><span class="metric-label">Starred in this researched set</span><strong>${starred} venues</strong><em>2026 edition; individual Guide links below</em>${cites(['langhamMichelin', 'baoMichelin', 'yiMichelin', 'jinMichelin', 'taianMichelin', 'fuMichelin'], data, { compact: true })}</div><div><span class="metric-label">Guide-listed · no star shown</span><strong>${guideListed} venue</strong><em>Sir Elly’s, captured Guide page</em>${cites(['sirMichelin'], data, { compact: true })}</div><div><span class="metric-label">Distinction not verified</span><strong>${unknown} venue</strong><em>Not counted as starred</em>${cites(['ilHotel'], data, { compact: true })}</div></div>
    <div class="callout blue" style="margin-top:17px"><p><strong>MICHELIN categories are not interchangeable.</strong> A Guide listing is not a star; Bib Gourmand and Selected distinctions would be labelled separately if verified. No such category is inferred here. The award status is for the 2026 Guide and should be rechecked before booking.</p>${cites(['langhamMichelin', 'baoMichelin', 'yiMichelin', 'jinMichelin', 'taianMichelin', 'fuMichelin', 'sirMichelin'], data, { compact: true })}</div>
    <section class="section" aria-labelledby="restaurant-cards-title">
      <div class="section-head"><div><span class="section-kicker">Eight researched restaurants</span><h2 id="restaurant-cards-title">Current choices and price evidence</h2><p>Costs are for two where an official menu/FAQ permits a direct total or simple published-price calculation. A dash is intentional when no representative meal total is verified.</p></div></div>
      <div class="restaurant-grid">${restaurants.map((restaurant) => restaurantCard(restaurant, data)).join('')}</div>
    </section>
    <section class="section">
      <div class="section-head"><div><span class="section-kicker">Planning guardrails</span><h2>What not to assume.</h2></div></div>
      <div class="grid-3">
        <article class="card"><span class="card-label">Award status</span><h3>Recheck the edition</h3><p>Stars shown here are the 2026 Shanghai Guide awards from individual restaurant pages or official restaurant/hotel award statements. Future status may change.</p>${cites(['taianMichelin', 'fuMichelin', 'langhamMichelin'], data, { compact: true })}</article>
        <article class="card"><span class="card-label">Menu amount</span><h3>Snapshot, not booking total</h3><p>2026 menu prices do not guarantee a 2027 price. Surcharges, supplements, beverages, deposits or seasonal changes can affect final charges where stated by the venue.</p>${cites(['langhamMenu', 'yiMenu', 'sirMenu', 'taianFaq'], data, { compact: true })}</article>
        <article class="card"><span class="card-label">One-hour clusters</span><h3>No transit claim yet</h3><p>On-property restaurants are separated from a one-hour transit catchment. No hotel-to-restaurant route duration or fare is claimed until an official route result is recorded.</p>${cites(['metroPlanner'], data, { compact: true })}</article>
      </div>
    </section>`;
  }

  function activityCard(activity, data) {
    const price = activity.admissionCost == null ? '—' : activity.admissionCost;
    const media = (activity.media || []).map((id) => data.sources[id]).filter(Boolean).map((source) => `<a class="text-link" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer" title="${esc(source.title)}">${esc(source.title.split('—').slice(-1)[0].trim())} ↗</a>`).join(' · ');
    return `<article class="card activity-card">
      <span class="card-label">${esc(activity.type)} · ${esc(activity.address)}</span><h3>${esc(activity.name)}</h3>
      <div class="activity-facts">
        <div class="activity-fact"><strong>Published schedule</strong><span>${activity.hours == null ? '—' : esc(activity.hours)}${activity.closures ? `<br>${esc(activity.closures)}` : ''}</span></div>
        <div class="activity-fact"><strong>Ticket / admission price</strong><span>${esc(price)} · ${badge(activity.costStatus, activity.costStatus === 'unverified' ? 'Unverified' : 'Published')}</span>${activity.optionalCosts ? `<span style="margin-top:6px">${esc(activity.optionalCosts)}</span>` : ''}</div>
      </div>
      <div class="detail-box"><span class="detail-label">Date fit & booking rule</span><p>${esc(activity.dateFit)}</p><p style="margin-top:6px">${esc(activity.reservation)}</p></div>
      ${activity.transport ? `<div class="detail-box" style="margin-top:9px"><span class="detail-label">Transit / access info</span><p>${esc(activity.transport)}</p></div>` : ''}
      <p class="small-note" style="margin:12px 0 0">Social/video: ${media || 'No venue-linked video profile confirmed.'}${activity.socialNote ? `<br>${esc(activity.socialNote)}` : ''}</p>
      ${cites(activity.sources, data, { compact: true })}
    </article>`;
  }

  function activitiesPage(data) {
    const rows = data.calendar.map((day) => `<div class="day-card"><div class="day-date"><span>${shortDate(day.date)}</span><span>${esc(day.day)}</span></div><p class="day-status"><strong>East:</strong> ${esc(day.museumEast)}</p><p class="day-status"><strong>People’s Square:</strong> ${esc(day.museumWest)}</p>${cites(data.calendarSources, data, { compact: true })}</div>`).join('');
    return `<div class="page-intro">
      <p class="eyebrow">03 · Activities & weekly schedule</p><h1>See what is open—and what is not priced.</h1>
      <p class="lede">Official visitor information gives the two Shanghai Museum sites’ regular weekly hours. Shanghai Disneyland and the Shanghai Tower observatory still need date-specific 2027 opening and ticket checks.</p>
    </div>
    <div class="callout gold"><p><strong>Future-calendar caution.</strong> “Date fit” below maps the currently published weekly schedule to 15–22 February 2027. It is not a confirmation that a venue will operate on those dates. General admission prices for both museum sites, Disney’s 2027 ticket/calendar, and Shanghai Tower visitor hours/prices are left blank where not verified.</p>${cites(['museumEast', 'museumWest', 'disneyHome', 'towerPage'], data, { compact: true })}</div>
    <section class="section" aria-labelledby="activity-cards-title">
      <div class="section-head"><div><span class="section-kicker">Four researched activities</span><h2 id="activity-cards-title">Hours, closures & ticket gaps</h2><p>Source links accompany every entry; social links appear only where a profile was identified and the level of confirmation is noted.</p></div></div>
      <div class="activity-grid">${data.activities.map((activity) => activityCard(activity, data)).join('')}</div>
    </section>
    <section class="section" aria-labelledby="calendar-title">
      <div class="section-head"><div><span class="section-kicker">Working dates · two-adult, seven-night sample</span><h2 id="calendar-title">Shanghai Museum weekly pattern</h2><p>The mapping below is calculated from the official published weekday closure rules. Confirm the actual opening calendar and exhibition reservation requirements closer to the trip.</p></div></div>
      <div class="calendar-grid">${rows}</div>
      <div class="callout blue" style="margin-top:14px"><p><strong>Calendar logic:</strong> Shanghai Museum East is normally closed Tuesday; People’s Square is normally closed Monday, each with a stated national-holiday exception. The itinerary does not schedule visits by arrival/departure time, and this is not a final day plan.</p>${cites(['museumEast', 'museumWest', 'holiday'], data, { compact: true })}</div>
    </section>
    <section class="section">
      <div class="section-head"><div><span class="section-kicker">Next verification pass</span><h2>Confirm dates at the official channel.</h2></div></div>
      <div class="grid-3">
        <article class="card"><span class="card-label">Museum East</span><h3>Check exhibition tickets</h3><p>Individual reservation is generally not required, but selected galleries/exhibitions require advance reservation. Check the official announcement for the exact visit date.</p>${cites(['museumEast'], data, { compact: true })}</article>
        <article class="card"><span class="card-label">Disneyland</span><h3>Wait for date-specific calendar</h3><p>The FAQ points visitors to official ticket channels. The currently captured “starting from” price is not a February 2027 price; no date-specific hours or tickets are verified.</p>${cites(['disneyHome', 'disneyTicketFaq'], data, { compact: true })}</article>
        <article class="card"><span class="card-label">Shanghai Tower</span><h3>Distinguish hotline from deck hours</h3><p>The official page gives inquiry contacts and ticket channels, but the hotline’s operating hours are not the observatory’s opening hours. Ask for the exact visit date and price.</p>${cites(['towerPage'], data, { compact: true })}</article>
      </div>
    </section>`;
  }

  function suggestionCard(item, data, index) {
    return `<article class="suggestion-card"><span class="card-label">${String(index + 1).padStart(2, '0')} · ${esc(item.kind)}</span><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p>${cites(item.sources, data, { compact: true })}</article>`;
  }

  function questionBlock(question, data) {
    const priority = question.priority === 'high' ? 'High priority' : question.priority === 'medium' ? 'Medium priority' : 'Low priority';
    return `<details class="question"><summary><span>${esc(question.topic)}</span><span class="question-priority">${priority}</span></summary>
      <div class="question-content">
        <div><strong>Known</strong><p>${esc(question.known)}</p></div>
        <div><strong>Unknown</strong><p>${esc(question.unknown)}</p></div>
        <div><strong>How to close the gap</strong><p>${esc(question.resolve)}</p></div>
      </div>${cites(question.sources, data, { compact: true })}
    </details>`;
  }

  function analysisPage(data) {
    const overview = data.overview;
    const priorityHigh = data.openQuestions.filter((q) => q.priority === 'high').length;
    return `<div class="page-intro">
      <p class="eyebrow">04 · Analysis & review</p><h1>A clear shortlist. No false precision.</h1>
      <p class="lede">This is the decision-support layer: the evidence behind the current shortlist, explicit suggestions for review, and a practical path to close each gap. All remaining questions are research tasks; no manual input is needed from you right now.</p>
    </div>
    <section aria-labelledby="summary-title"><div class="section-head"><div><span class="section-kicker">Executive summary</span><h2 id="summary-title">${esc(data.meta.destination)} · ${shortDate(data.meta.stay.checkIn)} to ${shortDate(data.meta.stay.checkOut)}</h2><p>${esc(overview.executiveSummary)}</p></div></div>
      <div class="callout"><p><strong>Status: ${esc(data.meta.researchStatus)}</strong> ${esc(overview.holidayContext)}</p>${cites(['holiday', 'penRates'], data, { compact: true })}</div>
    </section>
    <section class="section" aria-labelledby="rank-title">
      <div class="section-head"><div><span class="section-kicker">Hotel analysis</span><h2 id="rank-title">No hotel ranking is defensible yet.</h2><p>${esc(data.meta.rankingReason)}</p></div></div>
      <div class="analysis-band">
        <article class="card"><span class="card-label">What can be described</span><h3>Location & amenities</h3><p>Official hotel pages establish property areas, listed room features and amenities. These facts are not converted into a weighted score or treated as transit evidence.</p>${cites(['penHotel', 'langhamHotel', 'bvlgariHotel', 'ritzHotel'], data, { compact: true })}</article>
        <article class="card"><span class="card-label">What blocks the ranking</span><h3>Two missing comparisons</h3><p>Comparable final seven-night totals for all four hotels, and verified subway/bus duration to each candidate Michelin restaurant. Until both exist, overall ranking stays blank.</p>${cites(['penRates', 'langhamOffers', 'bvlgariHotel', 'ritzHotel', 'metroPlanner'], data, { compact: true })}</article>
      </div>
      <div class="rank-steps">
        <div class="rank-step"><span class="num">01 / PRICE</span><strong>Comparable final totals</strong><span>Same dates, room, guest count, fees and cancellation basis. Only one partial pre-tax quote exists.</span></div>
        <div class="rank-step"><span class="num">02 / LOCATION + AMENITIES</span><strong>Context, not score</strong><span>Property neighborhoods and facilities are sourced; weights and a preferred area are not assumed.</span></div>
        <div class="rank-step"><span class="num">03 / MICHELIN TRANSIT DENSITY</span><strong>Route evidence required</strong><span>One-hour subway/bus reach is not counted without route duration and connection records.</span></div>
      </div>
    </section>
    <section class="section" aria-labelledby="timing-title">
      <div class="section-head"><div><span class="section-kicker">Booking timing & date context</span><h2 id="timing-title">No universal cheapest booking date is established.</h2><p>${esc(overview.bookingTiming)}</p>${cites(overview.bookingTimingSources, data, { compact: true })}</div></div>
      <div class="grid-2">
        <article class="card"><span class="card-label">Official holiday notice</span><h3>Spring Festival schedule</h3><p>${esc(overview.holidayContext)}</p>${cites(['holiday'], data, { compact: true })}</article>
        <article class="card"><span class="card-label">Reservations</span><h3>Taian Table’s window is open by its published rule</h3><p>Its FAQ says bookings open up to 90 days ahead. On the research date, the sample stay is 82–89 days away. That is a window calculation, not an availability check or confirmed booking.</p>${cites(['taianFaq'], data, { compact: true })}</article>
      </div>
    </section>
    <section class="section" aria-labelledby="suggestions-title">
      <div class="section-head"><div><span class="section-kicker">Suggestions for review · separate from verified facts</span><h2 id="suggestions-title">Practical next steps</h2><p>These are recommendations, not verified travel facts or reservations.</p></div></div>
      <div class="suggestion-grid">${data.suggestions.map((item, index) => suggestionCard(item, data, index)).join('')}</div>
    </section>
    <section class="section" id="open-questions" aria-labelledby="questions-title">
      <div class="section-head"><div><span class="section-kicker">Open questions · known / unknown / resolution path</span><h2 id="questions-title">${data.openQuestions.length} gaps, each with a way to close it.</h2><p>${priorityHigh} high-priority research gaps remain. They are intentionally visible rather than filled with estimates.</p></div></div>
      <div class="question-list">${data.openQuestions.map((question) => questionBlock(question, data)).join('')}</div>
    </section>
    <section class="section">
      <div class="section-head"><div><span class="section-kicker">Verification principle</span><h2>Evidence first; calculations labelled.</h2></div></div>
      <div class="callout green"><p>Only official-source-supported facts are labelled as sourced. Calculated couple costs and seven-night pre-tax arithmetic are identified as calculations based on those source prices. Missing totals, private-bathroom confirmation, date-specific hours, and route distances remain blank/unverified.</p>${cites(['penRates', 'penFactSheet', 'metroPlanner'], data, { compact: true })}</div>
    </section>`;
  }

  function sourceGroup(id, source) {
    if (id === 'holiday') return 'Official dates & public calendar';
    if (/instagram|youtube|social/i.test(id) || /social profile/i.test(source.type || '') || /instagram|youtube/i.test(source.title || '')) return 'Social & video links';
    if (/metro|transport/i.test(id) || /transit/i.test(source.type || '')) return 'Transit & access';
    if (/museum|disney|tower/i.test(id)) return 'Activities & visitor information';
    if (/menu|michelin|taian|tang|bao|ilHotel|ilMenu|yi|sir|jin|fu/i.test(id)) return 'Restaurants & MICHELIN';
    return 'Hotels & rooms';
  }

  function sourceRow(id, source) {
    const searchable = `${id} ${source.title} ${source.type} ${source.supports} ${source.limitation}`.toLowerCase();
    return `<article class="source-row" data-source-search="${esc(searchable)}" id="ref-${esc(id)}">
      <div class="source-name"><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)} ↗</a></div>
      <div class="source-type">${esc(source.type)}</div>
      <div class="source-support"><strong>Supports:</strong> ${esc(source.supports)}${source.limitation ? `<em><strong>Limit:</strong> ${esc(source.limitation)}</em>` : ''}</div>
      <div class="source-date">Checked ${shortDate(source.checkedOn || '')}</div>
    </article>`;
  }

  function sourcesPage(data) {
    const groups = {};
    Object.entries(data.sources).forEach(([id, source]) => {
      const group = sourceGroup(id, source);
      groups[group] ||= [];
      groups[group].push([id, source]);
    });
    const order = ['Official dates & public calendar', 'Hotels & rooms', 'Restaurants & MICHELIN', 'Activities & visitor information', 'Transit & access', 'Social & video links'];
    const sections = order.filter((name) => groups[name]?.length).map((name) => `<section class="source-section" aria-label="${esc(name)}"><h2 class="source-group-title">${esc(name)} · ${groups[name].length}</h2><div class="source-list">${groups[name].map(([id, source]) => sourceRow(id, source)).join('')}</div></section>`).join('');
    const sourceCount = Object.keys(data.sources).length;
    return `<div class="page-intro">
      <p class="eyebrow">05 · Manual review</p><h1>The source register.</h1>
      <p class="lede">${sourceCount} source records used to support the dashboard’s current facts, calculations, gaps and social-profile notes. Open the original page or PDF, then review the stated limitation before relying on a value.</p>
    </div>
    <div class="callout blue"><p><strong>Verification convention.</strong> Official pages are used for room features, rates, menus, hours and ticket channels. MICHELIN Guide pages support edition-specific distinctions. Related social profiles are not presented as official venue accounts unless the source record explicitly says they are linked by the venue. A source does not verify beyond its stated scope.</p></div>
    <div class="source-tools"><label class="search-box"><span aria-hidden="true">⌕</span><input id="source-search" type="search" placeholder="Filter by venue, topic, source type…" aria-label="Filter sources"></label><span id="source-count" class="source-count">${sourceCount} source records</span></div>
    <div id="source-groups">${sections}</div><p class="empty-search" id="empty-search">No source matches that filter. Try a venue name such as “Peninsula”, “Michelin”, “museum” or “transit”.</p>
    <section class="section"><div class="section-head"><div><span class="section-kicker">Review process</span><h2>Use the original, not a screenshot.</h2><p>For rates, save the dated quote and final checkout with taxes/fees. For schedules, confirm the date-specific calendar. For MICHELIN status, use the edition-specific restaurant page. For transit catchments, preserve the route query and result.</p></div></div><div class="grid-3">
      <article class="card"><span class="card-label">Rates</span><h3>Keep date and room constant</h3><p>Compare 15–22 February 2027 for two adults, one king room, seven nights, taxes/fees, and the same cancellation basis.</p>${cites(['penRates', 'langhamOffers'], data, { compact: true })}</article>
      <article class="card"><span class="card-label">Hours & menu</span><h3>Recheck before the visit</h3><p>These pages were checked 25 November 2026; 2026 menus and awards are snapshots. Verify the 2027 operating day and final booking terms.</p>${cites(['langhamDining', 'museumEast', 'disneyHome'], data, { compact: true })}</article>
      <article class="card"><span class="card-label">Transit</span><h3>Capture route evidence</h3><p>The official English Shanghai Metro inquiry form is available, but this research did not submit hotel-to-restaurant routes.</p>${cites(['metroPlanner'], data, { compact: true })}</article>
    </div></section>`;
  }

  const renderers = {
    home: homePage,
    hotels: hotelsPage,
    restaurants: restaurantsPage,
    activities: activitiesPage,
    analysis: analysisPage,
    sources: sourcesPage
  };

  async function start() {
    const root = document.getElementById('site');
    try {
      const response = await fetch('data/research.json', { cache: 'no-cache' });
      if (!response.ok) throw new Error(`Could not load research data (${response.status})`);
      const data = await response.json();
      const renderer = renderers[PAGE] || renderers.home;
      shell(data, renderer(data));
      document.title = `${PAGE === 'home' ? 'Overview' : PAGE.charAt(0).toUpperCase() + PAGE.slice(1)} · China Vacation Fieldnotes`;
      const sourceSearch = document.getElementById('source-search');
      if (sourceSearch) {
        sourceSearch.addEventListener('input', () => {
          const query = sourceSearch.value.trim().toLowerCase();
          const rows = [...document.querySelectorAll('.source-row')];
          let visible = 0;
          rows.forEach((row) => {
            const show = !query || row.dataset.sourceSearch.includes(query);
            row.hidden = !show;
            if (show) visible += 1;
          });
          document.querySelectorAll('.source-section').forEach((section) => {
            section.hidden = !section.querySelector('.source-row:not([hidden])');
          });
          document.getElementById('source-count').textContent = `${visible} of ${rows.length} source records`;
          document.getElementById('empty-search').style.display = visible ? 'none' : 'block';
        });
      }
      if (window.location.hash) {
        requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
      }
    } catch (error) {
      console.error(error);
      root.innerHTML = `<main class="page-shell" style="width:min(calc(100% - 32px),760px);margin:0 auto"><div class="callout"><p><strong>Research dashboard did not load.</strong> ${esc(error.message)}. If opening this file directly from disk, use a local web server so the JSON data can be fetched.</p></div></main>`;
    }
  }

  start();
})();
