// File: src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

// Import your logo
import logo from '../assets/Guru Outdoors LOGO.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="brand">
          <Link to="/" onClick={closeMenu} className="brand-link">
            <img src={logo} alt="Guru Outdoors" className="logo" />
          </Link>
          <span className="brand-tagline">'We Turn Heads.</span>
        </div>
        
        <button className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/')}`}
              onClick={closeMenu}
            >
              HOME
            </Link>
          </li>
          <li className="separator">|</li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about')}`}
              onClick={closeMenu}
            >
              ABOUT US
            </Link>
          </li>
          <li className="separator">|</li>
          <li className="nav-item">
            <Link 
              to="/services" 
              className={`nav-link ${isActive('/services')}`}
              onClick={closeMenu}
            >
              SERVICES
            </Link>
          </li>
          <li className="separator">|</li>
          <li className="nav-item">
            <Link 
              to="/gallery" 
              className={`nav-link ${isActive('/gallery')}`}
              onClick={closeMenu}
            >
              GALLERY
            </Link>
          </li>
          <li className="separator">|</li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact')}`}
              onClick={closeMenu}
            >
              CONTACT US
            </Link>
          </li>
          <li className="separator">|</li>
          <li className="nav-item">
            <Link 
              to="/careers" 
              className={`nav-link ${isActive('/careers')}`}
              onClick={closeMenu}
            >
              CAREERS
            </Link>
          </li>
          <li className="separator">|</li>
          <li className="nav-item">
            <Link 
              to="/partner" 
              className={`nav-link ${isActive('/partner')}`}
              onClick={closeMenu}
            >
              BE OUR PARTNER
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;