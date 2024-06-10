import React from 'react';
import { Link } from '@remix-run/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-black pb-8 pt-8 text-white" style={{ width: '100%' }}>
            <div className="flex items-center ml-16">
                <img src="/path-to-logo.png" alt="Logo" className="h-12" />
            </div>
            <div className="flex space-x-6 ml-16"> 
                <button className="bg-zinc-800 border border-gray-500 hover:bg-red-700 text-white font-bold py-4 px-10">
                    BIKE
                </button>
                <button className="bg-zinc-800 border border-gray-500 hover:bg-red-700 text-white font-bold py-4 px-10">
                    BIKER
                </button>
            </div>
            <div className="flex items-center mr-16">
                
            </div>
        </header>
    );
};

export default Header;
