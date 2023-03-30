import React from 'react'
import TopNavBar from '../components/TopNavBar';
import ShapeContainer from '../components/ShapeContainer';
import '../styles/SettingsPage.css'
import Search from "../components/search";
import { WEATHER_API_URL } from '../components/api';
import { WEATHER_API_KEY } from '../components/api';
import { useState } from 'react';
import CurrentWeather from '../components/current-weather';

function SettingsPage() {

    const [currentWeather, setCurrentWeather] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
        
        Promise.all([currentWeatherFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();

            setCurrentWeather({ city: searchData.label, ...weatherResponse});
        })
        .catch(console.log);

    }
    console.log(currentWeather);

    return (
        <div className='settings-test'>
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className='setting-text'>Settings Page</h1>
            <br/>
            <h2>Set Location</h2>
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather data={currentWeather} />}
            
        </div>
    )
}

export default SettingsPage;