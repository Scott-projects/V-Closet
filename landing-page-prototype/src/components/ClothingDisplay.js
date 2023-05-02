import React, { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import {RiPriceTag3Line } from "react-icons/ri";
import '../styles/WardrobePage.css'

function ClothingDisplay(props) {
    const [showOptions, setShowOptions] = useState(false);
    const clothingItem = props.clothingItem;

    function handleImageClick() {
        setShowOptions(!showOptions);
    }

    function handleDelete() {

    }

    function handleListItem() {

    }

    return (
        <div className="clothing-container">
            <button className="clothesBtn" onClick={handleImageClick}><img className="clothingImages" alt="Clothing Image" src={clothingItem.bucket} /></button>
            {showOptions && (
                <div className="image-options">
                    <button className="trashIcon" onClick={handleDelete}>{<BiTrashAlt />}</button>
                    <button className="priceIcon" onClick={handleListItem}><RiPriceTag3Line /></button>
                </div>
            )}
        </div>
    )
}
export default ClothingDisplay;