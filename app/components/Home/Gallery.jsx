import React from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
    const imageNames = [
        "Gallery.png",
        "Gallery1.png",
        "Gallery2.png",
        "Gallery4.png",
    ];

    return (
        <div className="gallery-container">
            <div className='gallery-heading'>
                <div className="gallery-title">
                    <p>CUSTOMER ADDED PHOTOS</p>
                    <h1>RIDER GALLERY</h1>
                </div>
                <img className="header-gallery" src="/Gallery/header_img.png" alt="" />
            </div>
            <div className="gallery-images" id="gallery-images">
                <Marquee
                    speed={200}
                    // pauseOnHover={true}
                >
                    {imageNames.map((imageName, index) => (
                        <img
                            key={index}
                            src={`/Gallery/${imageName}`}
                            alt={`Image ${index + 1}`}
                        />
                    ))}
                </Marquee>
            </div>

        </div>
    );
};

export default Gallery;
