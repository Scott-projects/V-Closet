import React from "react";
import TopNavBar from "../components/TopNavBar";
import '../styles/AboutPage.css';

function AboutPage() {
    return (
        <div className="about-test">
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <TopNavBar />
            <h1 className="about-text">About Page</h1>
        </div>
    )
}

export default AboutPage;