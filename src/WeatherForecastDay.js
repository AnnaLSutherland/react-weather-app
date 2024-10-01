import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(
      props.data.temperature.maximum
    );
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(
      props.data.temperature.minimum
    );
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    return days[day];
  }

  return (
    <div>
      {" "}
      <div className="WeatherForecast-day">
        <h5>{day()}</h5>
      </div>
      <img
        src={`/src/icons/${props.data.condition.icon}.svg`}
        alt={props.data.description}
        width="70"
        height="70"
      />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>

        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
