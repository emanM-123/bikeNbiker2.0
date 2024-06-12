import React from 'react';
import { useState } from "react";
import 'regenerator-runtime/runtime';
import { NavLink, Link } from '@remix-run/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Image } from '@shopify/hydrogen';


/**
 * @param {HeaderProps}
 */
export function Header({ header }) {
  const { shop, menu } = header;
  const [activeButton, setActiveButton] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null); 
  const [models, setModels] = useState([]);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    if (buttonType === 'bike') {
      setSelectedMake(null); 
    }
  };
  const handleMakeChange = (e) => {
    const selectedMakeId = e.target.value;
    setSelectedMake(selectedMakeId);
    const makeItems = menu.items.find((item) => item.title.toLowerCase() === 'bike').items;
    const selectedMakeItems = makeItems.find((item) => item.url.toLowerCase() === selectedMakeId.toLowerCase());
    if (selectedMakeItems) {
      setModels(selectedMakeItems.items);
    } else {
      setModels([]);
    }
  };

  const menuItems = menu.items;
  const bikeItems = menuItems.filter(item => item.title.toLowerCase() === "bike");
  const bikeItemTitles = bikeItems[0].items.map(item => item);

  const bikerItems = menuItems.filter(item => item.title.toLowerCase() === "biker");
  const bikerItemTitles = bikerItems[0].items.map(item => item);

  return (
    <header className="header flex items-center justify-between p-4 bg-black pb-14 pt-14 text-white" style={{ width: '100%' }}>
      <div className="flex items-center ml-5">
        <NavLink prefetch="intent" to="/" className="logo-w-text">
          <Image
            src={shop.brand.logo.image.url}
            sizes="(min-width: 16em) 16vw, 28vw"
            className="invert-logo"
          />
        </NavLink>
      </div>

      <div className="flex space-x-6 ml-16">
        <button
          className={`bg-zinc-800 border border-gray-500 hover:bg-red-700 text-white font-bold py-4 px-10 ${activeButton === 'bike' ? 'bg-red-700' : ''}`}
          onClick={() => handleButtonClick('bike')}
        >
          BIKE
        </button>
        <button
          className={`bg-zinc-800 border border-gray-500 hover:bg-red-700 text-white font-bold py-4 px-10 ${activeButton === 'biker' ? 'bg-red-700' : ''}`}
          onClick={() => handleButtonClick('biker')}
        >
          BIKER
        </button>
      </div>
      <div className="flex items-center mr-5">
        {activeButton === 'bike' ? (
          <div className="flex items-center space-x-4">
            <select
              className="bg-zinc-800 border border-gray-500 text-white py-2 px-4"
              onChange={handleMakeChange}
            >
              <option>CHOOSE MAKE</option>
              {bikeItemTitles.map((item) => (
                <option key={item.id} value={item.url}>
                  {item.title}
                </option>
              ))}
            </select>
            <select className="bg-zinc-800 border border-gray-500 text-white py-2 px-4">
              <option>CHOOSE MODEL</option>
              {models.map((model) => (
                <option key={model.id} value={model.url}>
                  {model.title}
                </option>
              ))}
            </select>
          </div>
        ) : activeButton === 'biker' ? (
          <select className="bg-zinc-800 border border-gray-500 text-white py-2 px-4">
            <option>CHOOSE GEARS</option>
            {bikerItemTitles.map((item) => (
              <option key={item.id} value={item.url}>
                {item.title}
              </option>
            ))}
          </select>
        ) : (
          <>
            <button className="bg-zinc-800 text-gray-1000 py-2 px-4 rounded-full flex items-center py-4 mr-6">
              <FontAwesomeIcon icon={faSearch} className="mr-2 text-sm w-5 h-5" />
              Search for product....
            </button>
            <div className="flex items-center space-x-4">
              <Link to="/cart" style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faShoppingCart} className="text-sm w-5 h-5" />
              </Link>
              <Link to="/favorites" style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faHeart} className="text-sm w-5 h-5" />
              </Link>
              <Link to="/account" style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faUser} className="text-sm w-5 h-5" />
              </Link>
            </div>
          </>
        )}
      </div>
    </header >
  );
}
