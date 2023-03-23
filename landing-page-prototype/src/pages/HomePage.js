import React from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer"
import '../styles/HomePage.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
function HomePage() {
    const [user, loading, authError] = useAuthState(auth);
    console.log(user);
    return (
        <div className="home-test">
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className="home-text">Home Page</h1>
        </div>
    )
}

export default HomePage;