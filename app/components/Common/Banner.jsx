import React, { useState, useEffect } from 'react';

const images = [
  '/Banners/Home_Banner.png',
  '/Banners/Home_Banner2.png',
];

const images2 = [
  '/AdvCards/POSTER1.png',
  '/AdvCards/POSTER2.png',
  '/AdvCards/POSTER3.png',
];

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusDivs = (n) => {
    showDivs(slideIndex + n);
  };

  const currentDiv = (n) => {
    showDivs(n);
  };

  const showDivs = (n) => {
    let newIndex = n;
    if (n >= images.length) {
      newIndex = 0;
    } else if (n < 0) {
      newIndex = images.length - 1;
    }
    setSlideIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      plusDivs(1);
    }, 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const handleImageClick = (index) => {
    console.log(`Clicked on image ${index}`);
  };

  return (
    <div className="slideshow-container">
      {/* <Carousel
        selectedItem={slideIndex}
        onChange={(index) => currentDiv(index)}
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
      >
        {images.map((image, index) => (
          <div key={index} className={`mySlides ${slideIndex === index ? 'show' : ''}`}>
            <img src={image} className="slide-img" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel> */}
      {images.map((image, index) => (
        <div key={index} className={`mySlides ${slideIndex === index ? 'show' : ''}`}>
          <img src={image} className="slide-img" alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <div className="red-line" style={{ width: `${((slideIndex + 1) / images.length) * 100}%` }}></div>
      <div className="clickable-images">
        {images2.map((image, index) => (
          <img
            key={index}
            src={image}
            className="clickable-image"
            alt={`Clickable Image ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      <div className="slide-controls">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${slideIndex === i ? 'active' : ''}`}
            onClick={() => currentDiv(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;

