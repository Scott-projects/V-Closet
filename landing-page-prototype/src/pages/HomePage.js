import React, {useState} from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer"
import '../styles/HomePage.css'
import { CheckAuthentication } from "../components/CheckAuthentication";
import Recommender from "../components/recommender";

function HomePage() {
  
    const [weatherInfo, setWeatherInfo] = useState("");
   
    
    return (
            <CheckAuthentication>
        <div className="home-test">
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className="home-text">Home Page</h1>
            Welcome back (Insert user name)
            <div>
                <Recommender/>
            </div>
        </div>
        </CheckAuthentication>
    )
}

export default HomePage;