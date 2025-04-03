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

    displayData(current, today, forecast[0]);
    displayForecast();
  } catch (error) {
    console.error("Error fetching data", error);
    alert("City not found, or there was a network error");
  }
}

function displayData(currentData, todayData, forecastDay) {
  let cityElement = document.querySelector("#current-city");
  let iconElement = document.querySelector("#icon");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#current-condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateTimeElement = document.querySelector("#date-time");
  let highElement = document.querySelector("#high");
  let lowElement = document.querySelector("#low");
  let feelsLikeElement = document.querySelector("#feels-like");
  let precipitationElement = document.querySelector("#precipitation");

  cityElement.innerHTML = todayData.name;
  temperatureElement.innerHTML = Math.round(currentData.temp_c);
  descriptionElement.innerHTML = currentData.condition.text;
  humidityElement.innerHTML = currentData.humidity;
  windElement.innerHTML = Math.round(currentData.wind_kph);
  dateTimeElement.innerHTML = todayData.localtime;
  highElement.innerHTML = `<strong>${Math.round(
    forecastDay.day.maxtemp_c
  )}</strong`;
  lowElement.innerHTML = `<strong>${Math.round(
    forecastDay.day.mintemp_c
  )}</strong>`;
  feelsLikeElement.innerHTML = `<strong>${Math.round(
    currentData.feelslike_c
  )}</strong>`;
  precipitationElement.innerHTML = forecastDay.day.daily_chance_of_rain;

  const iconUrl = currentData.condition.icon;

  iconElement.setAttribute("src", iconUrl);
}

function displayForecast() {
  const today = new Date().toISOString().split("T")[0];
  console.log("Today (ISO):", today);

  forecastContainer.innerHTML = forecast
    .filter((forecastDay) => forecastDay.date >= today)
    .map((forecastDay) => {
      console.log("Forecast Date:", forecastDay.date);

      const date = new Date(forecastDay.date + "T00:00:00Z");
      const dayName = date.toLocaleDateString("en-US", {
        weekday: "short",
        timeZone: "UTC",
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
