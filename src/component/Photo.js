import React from "react";

const baseURL =
    "https://drive.google.com/thumbnail?id=";

const Photo = ({ photo, setSelectedPhoto }) => {
    const clicked = () => {
        if (setSelectedPhoto) {
            setSelectedPhoto(photo)
        }
    }
    return <div onClick={() => clicked()}>
        <img
            key={photo.id}
            src={`${baseURL}${photo.id}&sz=w1000`}
            alt={photo.alt}
            className="photo"
        />
    </div>
}

export default Photo;

