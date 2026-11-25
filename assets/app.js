document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("tableSearch");
  const cityFilter = document.getElementById("cityFilter");
  const table = document.querySelector("table");

  if (!table) return;

  const filterRows = () => {
    const query = (searchInput ? searchInput.value : "").toLowerCase().trim();
    const city = (cityFilter ? cityFilter.value : "").toLowerCase().trim();
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      const rowCity = (row.dataset.city || "").toLowerCase();
      const matchesSearch = !query || text.includes(query);
      const matchesCity = !city || rowCity === city;
      row.style.display = matchesSearch && matchesCity ? "" : "none";
    });
  };

  if (searchInput) searchInput.addEventListener("input", filterRows);
  if (cityFilter) cityFilter.addEventListener("change", filterRows);
});
