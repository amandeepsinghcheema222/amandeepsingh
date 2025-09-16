import React from 'react';
import './Education.css';

// Data extracted from your resume
const educationData = [
  {
    year: '2024',
    degree: 'Ph.D. in Electronics and Communication Engineering',
    institution: 'Indian Institute of Technology, Roorkee',
    score: 'CGPA: 8.429'
  },
  {
    year: '2020',
    degree: 'Postgraduate (PG)',
    institution: 'Punjab Engineering College (Deemed to Be University), Chandigarh',
    score: 'CGPA: 8.740'
  },
  {
    year: '2014',
    degree: 'Graduate (UG)',
    institution: 'Guru Gobind Singh College of Modern Technology, Kharar, Punjab',
    score: 'Percentage: 82.60%'
  },
  {
    year: '2010',
    degree: 'Intermediate (Class XII)',
    institution: 'Central Public Senior Secondary School, Ghoman, PSEB Board',
    score: 'Percentage: 70.44%'
  },
  {
    year: '2008',
    degree: 'Matriculate (Class X)',
    institution: 'S.G.H.K.Public School, Ghoman, PSEB Board',
    score: 'Percentage: 72.70%'
  }
];

function Education() {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div className="education-item" key={index}>
            <div className="education-year">{item.year}</div>
            <div className="education-details">
              <h3>{item.degree}</h3>
              <p className="institution">{item.institution}</p>
              <p className="score">{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;