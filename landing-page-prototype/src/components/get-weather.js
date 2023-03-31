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


    return (
        <div className="weather">
            <div className="details">
                <p>{city}   </p>
                <p>{description}</p>
                <p>High of {Math.round(high)}F</p>
                <p>Low of {Math.round(low)}F</p>
                <img src={imgSource} alt="weather image"/>
            </div>
        </div>
    );
}


export default WeatherValue;