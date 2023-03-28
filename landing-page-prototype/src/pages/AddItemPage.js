import React from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer";
import AddClothes from "../components/AddClothes";
import '../styles/AddItemPage.css'
import { CheckAuthentication } from "../components/CheckAuthentication";

function AddItemPage() {
    return (
        <div className="Add-Item-Page">
            <CheckAuthentication />
            <TopNavBar />
            <ShapeContainer color="" />
            <h1 className="add-text">Add Item</h1>

            <div className="add-clothes-container">
                <AddClothes />
            </div>
        </div>
    )
}

export default AddItemPage;