
import React, { useState } from 'react';

const ProductCard2 = ({ product }) => {
    const [isSelected, setIsSelected] = useState(false);

    if (!product) {
        return null;
    }

    const handleCheckboxChange = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className="fproduct-card">
            <div className="fimage-container">
                <div className="fproduct-checkbox">
                    <input
                        type="checkbox"
                        id={`productCheckbox-${product.id}`}
                        checked={isSelected}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor={`productCheckbox-${product.id}`}></label>
                </div>
                <img src={product.imgUrl} alt={product.title} className="fproduct-image" />
            </div>
            <div className="fproduct-divider" ></div>
            <div className="fproduct-info">
                <p className="fproduct-brand">{product.brand}</p>
                <p className="fproduct-title">{product.title}</p>
                <p className="fproduct-price">Rs. {product.price}</p>
                <div className="stock-info">
                    <img src="/NewArrival/radio_btn.png" alt="" className='stock-radio' />
                    <span className="stock-flag">{product.stock}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard2;
