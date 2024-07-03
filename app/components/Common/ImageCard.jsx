import React from 'react';

const ImageCard = ({ product, isSecondRow }) => {
    return (
        <div className={`universal-product-card ${isSecondRow ? 'second-row' : ''}`}>
            <div className="universal-product-image">
                <img src={product.imgUrl} alt={product.title} />
                <div className="universal-product-overlay">
                    <span className="overlay-title">{product.title}</span>
                </div>
            </div>
            <div className="universal-product-title">
                <span>{product.title}</span>
            </div>
        </div>
    );
};


export default ImageCard;
