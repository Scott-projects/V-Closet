import React from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5" 
import "../styles/SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar">
            <h2>My Closet</h2>
            <ul className="side-categories">
                <li className="side-item">All</li>
                <li className="side-item">Outerwear</li>
                <li className="side-item">Headwear</li>
                <li className="side-item">Sweaters</li>
                <li className="side-item">Shirts</li>
                <li className="side-item">Pants</li>
                <li className="side-item">Shoes</li>
                <li className="side-item"><Link className="ToAddItem" to="/additem"><IoAddCircleOutline /></Link></li>
            </ul>
        </div>
    )
}

export default SideBar;