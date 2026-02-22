import React from 'react';
import CardSwap, { Card } from '../../components/bits/cardSwap/card'; // Ajuste o caminho conforme sua pasta
import './project.css';



// 1. COLOQUE AQUI (Fora do componente)
const meusProjetos = [
  {
    title: 'Papuguinho App',
    desc: 'App de Comunicação Alternativa (AAC) para neurodivergentes.',
    tags: ['FlutterFlow', 'Firebase', 'Acessibilidade'],
    image: '/assets/papuguinho.png'
  },
  {
    title: 'Pesquisa Assistiva IFSP',
    desc: 'Iniciação Científica focada em tecnologias de inclusão (2024-2025).',
    tags: ['Dart', 'Research', 'Assistive Tech'],
    image: '/projetos/pesquisa.jpg'
  },
  {
    title: 'Sistema Escalável UNIFESP',
    desc: 'Projeto acadêmico focado em arquitetura de software no BCT.',
    tags: ['React', 'Scalability', 'BCT'],
    image: '/projetos/unifesp.jpg'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-swap-wrapper">
        {/* 2. O CardSwap usa os dados mapeados aqui */}
        <CardSwap 
          width={window.innerWidth < 768 ? 320 : 500} 
          height={400}
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
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </section>
  );
};

export default Projects;