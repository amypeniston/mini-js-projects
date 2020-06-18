const inputBox = document.getElementById("search");
const searchResults = document.getElementById("search-results");
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const locationData = [];

fetch(endpoint).then((blob) => {
  blob.json().then((response) => {
    locationData.push(...response);
  });
});

function updateSearchResults() {
  let results = findMatches(this.value, locationData);
  searchResults.textContent = "";
  let html = results
    .map((result) => {
      let regex = new RegExp(this.value, "gi");
      let city = result.city.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      let state = result.state.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      return `
      <li>
        <span class="city">${city}</span>
        <span class="state">${state}</span>
      </li>
    `;
    })
    .join("");
  searchResults.innerHTML = html;
}

function findMatches(needle, haystack) {
  return haystack.filter((item) => {
    const regex = new RegExp(needle, "gi");
    return item.city.match(regex) || item.state.match(regex);
  });
}

inputBox.addEventListener("input", updateSearchResults);
