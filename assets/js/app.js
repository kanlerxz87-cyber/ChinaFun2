// ChinaFun2 — vanilla JS: mobile nav active state, table search/filter, sort, count
document.addEventListener('DOMContentLoaded', function () {
  // Active nav
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.mainnav a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Generic table filter: input[data-filter] filters rows in table[data-table]
  document.querySelectorAll('input[data-filter]').forEach(function (input) {
    var tableId = input.getAttribute('data-filter');
    var table = document.getElementById(tableId);
    if (!table) return;
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      var rows = table.querySelectorAll('tbody tr');
      var shown = 0;
      rows.forEach(function (row) {
        var hit = row.textContent.toLowerCase().indexOf(q) !== -1;
        row.style.display = hit ? '' : 'none';
        if (hit) shown++;
      });
      var counter = document.getElementById(tableId + '-count');
      if (counter) counter.textContent = shown + ' of ' + rows.length + ' rows shown';
    });
  });

  // Sortable headers: th[data-sort] sorts its column
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
        headers.forEach(function (h) { h.removeAttribute('data-dir'); });
        th.setAttribute('data-dir', dir);
        rows.sort(function (a, b) {
          var av = (a.children[idx] ? a.children[idx].textContent : '').trim().toLowerCase();
          var bv = (b.children[idx] ? b.children[idx].textContent : '').trim().toLowerCase();
          var an = parseFloat(av.replace(/[^0-9.\-]/g, ''));
          var bn = parseFloat(bv.replace(/[^0-9.\-]/g, ''));
          var cmp;
          if (!isNaN(an) && !isNaN(bn) && av !== '' && bv !== '') cmp = an - bn;
          else cmp = av.localeCompare(bv);
          return dir === 'asc' ? cmp : -cmp;
        });
        rows.forEach(function (r) { tbody.appendChild(r); });
      });
    });
  });

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
