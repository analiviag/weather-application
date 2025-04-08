# Weather Forecast App

Welcome to the Weather App! This app allows you to check the weather forecast for different locations.


## Problems the App aims to solve
* User's can get current conditions and forecast in one place.
* It prioritizes essential weather data with it's simple and focused interface.
* Especially useful for people on the go or those who want immediate, location-specific weather details.


## Features
* Displays current weather conditions (temperature, description, humidity, wind, precipitation, feels like).
* Provides a 3-day weather forecast.
* Uses the WeatherAPI to fetch weather data.
* Displays the user's current city weather on page load, if permissions are granted.
* User-friendly interface using HTML, CSS, and JavaScript.

  <img width="814" alt="Screenshot 2025-04-03 at 16 56 07" src="https://github.com/user-attachments/assets/1e746f36-7b1c-4075-a40d-ae5630e109c8" />


## Usage

On page load, the app provides weather info for the user's location (if permissions are granted), and they can also enter a city in the search bar to get the weather information for the next 3 days.


## Contributing

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/new-feature).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/new-feature).
5. Create a new Pull Request.


## Credits

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/).


## Comments on making this project

This project might seem simple to senior developers, but for someone just learning JavaScript is challenging and takes time. I had to go through a lot of documentation and I've used Gemini to help me in certain parts of the project. For example, I needed help with implementing how to get the user's geolocation, not on page load, but when they click for the first time the input bar. You have to think of every little detail that might matter for the user, and find a way to implement that in JavaScript. Also, I realized you have to choose a good API for your project because if you don't like something you probably will need to use another one on top of whatever you're using already. Or just change it completely. I also find making the app responsive a little challenging, I just need more practice with media queries probably. I've found it a little challenging to understand async/await to start, but after a while I got the hang of it. JavaScript is a black whole in my head right now, but the more I practice the more I learn and am able to create new things. I also had trouble trying to make the correct days of the week in the forecast part display correctly (it was displaying from yesterday, not from today - for example if today is Monday, instead of displaying Mon Tue Wed it would be Sun Mon Tue - but the temperatures were reflecting the correct date (Mon Tue Wed). That was a challenge that Gemini helped me figure out as well, I spent a few days just trying to understand that alone. Overall it's clear that as we go a lot of challenges arise, and you just have to have patience and try and figure it out. Nowadays we have a lot of help from AIs even, which makes it easier but also you can't just blindly trust what AI is saying of course. But it was a good project to put some skills to test. 
