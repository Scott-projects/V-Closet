import React from "react";
import { useEffect } from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import "../styles/WardrobePage.css";
import ShapeContainer from "../components/ShapeContainer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function WardrobePage() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("wardrobe")
        console.log(user);
        if (loading) {
            return;
        }
        if (!user) {
           return navigate("/");
        }
    }, [user, loading, navigate]);

    return (
        <div className='wardrobe'>
            {/* <h1 className='wardrobe-text'>Wardrobe Page</h1> */}
            <TopNavBar />
            <SideBar />
            <ShapeContainer color="" />
        </div>
    )
}

export default WardrobePage;