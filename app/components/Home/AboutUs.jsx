import React from 'react';
import  DropdownButton  from "../Common/DropDownCheckBox";

const AboutUs = () => {
  return (
    <div className="page-container">
      <div >
        <DropdownButton />
      </div>
      <div className="aboutus-container">
        <div className="top-grid">
          <img className="image-container1" src="/AboutUs/about2.png" alt="Biker Image 1" />
          <img className="image-container2" src="/AboutUs/about1.png" alt="Biker Image 2" />
        </div>
        <div className="bottom-grid">
          <div className="text-container">
            <h3>KNOW ABOUT BIKENBIKER</h3>
            <h1>GET TO KNOW US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula imperdiet nibh, at volutpat nulla aliquam ut. Nulla facilisi. In hac habitasse platea dictumst. Curabitur nec nisl eget elit interdum ullamcorper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula imperdiet nibh, at volutpat nulla aliquam ut. Nulla facilisi. In hac habitasse platea dictumst. Curabitur nec nisl eget elit interdum ullamcorper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula imperdiet nibh, at volutpat nulla aliquam ut. Nulla facilisi. In hac habitasse platea dictumst. Curabitur nec nisl eget elit interdum ullamcorper.
            </p>
          </div>
          <div className='image-containers'>
            <div className="blank"></div>
            <img className='store-image' src="/AboutUs/STORE_IMAGE.png" alt="Store Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
