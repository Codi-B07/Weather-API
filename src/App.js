import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Hourly from "./components/Hourly";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import clouds from "./img/weather-icons/cloudy.svg";
import sunny from "./img/weather-icons/clear.svg";
import "./App.css";

class App extends Component {
  render() {
    const weather = fakeWeatherData.list;
    // console.log("dana", weather[0].weather[0].main.toLowerCase());
    // for (let i = 0; i < weather.length; i++) {
    //   console.log(weather[i].main.temp);
    // }

    return (
      <div className="app">
        <Header data={fakeWeatherData.city.name} />
        <Main data={weather} />
        <Hourly data={weather} />
      </div>
    );
  }
}

export default App;