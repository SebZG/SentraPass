import "./Header.css";
import logo from "../../../assets/images/finalLogo.jpg";

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src={logo} className='logo' alt='logo' width='75' height='75' loading='lazy' />

        <span className="fs-4">SentraPass</span>
      </a>

      <ul className="nav nav-pills">
        <li className="btn">
          <a href="#" className="">
            Home
          </a>
        </li>
        <li className="btn">
          <a href="#" className="">
            Login/Register
          </a>
        </li>
        <li className="btn">
          <a href="#" className="">
            Dashboard
          </a>
        </li>
        <li className="btn">
          <a href="#" className="">
            My Account
          </a>
        </li>
        <li className="btn">
          <a href="#" className="">
            Contact/About
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Header;

// add logo on line 7
// see lines 11 - 16 for links to be added at later date
// see line 19 for button add link to login/register page
// edit CSS to alter placement of elements inside header
// edit CSS to alter color
