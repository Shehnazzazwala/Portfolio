import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    // This is the complete, correct timeline.
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(".line span", {
      y: 150,
      skewY: 7,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power4.out'
    })
    .from(".hero-subtitle", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power4.out'
    }, "-=1")
    // --- THIS IS THE CORRECTED PART ---
    // This line animates the button into view and was missing.
    .from(".hero-button", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power4.out'
    }, "-=0.7");

  }, { scope: container });

  return (
    <section id="hero" ref={container} className="hero-section">
      <h1 className="hero-title">
        <div className="line"><span>Zazwala Shehnazbegum</span></div>
      </h1>
      <p className="hero-subtitle">AI & Machine Learning Enthusiast</p>
      
      {/* This button will now be animated correctly */}
      <a href="#projects" className="hero-button">View My Work</a>
    </section>
  );
};

export default Hero;