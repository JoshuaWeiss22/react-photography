import React from "react";
import Photo from "./Photo";

const EnhancedView = ({ selectedPhoto, setSelectedPhoto }) => {
  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="enhanced-view" onClick={handleClose}>
      <div className="photo-container">
        <Photo photo={selectedPhoto}> </Photo>
      </div>
    </div>
  );
};

export default EnhancedView;


//Create a button, bottom right of photo that when I click I show all the attributes that I have about the photo in text
//Create a copy url button for the photo url
//Using react contact and reducers (https://react.dev/reference/react/useReducer)
//Change airtable to make it have a more meangit ingful sorting method