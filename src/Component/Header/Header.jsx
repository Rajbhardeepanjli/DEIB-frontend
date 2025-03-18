import React, { useState } from "react"; 
import "./Header.css"; 
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="nav-logo">
        <img src="/images/Logo.png" alt="Logo" />
        <span>DEIB Innovation</span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="nav-mobile-menu" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to="/methodology" onClick={handleLinkClick}>Methodology</Link>
        </li>
        <li className="nav-dropdown">
          <Link to="/service" onClick={handleLinkClick}>Services</Link>
          <div className="nav-dropdown-menu">
            <Link to="/service" onClick={handleLinkClick}>Diversity</Link>
            <Link to="/service" onClick={handleLinkClick}>Equity</Link>
            <Link to="/service" onClick={handleLinkClick}>Inclusion</Link>
            <Link to="/service" onClick={handleLinkClick}>Belonging</Link>
          </div>
        </li>
        <li>
          <Link to="/resources" onClick={handleLinkClick}>Resources</Link>
        </li>
        <li>
          <Link to="/about-us" onClick={handleLinkClick}>About us</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-contact-btn" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
