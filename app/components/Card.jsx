
import React, { useState } from 'react';

const Card = ({ backgroundImage, hoverBackgroundImage, title, description, hoverTitle, hoverDescription }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="card"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`card-content ${isHovered ? 'card-hover' : ''}`}>
                <h3 className={`card-title ${isHovered ? 'bold' : ''}`}>{isHovered ? hoverTitle : title}</h3>
                <p className={`card-description ${isHovered ? 'small' : ''}`}>{isHovered ? hoverDescription : description}</p>
                {isHovered && <button className="card-button">Know More...</button>}
                {isHovered && (<div className="hover-overlay">
                    <img src={hoverBackgroundImage} alt="Hovered Image" />
                </div>)}
            </div>

        </div>
    );
};

export default Card;
