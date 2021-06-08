import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Hourly from "./components/Hourly";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Hourly />
      </div>
    );
  }
}

export default App;