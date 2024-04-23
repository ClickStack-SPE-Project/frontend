import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link component

function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
      
    </div>
  );
}

export default ImageList;
