import React, { useState } from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer"
import '../styles/HomePage.css'
import { CheckAuthentication } from "../components/CheckAuthentication";
import Recommender from "../components/recommender";


function HomePage() {
    const nickname = localStorage.getItem('myNickname') || 'User';
    const [weatherInfo, setWeatherInfo] = useState("");

    return (
        <CheckAuthentication>
            <div className="home">
                <TopNavBar />
                <ShapeContainer color="" />
                <h1 className="home-text">Welcome back, {nickname}</h1>
                <div className="recommend-text">
                    <Recommender />
                </div>
            </div>
        </CheckAuthentication>
    )
}

export default HomePage;