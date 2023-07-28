import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=64469ac67e6dc941feb5b50915a18dc7&units=metric`;

  axios.get(url).then(showTemperature);
  if (temperature !== null) {
    return (
      <p>
        The temperature in {props.city} is {Math.round(temperature)} °C
      </p>
    );
  } else {
    return <p>Loading temperature ...</p>;
  }
}
