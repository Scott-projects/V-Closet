import React from "react";
import { useState } from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import "../styles/WardrobePage.css";
import ShapeContainer from "../components/ShapeContainer";
import QueryClothes from "../components/QueryClothes";
import { CheckAuthentication } from "../components/CheckAuthentication";


function WardrobePage() {

    return (
        <CheckAuthentication>
            <div className='wardrobe'>
                <TopNavBar />
                <ShapeContainer color="" />
                <SideBar />
                <div className="Clothing">
                    <QueryClothes />
                </div>
            </div>
        </CheckAuthentication>
    )
}

export default WardrobePage;