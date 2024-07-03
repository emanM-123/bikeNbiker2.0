
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const RiderReview = () => {
    const reviews = [
        {
            stars: 5,
            customer: "Arjun A.",
            description: "Great ride! Very comfortable and safe."
        },
        {
            stars: 4,
            customer: "Arjun B.",
            description: "Great ride! Very comfortable and safe."
        },
        {
            stars: 3,
            customer: "Arjun C.",
            description: "Great ride! Very comfortable and safe."
        },
        {
            stars: 1,
            customer: "Arjun D.",
            description: "Great ride! Very comfortable and safe."
        },
        {
            stars: 2,
            customer: "Arjun E.",
            description: "Great ride! Very comfortable and safe."
        },
        {
            stars: 3,
            customer: "Arjun F.",
            description: "Great ride! Very comfortable and safe."
        }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(null);

    const handleNext = () => {
        if (startIndex < reviews.length - 3) {
            setStartIndex(startIndex + 1);
            setSlideDirection('right'); 
            setTimeout(() => setSlideDirection(null), 500); 
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
            setSlideDirection('left'); 
            setTimeout(() => setSlideDirection(null), 500); 
        }
    };

    const renderStars = (count) => {
        return (
            <div className="stars">
                {Array(5).fill().map((_, i) => (
                    <span
                        key={i}
                        className={`star ${i < count ? 'filled' : ''}`}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="rider-review">
            <div className='review-head'>
                <h2 className="review-heading">Rider Reviews</h2>
                <div className="slider-arrows">
                    <span className="slider-arrow left" onClick={handlePrev}>
                        <FaArrowLeft />
                    </span>
                    <span className="slider-arrow right" onClick={handleNext}>
                        <FaArrowRight />
                    </span>
                </div>
            </div>

            <div className={`review-slider ${slideDirection}`}>
                <div className="review-cards">
                    {reviews.slice(startIndex, startIndex + 3).map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="stars">{renderStars(review.stars)}</div>
                            <div className="customer">{review.customer}</div>
                            <div className="description">{review.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RiderReview;


