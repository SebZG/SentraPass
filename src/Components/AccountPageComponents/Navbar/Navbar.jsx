import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Navbar() {
  return (
    <div>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none"
        >
          <img
            src="src\assets\images\finalLogo.jpg"
            alt="Logo"
            height="40rem"
            className=""
          />
          <span className="fs-4">SentraPass</span>
        </a>

        <DropdownButton id="dropdown-basic-button" title="My Account">
          <Dropdown.Item href="/login">Login</Dropdown.Item>
          <Dropdown.Item href="/dash">Dashboard</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        </DropdownButton>
      </header>
    </div>
  );
}

export default Navbar;