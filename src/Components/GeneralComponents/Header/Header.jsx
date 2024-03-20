import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import Logo from "../../../assets/images/finalLogo.jpg";
import CloseIcon from "../../../assets/images/closeIcon.png";
import MenuIcon from "../../../assets/images/menuIcon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="logo-container d-flex align-items-center mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none"
      >
        <img src={Logo} alt="Logo" height="40rem" className="" />
        <span className="fs-4">SentraPass</span>
      </a>

      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <img src={CloseIcon} alt="Close Icon" />
        ) : (
          <img src={MenuIcon} alt="Burger Icon" />
        )}
      </div>

      <ul className={`nav nav-pills ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => closeMenu()}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/dash" onClick={() => closeMenu()}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/account" onClick={() => closeMenu()}>
            My Account
          </Link>
        </li>
        <li>
          <Link to="/aboutcontact" onClick={() => closeMenu()}>
            Contact/About
          </Link>
        </li>
      </ul>

      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul className="nav flex-column">
            <li>
              <Link to="/" onClick={() => closeMenu()}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/dash" onClick={() => closeMenu()}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/account" onClick={() => closeMenu()}>
                My Account
              </Link>
            </li>
            <li>
              <Link to="/aboutcontact" onClick={() => closeMenu()}>
                Contact/About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;