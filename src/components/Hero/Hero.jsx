import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(".line span", {
      y: 100,
      skewY: 7,
      duration: 1.5,
      stagger: 0.25,
      ease: 'power4.out'
    })
    .from(".hero-subtitle", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power4.out'
    }, "-=1") // Overlap with previous animation
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
      <a href="#projects" className="hero-button" >View My Work</a>
    </section>
  );
};

export default Hero;