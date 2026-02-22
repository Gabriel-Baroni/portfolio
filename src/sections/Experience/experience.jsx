import React from 'react';
import Carousel from '../../components/bits/carousel/carousel';
import { FiUsers, FiCpu } from 'react-icons/fi';
import './experience.css';

// 1. IMPORTANTE: No Vite/React, você deve importar a imagem como um módulo
import IFSP from '../../assets/IFSP.jpg';
import papuguinho from '../../assets/papuguinho.png';


const Experience = () => {
  // Dados atualizados para refletir sua trajetória real
  const myExperiences = [
    {
      title: 'Papuguinho (Co-founder)',
      description: 'Desenvolvimento de app de AAC com FlutterFlow e Firebase para neurodivergentes.',
      id: 1,
      image: papuguinho
    },
    {
      title: 'Software Developer',
      description: 'Criação de soluções acessíveis e integração de sistemas escaláveis.',
      id: 2,
      // 2. Agora usamos a variável da imagem importada em vez de uma string
      image: IFSP
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
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="title-underline"></div>
      </div>

      <div className="experience-carousel-wrapper">
        <Carousel 
          items={myExperiences} 
          baseWidth={700} // Reduzi levemente para 700 para garantir que caiba bem em telas menores
          autoplay={false} 
          loop={false} 
        />
      </div>
    </section>
  );
};

export default Experience;