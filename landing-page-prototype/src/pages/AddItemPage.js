import React from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer";
import AddClothes from "../components/AddClothes";
import '../styles/AddItemPage.css'

function AddItemPage() {
    return (
        <div className="Add-Item-Page">
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className="add-text">Add Item</h1>
            <AddClothes />
        </div>
    )
}

export default AddItemPage;