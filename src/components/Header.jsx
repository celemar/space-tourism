import React, { useState } from "react";
import { Link } from "react-router-dom";
import spaceLogo from "/public/assets/shared/logo.svg";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const [activeLink, setActiveLink] = useState('/');
  const handleLinkClick = (to) => {
    setActiveLink(to);
  };


  return (
    <header>
      <div>
        <img src={spaceLogo} alt="space tourism logo" className="logo" />
      </div>
      <button
        onClick={toggleMenu}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen ? "true" : "false"}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav
        className='primary-nav'
        data-visible={isMenuOpen ? "true" : "false"}
      >
        <ul id="primary-navigation" className="underline-indicators">
      <li className={activeLink === '/' ? 'active' : ''}>
        <Link to="/" className="nav-link" onClick={() => handleLinkClick('/')}>
          <span aria-hidden="true">00</span>Home
        </Link>
      </li>
      <li className={activeLink === '/Destination' ? 'active' : ''}>
        <Link to="/Destination" className="nav-link" onClick={() => handleLinkClick('/Destination')}>
          <span aria-hidden="true">01</span>Destination
        </Link>
      </li>
      <li className={activeLink === '/Crew' ? 'active' : ''}>
        <Link to="/Crew" className="nav-link" onClick={() => handleLinkClick('/Crew')}>
          <span aria-hidden="true">02</span>Crew
        </Link>
      </li>
      <li className={activeLink === '/Technology' ? 'active' : ''}>
        <Link to="/Technology" className="nav-link" onClick={() => handleLinkClick('/Technology')}>
          <span aria-hidden="true">03</span>Technology
        </Link>
      </li>
    </ul>
      </nav>
    </header>
  );
}
