import React, { useState } from 'react';

const CustomButton = ({ text = "Click Here" }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      style={{
        background: isActive ? '#C40505' : '#F5F5F5',
        color: isActive ? '#FFFFFF' : '#000000',
        fontFamily: 'Poppins',
        fontSize: '15px',
        fontWeight: 600,
        lineHeight: '26px',
        textAlign: 'center',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        whiteSpace: 'nowrap', 
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
