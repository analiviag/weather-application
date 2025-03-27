let forecast = [];
let current = {};
let today = {};

const formInput = document.querySelector("#search-form");

async function getData(city) {
  const apiKey = "3306a70115f247b6ae7134721252403";
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no
`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    forecast = [...data.forecast.forecastday];
    current = data.current;
    today = data.location;

    displayData(current, today);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("City not found, or there was a network error");
  }
}

function displayData(currentData, todayData) {
  let cityElement = document.querySelector("#current-city");
  let iconElement = document.querySelector("#icon");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#current-condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateTimeElement = document.querySelector("#date-time");

  cityElement.innerHTML = todayData.name;
  temperatureElement.innerHTML = Math.round(currentData.temp_c);
  descriptionElement.innerHTML = currentData.condition.text;
  humidityElement.innerHTML = currentData.humidity;
  windElement.innerHTML = Math.round(currentData.wind_kph);
  dateTimeElement.innerHTML = todayData.localtime;

  const iconCode = currentData.condition.code;
  const isDay = currentData.is_day;
  const iconPrefix = isDay ? "day" : "night";
  const iconUrl = `//cdn.weatherapi.com/weather/64x64/${iconPrefix}/${iconCode}.png`;

  iconElement.setAttribute("src", iconUrl);
}

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityInputElement = document.querySelector("#formGroupExampleInput");
  const city = cityInputElement.value;
  getData(city);
  cityInputElement.value = "";
});
