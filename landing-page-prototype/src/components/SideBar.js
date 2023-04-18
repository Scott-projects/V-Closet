import React from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5" 
import "../styles/SideBar.css";

function SideBar() {
    return (
        <div className="sidebar">
            <h2 className="closet-heading">My Closet</h2>
            <ul className="side-categories">
                <li className="side-item" value="All">All</li>
                <li className="side-item" value="outerwear">Outerwear</li>
                <li className="side-item" value="headwear">Headwear</li>
                <li className="side-item" value="sweaters">Sweaters</li>
                <li className="side-item" value="shirts">Shirts</li>
                <li className="side-item" value="pants">Pants</li>
                <li className="side-item" value="shoes">Shoes</li>
                <li className="side-item"><Link className="ToAddItem" to="/additem"><IoAddCircleOutline /></Link></li>
            </ul>
        </div>
    )
}

export default SideBar;