import React from 'react';
import './Navbar.css'; // 1. Import the CSS file

function Navbar() {
  return (
    // 2. Add a className for easier styling (optional but good practice)
    <nav className="navbar-container"> 
      <a href="/">My Portfolio</a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;