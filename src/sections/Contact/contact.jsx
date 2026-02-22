import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  const contactLinks = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'gabriel.baroni@exemplo.com', // Substitua pelo seu email real
      url: 'mailto:gabriel.baroni@exemplo.com',
      color: '#EA4335' // Cor do Google/Gmail
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gabrielbaroni',
      url: 'https://linkedin.com/in/seu-perfil',
      color: '#0A66C2' // Cor do LinkedIn
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'github.com/gabrielbaroni',
      url: 'https://github.com/seu-usuario',
      color: 'var(--text-site)' // Cor dinâmica do seu tema
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Contato</h2>
        <div className="title-underline"></div>
      </div>

      <p className="contact-subtitle">
        Vamos conversar sobre tecnologia, acessibilidade ou novas oportunidades!
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