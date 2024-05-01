import React from "react";
import Photo from "./Photo";


function PhotoColumn({ images, setSelectedPhoto }) {
    return (
        <div className="column">
            {images.map((photo) => (
               <Photo photo={photo} setSelectedPhoto={setSelectedPhoto} />
            ))}
        </div>
    );

}

export default PhotoColumn;