import React from "react";
import { useEffect, useState } from "react";
import "../styles/WardrobePage.css";
import { getClothingItem } from "../firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import ClothingDisplay from "../components/ClothingDisplay";

function QueryClothes(props) {
    const [user, loading, authError] = useAuthState(auth);
    const [category, setCategory] = useState("shirts");
    const [clothingItems, setClothingItems] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoadingClothes, setisLoadingClothes] = useState(true);
    const myArray = [];

    useEffect(() => {
        async function fetchData() {
            const unsubscribe = await getClothingItem(user.uid, category, setClothingItems, setisLoadingClothes);
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