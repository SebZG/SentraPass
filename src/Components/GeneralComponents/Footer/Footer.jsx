import "./Footer.css";
import logo from "../../../assets/images/finalLogo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex d-sm-none d-md-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <p className="col-md-4 mb-0 text-body-secondary copyright">
        © {new Date().getFullYear()} SentraPass
      </p>

      <a
        href="/"
        id="logo"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img
          src={logo}
          className="logo"
          alt="logo"
          height="40rem"
          loading="lazy"
        />
        <span className="fs-4">SentraPass</span>
      </a>

      <ul id="footerText" className="nav col-md-4 justify-content-end">
        <li className="">
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li className="">
          <Link to="/dash" className="">
            Dashboard
          </Link>
        </li>
        <li className="">
          <Link to="/account" className="">
            My Account
          </Link>
        </li>
        <li className="">
          <Link to="/aboutcontact" className="">
            Contact/About
          </Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;

