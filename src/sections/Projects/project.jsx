import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi'; // Ícones para os links
import CardSwap, { Card } from '../../components/bits/cardSwap/card'; 
import './project.css';

const meusProjetos = [
  {
    title: 'Papuguinho App',
    desc: 'Alternative Communication App (AAC) for neurodivergent individuals.',
    tags: ['FlutterFlow', 'Dart', 'Firebase', 'Cloud Firestore' ],
    image: '/assets/projects/papuguinho.png',
    github: 'https://github.com/Papuguinho', 
    demo: 'https://app.papuguinho.com'
  },

  {
    title: 'Bem-Aprendi Web Game',
    desc: 'An educational browser game with a playful universe based on Brazilian fauna..',
    tags: ['JavaScript', 'CreateJs', 'NodeJS','Express.js','Supabase'],
    image: '/assets/projects/aprendi.png',
    github: 'https://github.com/Gabriel-Baroni/Bem-Aprendi',
    demo: '#' // Se não tiver demo, o botão não aparece
  },
  {
    title: 'Website Portfolio',
    desc: 'Personal project focused on developing web development skills.',
    tags: ['JavaScript', 'React'],
    image: '/assets/projects/portfolio.png',
    github: 'https://github.com/Gabriel-Baroni/portfolio',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-swap-wrapper">
        <CardSwap 
          width={window.innerWidth < 768 ? 300 : 500} 
          height={450} // Aumentado um pouco para caber os botões
          delay={5000}
        >
          {meusProjetos.map((proj, index) => (
            <Card key={index} customClass="project-card">
              <div className="card-content">
                <img src={proj.image} alt={proj.title} className="proj-img" />
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                
                <div className="proj-tags">
                  {proj.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="card-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="link-icon">
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {proj.demo && proj.demo !== '#' && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="link-icon">
                      <FiExternalLink /> Demo
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </section>
  );
};

export default Projects;