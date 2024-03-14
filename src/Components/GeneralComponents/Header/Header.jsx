import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {

	return (
		<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none">
				<img src="src\assets\images\finalLogo.jpg" alt="Logo" height="40rem" className="" />
				<span className="fs-4">SentraPass</span>
			</a>

			<ul className="nav nav-pills">
				<li className="btn"><Link to="/" className="">Home</Link></li>
				<li className="btn"><Link to="/dash" className="">Dashboard</Link></li>
				<li className="btn"><Link to="/account" className="">My Account</Link></li>
				<li className="btn"><Link to="/aboutcontact" className="">Contact/About</Link></li>
			</ul>
		</header>
	)
}
export default Header;

// edit CSS to alter placement of elements inside header
// edit CSS to alter color
