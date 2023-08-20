import React from 'react';
import './Features.css'; // Import your CSS for styling

const Features = () => {
  return (
    <section className="features">
      <div className="features-content">
        <div className="features-image">
          <img src={process.env.PUBLIC_URL + '/Illustration_2.svg'} alt="Features" />
        </div>
        <div className="features-text">
          <h2>We Provide Many Features You Can Use</h2>
          <p>
            You can explore the features that we provide with fun and have their own functions each feature.
          </p>
          <ul>
            <li>Powerful online protection.</li>
            <li>Internet without borders.</li>
            <li>Supercharged VPN.</li>
            <li>No specific time limits.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
