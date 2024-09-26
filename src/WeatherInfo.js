import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>{props.data.country}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={`/src/icons/${props.data.icon}.svg
              `}
              alt={props.data.description}
            />
            <WeatherTemperature
              celcius={props.data.temperature}
            />
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>
              Feels Like: {Math.round(props.data.feelsLike)}
              °C
            </li>
            <li>Humidity: 82%</li>
            <li>Wind: {Math.round(props.data.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
