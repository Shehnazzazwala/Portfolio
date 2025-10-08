
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".about-content", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="about" ref={container}>
      <h2 className="section-title about-content">About Me</h2>
      <p className="about-text about-content">
        A recent Information Technology graduate with a strong foundation in Python, AI, Machine Learning, and Data Science. I'm passionate about leveraging analytical and programming skills to develop innovative solutions for real-world challenges. I am seeking an entry-level role where I can apply my technical expertise and collaborative spirit to contribute to a dynamic team.
      </p>
    </section>
  );
};

export default About;