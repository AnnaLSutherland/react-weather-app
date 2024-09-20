import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response);
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ac209dae1f283fb332a5bb7f50b0f468";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="Search"
        placeholder="Type a City..."
        onChange={updateCity}
        class="search"
      />
      <input
        type="Submit"
        value="Search"
        className="submit"
      />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h3>The weather in {weather.name} is:</h3>

        <div className="results">
          <ul>
            <li>
              Temperature: {Math.round(weather.temperature)}
              °C
            </li>
            <li>Descrition: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>
              Windspeed: {Math.round(weather.wind)}km/h
            </li>
            <li>
              <img
                src={weather.icon}
                alt={weather.description}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
