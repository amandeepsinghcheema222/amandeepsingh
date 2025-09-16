import React from 'react';
import './Publications.css';

// Data extracted from your resume
const publicationsData = [
  {
    text: 'A. Singh and B. P. Das, "PVT-Insensitive Time-Domain-based In-Memory Computation with Improved Linearity for Binary Neural Networks", in IEEE International Symposium on Circuits and Systems (ISCAS), Singapore, Singapore, 2024.',
    doi: '10.1109/ISCAS58744.2024.10558168'
  },
  {
    text: 'P. K. Saragada, S. Manna, A. Singh and B. P. Das, "A Configurable 10T SRAM-Based IMC Accelerator With Scaled-Voltage-Based Pulse Count Modulation for MAC and High-Throughput XAC", in IEEE Transactions on Nanotechnology, 2023.',
    doi: '10.1109/TNANO.2023.3269946'
  },
  {
    text: 'A. Singh and B. P. Das, "Area-Efficient In-Memory Computation with Improved Linearity using Voltage-Controlled Delay Cell-based Ring Oscillator", in IEEE International Symposium on Smart Electronic Systems (iSES), Ahmedabad, India, 2023.',
    doi: '10.1109/iSES58672.2023.000'
  },
  {
    text: 'A. Singh and B. P. Das, "Dual- VTH XDC-Based Time-Domain In-Memory Computing Architecture with PVT-Insensitive XAC Operations for BNN Applications", in IEEE Transactions on Very Large Scale Integration (VLSI) Systems (submitted), 2025.',
    doi: null // No DOI for submitted papers
  }
];


function Publications() {
  return (
    <section className="publications-section">
      <h2>Research Publications</h2>
      <ul className="publications-list">
        {publicationsData.map((pub, index) => (
          <li className="publication-item" key={index}>
            <p>{pub.text}</p>
            {pub.doi && (
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                View Publication
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Publications;