import React, {useState} from 'react'
import TopNavBar from '../components/TopNavBar';
import ShapeContainer from '../components/ShapeContainer';
import '../styles/SettingsPage.css'
import { logout } from '../firebase/authentication';
import { useNavigate } from 'react-router-dom';
import { CheckAuthentication } from '../components/CheckAuthentication';
import Search from "../components/search";
import { WEATHER_API_URL } from '../components/api';
import { WEATHER_API_KEY } from '../components/api';
import CurrentWeather from '../components/current-weather';

function SettingsPage() {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            logout();
            navigate("/");
        } catch (error) {
            alert("There was an error signing out: " + error);
        }
    }

}

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
            <CheckAuthentication />
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className='setting-text'>Settings Page</h1>
            <button onClick={handleSignOut}>Logout</button>
            <br/>
            <h2>Set Location</h2>
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather data={currentWeather} />}
            
        </div>
    )
}

export default SettingsPage;