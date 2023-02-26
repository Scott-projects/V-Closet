import React from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer"
import '../styles/HomePage.css'

function HomePage() {
    return (
        <div className="home-test">
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className="home-text">Home Page</h1>
        </div>
    )
}

export default HomePage;