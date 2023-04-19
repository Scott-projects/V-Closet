import React from "react";
import { useState, useEffect } from "react";
import TopNavBar from "../components/TopNavBar";
import '../styles/MarketPage.css';
import { CheckAuthentication } from "../components/CheckAuthentication";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase"; 
import { getAllMarketItems } from "../firebase/firestore";
import { ImSpinner9 } from "react-icons/im";
import ClothingDisplay from "../components/ClothingDisplay";

function MarketPage() {
    const [user] = useAuthState(auth);
    const [clothingItems, setClothingItems] = useState([]);
    const [isLoadingClothes, setisLoadingClothes] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const unsubscribe = await getAllMarketItems(setClothingItems, setisLoadingClothes);
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
    }, [user]);

    return ((!user || isLoadingClothes) ?
        <ImSpinner9 className='spin' />
        :
        <CheckAuthentication>
            <div className="market-test">
                <TopNavBar />
                <div className="market-text">
                {clothingItems.map((clothingItem) => (
                        <div key={clothingItem.id}>
                            <ClothingDisplay clothingItem={clothingItem} />
                        </div>)
                )}
                </div>
            </div>
        </CheckAuthentication>
    )
}

export default MarketPage;