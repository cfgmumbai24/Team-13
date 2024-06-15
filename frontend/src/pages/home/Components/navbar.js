import React from 'react';
import '../Style/Navbar.css';
import myimg from '../Assets/margshala_image.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={myimg} alt="logo" className="navbar-logo" classNam="img"/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
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
