import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import "../styles/AddClothes.css";

function AddClothes() {
    const [selectedOption, setSelectedOption] = useState('');

    const [image, setImage] = useState(null);

    let saveImage = null; //Variable to hold image to add to database   set = to image/null

    const handleImageUpload = (newImage) => {
        setImage(newImage);
        saveImage = newImage;
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
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
                        <select value={selectedOption} onChange={handleOptionChange}>
                            <option value="">Select a category</option>
                            <option value="Shirt">Shirts</option>
                            <option value="Pant">Pants</option>
                            <option value="Shoe">Shoes</option>
                        </select>
                        <p>You selected: {selectedOption}</p>
                        image result: {image && <img src={saveImage} alt="Uploaded (Test)" />}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddClothes;