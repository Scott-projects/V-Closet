import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar">
            <h3 className="closet-heading">My Closet</h3>
            <ul className="side-categories">
                <li className="side-item">Shirts</li>
                <li className="side-item">Pants</li>
                <li className="side-item">Shoes</li>
                <li className="side-item"><Link className="ToAddItem" to="/additem">Add Item (+)</Link></li>
            </ul>
        </div>
    )
}

export default SideBar;