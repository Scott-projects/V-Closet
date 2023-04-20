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

const Recommender = () => {

    const [user, loading, authError] = useAuthState(auth);
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [headwear, setHeadwear] = useState([]);
    const [outerwear, setOuterwear] = useState([]);
    const [sweaters, setSweaters] = useState([]);
    const [isLoadingClothes, setisLoadingClothes] = useState(true);
    const [clothesToDisplay, setClothesToDisplay] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const unsubscribe = await getClothingItemsForHomepage(user.uid, setShirts, setPants, setShoes, setHeadwear, setOuterwear, setSweaters, setisLoadingClothes);
            return () => unsubscribe;
        }
        if (user) {
            const unsubscribe = fetchData();
            console.log("test");
            console.log(isLoadingClothes);
            console.log(shirts[0])

            let recomendedClothes = [];
            let high = sessionStorage.getItem("high");
            if (high > 70) {
                const shirt = shirts.get('1');
                console.log(shirt);
                recomendedClothes.push({
                    ...shirt,
                    color: shirt['color'],
                    category: shirt['category'],
                    checkBoxArray: shirt['checkBoxArray'],
                    bucket: getStorageDownloadURL(shirt['bucket']),
                });

                recomendedClothes.push({
                    ...pants[0],
                    color: pants['color'],
                    category: pants['category'],
                    checkBoxArray: pants['checkBoxArray'],
                    bucket: getStorageDownloadURL(pants['bucket']),
                })
            }
            if (high < 50) {

            }
            console.log(recomendedClothes);
            setClothesToDisplay(recomendedClothes);
            console.log(clothesToDisplay);
            return () => unsubscribe;
        }
        else {
            console.log("Loading Clothes...");
        }
    }, [user]);

    return ((!user || isLoadingClothes) ?
        null
        :
        <div>
            <TopNavBar />
            <div className='wardrobe'>
                <div className="Clothing">
                    {clothesToDisplay.map((clothingItem) => (
                        <div key={clothingItem.id}>
                            <ClothingDisplay clothingItem={clothingItem} />
                        </div>)
                    )}
                </div>
            </div>
        </div>
    )


}


export default Recommender;