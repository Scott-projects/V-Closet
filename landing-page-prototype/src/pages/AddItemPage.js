import React from "react";
import TopNavBar from "../components/TopNavBar";
import '../styles/AddItemPage.css'

function AddItemPage() {
    return (
        <div className="Add-Item-Page">
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <TopNavBar />
            <h1 className="add-text">Add Item Page</h1>
        </div>
    )
}

export default AddItemPage;