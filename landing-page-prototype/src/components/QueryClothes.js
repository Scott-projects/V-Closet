import React from "react";
import { useEffect, useState } from "react";
import "../styles/WardrobePage.css";
import { getClothingItem } from "../firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import ClothingDisplay from "../components/ClothingDisplay";
import { ImSpinner2 } from "react-icons/im";

function QueryClothes({ selectedCategory }) {
    const [user, loading, authError] = useAuthState(auth);
    const [clothingItems, setClothingItems] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoadingClothes, setisLoadingClothes] = useState(true);
    const myArray = [];

    useEffect(() => {
        async function fetchData() {
            const unsubscribe = await getClothingItem(user.uid, selectedCategory, setClothingItems, setisLoadingClothes);
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
    }, [user, selectedCategory]);

    return ((!user || isLoadingClothes) ?
        <div className="loading-data">
            <ImSpinner2 className='load-spin' />
        </div>
        :
        <div className="Clothing">
            {clothingItems.map((clothingItem) => (
                <div key={clothingItem.id}>
                    <ClothingDisplay clothingItem={clothingItem} />
                </div>)
            )}
        </div>
    )
}

export default QueryClothes;