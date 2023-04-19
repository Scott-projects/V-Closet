import "../styles/current-weather.css";
import React from "react";

const WeatherValue = () => {
    let city = sessionStorage.getItem("city");
    let high = sessionStorage.getItem("high");
    let low = sessionStorage.getItem("low");
    let description = sessionStorage.getItem("description");
    let icon = sessionStorage.getItem("image");

    const imgURL = "https://openweathermap.org/img/wn/";
    const imgSource = (`${imgURL}/${icon}@2x.png`);

    if (!city || !high || !low || !icon) {
        return (
            <div>
                {/* Display nothing */}
            </div>
        )
    }


    return (
        <div className="weather">
            <div className="details">
                <div className="weather-icon">
                    <img src={imgSource} alt="weather icon" />
                </div>

                <div className="weather-info">
                    <p className="temperature-text">{Math.round(high)}&deg; F / {Math.round(low)}&deg; F</p>
                    <p className="city-text">{city}</p>
                    {/* <p className="description-text">{description}</p> */}
                </div>
            </div>
        </div>
    );
}


export default WeatherValue;