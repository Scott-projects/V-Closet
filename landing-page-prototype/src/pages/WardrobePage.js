import React from "react";
import { useState } from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import "../styles/WardrobePage.css";
import ShapeContainer from "../components/ShapeContainer";
import QueryClothes from "../components/QueryClothes";
import { CheckAuthentication } from "../components/CheckAuthentication";

function WardrobePage() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelect = (value) => {
      setSelectedValue(value);
    };

    return (
        <CheckAuthentication>
            <div className='wardrobe'>
                <TopNavBar />
                <ShapeContainer color="" />
                <SideBar onSelect={handleSelect} />
                <div className="Clothing">
                    <QueryClothes selectedCategory={selectedValue}/>
                </div>
            </div>
        </CheckAuthentication>
    )
}

export default WardrobePage;