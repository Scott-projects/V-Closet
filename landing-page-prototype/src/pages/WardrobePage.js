import React from "react";
import { useEffect, useState } from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import "../styles/WardrobePage.css";
import ShapeContainer from "../components/ShapeContainer";
import { CheckAuthentication } from "../components/CheckAuthentication";
import { getClothingItem } from "../firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import ClothingDisplay from "../components/ClothingDisplay";
import { doc } from "firebase/firestore";

function WardrobePage() {
    const [user, loading, authError] = useAuthState(auth);
    const [category, setCategory] = useState("shirts");
    const [clothingItems, setClothingItems] = useState([]);

    /* useEffect(async () => {
         const clothingQueryResult = await getClothingItem(user.uid, category, setClothingItems);
         return () => clothingQueryResult();
     }, [category]);*/

    const displayCategories = () => {
        return 0;
    }
    const handleDisplay = async (e) => {
        e.preventDefault();
        const clothingQueryResult = await getClothingItem(user.uid, category, setClothingItems);
        //console.log("CLOTHING QUERY RESULT---------------------")
        console.log(clothingQueryResult);
        setClothingItems(clothingQueryResult);
    }
    return (
        <CheckAuthentication>
            <div className='wardrobe'>
                {/* <h1 className='wardrobe-text'>Wardrobe Page</h1> */}
                <div>
                    <button onClick={handleDisplay}>TESTING</button>
                </div>
                {console.log("LOADING--------------------------")}
                {clothingItems.forEach((doc) => (
                    <div key={doc.id}>
                        <div>
                            <image alt="Clothing Image" src={clothingItems.bucket} />
                            <h2>
                                Category = {clothingItems.category}
                            </h2>
                            <h2>
                                color = {clothingItems.color}
                            </h2>
                        </div>
                        {console.log("CLOTHING ITEM-----------")}
                        {console.log(doc.data())}
                        <ClothingDisplay clothingItem={doc} />
                    </div>)
                )}
            </div>
        </CheckAuthentication>
    )
}

export default WardrobePage;