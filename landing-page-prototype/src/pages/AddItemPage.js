import React from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer"
import '../styles/AddItemPage.css'

function AddItemPage() {
    return (
        <div className="Add-Item-Page">
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className="add-text">Add Item Page</h1>
        </div>
    )
}

export default AddItemPage;