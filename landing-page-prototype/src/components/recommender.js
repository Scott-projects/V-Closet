import "../styles/current-weather.css";
import React from "react";
import { useEffect, useState } from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import "../styles/WardrobePage.css";
import ShapeContainer from "../components/ShapeContainer";
import { getClothingItemsForHomepage } from "../firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import ClothingDisplay from "../components/ClothingDisplay";
import WeatherValue from "./get-weather";
import { getStorageDownloadURL } from "../firebase/storage";

function Recommender() {

    const [user, loading, authError] = useAuthState(auth);
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [headwear, setHeadwear] = useState([]);
    const [allOuterwear, setOuterwear] = useState([]);
    const [sweaters, setSweaters] = useState([]);
    const [isLoadingClothes, setisLoadingClothes] = useState(true);
    const [clothesToDisplay, setClothesToDisplay] = useState([]);
    const [accessories, setAccessories] = useState("");
    const high = sessionStorage.getItem("high");
    const description = sessionStorage.getItem("description");

    useEffect(() => {
        async function fetchData() {
            const unsubscribe = await getClothingItemsForHomepage(user.uid, setShirts, setPants, setShoes, setHeadwear, setOuterwear, setSweaters, setisLoadingClothes);
            return () => unsubscribe;
        }

<<<<<<< HEAD
=======
        if (description == null) {
            setAccessories("Please update your location in the settings menu.")
        }
        else if (description.includes("rain")) {
            setAccessories("Expect rain today, you should bring an umbrella!");
        }
        else if (description.includes("snow")) {
            setAccessories("Expect snow today, bring some gloves!");
        }
>>>>>>> 22e65e9f1a5f8235c9d8e5cbbd812e8c848ddc4f

        if (user && description != null) {
            const unsubscribe = fetchData();
            let reccomendedCloths = [];
            let coldClothes = [];
            let rainClothes = [];
            console.log("Building Reccomendation");
            console.log(high);
            if (high >= 65) {
                const shirt = shirts[1];
                const pant = pants[0];
                const shoe = shoes[0];
                const hat = headwear[0];
                if (hat) {
                    reccomendedCloths.push(hat);
                }
                if (shirt) {
                    reccomendedCloths.push(shirt)
                }
                if (pant) {
                    reccomendedCloths.push(pant)
                }
                if (shoe) {
                    reccomendedCloths.push(shoe);
                }

            }
            if (description.includes("rain")) {
                setAccessories("Expect rain today, you should bring an umbrella!");
                if (allOuterwear) {
                    allOuterwear.forEach((outerwear) => {
                        if (outerwear.checked) {
                            rainClothes.push(outerwear);
                        }
                    });
                }
            }
            else if (description.includes("snow")) {
                setAccessories("Expect snow today, bring some gloves!");
            }
            if (high < 65) {
                const pant = pants[1];
                const outerwear = allOuterwear[0];
                const sweater = sweaters[1];
                const shoe = shoes[1];
                const hat = headwear[1];
                if (hat) {
                    reccomendedCloths.push(hat);
                }
                if (sweater) {
                    reccomendedCloths.push(sweater);
                }
                if (outerwear) {
                    reccomendedCloths.push(outerwear);;
                }
                if (pant) {
                    reccomendedCloths.push(pant);
                }
                if (shoe) {
                    reccomendedCloths.push(shoe);;
                }

            }
            setClothesToDisplay(reccomendedCloths);
            return () => unsubscribe;
        }
        else {
            console.log("Loading Clothes...");
        }
    }, [user, isLoadingClothes]);



    return ((!user || isLoadingClothes || clothesToDisplay.length === 0) ?
        null
        :
        <div>
            <TopNavBar />
            <div className='wardrobe'>
                <p>{accessories}</p>
                <div className="Clothing">
                    {clothesToDisplay.map((clothingItem) => (
                        <div key={clothingItem.id}>
                            <ClothingDisplay clothingItem={clothingItem} />
                            {clothingItem.category}
                        </div>)
                    )}
                </div>
            </div>
        </div>
    )


}


export default Recommender;