import React from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer";
import '../styles/HomePage.css';
import { useState } from "react";
import Recommender from "../components/recommender";

function HomePage() {
  
    const [weatherInfo, setWeatherInfo] = useState("");
   
    
    return (
        <div className="home-test">
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className="home-text">Home Page</h1>
            <div>
                <Recommender/>
            </div>
        </div>
    )
}

export default HomePage;