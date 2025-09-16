// src/components/Projects.jsx

import React from 'react';
import './Projects.css';

// Your actual project data from your resume
const projectData = [
  {
    title: 'Time-Domain-Based In-Memory Computation Architecture (TD-IMC)',
    description: 'Introduced a specialized voltage-controlled delay cell (VCDC) for performing XNOR/Multiplication and accumulation for XAC/MAC operations. Fabricated at TSMC Taiwan using 65 nm technology.',
    tools: 'Cadence Virtuoso, HSPICE, Xilinx Vivado, Synopsys DC, ICC',
    link: '#' // Add a link to the publication or GitHub if available
  },
  {
    title: 'PVT-Insensitive Time-Domain-based In-Memory Computation',
    description: 'Proposed a TD-IMC architecture to perform XNOR-and-accumulation (XAC) using a PVT-insensitive delay cell to compensate for process, voltage, and temperature variations. Fabricated at TSMC Taiwan using 65 nm technology.',
    tools: 'Cadence Virtuoso, HSPICE, Xilinx Vivado, DC, ICC',
    link: '#'
  },
  {
    title: 'Accelerating Secure Hash Algorithm 3 (SHA-3) using IMC',
    description: 'Presented an In-memory architecture to accelerate SHA-3 computation. Proposed a 5-input in-memory XOR operation and fused XOR/Rotation operations to reduce latency. Under fabrication at TSMC Taiwan (65 nm).',
    tools: 'Cadence Virtuoso, HSPICE, Xilinx Vivado, Synopsys DC, ICC',
    link: '#'
  },
  {
    title: 'Area-Efficient In-Memory Computation with Ring Oscillator',
    description: 'Utilized a 128x128 6T-SRAM array with a specialized delay cell for MAC operations, converting the MAC value to a ring oscillator frequency measured by a digital counter.',
    tools: 'Cadence Virtuoso, HSPICE, Xilinx Vivado, DC, ICC',
    link: '#'
  }
];

function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tools:</strong> {project.tools}</p> {/* Added tools here */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;