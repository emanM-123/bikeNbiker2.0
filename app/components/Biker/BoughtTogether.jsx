import React from 'react';
import ProductCard1 from "~/components/Common/ProductCard1";
import ProductCard2 from "~/components/Common/ProductCard2";

const dummyProducts = [
    {
        id: 1,
        imgUrl: '/Cards/HLuggage.png',
        brand: 'Givi',
        title: 'Monokey Trekker Outback EVO 58L Black Top Case',
        price: '57,899',
        stock: 'IN STOCK'
    },
    {
        id: 2,
        imgUrl: '/Cards/HLuggage.png',
        brand: 'Givi',
        title: 'Monokey Trekker Outback EVO 42L Black Top Case',
        price: '47,899',
        stock: 'IN STOCK'
    },
    {
        id: 3,
        imgUrl: '/Cards/HLuggage.png',
        brand: 'Givi',
        title: 'Monokey Trekker Outback EVO 30L Black Top Case',
        price: '37,899',
        stock: 'IN STOCK'
    }
];

const BoughtTogether = () => {
    console.log('Dummy Products:', dummyProducts);

    return (
        <div className="produt-arrival-container1">
            <div className="p-title">
                <p>VIEW A SELECTION OF OUR MOST POPULAR GEARS</p>
                <h1>FREQUENTLY BOUGHT TOGETHER</h1>
            </div>
            <div className="bought-together-container">
                <div className="bought-together-container">
                    {/* {dummyProducts.map((product, index) => (
                        <ProductCard1 key={index} product={product} />
                    ))} */}
                     {dummyProducts.map((product, index) => (
                        <ProductCard2 key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoughtTogether;
