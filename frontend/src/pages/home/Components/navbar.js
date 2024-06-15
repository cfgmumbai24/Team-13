import React from 'react';
import './Navbar.css';
import myimg from '../assets/margshala_image.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={myimg} alt="Margshala" />
      </div>
      <div className="navbar-links">
        <div className="navbar-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Local Business</a></li>
          <li><a href="#about">Job Opportunities</a></li>
          <li><a href="#services">Success Stories</a></li>
          <li><a href="#contact">Workshops</a></li>
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
