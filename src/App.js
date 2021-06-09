import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Hourly from "./components/Hourly";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import clouds from "./img/weather-icons/cloudy.svg";
import sunny from "./img/weather-icons/storm.svg";
import storm from "./img/weather-icons/fog.svg";
import fog from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import snow from "./img/weather-icons/snow.svg";
import "./App.css";

class App extends Component {
  render() {


    function returnImage(id, Storms) {
      if (id < 300) return storm;
      else if (id > 300 && id <= 499) return drizzle;
      else if (id >= 500 && id <= 599) return rain;
      else if (id >= 600 && id <= 699) return snow;
      else if (id >= 700 && id <= 799) return fog;
      else if (id == 800) return sunny;
      else if (id == 801) return partlycloudy;
      else if (id > 801 && id <= 805) return 	mostlycloudy;
      else if (id > 805) return clouds;
    }

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