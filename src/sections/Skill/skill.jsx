import React from 'react';
import GlassIcons from '../../components/bits/glassIcons/glass';
import { 
  SiPython, 
  SiFlask, 
  SiPandas, 
  SiNodedotjs, 
  SiExpress, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiFlutter, 
  SiDart, 
  SiFirebase, 
  SiSupabase, 
  SiGit, 
  SiGithub,
  SiSqlite,
  SiMysql
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import './skill.css';

const Skills = () => {
  // Organização por categorias para destacar seu perfil na UNIFESP e projetos como o Papuguinho
  const backendData = [
    { icon: <SiPython />, label: 'Python', color: 'blue' },
    { icon: <SiFlask />, label: 'Flask', color: 'grey' },
    { icon: <SiPandas />, label: 'Pandas', color: 'indigo' },
    { icon: <SiNodedotjs />, label: 'Node.js', color: 'green' },
    { icon: <SiExpress />, label: 'Express.js', color: 'grey' },
  ];

  const frontendMobile = [
    { icon: <SiJavascript />, label: 'JavaScript', color: '#ab980e' },
    { icon: <SiHtml5 />, label: 'HTML', color: 'orange' },
    { icon: <SiCss3 />, label: 'CSS', color: 'blue' },
    { icon: <SiReact />, label: 'React', color: 'blue' },
    { icon: <SiFlutter />, label: 'Flutter', color: 'blue' },
    { icon: <SiDart />, label: 'Dart', color: 'blue' },
  ];

  const toolsDatabase = [
    { icon: <SiFirebase />, label: 'Firebase', color: 'orange' },
    { icon: <SiSupabase />, label: 'Supabase', color: 'green' },
    { icon: <SiMysql />, label: 'MySQL', color: 'blue' },
    { icon: <SiSqlite />, label: 'SQlite', color: 'blue' },
    { icon: <SiGit />, label: 'Git', color: 'red' },
    { icon: <SiGithub />, label: 'GitHub', color: 'grey' },
    { icon: <VscVscode />, label: 'Vs Code', color: 'blue' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <div className="title-underline"></div>
      </div>

      <div className="skills-container">
        {/* Categoria 1 */}
        <div className="skill-category">
          <h3 className="category-subtitle">Backend & Data Science</h3>
          <div className="skills-grid-container">
            <GlassIcons items={backendData} />
          </div>
        </div>

        {/* Categoria 2 */}
        <div className="skill-category">
          <h3 className="category-subtitle">Frontend & Mobile</h3>
          <div className="skills-grid-container">
            <GlassIcons items={frontendMobile} />
          </div>
        </div>

        {/* Categoria 3 */}
        <div className="skill-category">
          <h3 className="category-subtitle">Databases & Tools</h3>
          <div className="skills-grid-container">
            <GlassIcons items={toolsDatabase} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;