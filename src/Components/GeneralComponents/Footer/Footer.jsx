import './Footer.css'

const Footer = () => {
	return (
		<footer id='footer' className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
			<p className="col-md-4 mb-0 text-body-secondary">© {new Date().getFullYear()} SentraPass</p>

			<a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
				{/* LOGO GOES HERE*/}
				<span className="fs-4">SentraPass</span>
			</a>

			<ul className="nav col-md-4 justify-content-end">
				<li className="btn"><a href="#" className="">Home</a></li>
				<li className="btn"><a href="#" className="">Login</a></li>
				<li className="btn"><a href="#" className="">Dashboard</a></li>
				<li className="btn"><a href="#" className="">My Account</a></li>
				<li className="btn"><a href="#" className="">Contact/About</a></li>
			</ul>
		</footer>
	)
}
export default Footer;

// see line 15 for necessary logo change
// see lines 19 - 23 for links to be added at later date
// edit CSS to alter placement of elements inside footer
// edit CSS to alter color
// edit CSS to alter issue regarding space not occupying whole width