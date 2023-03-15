import React, {useState, useEffect} from 'react'

function ImageUploader() {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [fileReader, setFileReader] = useState(null);

    const fileSelectedHandler = (event) => {
        const selectedFile = event.target.files[0]; //Stores selected file
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onload = () => { //Read sucessfully and sets preview URL
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile); //Reads contents of file and generates a URL to preview

        setFileReader(reader);
    };

    useEffect(() => { //Prevents possible memory leaks
        return () => {
            if (previewUrl) { //If already set, revoke URL
                URL.revokeObjectURL(previewUrl);
            }
            if (fileReader) { //If already set, abort file
                fileReader.abort();
            }
        };
    }, [previewUrl, fileReader]);

    return (
        <div>
            <input type='file' onChange={fileSelectedHandler} />
            {previewUrl && <img src={previewUrl} alt='Preview' />}
        </div>
    )

}

export default ImageUploader;