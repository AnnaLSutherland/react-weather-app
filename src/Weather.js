import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({
    ready: false,
  });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>{" "}
        </form>
        <h1>{weatherData.city}</h1>
        <h2>{weatherData.country}</h2>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">
            {weatherData.description}
          </li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Feels Like:{" "}
                {Math.round(weatherData.feelsLike)}°C
              </li>
              <li>Humidity: 82%</li>
              <li>
                Wind: {Math.round(weatherData.wind)}mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d36aa0424f0b7a4te0a504eba4fo6786";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
