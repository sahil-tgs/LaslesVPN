import React, { useState, useRef } from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const testimonialData = [
    {
      id: 1,
      name: 'John Doe',
      location: 'Location 1',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      userIcon: '/user-icon.svg', // Replace with actual user icon URL
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'Location 2',
      testimonial: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userIcon: '/user-icon.svg', // Replace with actual user icon URL
    },
    {
      id: 3,
      name: 'Sahil Mandi',
      location: 'Location 3',
      testimonial: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userIcon: '/user-icon.svg', // Replace with actual user icon URL
    },
    {
      id: 4,
      name: 'Kushal Kumawat',
      location: 'Location 4',
      testimonial: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userIcon: '/user-icon.svg', // Replace with actual user icon URL
    },
    {
      id: 5,
      name: 'Mohit Kumar',
      location: 'Location 5',
      testimonial: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userIcon: '/user-icon.svg', // Replace with actual user icon URL
    },
    {
      id: 6,
      name: 'Sanket Teli',
      location: 'Location 6',
      testimonial: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userIcon: '/user-icon.svg', // Replace with actual user icon URL
    },

    {
        id: 7,
        name: 'Abhinav Anand',
        location: 'Location 7',
        testimonial: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        userIcon: '/user-icon.svg', // Replace with actual user icon URL
      },
      {
        id: 8,
        name: 'Vraj Talati',
        location: 'Location 8',
        testimonial: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        userIcon: '/user-icon.svg', // Replace with actual user icon URL
      },
  ];

  const perSlide = 3;
  const totalSlides = Math.ceil(testimonialData.length / perSlide);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideContentRef = useRef(null);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">
        Trusted by Thousands of Happy Customers
      </h2>
  
      <p className="testimonial-caption">
        These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
      </p>
  
      <div className="testimonial-carousel">
        <div
          ref={slideContentRef}
          className="carousel-content"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonialData.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.userIcon} alt="User Icon" className="user-icon" />
                <div className="user-info">
                  <span className="user-name">{testimonial.name}</span>
                  <span className="user-location">{testimonial.location}</span>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
        
        <button className="carousel-button prev" onClick={handlePrevSlide}>
          &#8249;
        </button>

        <button className="carousel-button next" onClick={handleNextSlide}>
          &#8250;
        </button>

      </div>
      <div className="carousel-pagination">
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
    </div>
  );
  
};

export default TestimonialSection;
