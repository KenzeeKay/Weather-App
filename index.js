function displayWeatherCondition(response) {
  let cityElem = document.querySelector("#city");
  let tempElem = document.querySelector("#temperature");

  cityElem.innerHTML = response.data.name;
  tempElem.innerHTML = Math.round(response.data.main.temp);
}

function searchCity(city) {
  let apiKey = "4fed96bb993a5c8806dbb1374932ed84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
input_val.center();
searchCity("New York");
