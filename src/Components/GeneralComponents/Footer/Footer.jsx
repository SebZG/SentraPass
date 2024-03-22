import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/images/finalLogo.jpg";

import "./Footer.css";

const Footer = () => {
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState(location.pathname);

	useEffect(() => {
		setCurrentPath(location.pathname);
  }, [location.pathname]);

	return (
		<footer className="d-flex d-md-flex flex-wrap justify-content-between align-items-center py-3 border-top d-none d-md-block">
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
				<li className={currentPath === "/dash" ? "d-none" : ""}>
					<Link to="/" className="">
						Home
					</Link>
				</li>
				<li className={currentPath === "/" || currentPath === "/aboutcontact" || currentPath === "/login" ? "d-none" : ""}>
					<Link to="/dash" className="">
						Dashboard
					</Link>
				</li>
				<li className={currentPath === "/" || currentPath === "/aboutcontact" || currentPath === "/login" ? "d-none" : ""}>
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

