import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-section"></div>
      <div className="overlay-banner">
        <div className="overlay-content">
          <div className="overlay-text">
            <h2>Subscribe Now for Get Special Features!</h2>
            <p>Let's subscribe with us and find the fun.</p>
          </div>
          <button className="subscribe-button">Subscribe Now</button>
        </div>
      </div>
      <div className="bottom-section">
        <div className="transparent-container">
          <div className="bottom-content">
            <div className="left-bottom-section">
              <div className="logo-container">
                <img src="/logo.svg" alt="Company Logo" className="company-logo" />
                <span className="logo-text">LaslesVPN</span>
              </div>
              <p className="logo-description">
                <b>LaslesVPN</b> is a private virtual network that has unique features and has high security.
              </p>
              <div className="social-icons">
                <a href="/image"><img src="/Facebook.svg" alt="Facebook" /></a>
                <a href="/image"><img src="/Twitter.svg" alt="Twitter" /></a>
                <a href="/image"><img src="/Instagram.svg" alt="Instagram" /></a>
              </div>
              <p className="copyright">@2020 <b>LaslesVPN</b></p>
            </div>
            <div className="right-bottom-section">
              <div className="footer-column">
                <h3>Product</h3>
                <ul>
                  <li>Download</li>
                  <li>Pricing</li>
                  <li>Location</li>
                  <li>Server</li>
                  <li>Countries</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Engage</h3>
                <ul>
                  <li>LaslesVPN?</li>
                  <li>FAQ</li>
                  <li>Tutorial</li>
                  <li>About us</li>
                  <li>Privacy Policy</li>
                  <li>Term of Service</li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Earn Money</h3>
                <ul>
                  <li>Affiliate</li>
                  <li>Become Partner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
