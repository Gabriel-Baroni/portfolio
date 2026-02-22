import React from 'react';
import { FiMail, FiLinkedin, FiGithub, FiFileText } from 'react-icons/fi'; // Adicionei FiFileText
import { FaGraduationCap } from 'react-icons/fa'; // Opcional: ícone acadêmico
import './contact.css';

const Contact = () => {
  const contactLinks = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'gdepaulabaroni@gmail.com', 
      url: 'mailto:gdepaulabaroni@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gabrieldpbaroni/',
      url: 'https://www.linkedin.com/in/gabrieldpbaroni/',
      color: '#0A66C2'
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'github.com/Gabriel-Baroni',
      url: 'https://github.com/Gabriel-Baroni',
      color: 'var(--text-site)'
    },
    {
      icon: <FaGraduationCap />, // Ícone que remete ao meio acadêmico/CNPq
      label: 'Lattes Curriculum',
      value: 'Access my academic trajectory',
      url: 'https://lattes.cnpq.br/0153768116859752', // Substitua pelo seu link real
      color: '#003366' // Azul marinho clássico de instituições
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <div className="title-underline"></div>
      </div>

      <p className="contact-subtitle">
        Let's talk about technology, accessibility, science, or new opportunities!
      </p>

      <div className="contact-container">
        {contactLinks.map((link, index) => (
          <a 
            href={link.url} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <div className="contact-icon" style={{ color: link.color }}>
              {link.icon}
            </div>
            <div className="contact-info">
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;