import React from 'react';
import './Skills.css';

// Data from your resume
const computerLanguages = ['HSPICE', 'Verilog', 'SystemVerilog', 'VHDL', 'TCL', 'Python', 'C++'];
const softwarePackages = ['Cadence Virtuoso', 'Design Compiler', 'IC Compiler', 'LTspice', 'Xilinx Vivado', 'TensorFlow', 'Matlab'];

function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Computer Languages</h3>
          <div className="skills-list">
            {computerLanguages.map((skill, index) => (
              <span className="skill-tag" key={index}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3>Software Packages</h3>
          <div className="skills-list">
            {softwarePackages.map((skill, index) => (
              <span className="skill-tag" key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;