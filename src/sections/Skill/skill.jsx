import React from 'react';
import GlassIcons from '../../components/bits/glassIcons/glass';
import { 
  SiFlutter, 
  SiFirebase, 
  SiDart, 
  SiReact, 
  SiJavascript, 
  SiTailwindcss,
  SiFigma,
  SiGit
} from 'react-icons/si';
import './skill.css';

const mySkills = [
  { icon: <SiFlutter />, label: 'Flutter', color: 'blue' },
  { icon: <SiDart />, label: 'Dart', color: 'blue' },
  { icon: <SiFirebase />, label: 'Firebase', color: 'orange' },
  { icon: <SiJavascript />, label: 'JavaScript', color: 'yellow' },
  { icon: <SiReact />, label: 'React', color: 'blue' },
  { icon: <SiTailwindcss />, label: 'Tailwind', color: 'indigo' },
  { icon: <SiFigma />, label: 'UI/UX', color: 'purple' },
  { icon: <SiGit />, label: 'Git', color: 'red' },
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