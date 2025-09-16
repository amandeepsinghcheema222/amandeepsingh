import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Me</h3>
          <p>Email: <a href="mailto:a_singh@ece.iitr.ac.in">a_singh@ece.iitr.ac.in</a></p>
          <p>Phone: <a href="tel:+919501286656">9501286656</a></p>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          {/* Add your actual profile links here */}
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Amandeep Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;