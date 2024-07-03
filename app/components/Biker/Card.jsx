import React from 'react';
const images= [
  '/Cards1/knee_guard.png',
  '/Cards1/bluetooth.png',
]

const Card = () => {
  return (
    <div className="biker-container">
      <div className="biker-row1">
        {images.map((image, index) => (
          <div key={index} className="image1">
            <img src={image} alt={`Image ${index}`} className="image1-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
