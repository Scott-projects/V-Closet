import React from "react";
import { useState, useEffect } from "react";
import TopNavBar from "../components/TopNavBar";
import '../styles/MarketPage.css';
import { CheckAuthentication } from "../components/CheckAuthentication";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { getAllMarketItems } from "../firebase/firestore";
import { ImSpinner2 } from "react-icons/im";
import ClothingDisplay from "../components/ClothingDisplay";
import ShapeContainer from "../components/ShapeContainer";

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
        <div className="loading-data">
            <ImSpinner2 className='load-spin' />
        </div>
        :
        <CheckAuthentication>
            <div className="market">
                <TopNavBar />
                <ShapeContainer />
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