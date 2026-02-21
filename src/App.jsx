import React from 'react'
import './App.css'
import PillNav from './components/layout/Pillnav.jsx';
import Hero from './sections/hero.jsx';

const navItems = [
  { label: 'Me', href: '#hero' },
  { label: 'About', href: '#about' },
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
      </main>
    </div>
  )
}

export default App