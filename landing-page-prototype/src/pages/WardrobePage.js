import React from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import "../styles/WardrobePage.css";
import ShapeContainer from "../components/ShapeContainer";
import { CheckAuthentication } from "../components/CheckAuthentication";

function WardrobePage() {
    return (
        <CheckAuthentication>
            <div className='wardrobe'>
                {/* <h1 className='wardrobe-text'>Wardrobe Page</h1> */}
                <TopNavBar />
                <ShapeContainer color="" />
                <SideBar />
            </div>
        </CheckAuthentication>
    )
}

export default WardrobePage;