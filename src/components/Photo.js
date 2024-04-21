import React from 'react';

const Photo = ({ photo }) => {
  return (
    <div className="photo" draggable>
      <img src={photo} alt="Photo" />
    </div>
  );
};

export default Photo;
