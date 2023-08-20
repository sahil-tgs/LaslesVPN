import React from 'react';
import './Hero.css'; // Import your CSS for styling

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Want anything to be easy with LaslesVPN.</h1>
          <p>
            Provide a network for all your needs with ease and fun using LaslesVPN.
            Discover interesting features from us.
          </p>
          <button>Get Started</button>
        </div>
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + '/Illustration_1.svg'} alt="Illustration" />
        </div>
      </div>
      <div className="hero-banner">
        <div className="banner-item">
          <img src={process.env.PUBLIC_URL + '/user.svg'} alt="Icon 1" />
          <div className="icon-text">
            <p>90+</p>
            <p>Users</p>
          </div>
        </div>
        <div className="banner-item">
          <img src={process.env.PUBLIC_URL + '/location.svg'} alt="Icon 2" />
          <div className="icon-text">
            <p>30+</p>
            <p>Locations</p>
          </div>
        </div>
        <div className="banner-item">
          <img src={process.env.PUBLIC_URL + '/Server.svg'} alt="Icon 3" />
          <div className="icon-text">
            <p>50+</p>
            <p>Servers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
