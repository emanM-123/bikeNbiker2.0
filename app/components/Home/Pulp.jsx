import React from 'react';
import Card from './Card';

const Pulp = () => {
    const cards = [
        {
            backgroundImage: '/Cards/Protection.png',
            hoverBackgroundImage: '/Cards/HProtection.png',
            title: 'Protection',
            description: `don't compromise on protection-choose quality accessories to keep your bike secure for all your thrilling adventures`,
            hoverTitle: 'Protection',
            hoverDescription: `don't compromise on protection-choose quality accessories to keep your bike secure for all your thrilling adventures`,
            hoverPosition: { top: '140px', left: '105px', width: '250px' }
        },
        {
            backgroundImage: '/Cards/Utility.png',
            hoverBackgroundImage: '/Cards/HUtility.png',
            title: 'Utility',
            description: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
            hoverTitle: 'Utility',
            hoverDescription: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
            hoverPosition: { top: '160px', left: '90px', width: '220px' }

        },
        {
            backgroundImage: '/Cards/Luggage.png',
            hoverBackgroundImage: '/Cards/HLuggage.png',
            title: 'Luggage',
            description: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
            hoverTitle: 'Luggage',
            hoverDescription: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
            hoverPosition: { top: '240px', right: '-40px', width: '200px' }
        },
        {
            backgroundImage: '/Cards/Performance.png',
            hoverBackgroundImage: '/Cards/HPerformance.png',
            title: 'Performance',
            description: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
            hoverTitle: 'Performance',
            hoverDescription: `Discover critical components for motorcycle safety & longivevity with Bikenbiker's pulp series`,
            hoverPosition: { top: '10px', left: '-70px', width: '450px' }
        },
    ];

    return (
        <div>
            <div className="content-pulp">
                <div className="left-content">
                    <h1>UNDERSTAND PULP</h1>
                </div>
                <div className="middle-content">
                    <p>Discovery critical components for motorcycle safety & longevity with Bikenbiker's pulp series</p>
                </div>
                <div className="right-content">
                    <img className="image-container3" src="/Cards/decor_logo.png" alt="Biker Image 1" />
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
                        hoverPosition={card.hoverPosition}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pulp;

