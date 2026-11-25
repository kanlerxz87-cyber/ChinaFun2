(function () {
  "use strict";

  // 1. Mobile Navigation Toggle
  var toggleBtn = document.querySelector("[data-menu-toggle]");
  var navLinks = document.querySelector("[data-nav-links]");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
      toggleBtn.textContent = isOpen ? "✕ Close Menu" : "☰ Pages";
    });
  }

  // 2. Interactive 2-Adult 7-Night Trip Cost Simulator (Dashboard & Hotels page)
  var simRoot = document.querySelector("[data-trip-simulator]");
  if (simRoot) {
    var hotelSelect = simRoot.querySelector("[data-sim-hotel]");
    var windowSelect = simRoot.querySelector("[data-sim-window]");
    var starredSelect = simRoot.querySelector("[data-sim-starred]");
    var guideSelect = simRoot.querySelector("[data-sim-guide]");
    var sightsSelect = simRoot.querySelector("[data-sim-sights]");
    var totalEl = simRoot.querySelector("[data-sim-total]");
    var breakdownEl = simRoot.querySelector("[data-sim-breakdown]");

    var HOTEL_RATES = {
      "crowne": { name: "Crowne Plaza Nanjing Rd (5★)", feb15: 839, feb22: 820, mar8: 1141 },
      "radisson": { name: "Radisson Blu New World Junior Suite (5★)", feb15: 1038, feb22: 1179, mar8: 1519 },
      "treasury": { name: "Treasury Hotel Windowed Queen (4★)", feb15: 836, feb22: 836, mar8: 836 },
      "andaz": { name: "Andaz Xintiandi by Hyatt (5★)", feb15: 1494, feb22: 1494, mar8: 2096 },
      "langham": { name: "The Langham Xintiandi (5★)", feb15: 1826, feb22: 1917, mar8: 2398 },
      "shangrila": { name: "Jing An Shangri-La (5★)", feb15: 1942, feb22: 1942, mar8: 2819 },
      "edition": { name: "The Shanghai EDITION (1 MICHELIN Key)", feb15: 2895, feb22: 2895, mar8: 3220 }
    };

    function recalc() {
      var hKey = hotelSelect.value;
      var wKey = windowSelect.value;
      var starredTier = Number(starredSelect.value);
      var guideTier = Number(guideSelect.value);
      var sightsCost = Number(sightsSelect.value);

      var hObj = HOTEL_RATES[hKey] || HOTEL_RATES.crowne;
      var hotelUsd = hObj[wKey] || hObj.feb15;
      var transitUsd = 37; // Verified RMB 26x4 Airport Link + 7d Metro rides for 2 adults
      var grandTotal = hotelUsd + starredTier + guideTier + sightsCost + transitUsd;

      totalEl.textContent = "$" + grandTotal.toLocaleString("en-US") + " USD";
      breakdownEl.textContent =
        "2-Adult 7-Night Ground Breakdown: Hotel $" + hotelUsd.toLocaleString("en-US") +
        " + Starred Dining $" + starredTier.toLocaleString("en-US") +
        " + Guide-Listed Dining $" + guideTier.toLocaleString("en-US") +
        " + Activities $" + sightsCost.toLocaleString("en-US") +
        " + Shanghai Metro/Airport Link $" + transitUsd +
        " (excludes international airfare).";
    }

    [hotelSelect, windowSelect, starredSelect, guideSelect, sightsSelect].forEach(function (el) {
      if (el) el.addEventListener("change", recalc);
    });
    recalc();
  }

  // 3. Generic Table Filter Controls (Restaurants, Activities, Hotels, Flagged)
  document.querySelectorAll("[data-filter-root]").forEach(function (root) {
    var targetId = root.getAttribute("data-filter-target");
    var table = document.getElementById(targetId);
    if (!table) return;
    var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
    var pillBtns = Array.prototype.slice.call(root.querySelectorAll("[data-filter-pill]"));
    var selectEl = root.querySelector("[data-filter-select]");
    var searchEl = root.querySelector("[data-filter-search]");
    var countEl = root.querySelector("[data-filter-count]");

    var activePill = "all";

    function applyFilter() {
      var selVal = selectEl ? selectEl.value : "all";
      var query = searchEl ? searchEl.value.trim().toLowerCase() : "";
      var visible = 0;

      rows.forEach(function (row) {
        var rowGroup = (row.getAttribute("data-group") || "").toLowerCase();
        var rowSub = (row.getAttribute("data-subgroup") || "").toLowerCase();
        var text = row.textContent.toLowerCase();

        var matchPill = activePill === "all" || rowGroup.indexOf(activePill) !== -1;
        var matchSel = selVal === "all" || rowSub.indexOf(selVal.toLowerCase()) !== -1;
        var matchQuery = !query || text.indexOf(query) !== -1;

        var show = matchPill && matchSel && matchQuery;
        row.style.display = show ? "" : "none";
        if (show) visible += 1;
      });

      if (countEl) {
        countEl.textContent = "Showing " + visible + " of " + rows.length + " verified rows";
      }
    }

    pillBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        pillBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        activePill = btn.getAttribute("data-filter-pill") || "all";
        applyFilter();
      });
    });

    if (selectEl) selectEl.addEventListener("change", applyFilter);
    if (searchEl) searchEl.addEventListener("input", applyFilter);
    applyFilter();
  });
})();
