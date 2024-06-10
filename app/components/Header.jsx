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
                <button className="bg-zinc-800 text-gray-1000 py-2 px-4 rounded-full flex items-center py-4 mr-6">
                    <FontAwesomeIcon icon={faSearch} className="mr-2 text-sm w-5 h-5" />
                    Search for product....
                </button>
                <div className="flex items-center space-x-4"> 
                    <Link to="/cart" style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faShoppingCart} className="text-sm w-5 h-5" />
                    </Link>
                    <Link to="/favorites" style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faHeart} className="text-sm w-5 h-5"/>
                    </Link>
                    <Link to="/account" style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faUser} className="text-sm w-5 h-5"/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
