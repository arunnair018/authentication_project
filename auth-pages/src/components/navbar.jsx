import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated = true }) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Authentication module
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login type
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/login/password">Password</Link>
                </li>
                <li>
                  <Link class="dropdown-item"to="/login/jwt">JWT</Link>
                </li>
                <li>
                  <Link class="dropdown-item"to="/login/oauth">OAuth</Link>
                </li>
              </ul>
            </li>
          </ul>
          {!!isAuthenticated && (
            <div className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
