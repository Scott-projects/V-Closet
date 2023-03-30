import "../styles/current-weather.css";
import React from "react";

const WeatherValue = () => {
    let city = sessionStorage.getItem("city");
    let high = sessionStorage.getItem("high");
    let low = sessionStorage.getItem("low");
    let description = sessionStorage.getItem("description");

    return (
        <div className="weather">
            <div className="details">
                <p>{city}   </p>
                <p>{description}</p>
                <p>High of {Math.round(high)}F</p>
                <p>Low of {Math.round(low)}F</p>
            </div>
        </div>
    );
}


export default WeatherValue;