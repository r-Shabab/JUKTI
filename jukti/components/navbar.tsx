import React from 'react';
const NavBar = ()=>{
    return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-navy">
      <div className="container-md">
        <img src="/img/jukti_logo.png" alt="Jukti_logo" id="jukti_logo"/>
        <a className="navbar-brand text-orange fs-2 fw-bold ms-2 me-auto" href="#"
          >JUKTI <span className="fs-6">-The Official Club of CSE</span></a>
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
              <a
                className="nav-link active text-orange fs-5 me-3"
                aria-current="page"
                href="home.html"
                ><i
                  className="d-inline d-lg-none fa-solid fa-house me-2"
                  style={{color: '#f7f6ee'}}
                > </i>
                Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 me-3" href="/upevent.html"
                ><i
                  className="d-inline d-lg-none fa-solid fa-calendar-check me-2"
                  style={{color: '#f7f6ee'}}
                ></i>
                Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 me-3" href="/registration.html"
                ><i
                  className="d-inline d-lg-none fa-solid fa-user-pen me-2"
                  style={{color: '#f7f6ee'}}></i>
                Registration</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 me-3" href="/aboutus.html"
                ><i
                  className="d-inline d-lg-none fa-solid fa-users me-2"
                  style={{color: '#f7f6ee'}}
                ></i>
                About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 me-3" href="/contactUs.html"
                ><i
                  className="d-inline d-lg-none fa-solid fa-phone me-2"
                  style={{color: '#f7f6ee'}}
                ></i>
                Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
}

export default NavBar;