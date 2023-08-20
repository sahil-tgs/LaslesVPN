import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PricePlans from './components/PricePlans';
import NetworkSection from './components/NetworkSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <PricePlans />
      <NetworkSection />
      <TestimonialSection  />
      <Footer  />
     
    </div>
  );
}

export default App;
