import React from "react";
import PhotoColumn from './PhotoColumn';

function Photos({ photos, setSelectedPhoto }) {
    return (
        <div className="photos">
            {[1, 2, 3].map((columnID) => (
                <PhotoColumn
                    setSelectedPhoto={setSelectedPhoto}
                    key={columnID}
                    images={photos.filter((photo) => +photo.col === columnID)}
                />
            ))}
        </div>
    );
}

export default Photos;