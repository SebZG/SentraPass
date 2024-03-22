import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/init';

import { Link, useNavigate } from "react-router-dom";

import Logo from "../../../assets/images/finalLogo.jpg";

import "./Navbar.css";

function Navbar() {

	const navigate = useNavigate();

	const handleLogOut = () => {
		signOut(auth);
		navigate("/login");
	}

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
							<Link className="dropdown-item" to="/dash">
								Dashboard
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" onClick={handleLogOut}>
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
