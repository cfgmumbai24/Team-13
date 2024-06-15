import React from 'react';
import './Navbar.css';
import myimg from '../assets/margshala_image.png';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="#facebook" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#twitter" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="#linkedin" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        <a href="#youtube" className="social-icon"><i className="fab fa-youtube"></i></a>
        <a href="#instagram" className="social-icon"><i className="fab fa-instagram"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
