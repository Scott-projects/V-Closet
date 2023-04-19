import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5"
import "../styles/SideBar.css";

function SideBar({ onSelect }) {
    const [selectedValue, setSelectedValue] = useState("");
    const handleValueChange = (value) => {
        setSelectedValue(value);
        onSelect(value);
    }

    return (
        <div className="sidebar">
            <h2 className="closet-heading">My Closet</h2>
            <ul className="side-categories">
                <li className="side-item" onClick={() => handleValueChange("all")}>All</li>
                <li className="side-item" onClick={() => handleValueChange("outerwear")}>Outerwear</li>
                <li className="side-item" onClick={() => handleValueChange("headwear")}>Headwear</li>
                <li className="side-item" onClick={() => handleValueChange("sweaters")}>Sweaters</li>
                <li className="side-item" onClick={() => handleValueChange("shirts")}>Shirts</li>
                <li className="side-item" onClick={() => handleValueChange("pants")}>Pants</li>
                <li className="side-item" onClick={() => handleValueChange("shoes")}>Shoes</li>
                <li className="side-item"><Link className="ToAddItem" to="/additem"><IoAddCircleOutline /></Link></li>
            </ul>
        </div>
    )
}

export default SideBar;