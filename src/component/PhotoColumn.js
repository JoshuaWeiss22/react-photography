import React from "react";

const baseURL = "https://drive.google.com/thumbnail?id="

function PhotoColumn({ images }) {
    // console.log("photo column comp rendered")
    // console.log(images)

    return (
        <div className="column">
            {images.map((photo) => (
                <img
                    //crossOrigin="Anonymous"
                    key={photo.id}
                    src={`${baseURL}${photo.id}&sz=w1000`}
                    alt={photo.alt}
                    className="photo"
                />
            ))}
        </div>
    );

}

export default PhotoColumn;