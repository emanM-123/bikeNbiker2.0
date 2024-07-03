import React from 'react';
import ProductCard from "~/components/Common/ProductCard";

const dummyProducts = [
    {
        imgUrl: '/Cards/HLuggage.png',
        brand: 'Givi',
        title: 'Monokey Trekker Outback EVO 58L Black Top Case',
        price: '57,899',
        stock: 'IN STOCK'
    },
    {
        imgUrl: '/Cards/HLuggage.png',
        brand: 'Givi',
        title: 'Monokey Trekker Outback EVO 42L Black Top Case',
        price: '47,899',
        stock: 'IN STOCK'
    },
    {
        imgUrl: '/Cards/HLuggage.png',
        brand: 'Givi',
        title: 'Monokey Trekker Outback EVO 30L Black Top Case',
        price: '37,899',
        stock: 'IN STOCK'
    },
    {
        imgUrl: '/Cards/HLuggage.png',
        brand: 'Givi',
        title: 'Monokey Trekker Outback EVO 30L Black Top Case',
        price: '37,899',
        stock: 'IN STOCK'
    }
];

const NewArrivalProduct = () => {

    return (
        <div className="produt-arrival-container">
            <div className="p-title">
                <p>RECENTLY VIEWED</p>
                <h1>RECENTLY VIEWED</h1>
            </div>
            <div className="recently-viewed-container">
                <div className="product-cards-container">
                    {dummyProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewArrivalProduct;
