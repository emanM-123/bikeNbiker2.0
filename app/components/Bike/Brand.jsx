import React from 'react';
import { Link } from '@remix-run/react';

const brands = [
    { id: 1, name: 'bajaj', imageUrl: 'Make/bajaj.png' },
    { id: 2, name: 'benelli', imageUrl: 'Make/benelli.png' },
    { id: 3, name: 'bmw', imageUrl: 'Make/bmw.png' },
    { id: 4, name: 'ducati', imageUrl: 'Make/ducati.png' },
    { id: 5, name: 'triumph', imageUrl: 'Make/triumph.png' },
    { id: 6, name: 'jawa', imageUrl: 'Make/jawa.png' },
    { id: 7, name: 'kawasaki', imageUrl: 'Make/kawasaki.png' },
    { id: 8, name: 'ktm', imageUrl: 'Make/ktm.png' },
    { id: 9, name: 'harley-davidson', imageUrl: 'Make/harley-davidson.png' },
    { id: 10, name: 'yamaha', imageUrl: 'Make/yamaha.png' },
    { id: 11, name: 'hero', imageUrl: 'Make/hero.png' },
    { id: 12, name: 'honda', imageUrl: 'Make/honda.png' },
    { id: 13, name: 'royal-enfield', imageUrl: 'Make/royal-enfield.png' },
    { id: 14, name: 'suzuki', imageUrl: 'Make/suzuki.png' },
    { id: 15, name: 'yezdi', imageUrl: 'Make/yezdi.png' },
];

const Brand = () => {
    return (
        <div className='brand-container'>
            <div className="brand-title">
                <p>BROWSE ACCESSORIES BY BIKE BRAND</p>
                <h1>SELECT YOUR BIKE BRAND</h1>
            </div>
            <div className='brand-container1'>
                <div className="left-logo-container">
                    <div className="logos-grid">
                        {brands.map((brand) => (
                            <Link key={brand.id} to={`/${brand.id}-${brand.name}`} className="logo-link">
                                <img
                                    src={brand.imageUrl}
                                    alt={`Brand Logo ${brand.name}`}
                                    className="grid-image"
                                    style={{ cursor: 'pointer' }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="right-bike-image">
                    <img
                        src="Make/BIKER_OF_BIKE_PAGE.png"
                        alt="Large Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Brand;
