import React from "react";
import axios from "axios";

export default function Weather(props) {
  return <h3>The Weather in {props.city} is 18°C</h3>;
}
