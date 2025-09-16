import React from 'react';
import './Hero.css';
import profilePhoto from '../assets/profile.jpeg';

function Hero() {
  return (
    <div className="hero-container">
      <img src={profilePhoto} alt="Amandeep Singh" className="hero-photo" />
      <div className="hero-content">
        <h1>Amandeep Singh</h1>
        <div className="hero-details">
          <p>PhD (VI Year I Semester)</p>
          <p>Ph.D. Electronics and Communication Engineering</p>
        </div>
        <button className="hero-button">View My Work</button>
      </div>
    </div>
  );
}

export default Hero;