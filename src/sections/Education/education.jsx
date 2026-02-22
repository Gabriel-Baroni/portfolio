import React from 'react';
import './education.css';

const Education = () => {
  const educationData = [
    {
      institution: "UNIFESP",
      course: "Bacharelado em Ciência e Tecnologia (BCT)",
      period: "2026 - Presente",
      description: "Foco em formação interdisciplinar, explorando fundamentos de computação e tecnologias avançadas.",
      current: true
    },
    {
      institution: "IFSP Jacareí",
      course: "Técnico em Informática (Pesquisa & Desenvolvimento)",
      period: "2024 - 2025",
      description: "Início do projeto Papuguinho como bolsista de pesquisa, focando em desenvolvimento mobile e acessibilidade.",
      current: false
    }
    // Adicione outros aqui se houver
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