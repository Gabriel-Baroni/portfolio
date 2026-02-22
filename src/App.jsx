import React from 'react'
import './App.css'
import PillNav from './components/layout/Pillnav.jsx';
import Hero from './sections/Hero/hero.jsx';
import About from './sections/About/about.jsx';
import Education from './sections/Education/education.jsx';
import Experience from './sections/Experience/experience.jsx';
import Projects from './sections/Projects/project.jsx';
import Skills from './sections/Skill/skill.jsx';
import Contact from './sections/Contact/contact.jsx';


const navItems = [
  { label: 'Me', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="app-container">
      <PillNav 
        items={navItems} 
        logo={null} 
        baseColor="var(--bg-site)"           
        pillColor="var(--bg-site)"           
        pillTextColor="var(--nav-main)"     
        hoveredPillTextColor="var(--bg-site)" 
      />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

      </main>
    </div>
  )
}

export default App