import React from "react";
import clear from "../img/weather-icons/clear.svg";

const Main = (props) => {
  // console.log("titi", props);
  return (
    <div className="app__main">
      <img src={clear} alt="clear icon" />
      <h2>overcast clouds</h2>
      <div className="desc">
        <p>
          <b>Temperature</b> {Math.round(props.data[0].main.temp_min - 273.15)}
          &#186;C to {Math.round(props.data[0].main.temp_max - 273.15)}&#186;C
        </p>
        <p>
          <b>Humidity</b> {props.data[0].main.humidity}% <b>Pressure</b> {props.data[0].main.pressure}
        </p>
      </div>
    </div>
  );
};

export default Main;
