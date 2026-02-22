import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import './hero.css';
import myProfilePic from '/assets/hero/eu.jpg';

gsap.registerPlugin(TextPlugin);

const typingPhrases = [
  "Software_Developer.py",
  "Researcher.sql",
  "Guy_Who_Love_To_Code.dart",
  "knowledge is never too much.js",
  "Always_learning.json"
];

const Hero = () => {
  const typingTextRef = useRef(null);
  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const phrase = typingPhrases[index];
      
      gsap.to(typingTextRef.current, {
        duration: phrase.length * 0.1,
        text: phrase,
        ease: "none",
        onComplete: () => {
          gsap.to(typingTextRef.current, {
            delay: 2,
            duration: phrase.length * 0.05,
            text: "",
            onComplete: () => {
              setIndex((prev) => (prev + 1) % typingPhrases.length);
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <div className="profile-area">
          <div className="profile-pic-container">
            <img src={myProfilePic} alt="Gabriel Baroni" className="profile-pic" />
          </div>
          <div className="pulsing-ring ring-1"></div>
          <div className="pulsing-ring ring-2"></div>
          <div className="pulsing-ring ring-3"></div>
        </div>

        <h1 className="hero-title">Gabriel Baroni</h1>
        
        <div className="typing-box">
          <span className="hero-typing-text" ref={typingTextRef}></span>
          <span className="typing-cursor">|</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;