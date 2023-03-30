import "../styles/current-weather.css";
import React from "react";

const CurrentWeather = ({data}) => {
    sessionStorage.setItem("city", data.city);
    sessionStorage.setItem("high", data.main.temp_max);
    sessionStorage.setItem("low", data.main.temp_min);
    sessionStorage.setItem("description", data.weather[0].main);

    return (
        <div className="weather">
            <div className="details">
                <p className="city">{data.city}</p>
                <p className="description">{data.weather[0].main}</p>
            </div>
            <div className="details">
                <p className="temperature">{Math.round(data.main.temp)}°F</p>
                <p className="humidity">H{Math.round(data.main.temp_max)} L{Math.round(data.main.temp_min)}</p>
            </div>
        </div>
    );
}


export default CurrentWeather;