import React from 'react';

const images1 = [
    '/Cards1/CLEARWATER_LIGHTS1.png',
    '/Cards1/HIMALAYAN_BANNER.png',
]

const Card = () => {
    return (
        <div className="container">
            <div className="row2">
                {images1.map((image, index) => (
                    <div key={index} className={`image2 ${index === 0 ? 'image2-small' : 'image2-large'}`}>
                        <img src={image} alt={`Image ${index}`} className="image2-img" />
                        {index === 0 && (
                            <p className="image2-text">CLEAR WATER LIGHTS</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
