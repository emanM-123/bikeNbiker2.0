import React from 'react';
import { Link } from '@remix-run/react';

const Gears = () => {
    const brandLogos = [
        'NewArrival/mototect.png',
        'NewArrival/moto.png',
        'NewArrival/tiivra.png',
        'NewArrival/raida.png',
        'NewArrival/tvs.png',
        'NewArrival/evs.png'
    ];

    return (
        <div className='gear-container'>
            <div className="gear-title">
                <p>SELECT GEARS BRAND</p>
                <h1>BRAND OF GEARS</h1>
            </div>
            <div className='gear-container1'>
                <div className="gear-left-logo-container">
                    <div className="gear-logos-grid">
                        {brandLogos.map((imageUrl, index) => (
                            <Link key={index} to={`/listings/${index}`} className={`logo-link ${index >= 4 ? 'second-row' : ''}`}>
                                <img
                                    src={imageUrl}
                                    alt={`Gears Logo ${index}`}
                                    className="gear-grid-image"
                                    style={{ cursor: 'pointer' }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="gear-right-bike-image">
                    <img
                        src="Images/Helmet.png"
                        alt="Large Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gears;
