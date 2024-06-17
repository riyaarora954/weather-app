function updateWeather(response) {
  let currentTemperature = document.querySelector("#weather-app-temperature");
  let tempElement = response.data.temperature.current;
  currentTemperature.innerHTML = Math.round(tempElement);
}

function searchCity(city) {
  let apiKey = "eo685ab6edbtfa3843049fc43301f90e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function displayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);

searchCity("Lisbon");
