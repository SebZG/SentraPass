//Header.jsx

// git add . && git commit -m "message" && git push

//css//

import './Header.css'
import finalLogo from '../../../assets/images/finalLogo.jpg'

const Header = () => {
   return (
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <img src={finalLogo} alt="Logo" className="me-2" width="50" height="50" />
        <span className="fs-4">SentraPass</span>
      </a>

      <ul className="nav nav-pills">
        <button type="button" class="btn btn-primary">Login/Register</button>
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Dashboard</a></li>
        <li className="nav-item"><a href="#" className="nav-link">My Account</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact/About</a></li>
      </ul>
    </header>
   )
}
export default Header;

// add logo on line 13 
// see lines 18 - 22 for links to be added at later date
// see line 19 for button add link to login/register page
// edit CSS to alter placement of elements inside header
// edit CSS to alter color