import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // State for managing menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
      <div className="d-flex align-items-center mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none">
        <img src="src\assets\images\finalLogo.jpg" alt="Logo" height="40rem" className="" />
        <span className="fs-4">SentraPass</span>
      </div>

      {/* Menu button image */}
      <img
        src={menuOpen ? '../assets/images/closeIcon.png' : '../assets/images/menuIcon.png'}
        alt="btn"
        className="menu-btn"
        onClick={toggleMenu}
      />

      {/* Menu items */}
      <ul className={`nav nav-pills ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/dash" onClick={toggleMenu}>Dashboard</Link></li>
        <li><Link to="/account" onClick={toggleMenu}>My Account</Link></li>
        <li><Link to="/aboutcontact" onClick={toggleMenu}>Contact/About</Link></li>
      </ul>
    </header>
  );
};

export default Header;