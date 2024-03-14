import "./Footer.css";
import logo from "../../../assets/images/finalLogo.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top fixed-bottom"
    >
      <p className="col-md-4 mb-0 text-body-secondary copyright">
        © {new Date().getFullYear()} SentraPass
      </p>

      <a
        href="/"
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

      <ul className="nav col-md-4 justify-content-end">
      <li className="btn"><Link to="/" className="">Home</Link></li>
        		<li className="btn"><Link to="/login" className="">Login/Register</Link></li>
        		<li className="btn"><Link to="/dash" className="">Dashboard</Link></li>
        		<li className="btn"><Link to="/account" className="">My Account</Link></li>
        		<li className="btn"><Link to="/aboutcontact" className="">Contact/About</Link></li>
      	
      </ul>
    </footer>
  );
};
export default Footer;

// see line 15 for necessary logo change ✅
// see lines 19 - 23 for links to be added at later date
// edit CSS to alter placement of elements inside footer
// edit CSS to alter color
// edit CSS to alter issue regarding space not occupying whole width
