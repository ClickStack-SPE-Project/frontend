import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageList = ({ images }) => {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100">
            <img
              src={image.link}
              alt={`Image ${index}`}
              className="card-img-top img-fluid rounded"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
