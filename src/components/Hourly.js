import React from "react";

const Hourly = ({ img1, img2, img3, img4, data }) => {
  return (
    <div className="hourly">
      <div>
        <p>{data[1].dt_txt.substring(11, 16)}</p>
        <img src={img2} alt="sunny icon" />
        <p>{Math.round(data[1].main.temp - 273.15)}&#186;C</p>
      </div>
      <div>
        <p>{data[2].dt_txt.substring(11, 16)}</p>
        <img src={img2} alt="clear icon" />
        <p>{Math.round(data[2].main.temp - 273.15)}&#186;C</p>
      </div>
      <div>
        <p>{data[3].dt_txt.substring(11, 16)}</p>
        <img src={img2} alt="sunny icon" />
        <p>{Math.round(data[3].main.temp - 273.15)}&#186;C</p>
      </div>
      <div>
        <p>{data[4].dt_txt.substring(11, 16)}</p>
        <img src={img3} alt="cloudy icon" />
        <p>{Math.round(data[4].main.temp - 273.15)}&#186;C</p>
      </div>
      <div>
        <p>{data[5].dt_txt.substring(11, 16)}</p>
        <img src={img4} alt="rain icon" />
        <p>{Math.round(data[5].main.temp - 273.15)}&#186;C</p>
      </div>
      <div>
        <p>{data[6].dt_txt.substring(11, 16)}</p>
        <img src={img4} alt="rain icon" />
        <p>{Math.round(data[6].main.temp - 273.15)}&#186;C</p>
      </div>
      <div>
        <p>{data[7].dt_txt.substring(11, 16)}</p>
        <img src={img1} alt="mostlycloudy icon" />
        <p>{Math.round(data[7].main.temp - 273.15)}&#186;C</p>
      </div>
    </div>
  );
};

export default Hourly;
