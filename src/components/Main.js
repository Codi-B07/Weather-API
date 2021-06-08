import React from 'react'
import mostlycloudy from  "../img/weather-icons/mostlycloudy.svg"


const Main = () => {
    return (
        <div className="app__main">
          <img src={mostlycloudy} alt="mostlycloudy icon" />
          <h2>overcast clouds</h2>
          <div className="desc">
            <p>
              <b>Temperature</b> 10&#186;C to 11&#186;C
            </p>
            <p>
              <b>Humidity</b> 78% <b>Pressure</b> 1008.48
            </p>
          </div>
        </div>
    )
}

export default Main
