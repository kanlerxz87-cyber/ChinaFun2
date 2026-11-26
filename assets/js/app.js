// ChinaFun2 — vanilla JS: active nav, combined city-chip + text search filter, accessible sort
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.mainnav a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  function applyTableFilters(tableId) {
    var table = document.getElementById(tableId);
    if (!table) return;
    var input = document.querySelector('input[data-filter="' + tableId + '"]');
    var activeChip = document.querySelector('button[data-city-filter="' + tableId + '"].active');
    var q = input ? input.value.trim().toLowerCase() : '';
    var city = activeChip ? (activeChip.getAttribute('data-city') || '').trim().toLowerCase() : '';
    var rows = table.querySelectorAll('tbody tr');
    var shown = 0;
    rows.forEach(function (row) {
      var text = row.textContent.toLowerCase();
      var firstCell = (row.children[0] ? row.children[0].textContent : '').toLowerCase();
      var hitQuery = !q || text.indexOf(q) !== -1;
      var hitCity = !city || firstCell.indexOf(city) !== -1;
      var hit = hitQuery && hitCity;
      row.style.display = hit ? '' : 'none';
      if (hit) shown++;
    });
    var counter = document.getElementById(tableId + '-count');
    if (counter) counter.textContent = shown + ' of ' + rows.length + ' rows shown';
  }

  document.querySelectorAll('input[data-filter]').forEach(function (input) {
    var tableId = input.getAttribute('data-filter');
    input.addEventListener('input', function () { applyTableFilters(tableId); });
  });

  document.querySelectorAll('button[data-city-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tableId = btn.getAttribute('data-city-filter');
      document.querySelectorAll('button[data-city-filter="' + tableId + '"]').forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      applyTableFilters(tableId);
    });
  });

  document.querySelectorAll('table[data-sortable]').forEach(function (table) {
    var headers = table.querySelectorAll('th[data-sort]');
    headers.forEach(function (th) {
      th.style.cursor = 'pointer';
      th.title = 'Click to sort';
      th.addEventListener('click', function () {
        var idx = Array.prototype.indexOf.call(th.parentNode.children, th);
        var tbody = table.querySelector('tbody');
        var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
        var dir = th.getAttribute('data-dir') === 'asc' ? 'desc' : 'asc';
        headers.forEach(function (h) { h.removeAttribute('data-dir'); h.removeAttribute('aria-sort'); });
        th.setAttribute('data-dir', dir);
        th.setAttribute('aria-sort', dir === 'asc' ? 'ascending' : 'descending');
        rows.sort(function (a, b) {
          var av = (a.children[idx] ? a.children[idx].textContent : '').trim().toLowerCase();
          var bv = (b.children[idx] ? b.children[idx].textContent : '').trim().toLowerCase();
          var aBlank = av === '' || av === '—';
          var bBlank = bv === '' || bv === '—';
          if (aBlank !== bBlank) return aBlank ? 1 : -1;
          var numeric = /^-?\d+(\.\d+)?$/;
          var cmp;
          if (numeric.test(av) && numeric.test(bv)) cmp = Number(av) - Number(bv);
          else cmp = av.localeCompare(bv, undefined, { numeric: true });
          return dir === 'asc' ? cmp : -cmp;
        });
        rows.forEach(function (r) { tbody.appendChild(r); });
      });
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
