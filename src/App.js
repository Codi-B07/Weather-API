import React, { Component } from "react";
// import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import sunny from "./img/weather-icons/clear.svg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <input type="text" value="London" />
          <button className="btn">FIND WEATHER</button>
        </div>
        <div className="app__main">
          <img src={mostlycloudy} alt="mostlycloudy icon" />
          <h2>overcast clouds</h2>
          <div className="desc">
            <p>
              <b>Temperature</b> 10&#186; to 11&#186;
            </p>
            <p>
              <b>Humidity</b> 78% <b>Pressure</b> 1008.48
            </p>
          </div>
        </div>
        <div className="hourly">
          <div>
            <p>03:00</p>
            <img src={mostlycloudy} alt="mostlycloudy icon" />
            <p>8&#186;C</p>
          </div>
          <div>
            <p>06:00</p>
            <img src={mostlycloudy} alt="mostlycloudy icon" />
            <p>9&#186;C</p>
          </div>
          <div>
            <p>09:00</p>
            <img src={sunny} alt="sunny icon" />
            <p>14&#186;C</p>
          </div>
          <div>
            <p>12:00</p>
            <img src={sunny} alt="sunny icon" />
            <p>17&#186;C</p>
          </div>
          <div>
            <p>15:00</p>
            <img src={sunny} alt="sunny icon" />
            <p>18&#186;C</p>
          </div>
          <div>
            <p>18:00</p>
            <img src={sunny} alt="sunny icon" />
            <p>16&#186;C</p>
          </div>
          <div>
            <p>21:00</p>
            <img src={mostlycloudy} alt="mostlycloudy icon" />
            <p>13&#186;C</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;