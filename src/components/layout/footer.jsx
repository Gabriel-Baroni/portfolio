import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // npm install react-icons
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-logo">Gabriel<span> Baroni</span></h3>
          <p>A developer passionate about technology. Always learning. Solving problems with knowledge.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Gabriel Baroni. All rights reserved.</p>
        <p className="footer-tag">Made white ❤️ and code</p>
      </div>
    </footer>
  );
};

export default Footer;