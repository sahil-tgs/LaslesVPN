import React from 'react';
import './NetworkSection.css'; // Import the corresponding CSS file

const NetworkSection = () => {
  return (
    <section className="network-section">
      <div className="network-content">
        <h2 className="network-heading">Huge Global Network of Fast VPN</h2>
        <p className="network-paragraph">
          See LaslesVPN everywhere to make it easier for you when you move locations.
        </p>
      </div>
      <div className="network-image">
        <img src="./map.svg" alt="Network Map" />
      </div>
      <div className="Sponsored-image">
        <img src="./Sponsored.svg" alt="Sponsored" />
      </div>
    </section>
  );
};

export default NetworkSection;
