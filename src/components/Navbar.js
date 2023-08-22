// Navbar.js
import React from 'react';
import './Navbar.css'; // You can define your own styles in this CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="logo.svg" alt="Logo" className="logo" />
        <span className="logo-text">Lasles<b>VPN</b></span>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#price">Price</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="#signin" className="nav-link">Sign In</a>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
