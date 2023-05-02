import React, { useState } from 'react'
import TopNavBar from '../components/TopNavBar';
import '../styles/SettingsPage.css'
import { AiOutlineLogout } from 'react-icons/ai';
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
    const [nickname, setNickname] = useState('');

    const handleNicknameChange = (e) => {
        if (e.target.value.length >= 20) {} //If characters is greater than 20
        else {
            setNickname(e.target.value);
        }
    };
    const saveNickname = () => {
        localStorage.setItem('myNickname', nickname); //Saves nickname
    }

    const handleSignOut = async () => {
        try {
            sessionStorage.clear();
            logout();
            navigate("/");
        } catch (error) {
            alert("There was an error signing out: " + error);
        }
    }

    const handleDeleteAccount = () => {
        //TODO
        console.log("Deleting account test");
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
            <div className='settings'>
                <TopNavBar />
                <h1 className='setting-text'>Settings</h1>
                <div className="tab-list">
                    <div className={activeTab === 0 ? 'active-tab' : ''} onClick={() => setActiveTab(0)}>Account</div>
                    <div className={activeTab === 1 ? 'active-tab' : ''} onClick={() => setActiveTab(1)}>Location</div>
                    <div className={activeTab === 2 ? 'active-tab' : ''} onClick={() => setActiveTab(2)}>About</div>
                    <div className={activeTab === 3 ? 'active-tab' : ''} onClick={() => setActiveTab(3)}>
                        <button className='logoutBtn' onClick={handleSignOut}>Logout <AiOutlineLogout className='logout-icon' /></button>
                    </div>
                </div>

                <div className="tab-content">
                    {activeTab === 0 && (
                        <div className='general-container'>
                            <div className='set-nickname-container'>
                                <h2 className='general-text'>Update Nickname (optional)</h2>
                                <input type='text' value={nickname} onChange={handleNicknameChange} />
                                <button className="nicknameBtn" onClick={saveNickname}>Change Nickname</button>
                            </div>
                            <div className='change-password-container'>
                                <h2 className='general-text'>Change Password</h2>
                                <input type='text'></input>
                            </div>
                            <div className='delete-account-container'>
                                <h2 className='general-text'>DELETE ACCOUNT</h2>
                                <button className='deleteBtn' onClick={handleDeleteAccount}>Delete Account</button>
                            </div>
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div className='set-location-container'>
                            <h2 className='general-text'>Update Location</h2>
                            <Search onSearchChange={handleOnSearchChange} />
                            {currentWeather && <CurrentWeather data={currentWeather} />}
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className="about-page-container">
                            <div className="about-mission">
                                <h2 className="mission-text">Our Mission</h2>
                                <p className="mission-p">
                                    Our mission at V-Closet is to empower individuals to take control of their wardrobe and make fashion
                                    decisions with confidence. We believe that everyone deserves to feel good about what they wear, and that starts with having a well-organized closet.
                                    Our virtual closet platform provides users with the tools they need to easily categorize and manage their clothing, create outfits, and discover new styles.
                                    We strive to simplify the fashion experience, saving our users time and money, and ultimately helping them to build a more sustainable and
                                    satisfying relationship with their wardrobe.
                                </p>
                            </div>

                            <div className="about-vision">
                                <h2 className="vision-text">Our Vision</h2>
                                <p className="vision-p">
                                    Our vision at V-Closet is to simplify and revolutionize the way people manage their wardrobe. We aim to be the go-to destination
                                    for anyone looking to save time, reduce waste, and enhance their sense of style through a personalized, sustainable, and innovative platform.
                                    Our ultimate goal is to promote conscious and enjoyable fashion practices for all.
                                </p>
                            </div>

                            <div className="about-history">
                                <h2 className="history-text">Our History</h2>
                                <p className="history-p">
                                As a trio of college students from Austin Peay State University in group 3, we embarked on a semester-long project that involved bringing a unique concept to life. 
                                Our brainstorming led us to the idea of creating a virtual closet website, which we believed no one had ever attempted before. 
                                With the aim of transforming this innovative concept into a tangible reality, we are thrilled to introduce V-Closet, the culmination of our efforts.
                                </p>
                            </div>
                        </div>
                    )}
                    {activeTab === 3}{/* Log out */}
                </div>
                <br />

            </div>
        </CheckAuthentication >
    )
}

export default SettingsPage;