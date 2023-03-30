import "../styles/current-weather.css";
import React from "react";

const Recommender = () => {

    const high = sessionStorage.getItem("high");
    const low = sessionStorage.getItem("low");

    const sweaters = Array("cardigan", "turtleneck", "hoodie", "crewneck");
    const shirts = Array("tank top", "t-shirt", "button-up LS");
    const outerwear = Array("parka", "puffer jacket", "raincoat", "windbreaker");

    let outfit = [];
    let outfitString = "";

    if (high <= 40) {
        outfit.push(sweaters[1], shirts[1], outerwear[1]);
    }
    else {
        outfit.push(sweaters[2], shirts[0]);
    }

    let i = 0;
    outfitString += outfit[i];

    for (let i = 1; i < (outfit.length-1); i++) {
        outfitString += ", " + outfit[i];
    }

    i = outfit.length-1;
    outfitString += " & a " + outfit[i];

    return (
        <div>
            <p>
                You should wear a {outfitString}.
            </p>
        </div>
    );
}


export default Recommender;