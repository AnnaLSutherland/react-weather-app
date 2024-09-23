import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="Submit"
              value="Search"
              className="btn btn-primary"
            />
          </div>
        </div>{" "}
      </form>
      <h1>Aberdeen</h1>
      <ul>
        <li>Monday, 3:30</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          />
          11°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 82%</li>
            <li>Wind: 2 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
