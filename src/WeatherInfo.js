import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

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

        <div className="col-6 data-list">
          <ul>
            <li>
              Feels Like:{" "}
              <span className="data-results">
                {Math.round(props.data.feelsLike)}
              </span>
              °C
            </li>
            <li>
              Humidity:{" "}
              <span className="data-results">
                {props.data.humidity}
              </span>
              %
            </li>
            <li>
              Wind:{" "}
              <span className="data-results">
                {Math.round(props.data.wind)}
              </span>
              mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
