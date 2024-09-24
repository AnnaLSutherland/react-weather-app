import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours > 12) {
    return (
      <div>
        {day}, {hours - 12}:{minutes}pm
      </div>
    );
  } else {
    if (hours >= 1 && hours < 12) {
      return (
        <div>
          {day}, ${hours - 12}:{minutes}am
        </div>
      );
    } else {
      return (
        <div>
          {day}, 12:{minutes}am
        </div>
      );
    }
  }
}
