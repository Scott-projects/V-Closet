import React from "react";

function ClothingDisplay(props) {
    const clothingItem = props.clothingItem;
    return (
        <div>
            <img alt="Clothing Image" src={clothingItem.bucket} />
            <h2>
                Category = {clothingItem.category}
            </h2>
            <h2>
                color = {clothingItem.color}
            </h2>
        </div>
    )
}
export default ClothingDisplay;