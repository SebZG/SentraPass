//Footer.jsx

// git add . && git commit -m "message" && git push

//css//

import './Footer.css'

const Footer = () => {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">© 2024 SentraPass</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Login</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Dashboard</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">My Account</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact/About</a></li>
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