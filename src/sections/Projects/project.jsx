import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi'; // Ícones para os links
import CardSwap, { Card } from '../../components/bits/cardSwap/card'; 
import './project.css';

const meusProjetos = [
  {
    title: 'Papuguinho App',
    desc: 'App de Comunicação Alternativa (AAC) para neurodivergentes.',
    tags: ['FlutterFlow', 'Firebase', 'Acessibilidade'],
    image: '/assets/papuguinho.png',
    github: 'https://github.com/GabrielBaroni/papuguinho', // Exemplo de link
    demo: 'https://papuguinho.com'
  },
  {
    title: 'Pesquisa Assistiva IFSP',
    desc: 'Iniciação Científica focada em tecnologias de inclusão (2024-2025).',
    tags: ['Dart', 'Research', 'Assistive Tech'],
    image: '/projetos/pesquisa.jpg',
    github: 'https://github.com/GabrielBaroni/pesquisa-assistiva',
    demo: '#' // Se não tiver demo, o botão não aparece
  },
  {
    title: 'Sistema Escalável UNIFESP',
    desc: 'Projeto acadêmico focado em arquitetura de software no BCT.',
    tags: ['React', 'Scalability', 'BCT'],
    image: '/projetos/unifesp.jpg',
    github: 'https://github.com/GabrielBaroni/unifesp-projeto',
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