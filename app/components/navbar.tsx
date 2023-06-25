"use client"
import { faCalendarCheck, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

  return (
    <Navbar expand="lg" className="navbar-dark bg-dark-navy sticly-top">
      <Container>
        <img src="/img/jukti_logo.png" alt="Jukti_logo" id="jukti_logo" />
        <Navbar.Brand
          className="navbar-brand text-orange fs-2 fw-bold ms-2 me-auto"
          href="/"
        >
          JUKTI <span className="fs-6">-Official Club of CSE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Nav.Link
                className={`nav-Nav.Link fs-5 me-3 text-orange`}
                aria-current="page"
                href="/"
              >
                <FontAwesomeIcon icon={faHome} className="me-2 d-inline d-lg-none" />
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                className={`nav-Nav.Link fs-5 me-3`}
                href="/eventPage"
              >
                <FontAwesomeIcon icon={faCalendarCheck} className="me-2 d-inline d-lg-none" />
                Events
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                className={`nav-Nav.Link fs-5 me-3 `}
                href="/registration"
              >
                <i
                  className="d-inline d-lg-none fa-solid fa-user-pen me-2"
                  style={{ color: "#f7f6ee" }}
                ></i>
                Registration
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                className={`nav-Nav.Link fs-5 me-3 `}
                href="/aboutUs"
              >
                <i
                  className="d-inline d-lg-none fa-solid fa-users me-2"
                  style={{ color: "#f7f6ee" }}
                ></i>
                About us
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                className={`nav-Nav.Link fs-5 me-3 `}
                href="/contactUs"
              >
                <i
                  className="d-inline d-lg-none fa-solid fa-phone me-2"
                  style={{ color: "#f7f6ee" }}
                ></i>
                Contact us
              </Nav.Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
