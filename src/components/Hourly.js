import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import clouds from "../img/weather-icons/cloudy.svg";
import rain from "../img/weather-icons/rain.svg";

const Hourly = ({ data }) => {
  var image;
  return (
    <div className="hourly">
      {data.slice(1, 8).map((post, i) => {
        if(post.weather[0].main.toLowerCase()=="clear"){
          image=clear;
        }
        if(post.weather[0].main.toLowerCase()=="clouds"){
          image=clouds;
        }
        if(post.weather[0].main.toLowerCase()=="rain"){
          image=rain;
        }
        return (
          <div key={i}>
            {/* console.log({i}); */}
            <p>{post.dt_txt.substring(11, 16)}</p>
            <img src={image} alt={post.weather[0].main.toLowerCase()+" icon"} />
            <p>{Math.round(post.main.temp - 273.15)}&#186;C</p>
          </div>
        );
        })}
    </div>
  );
};

export default Hourly;
