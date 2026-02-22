import React from 'react';
import Carousel from '../../components/bits/carousel/carousel'; // Verifique se o caminho está correto
import { FiCode, FiUsers, FiCpu } from 'react-icons/fi';
import './experience.css';

const Experience = () => {
  // Seus dados reais baseados no Papuguinho e IFSP
  const myExperiences = [
    {
      title: 'Papuguinho (Co-founder)',
      description: 'Desenvolvimento de app de AAC com FlutterFlow e Firebase para neurodivergentes.',
      id: 1,
      icon: <FiUsers className="carousel-icon" />
    },
    {
      title: 'Software Developer',
      description: 'Criação de soluções acessíveis e integração de sistemas escaláveis.',
      id: 2,
      icon: <FiCode className="carousel-icon" />
    },
    {
      title: 'Bolsista de Pesquisa',
      description: 'Pesquisa acadêmica no IFSP Jacareí focada em tecnologias assistivas.',
      id: 3,
      icon: <FiCpu className="carousel-icon" />
    }
  ];

  return (
    <section id="experience" className="experience-section">
      {/* TÍTULO PADRÃO DA SEÇÃO */}
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="title-underline"></div>
      </div>

      {/* CARROSSEL CENTRALIZADO E GRANDE */}
      <div className="experience-carousel-wrapper">
        <Carousel 
          items={myExperiences} 
          baseWidth={800} // Valor alto para ficar grande como você pediu
          autoplay={false} 
          loop={false} 
        />
      </div>
    </section>
  );
};

export default Experience;