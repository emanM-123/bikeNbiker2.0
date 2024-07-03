import React, { useEffect, useState } from 'react';
import { Link } from '@remix-run/react';

function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

export const Footer = ({ footer, header }) => {
  const { menu } = footer;
  const { shop } = header;

  const [FontAwesomeIcon, setFontAwesomeIcon] = useState(null);
  const [icons, setIcons] = useState({});

  useEffect(() => {
    (async () => {
      const { FontAwesomeIcon } = await import('@fortawesome/react-fontawesome');
      const { faFacebook, faTwitter, faInstagram } = await import('@fortawesome/free-brands-svg-icons');
      const { faEnvelope } = await import('@fortawesome/free-solid-svg-icons');

      setFontAwesomeIcon(() => FontAwesomeIcon);
      setIcons({ faFacebook, faTwitter, faInstagram, faEnvelope });
    })();
  }, []);

  const menuItems = menu.items;

  const aboutLinks = menuItems.filter(item => item.title.toLowerCase() === "about bikenbiker");
  const aboutUsData = aboutLinks && aboutLinks.length > 0 ? aboutLinks[0].items.map(item => item) : [];

  const quickLinks = menuItems.filter(item => item.title.toLowerCase() === "quick links");
  const quickLinkData = quickLinks && quickLinks.length > 0 ? quickLinks[0].items.map(item => item) : [];

  const othersLinks = menuItems.filter(item => item.title.toLowerCase() === "others");
  const otherLinkData = othersLinks && othersLinks.length > 0 ? othersLinks[0].items.map(item => item) : [];

  return (
    <footer className="bg-black text-white p-8 mt-32 relative" style={{ width: '100%' }}>
      <div className="container mx-auto px-4">
        <div className="footer-banner-wrapper">
          <img
            src="/Footer/Footer_Mobile_app_Banner.png"
            alt="Footer Banner"
            className="footer-banner"
          />
          <div className="text-overlay">
            <h1 className="font-bold mb-2">MOBILE APPLICATION</h1>
            <p className="mb-4">All you need is in your Pocket</p>
            <button className="download-button">DOWNLOAD NOW</button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 flex flex-col space-y-6 ml-16">
            <img src={shop.brand.logo.image.url} alt="Logo" className="h-12" />
            <p>
              In publishing and graphic design,
              Lorem ipsum is a placeholder text commonly used
            </p>
            {FontAwesomeIcon && (
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  <FontAwesomeIcon icon={icons.faFacebook} className="text-sm w-8 h-8" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  <FontAwesomeIcon icon={icons.faInstagram} className="text-sm w-8 h-8" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  <FontAwesomeIcon icon={icons.faTwitter} className="text-sm w-8 h-8" />
                </a>
                <a href="mailto:example@example.com" style={{ color: 'white' }}>
                  <FontAwesomeIcon icon={icons.faEnvelope} className="text-sm w-8 h-8" />
                </a>
              </div>
            )}
          </div>
          <div className="col-span-9 grid grid-cols-3 gap-4 mr-16 mt-16 ml-16">
            <div className="flex flex-col space-y-6">
              <h2 className="font-bold text-lg">CONTACT INFORMATION</h2>
              <p>Phone: (123) 456-7890</p>
              <p>Email:<br /> example@example.com</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="font-bold text-lg">ABOUT BIKENBIKER</h2>
              {aboutUsData.map((item) => (
                <Link
                  to={item.url}
                  style={activeLinkStyle}
                  className="text-white border-b border-gray-700 py-2"
                  key={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="font-bold text-lg">QUICK LINKS</h2>
              {quickLinkData.map((item) => (
                <Link
                  to={item.url}
                  style={activeLinkStyle}
                  className="text-white border-b border-gray-700 py-2"
                  key={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 mr-16">
          <div>&copy; 2024 Your Company. All rights reserved.</div>
          <div className="flex space-x-4">
            {otherLinkData.map((item) => (
              <Link
                to={item.url}
                style={activeLinkStyle}
                className="text-white border-b border-gray-700 py-2"
                key={item.url}
              >
                {item.title}
              </Link>
            ))}
            <span className="text-white">|</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
