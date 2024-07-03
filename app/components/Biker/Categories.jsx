import React from 'react';
import ImageCard from '../Common/ImageCard';

const dummyCategories = [
    {
        imgUrl: '/Category/helmet.png',
        title: 'HELMETS',
        url: '/'
    },
    {
        imgUrl: '/Category/jacket.png',
        title: 'JACKETS',
        url: '/'
    },
    {
        imgUrl: '/Category/pant.png',
        title: 'pants',
        url: '/'
    },
    {
        imgUrl: '/Category/boot.png',
        title: 'boots',
        url: '/'
    },
    {
        imgUrl: '/Category/protector.png',
        title: 'protectors',
        url: '/'
    },
    {
        imgUrl: '/Category/baselayer.png',
        title: 'base layers',
        url: '/'
    },
    {
        imgUrl: '/Category/glove.png',
        title: 'gloves',
        url: '/'
    },
    {
        imgUrl: '/Category/communication.png',
        title: 'communications',
        url: '/'
    }
];

const Categories = () => {
    return (
        <div className="category-product-container">
            <div className="p-title">
                <p>SELECT YOUR RIDING GEAR</p>
                <h1>SHOP BY CATEGORY</h1>
            </div>
            <div className="category-container">
                <div className="category-product">
                     {dummyCategories.map((product, index) => (
                        <ImageCard 
                            key={index} 
                            product={product} 
                            isSecondRow={index >= 7} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
