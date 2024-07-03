
import React, { useState } from 'react';

const DropdownButton = ({ buttonText = "Dropdown Button", checkboxOption = ["Option 1", "Option 2", "Option 3"] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [checkboxOptions, setCheckboxOptions] = useState(checkboxOption);
    const caretImgSrc = isOpen ? '/Images/caret-up.png' : '/Images/caret-down.png';

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (index) => {
        const updatedOptions = [...checkboxOptions];
        updatedOptions[index] = { text: checkboxOptions[index].text, checked: !checkboxOptions[index].checked };

        console.log('Checkbox changed:', updatedOptions);
        setCheckboxOptions(updatedOptions);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
                style={{
                    background: '#F5F5F5',
                    color: '#000000',
                    fontFamily: 'Poppins',
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: '26px',
                    textAlign: 'center',
                    border: 'none',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    width: '100%',
                }}
                onClick={toggleDropdown}
            >
                {buttonText} {caretImgSrc && <img src={caretImgSrc} alt="caret" style={{ marginLeft: '5px', height: '12px' }} />}
            </button>
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        marginTop: '10px',
                        width: '100%',
                        left: 0,
                        background: '#F5F5F5',
                        padding: '10px',
                        zIndex: 1000,
                        borderRadius: '4px',
                        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {checkboxOptions.map((option, index) => (
                        <label key={index} style={{ display: 'block', marginBottom: '8px' }}>
                            <input type="checkbox" checked={option.checked} style={{ backgroundColor: 'red', borderRadius: '5px' }} onChange={() => handleCheckboxChange(index)} />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
