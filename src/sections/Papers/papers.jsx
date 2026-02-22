import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi'; // Ícones para os links
import CardSwap, { Card } from '../../components/bits/cardSwap/card'; 
import './papers.css';

const meusProjetos = [
  {
    title: 'Desafios na comunicação verbal: uma proposta de intervenção utilizando comunicação aumentativa e alternativa junto ao paradigma low-code',
    desc: '15º Congresso de Inovação, Ciência e Tecnologia of IFSP (CONICT)- 2024 ',
    tags: [''],
    image: '/assets/papers/conict.png',
    demo: 'https://congressos.ifsp.edu.br/conict/article/view/470'
  },
  {
    title: 'Democratizando o ensino: inclusão de pessoas neurodivergentes no ensino de funções orgânicas',
    desc: 'XIII Encontro Paulista de Pesquisa em Ensino de Química (XIII EPPEQ) - 2025',
    tags: [''],
    image: '/assets/papers/eppeq.jpg',
    demo: 'https://firebasestorage.googleapis.com/v0/b/cientestudio.appspot.com/o/paperFinalVersion%2F2caee8da-edc8-449a-a0a7-a3af6f9b15f5.pdf?alt=media&token=ec457cc7-5057-43d0-9d3c-696146ac130f' // Se não tiver demo, o botão não aparece
  },
  {
    title: 'Superando barreiras comunicativas: integração da comunicação aumentativa e alternativa com tecnologias assistivas para uma aprendizagem significativa e inclusiva',
    desc: 'X Encontro internacional de aprendizagem significativa (X EIAS) - 2024',
    tags: [''],
    image: '/assets/papers/eias.png',
    demo: 'https://www.researchgate.net/publication/391103238_XEIAS-2024-Anais-FINAL' // Se não tiver demo, o botão não aparece
  },



];

const Projects = () => {
  return (
    <section id="papers" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Some Scientific Papers</h2>
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
                      <FiExternalLink /> Visitar
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