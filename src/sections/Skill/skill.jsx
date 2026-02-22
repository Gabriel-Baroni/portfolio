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
  SiGithub 
} from 'react-icons/si';
import './skill.css';

const mySkills = [
  // Backend & Data Science
  { icon: <SiPython />, label: 'Python', color: 'blue' },
  { icon: <SiFlask />, label: 'Flask', color: 'grey' },
  { icon: <SiPandas />, label: 'Pandas', color: 'indigo' },
  { icon: <SiNodedotjs />, label: 'Node.js', color: 'green' },
  { icon: <SiExpress />, label: 'Express.js', color: 'grey' },

  // Frontend & Mobile
  { icon: <SiJavascript />, label: 'JavaScript', color: '#ab980e' },
  { icon: <SiHtml5 />, label: 'HTML', color: 'orange' },
  { icon: <SiCss3 />, label: 'CSS', color: 'blue' },
  { icon: <SiReact />, label: 'React', color: 'blue' },
  { icon: <SiFlutter />, label: 'Flutter', color: 'blue' },
  { icon: <SiDart />, label: 'Dart', color: 'blue' },

  // Database & Tools
  { icon: <SiFirebase />, label: 'Firebase', color: 'orange' },
  { icon: <SiSupabase />, label: 'Supabase', color: 'green' },
  { icon: <SiGit />, label: 'Git', color: 'red' },
  { icon: <SiGithub />, label: 'GitHub', color: 'grey' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <div className="title-underline"></div>
      </div>

      <div className="skills-grid-container">
        <GlassIcons items={mySkills} />
      </div>
    </section>
  );
};

export default Skills;