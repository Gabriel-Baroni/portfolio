import React from 'react';
import './education.css';

const Education = () => {
  const educationData = [
    {
      institution: "Federal University of São Paulo - UNIFESP",
      course: "Bachelor of Science and Technology",
      period: "2026 - Presente",
      description: "Focus on interdisciplinary training, exploring the fundamentals of computing, mathematics, and natural sciences.",
      current: true
    },
    {
      institution: "Federal Institute of São Paulo - IFSP",
      course: "IT Technician integrated with High School.",
      period: "2022 - 2025",
      description: "A high school course of excellent quality, integrated with a technical course focused on the fundamentals and the job market in the technology field.",
      current: false
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <div className="title-underline"></div>
      </div>

      <div className="timeline-container">
        {educationData.map((item, index) => (
          <div key={index} className={`timeline-item ${item.current ? 'active' : ''}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-content">
              <h3>{item.institution}</h3>
              <h4>{item.course}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;