import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import { NavLink, Link, useNavigate } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';

export function Header({ header }) {
  const { shop, menu } = header;
  const [activeButton, setActiveButton] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [models, setModels] = useState([]);
  const [showBottomSection, setShowBottomSection] = useState(false);
  const navigate = useNavigate();

  const [FontAwesomeIcon, setFontAwesomeIcon] = useState(null);
  const [faSearch, setFaSearch] = useState(null);

  useEffect(() => {
    (async () => {
      const { FontAwesomeIcon } = await import('@fortawesome/react-fontawesome');
      const { faSearch } = await import('@fortawesome/free-solid-svg-icons');

      setFontAwesomeIcon(() => FontAwesomeIcon);
      setFaSearch(() => faSearch);
    })();
  }, []);

  console.log(models, "====================", selectedMake, "==================");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    setShowBottomSection(true);
    if (buttonType === 'bike') {
      setSelectedMake(null);
      navigate('/bike');
    } else if (buttonType === 'biker') {
      navigate('/biker')
    }
  };

  const handleMakeChange = (e) => {
    console.log('handleMakeChange called');
    const selectedMakeId = e.target.value;
    console.log('Selected Make ID:', selectedMakeId);
  
    setSelectedMake(selectedMakeId);
  
    const bikeItems = menu.items.find((item) => item.title.toLowerCase() === 'bike');
    if (bikeItems) {
      const makeItems = bikeItems.items;
      console.log('Make Items:', makeItems);
  
      const selectedMakeItems = makeItems.find((item) => item.url.toLowerCase() === selectedMakeId.toLowerCase());
      console.log('Selected Make Items:', selectedMakeItems);
  
      if (selectedMakeItems) {
        setModels(selectedMakeItems.items);
        console.log('Models:', selectedMakeItems.items);
      } else {
        setModels([]);
      }
    } else {
      console.log('No "bike" menu item found.');
    }
  };
  


  const menuItems = menu.items;
  const bikeItems = menuItems.filter(item => item.title.toLowerCase() === "bike");
  const bikeItemTitles = bikeItems[0].items.map(item => item);

  const bikerItems = menuItems.filter(item => item.title.toLowerCase() === "biker");
  const bikerItemTitles = bikerItems[0].items.map(item => item);

  return (
    <header className="header">
      <div className="header-container" style={{ paddingTop: activeButton === null ? '0' : '100px' }}>
        <div className="header-inner">
          <div className="header-logo">
            <NavLink prefetch="intent" to="/" className="logo-w-text" onClick={() => { setShowBottomSection(false); setActiveButton(null); }} >
              <Image
                src={shop.brand.logo.image.url}
                sizes="(min-width: 16em) 16vw, 28vw"
                className="invert-logo"
              />
            </NavLink>
          </div>

          <div className="header-buttons">
            <button
              className={`header-button ${activeButton === 'bike' ? 'active' : ''}`}
              onClick={() => handleButtonClick('bike')}
            >
              BIKE
            </button>
            <button
              className={`header-button ${activeButton === 'biker' ? 'active' : ''}`}
              onClick={() => handleButtonClick('biker')}
            >
              BIKER
            </button>
          </div>

          <div className="header-right">
            {activeButton === 'bike' ? (
              <div className="header-selects">
                <select
                  className="header-select"
                  onChange={handleMakeChange}
                  value={selectedMake}
                >
                  <option>CHOOSE MAKE</option>
                  {bikeItemTitles.map((item) => (
                    <option key={item.id} value={item.url}>
                      {item.title}
                    </option>
                  ))}
                </select>

                <select className="header-select">
                  <option>CHOOSE MODEL</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.url}>
                      {model.title}
                    </option>
                  ))}
                </select>

              </div>
            ) : activeButton === 'biker' ? (
              <select className="header-select">
                <option>CHOOSE GEAR
                </option>
                {bikerItemTitles.map((item) => (
                  <option key={item.id} value={item.url}>
                    {item.title}
                  </option>
                ))}
              </select>
            ) : (
              <>
                {FontAwesomeIcon && faSearch && (
                  <button className="header-search-button">
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                    Search for product....
                  </button>
                )}
                <div className="header-icon-links">
                  <Link to="/cart" className="header-icon-link">
                    <img src="/HeaderIcons/cart.png" alt="Cart" />
                  </Link>
                  <Link to="/favorites" className="header-icon-link">
                    <img src="/HeaderIcons/favorites.png" alt="Favorites" />
                  </Link>
                  <Link to="/account" className="header-icon-link">
                    <img src="/HeaderIcons/user.png" alt="Account" />
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {showBottomSection && (
          <div className="bottom-section">
            <div className="bottom-section-inner">
              <div className="bottom-section-search">
                {FontAwesomeIcon && faSearch && (
                  <button className="bottom-section-search-button">
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                    Search for product....
                  </button>
                )}
              </div>
              <div className="bottom-section-icons">
                <Link to="/cart" className="bottom-section-icon-link">
                  <img src="/HeaderIcons/cart.png" alt="Cart" />
                </Link>
                <Link to="/favorites" className="bottom-section-icon-link">
                  <img src="/HeaderIcons/favorites.png" alt="Favorites" />
                </Link>
                <Link to="/account" className="bottom-section-icon-link">
                  <img src="/HeaderIcons/user.png" alt="Account" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
