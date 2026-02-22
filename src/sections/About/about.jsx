import React from 'react';
import PixelTransition from '../../components/bits/pixelTransition/pixel'
import './About.css';

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
                src="src/assets/eu1.jpeg" 
                alt="Gabriel Baroni" 
                className="about-image"
              />
            }
            secondContent={
              <div className="about-card-active">
                <p>"Tecnologia só faz sentido se for para incluir."</p>
                <span>Gabriel Baroni</span>
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
          <h3 className="about-greeting">Desenvolvedor focado em impacto social.</h3>
          
          <div className="about-bio">
            <p>
              Sou o <strong>Gabriel Baroni</strong>, estudante de Ciência e Tecnologia na 
              <strong> UNIFESP</strong>. Minha atuação como co-fundador do 
              <strong> Papuguinho</strong> me permitiu unir a paixão pelo desenvolvimento 
              com o compromisso pela acessibilidade.
            </p>
            <p>
              Especialista em ecossistemas como <strong>FlutterFlow</strong> e 
              <strong> Firebase</strong>, trabalho para criar soluções de Comunicação 
              Alternativa (AAC) que devolvem a autonomia para pessoas neurodivergentes.
            </p>
          </div>


        </div>

      </div>
    </section>
  );
};

export default About;