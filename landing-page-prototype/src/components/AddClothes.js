import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import "../styles/AddClothes.css";

function AddClothes() {

    // Images
    const [image, setImage] = useState(null);
    let saveImage = null; //Variable to hold image to add to database   set = to image or null
    const handleImageUpload = (newImage) => {
        setImage(newImage);
        saveImage = newImage; //Stores image of user upload
    };

    //Category
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    //Color
    const [selectedColor, setSelectedColor] = useState('');
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <form>
                {/* Information about clothes and adds to database*/}
                <div className="add-clothes-form">
                    <div className="add-image-container">
                        <ImageUploader onImageUpload={handleImageUpload} />
                    </div>

                    <div className="add-clothes-information">
                        <h3>Category</h3>
                        <select value={selectedCategory} onChange={handleCategoryChange}>
                            <option hidden>Select a category</option>
                            <option value="shirts">Shirts</option>
                            <option value="pants">Pants</option>
                            <option value="shoes">Shoes</option>
                        </select>
                        <p>You selected: {selectedCategory}</p>

                        <h3>Color</h3>
                        <select value={selectedColor} onChange={handleColorChange}>
                            <option hidden>Select the color</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                        </select>
                        <p>You selected: {selectedColor} </p>
                        image result: {image && <img src={saveImage} alt="Uploaded (Test)" />}

                        <h3>What is it good for?</h3>
                        <input type="checkbox" name="rain" id="rain" value="rain" />
                        <label for="rain"> Rain</label> <br />
                        <input type="checkbox" name="cold" id="cold" value="cold" />
                        <label for="cold"> Cold</label> <br />

                        <h3>Description</h3>
                        <input type="text"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddClothes;