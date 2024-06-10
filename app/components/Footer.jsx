import React from 'react';
import { Link } from '@remix-run/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-8 " style={{ width: '100%' }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-3 flex flex-col space-y-6 ml-16">
                        <img src="/path-to-logo.png" alt="Logo" className="h-12" />
                        <p>
                            In publishing and graphic design,
                            Lorem ipsum is a placeholder text commonly used
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faFacebook} className="text-sm w-8 h-8" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faInstagram} className="text-sm w-8 h-8" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faTwitter} className="text-sm w-8 h-8" />
                            </a>
                            <a href="mailto:example@example.com" style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faEnvelope} className="text-sm w-8 h-8" />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-9 grid grid-cols-3 gap-4 mr-16 mt-16 ml-16">
                        <div className="flex flex-col space-y-6">
                            <h2 className="font-bold text-lg">CONTACT INFORMATION</h2>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email:<br /> example@example.com</p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h2 className="font-bold text-lg">ABOUT BIKENBIKER</h2>
                            <Link to="/shop" className="text-white border-b border-gray-700 py-2">About Us</Link>
                            <Link to="/shop" className="text-white border-b border-gray-700 py-2">Careers</Link>
                            <Link to="/shop" className="text-white border-b border-gray-700 py-2">Latest Blog</Link>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h2 className="font-bold text-lg">QUICK LINKS</h2>
                            <Link to="/shop" className="text-white border-b border-gray-700 py-2">Contact Us</Link>
                            <Link to="/contact" className="text-white border-b border-gray-700 py-2">Shipping Policy</Link>
                            <Link to="/faq" className="text-white border-b border-gray-700 py-2">Refund Policy</Link>
                            <Link to="/returns" className="text-white border-b border-gray-700 py-2">Pre Order/Back Order Policy</Link>
                            <Link to="/returns" className="text-white border-b border-gray-700 py-2">Pricing Policy</Link>
                            <Link to="/returns" className="text-white border-b border-gray-700 py-2">Pre Order/Back Order Policy</Link>
                            <Link to="/returns" className="text-white border-b border-gray-700 py-2">Sale Disclaimer</Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8 mr-16">
                    <div>&copy; 2024 Your Company. All rights reserved.</div>
                    <div className="flex space-x-4">
                        <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
                        <span className="text-white">|</span>
                        <Link to="/terms-and-conditions" className="text-white">Terms & Conditions</Link>
                        <span className="text-white">|</span>
                        <Link to="/faq" className="text-white">FAQ</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
