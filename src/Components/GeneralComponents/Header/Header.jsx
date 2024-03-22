import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/init';

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../../assets/images/finalLogo.jpg";
import CloseIcon from "../../../assets/images/closeIcon.png";
import MenuIcon from "../../../assets/images/menuIcon.png";

import "./Header.css";

const Header = () => {
	const path = window.location.pathname;

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleLogOut = () => {
		signOut(auth);
		navigate("/login");
	}

	return (
		<header className="header-container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
			<Link
				to="/"
				className="logo-container d-flex align-items-center mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none"
			>
				<img src={Logo} alt="Logo" height="40rem" className="" />
				<span className="fs-4">SentraPass</span>
			</Link>

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
				<li className={path === "/dash" ? "d-none" : ""}>
					<Link to="/" onClick={() => closeMenu()}>
						Home
					</Link>
				</li>
				<li className={path === "/" || path === "/aboutcontact" || path === "/login" ? "d-none" : ""}>
					<Link to="/dash" onClick={() => closeMenu()}>
						Dashboard
					</Link>
				</li>
				<li className={path === "/" || path === "/aboutcontact" || path === "/login" ? "d-none" : ""}>
					<Link to="/account" onClick={() => closeMenu()}>
						My Account
					</Link>
				</li>
				<li className={path === "/dash" ? "d-none" : ""}>
					<Link to="/aboutcontact" onClick={() => closeMenu()}>
						Contact/About
					</Link>
				</li>
				<li className={path === "/" || path === "/aboutcontact" ? "d-none" : ""}>
					<Link onClick={handleLogOut}>
						Logout
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