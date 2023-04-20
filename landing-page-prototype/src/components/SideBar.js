import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5"
import "../styles/SideBar.css";

function SideBar({ onSelect }) {
  const categories = [
    { name: "All", value: "all" },
    { name: "Outerwear", value: "outerwear" },
    { name: "Headwear", value: "headwear" },
    { name: "Sweaters", value: "sweaters" },
    { name: "Shirts", value: "shirts" },
    { name: "Pants", value: "pants" },
    { name: "Shoes", value: "shoes" },
  ];
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (value) => {
    setSelectedValue(value);
    onSelect(value);
  }

  return (
    <div className="sidebar">
      <h2 className="closet-heading">My Closet</h2>
      <ul className="side-categories">
        {categories.map((category) => (
          <li
            key={category.value}
            className={`side-${category.value}${selectedValue === category.value ? " bold" : ""}`}
            onClick={() => handleValueChange(category.value)}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <Link className="ToAddItem" to="/additem">
        <IoAddCircleOutline />
      </Link>
    </div>
  )
}

export default SideBar;
