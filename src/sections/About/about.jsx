import React from 'react';
import PixelTransition from '../../components/bits/pixelTransition/pixel'
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Título da Seção - Padrão para todas as seções pós-hero */}
      <div className="section-header">
        <h2 className="section-title">About</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-container">
        
        {/* Lado Esquerdo: Pixel Transition Visual */}
        <div className="about-visual">
          <PixelTransition
            firstContent={
              <img 
                src="/assets/about/eu.jpg" 
                alt="Gabriel Baroni" 
                className="about-image"
              />
            }
            secondContent={
              <div className="about-card-active">
                <p>"We are a way to the cosmos to know itself."</p>
                <span>Carl Sagan</span>
              </div>
            }
            gridSize={12}
            pixelColor="var(--nav-main)"
            animationStepDuration={0.4}
            aspectRatio="100%"
          />
        </div>

        {/* Lado Direito: Texto Informativo */}
        <div className="about-text-content">
          <h3 className="about-greeting">Software Developer • IT technician • Researcher.</h3>
          
          <div className="about-bio">
                        <p>

            <strong>I am Gabriel de Paula Baroni</strong>, born and live in Brazil, a IT Technician from 
            <strong> Federal Institute of São Paulo - IFSP</strong> and a Science and Technology student at
            <strong> Federal University of São Paulo - UNIFESP</strong>. Driven by curiosity and determination to
            solve complex problems, I currently work as a software developer on the
            project <strong>Papuguinho</strong>, an application focused on Augmentative and Alternative Communication (AAC) to promote inclusion.
            </p>

           <p>
            Specialist in ecosystems such as <strong>FlutterFlow</strong> and    
            <strong> Firebase</strong>, in addition to having experience with 
            <strong> Full Stack</strong> and <strong>Back-end</strong> development with languages such as 
            <strong> Python</strong> and <strong>JavaScript</strong>.
          </p>

          <p>
              In addition to my technical work, I am a researcher with more than 
              <strong> 9 scientific papers</strong> and works presented at 
              <strong> national</strong> and <strong>international</strong> conferences.
          </p>

          <p>
            <em>I believe that, with technology, it is possible to improve the experience of living on planet Earth. Helping people, the environment, and society.</em>
          </p>

          </div>


        </div>

      </div>
    </section>
  );
};

export default About;