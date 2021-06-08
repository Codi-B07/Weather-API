import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Hourly from "./components/Hourly";
// import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import sunny from "./img/weather-icons/clear.svg";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Hourly img1={mostlycloudy} img2={sunny} eighteen={18}/>
      </div>
    );
  }
}

export default App;