import React, { useState } from 'react'
import TopNavBar from '../components/TopNavBar';
import AboutPage from './AboutPage';
import '../styles/SettingsPage.css'
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { logout } from '../firebase/authentication';
import { useNavigate } from 'react-router-dom';
import { CheckAuthentication } from '../components/CheckAuthentication';
import Search from "../components/search";
import { WEATHER_API_URL } from '../components/api';
import { WEATHER_API_KEY } from '../components/api';
import CurrentWeather from '../components/current-weather';

function SettingsPage() {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            logout();
            navigate("/");
        } catch (error) {
            alert("There was an error signing out: " + error);
        }
    }

    const [currentWeather, setCurrentWeather] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);

        Promise.all([currentWeatherFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
            })
            .catch(console.log);

    }
    console.log(currentWeather);

    return (
        <CheckAuthentication>
            <div className='settings-test'>
                <TopNavBar />
                <h1 className='setting-text'>Settings Page</h1>
                <div className="tab-list">
                    <div className={activeTab === 0 ? 'active-tab' : ''} onClick={() => setActiveTab(0)}>General</div>
                    <div className={activeTab === 1 ? 'active-tab' : ''} onClick={() => setActiveTab(1)}>About</div>
                    <div className={activeTab === 2 ? 'active-tab' : ''} onClick={() => setActiveTab(2)}>Log Out</div>
                </div>
                <div className="tab-content">
                    {activeTab === 0 && (
                        <div className='general-container'>
                            <div className='set-nickname-container'>
                                <h2 className='general-text'>Update Nickname (optional)</h2>
                                <input type='text'></input>
                            </div>
                            <div className='set-location-container'>
                                <h2 className='general-text'>Update Location</h2>
                                <Search onSearchChange={handleOnSearchChange} />
                                {currentWeather && <CurrentWeather data={currentWeather} />}
                            </div>
                            <div className='delete-account-container'>
                                <h2 className='general-text'>DELETE ACCOUNT</h2>
                                <p>(Button here)</p>
                            </div>
                        </div>
                    )}
                    {activeTab === 1 && (
                        <AboutPage />
                    )}
                    {activeTab === 2 && (
                        <button onClick={handleSignOut}>Logout</button>
                    )}
                </div>
                <br />

            </div>
        </CheckAuthentication >
    )
}

export default SettingsPage;