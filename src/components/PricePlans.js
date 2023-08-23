import React from 'react';
import './PricePlans.css'; // Import your CSS for styling

const PricePlans = () => {
  return (
    <section className="price-plans">
      <div className="plans-title">
        <h2>Choose Your Plan</h2>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>
      <div className="plans-container">
        <div className="plan-card">
          <div className="plan-icon">
            <img src={process.env.PUBLIC_URL + 'Free.svg'} alt="Free Icon" />
          </div>
          <h3>Free Plan</h3>
          <ul>
            <li>Unlimited Bandwidth</li>
            <li>Encrypted Connection</li>
            <li>No Trafic Logs</li>
            <li>Works on All Devices</li>
          </ul>
          <p className="bold-text"><b>Free</b></p>
          <button className="outline-button">Get Started</button>
        </div>
        <div className="plan-card">
          <div className="plan-icon">
            <img src={process.env.PUBLIC_URL + '/Standard.svg'} alt="Standard Icon" />
          </div>
          <h3>Standard Plan</h3>
          <ul>
            <li>Unlimited Bandwidth</li>
            <li>Encrypted Connection</li>
            <li>Yes Trafic Logs</li>
            <li>Works on All Devices</li>
            <li>Connect Anywhere</li>

          </ul>
          <p className="bold-text"><b>₹80</b>/mo</p>
          <button className="outline-button">Get Started</button>
        </div>
        <div className="plan-card">
          <div className="plan-icon">
            <img src={process.env.PUBLIC_URL + '/Premium.svg'} alt="Premium Icon" />
          </div>
          <h3>Premium Plan</h3>
          <ul>
          <li>Unlimited Bandwidth</li>
            <li>Encrypted Connection</li>
            <li>Yes Trafic Logs</li>
            <li>Works on All Devices</li>
            <li>Connect Anywhere</li>
            <li>Get New Features</li>
          </ul>
          <p className="bold-text"><b>₹160</b>/mo</p>
          <button className="outline-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default PricePlans;
