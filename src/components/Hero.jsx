import React from 'react';
import './Hero.css';
import profilePhoto from '../assets/profile.jpeg'; // Corrected filename

function Hero() {
  return (
    <div className="hero-container">
      <img src={profilePhoto} alt="Amandeep Singh" className="hero-photo" />
      
      <div className="hero-content">
        <h1>Amandeep Singh</h1>
        <p>A passionate web developer creating modern and responsive web applications.</p>
        <button className="hero-button">View My Work</button>
      </div>
    </div>
  );
}

export default Hero;