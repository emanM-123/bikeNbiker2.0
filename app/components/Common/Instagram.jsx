import React from "react";
import Marquee from "react-fast-marquee";

const Instagram = ({feed}) => {
    const imageNames = [
        "Rectangle.png",
        "Rectangle.png",
        "Rectangle.png",
        "Rectangle.png",
        "Rectangle.png",
        "Rectangle.png",
        "Rectangle.png",
    ];

    return (
        <div className="insta-container">
            <div className="insta-heading">
                <h1>INSTAGRAM FEED</h1>
            </div>

            <div className="insta-images" id="insta-images">
                <Marquee pauseOnHover={true}>
                    {imageNames.map((imageName, index) => (
                        <a href={`/`}>
                            <img
                                key={index}
                                src={`/Insta/${imageName}`}
                                alt={`Image ${index + 1}`}
                            />
                        </a>
                    ))}
                </Marquee>
            </div>

        </div>
    );
};

export default Instagram;
