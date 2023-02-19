import React from "react";
import TopNavBar from "../components/TopNavBar";
import '../styles/HomePage.css'

function HomePage() {
    return (
        <div className="home-test">
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <TopNavBar />
            <h1 className="home-text">Home Page</h1>
        </div>
    )
}

export default HomePage;