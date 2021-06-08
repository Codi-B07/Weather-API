import React from 'react'

const Hourly = ({img1, img2, eighteen}) => {
    return (
        <div className="hourly">
          <div>
            <p>03:00</p>
            <img src={img1} alt="mostlycloudy icon" />
            <p>8&#186;C</p>
          </div>
          <div>
            <p>06:00</p>
            <img src={img1} alt="mostlycloudy icon" />
            <p>9&#186;C</p>
          </div>
          <div>
            <p>09:00</p>
            <img src={img2} alt="sunny icon" />
            <p>14&#186;C</p>
          </div>
          <div>
            <p>12:00</p>
            <img src={img2} alt="sunny icon" />
            <p>17&#186;C</p>
          </div>
          <div>
            <p>15:00</p>
            <img src={img2} alt="sunny icon" />
            <p>{eighteen}&#186;C</p>
          </div>
          <div>
            <p>18:00</p>
            <img src={img2} alt="sunny icon" />
            <p>16&#186;C</p>
          </div>
          <div>
            <p>21:00</p>
            <img src={img1} alt="mostlycloudy icon" />
            <p>13&#186;C</p>
          </div>
        </div>
    )
}

export default Hourly
