let forecast = [];
let current = {};
let today = {};

const formInput = document.querySelector("#search-form");
const forecastContainer = document.querySelector("#forecast .row");

async function getData(city) {
  const apiKey = "3306a70115f247b6ae7134721252403";
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no
`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    forecast = [...data.forecast.forecastday];
    current = data.current;
    today = data.location;

    displayData(current, today);
    displayForecast();
  } catch (error) {
    console.error("Error fetching data", error);
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

  const iconUrl = currentData.condition.icon;

  iconElement.setAttribute("src", iconUrl);
}

function displayForecast() {
  forecastContainer.innerHTML = forecast
    .map((forecastDay) => {
      const dayName = new Date(forecastDay.date).toLocaleDateString("en-US", {
        weekday: "short",
      });
      const iconUrlForecast = forecastDay.day.condition.icon;
      const minTemp = Math.round(forecastDay.day.mintemp_c);
      const maxTemp = Math.round(forecastDay.day.maxtemp_c);

      return `
   <div class="col">
   <p class="day-of-week">${dayName}</p>
   <img src="${iconUrlForecast}" alt="weather Icon" />
   <div class="min-max-container">
   <div class="row row-cols-2 gx-0">
   <p class="col p-3">${minTemp}°C</p>
   <strong class="col p-3">${maxTemp}°C</strong>
   </div>
   </div>
   </div>
   `;
    })
    .join("");
}

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityInputElement = document.querySelector("#formGroupExampleInput");
  const city = cityInputElement.value;
  getData(city);
  cityInputElement.value = "";
});
