import React, { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import {RiPriceTag3Line } from "react-icons/ri";
import { addToMarket, deleteClothingItem } from "../firebase/firestore";
import '../styles/WardrobePage.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

function ClothingDisplay(props) {
    const [showOptions, setShowOptions] = useState(false);
    const clothingItem = props.clothingItem;
    const [user] = useAuthState(auth);

    function handleImageClick() {
        setShowOptions(!showOptions);
    }

    function handleDelete() {
        deleteClothingItem(user.uid, clothingItem.id);
    }

    function handleListItem() {
        addToMarket(user.uid, clothingItem.id);
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