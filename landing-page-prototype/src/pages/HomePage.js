import React from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer"
import '../styles/HomePage.css'
import { CheckAuthentication } from "../components/CheckAuthentication";

function HomePage() {
    return (
        <div className="home-test">
            <CheckAuthentication />
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className="home-text">Welcome back, (Insert user name)</h1>
        </div>
    )
}

export default HomePage;