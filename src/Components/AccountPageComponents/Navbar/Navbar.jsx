import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Logo from "../../../assets/images/finalLogo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <header
        id="customHeader"
        className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none"
        >
          <img src={Logo} alt="Logo" height="40rem" />
          <span className="fs-4">SentraPass</span>
        </Link>

        <div className="nav-item dropdown btn">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My Account
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/dash">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
