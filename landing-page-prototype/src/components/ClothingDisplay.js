import React from "react";
import { doc } from "firebase/firestore";

const ClothingDisplay = (doc) => {
    const clothingItems = doc.data();
    console.log("CLOTHINGITEMS---------------------------------")
    console.log(doc.data());
    return (
        <div>
            <image alt="Clothing Image" src={clothingItems.bucket} />
            <h2>
                Category = {clothingItems.category}
            </h2>
            <h2>
                color = {clothingItems.color}
            </h2>
        </div>
    )
}

export default ClothingDisplay;