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
				<li className=""><Link to="/" className="">Home</Link></li>
				<li className=""><Link to="/dash" className="">Dashboard</Link></li>
				<li className=""><Link to="/account" className="">My Account</Link></li>
				<li className=""><Link to="/aboutcontact" className="">Contact/About</Link></li>
			</ul>
		</header>
	)
}
export default Header;

// apply media query for burger menu on ul under 1200px

//---------------------------------------------------//

//working dropdown menu but not same styling

// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { useState } from 'react';

// import './Header.css';

// const Header = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//       <Navbar.Brand href="#">
//         <img src="src\assets\images\finalLogo.jpg" alt="Logo" height="40rem" className="" />
//         <span className="fs-4">SentraPass</span>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
//           <Nav.Link as={Link} to="/dash" onClick={() => setExpanded(false)}>Dashboard</Nav.Link>
//           <Nav.Link as={Link} to="/account" onClick={() => setExpanded(false)}>My Account</Nav.Link>
//           <Nav.Link as={Link} to="/aboutcontact" onClick={() => setExpanded(false)}>Contact/About</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;

//------------------------------------------------//

// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// const Header = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//       <Navbar.Brand href="/">
//         <img src="src\assets\images\finalLogo.jpg" alt="Logo" height="40rem" className="" />
//         <span className="fs-4">SentraPass</span>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link as={Link} to="/">Home</Nav.Link>
//           <Nav.Link as={Link} to="/dash">Dashboard</Nav.Link>
//           <Nav.Link as={Link} to="/account">My Account</Nav.Link>
//           <Nav.Link as={Link} to="/aboutcontact">Contact/About</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;