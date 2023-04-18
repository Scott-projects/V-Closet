import React from "react";
import '../styles/WardrobePage.css'

function ClothingDisplay(props) {
    const clothingItem = props.clothingItem;
    return (
        <div>
            <img className="clothingImages" alt="Clothing Image" src={clothingItem.bucket} />
        </div>
    )
}
export default ClothingDisplay;