import "../styles/current-weather.css";
import React from "react";
import { useEffect, useState } from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import "../styles/WardrobePage.css";
import ShapeContainer from "../components/ShapeContainer";
import { getClothingItem } from "../firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import ClothingDisplay from "../components/ClothingDisplay";

const Recommender = () => {
    
    const [user, loading, authError] = useAuthState(auth);
    const [clothingShirts, setClothingShirts] = useState([]);
    const [clothingPants, setClothingPants] = useState([]);
    const [clothingShoes, setClothingShoes] = useState([]);

    const [clothingItems, setClothingItems] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoadingClothes, setisLoadingClothes] = useState(true);
    const myArray = [];

    const displayCategories = () => {
        return 0;
    }

    useEffect(() => {
        async function fetchData() {
            const unsubscribe = await getClothingItem(user.uid, setClothingShirts, setClothingPants, setClothingShoes, setClothingOuterwear, setisLoadingClothes);
            console.log(unsubscribe);
            return () => unsubscribe;
        }
        if (user) {
            const unsubscribe = fetchData();
            return () => unsubscribe;
        }
        else {
            console.log("Loading Clothes...");
        }
    }, [user], category);

    return ((!user || isLoadingClothes) ?
        null
        :
        <div>
            <TopNavBar />
            <div className='wardrobe'>
                <div>
                    <ClothingDisplay clothingItem={clothingItems[1]} />  
                </div>
            </div>
        </div>
    )


}


export default Recommender;