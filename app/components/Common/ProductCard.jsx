import React from 'react';

const ProductCard = ({ product }) => {
    if (!product) {
        return null;
    }

    return (
        <div className="product-card">
            <div className="image-container">
                <img src={product.imgUrl} alt={product.title} className="product-image" />
                <div className="watermark">Watermark</div>
            </div>
            <hr className="divider" />
            <div className="product-info">
                <p className="product-brand">{product.brand}</p>
                <p className="product-title">{product.title}</p>
                <p className="product-price">Rs. {product.price}</p>
                <div className="stock-info">
                    <img src="/NewArrival/radio_btn.png" alt="" className='stock-radio' />
                    <span className="stock-flag">{product.stock}</span>
                </div>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
        </div>
    );
};

export default ProductCard;
