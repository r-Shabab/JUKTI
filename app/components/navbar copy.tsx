import React from "react";
import Link from "next/link";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-navy sticly-top">
      <div className="container-md">
        <img src="/img/jukti_logo.png" alt="Jukti_logo" id="jukti_logo" />
        <Link
          className="navbar-brand text-orange fs-2 fw-bold ms-2 me-auto"
          href="#"
        >
          JUKTI <span className="fs-6">-The Official Club of CSE</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link fs-5 me-3`}
                aria-current="page"
                href="/"
              >
                <i
                  className="d-inline d-lg-none fa-solid fa-house me-2"
                  style={{ color: "#f7f6ee" }}
                ></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fs-5 me-3`}
                href="/eventPage"
              >
                <i
                  className="d-inline d-lg-none fa-solid fa-calendar-check me-2"
                  style={{ color: "#f7f6ee" }}
                ></i>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fs-5 me-3 `}
                href="/registration"
              >
                <i
                  className="d-inline d-lg-none fa-solid fa-user-pen me-2"
                  style={{ color: "#f7f6ee" }}
                ></i>
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fs-5 me-3 `}
                href="/aboutUs"
              >
                <i
                  className="d-inline d-lg-none fa-solid fa-users me-2"
                  style={{ color: "#f7f6ee" }}
                ></i>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fs-5 me-3 `}
                href="/contactUs"
              >
                <i
                  className="d-inline d-lg-none fa-solid fa-phone me-2"
                  style={{ color: "#f7f6ee" }}
                ></i>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
