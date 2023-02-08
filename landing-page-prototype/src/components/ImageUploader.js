import React, {useState} from 'react'

function ImageUploader() {
    const [image, setImage] = useState(null);

    const handleChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div>
            <input type='file' onChange={handleChange} />
            {image && <img src={image} />}
        </div>
    )

}

export default ImageUploader;