import React from "react";
import TopNavBar from "../components/TopNavBar";
import "../styles/WardrobePage.css";
import ShapeContainer from "../components/ShapeContainer";

function WardrobePage() {
    return (
        <div className='wardrobe'>
            <h1 className='wardrobe-text'>Wardrobe Page</h1>
            <TopNavBar />
            <ShapeContainer color="" />
        </div>
    )
}

export default WardrobePage;