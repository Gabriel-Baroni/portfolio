import React from 'react';
import Carousel from '../../components/bits/carousel/carousel';
import { FiUsers, FiCpu } from 'react-icons/fi';
import './experience.css';

// 1. IMPORTANTE: No Vite/React, você deve importar a imagem como um módulo
import IFSP from '/assets/experience/IFSP_Logo.jpg';
import papuguinho from '/assets/experience/papuguinho.png';


const Experience = () => {
  // Dados atualizados para refletir sua trajetória real
  const myExperiences = [

      {
      title: 'Undergraduate Research Scholarship Recipient | PIBIFSP (2024-2025)',
      description: 'Software Development: I initiated and evolved the Papuguinho application, using FlutterFlow. Cloud Infrastructure: I implemented and improved authentication, data security, and scalability systems using Firebase.',
      id: 1,
      image: IFSP
    },

    {
      title: 'Papuguinho - Software Developer and Researcher (2025-present)',
      description: 'Development of an AAC app using FlutterFlow and Firebase for neurodivergent individuals.',
      id: 2,
      image: papuguinho
    },

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