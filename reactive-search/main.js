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

function updateSearchResults(results) {
  searchResults.textContent = "";
  var newResults = document.createElement("ul");
  for (let i = 0; i < results.length; i++) {
    let resultText = `<span class="city">${results[i].city}</span><br><span class="state">${results[i].state}</span>`;
    let resultNode = document.createElement("li");
    resultNode.innerHTML = resultText;
    newResults.appendChild(resultNode);
  }
  searchResults.appendChild(newResults);
}

inputBox.addEventListener("input", (e) => {
  let searchQuery = e.target.value.toLowerCase();
  let results = locationData.filter((item) => {
    return item.city.toLowerCase().includes(searchQuery);
  });
  updateSearchResults(results);
});
