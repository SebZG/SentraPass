import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header-container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="logo-container d-flex align-items-center mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none">
                <img src="src\assets\images\finalLogo.jpg" alt="Logo" height="40rem" className="" />
                <span className="fs-4">SentraPass</span>
            </a>

            {/* Display burger menu icon under media breakpoint */}
            <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
    {isMenuOpen ? (
        <img src="src\assets\images\closeIcon.png" alt="Close Icon" />
    ) : (
        <img src="src\assets\images\menuIcon.png" alt="Burger Icon" />
    )}
</div>

            {/* Display nav items */}
            <ul className={`nav nav-pills ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dash">Dashboard</Link></li>
                <li><Link to="/account">My Account</Link></li>
                <li><Link to="/aboutcontact">Contact/About</Link></li>
            </ul>

            {/* Display dropdown menu under media breakpoint */}
            {isMenuOpen && (
                <div className="dropdown-menu">
                    <ul className="nav flex-column">
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/dash" onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
                        <li><Link to="/account" onClick={() => setIsMenuOpen(false)}>My Account</Link></li>
                        <li><Link to="/aboutcontact" onClick={() => setIsMenuOpen(false)}>Contact/About</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

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