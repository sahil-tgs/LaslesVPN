import React from 'react';
import './Navbar.css'; // Import your CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="Logo" />
        <span>Lasles<b>VPN</b></span>
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#price">Price</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#help">Help</a>
      </div>
      <div className="auth-links">
        <a href="#signin">Sign In</a>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
