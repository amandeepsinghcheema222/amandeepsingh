import React from 'react';
import './Awards.css';

// Data from your resume
const awardsData = [
  "Awarded a financial grant from SERB and IEEE CAS for participation at ISCAS-2024 in Singapore.",
  "Received the best digital IC tapeout award at VLSID 2025 in Bengaluru.",
  "Awarded the fellowship for attending VLSID-2024 Conference.",
  "GATE Qualified: 2019 (AIR 1517), 2018 (AIR 4438), and 2017 (AIR 2667).",
  "Served as a Teaching Assistant for the Digital System Design course on the Coursera platform.",
  "Transcribed files for the VLSI Physical Design course on the NPTEL platform."
];

function Awards() {
  return (
    <section className="awards-section">
      <h2>Awards & Achievements</h2>
      <ul className="awards-list">
        {awardsData.map((award, index) => (
          <li className="award-item" key={index}>
            {award}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Awards;