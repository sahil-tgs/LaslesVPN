import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <a href="#" className="footer-link">Company</a>
          <a href="#" className="footer-link">Team</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Features</h3>
          <a href="#" className="footer-link">Powerful</a>
          <a href="#" className="footer-link">Flexible</a>
          <a href="#" className="footer-link">Secure</a>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Support</h3>
          <a href="#" className="footer-link">FAQ</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <img src="/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src="/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" className="social-icon">
              <img src="/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copy">© 2023 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
