import React from 'react';
import ImageCard from '../Common/ImageCard';

const dummyProducts = [
    {
        imgUrl: '/NewArrival/dashcam.png',
        title: 'Monokey',
        url: '/'
    },
    {
        imgUrl: '/NewArrival/aerosol.png',
        title: 'toolbox',
        url: '/'
    },
    {
        imgUrl: '/NewArrival/universal.png',
        title: 'universal accessories',
        url: '/'
    },
    {
        imgUrl: '/NewArrival/power.png',
        title: 'power accessories',
        url: '/'
    },
    {
        imgUrl: '/NewArrival/toolbox.png',
        title: 'toolbox',
        url: '/'
    },
    {
        imgUrl: '/NewArrival/bike.png',
        title: 'bike scale mode;',
        url: '/'
    }
];

const UniProduct = () => {
    return (
        <div className="universal-product-container">
            <div className="p-title">
                <p>UNIVERSAL PRODUCTS</p>
                <h1>UNIVERSAL PRODUCTS</h1>
            </div>
            <div className="universal-container">
                <div className="universal-product">
                     {dummyProducts.map((product, index) => (
                        <ImageCard 
                            key={index} 
                            product={product} 
                            isSecondRow={index >= 4} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UniProduct;
