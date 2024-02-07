import React from "react";
import PhotoColumn from './PhotoColumn';

function Photos({ photos }) {
    // console.log(photos)
    // console.log("checking filter", photos.filter((photo) => +photo.col === 1))

    // if (photos.length > 0) {
    //     console.log("photos col 1", typeof (photos[0].col))
    //     console.log("photos component rendering")
    // }

    return (
        <div className="photos">
            {[1, 2, 3].map((columnID) => (
                <PhotoColumn
                    key={columnID}
                    images={photos.filter((photo) => +photo.col === columnID)}
                />
            ))}
        </div>
    );
}

export default Photos;