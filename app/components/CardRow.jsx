import React from 'react';
import Card from './Card';

const CardRow = () => {
    const cards = [
        {
            backgroundImage: '/Cards/Protection.png',
            hoverBackgroundImage: '/Cards/Protection-h.png',
            title: 'Protection',
            description: `don't compromise on protection-choose quality accessories to keep your bike secure for all your thrilling adventures`,
            hoverTitle: 'Protection',
            hoverDescription: `don't compromise on protection-choose quality accessories to keep your bike secure for all your thrilling adventures`,
        },
        {
            backgroundImage: '/Cards/Utility.png',
            hoverBackgroundImage: '/Cards/Utility-h.png',
            title: 'Utility',
            description: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
            hoverTitle: 'Utility',
            hoverDescription: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
        },
        {
            backgroundImage: '/Cards/Luggage.png',
            hoverBackgroundImage: '/Cards/Luggage-h.png',
            title: 'Luggage',
            description: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
            hoverTitle: 'Luggage',
            hoverDescription: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
        },
        {
            backgroundImage: '/Cards/Performance.png',
            hoverBackgroundImage: '/Cards/Performance-h.png',
            title: 'Performance',
            description: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
            hoverTitle: 'Performance',
            hoverDescription: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
        },
    ];

    return (
        <div>
            <div className="content-pulp">
                <div className="left-content">
                    <h1>UNDERSTAND PULP</h1>
                </div>
                <div className="right-content">
                    <p>Discovery critical components for motorcycle safety & longevity with Bikenbiker's pulp series</p>
                </div>
            </div>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        backgroundImage={card.backgroundImage}
                        hoverBackgroundImage={card.hoverBackgroundImage}
                        title={card.title}
                        description={card.description}
                        hoverTitle={card.hoverTitle}
                        hoverDescription={card.hoverDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardRow;
