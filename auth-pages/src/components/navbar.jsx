import React from "react";

const Navbar = ({isAuthenticated=true}) => {
  return ( <nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Authentication module</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login type
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Password</a></li>
            <li><a class="dropdown-item" href="#">JWT</a></li>
            <li><a class="dropdown-item" href="#">OAuth</a></li>
          </ul>
        </li>
      </ul>
      {!!isAuthenticated && <div class="d-flex">
        <button class="btn btn-outline-success" type="submit">Log out</button>
      </div>}
    </div>
  </div>
</nav>
  );
};

export default Navbar;
