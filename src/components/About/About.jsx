import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  useGSAP(() => {
    // Animation for the main content (photo and text paragraphs)
    gsap.from(".about-content-item", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      duration: 1,
      opacity: 0,
      x: -50,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Animation for the sticker
    gsap.from(".hii-sticker", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      duration: 0.8,
      opacity: 0,
      x: -100,
      rotation: -45,
      delay: 0.5,
      ease: 'back.out(1.7)'
    });

  }, { scope: container });

  return (
    <section id="about" ref={container}>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        {/* Left side: Photo and Sticker */}
        <div className="about-photo-container about-content-item">
          {/* UPDATED: Using hi.png for the main photo */}
          <img src="/lapcut1.png" alt="Shehnaz Zazwala" className="about-photo" />
          
          {/* UPDATED: Using hello.png for the sticker */}
          {/* <img src="/hello.png" alt="Hello sticker" className="hii-sticker" /> */}
        </div>

        {/* Right side: Text Content */}
        <div className="about-text">
          <p className="about-content-item">
            Hi, I'm Shehnazbegum Zazwala (but you can call me Shehnaz!).
          </p>
          <p className="about-content-item">
            I'm a recent Information Technology graduate from the LJ Institute of Engineering and Technology, where I completed my four-year Bachelor of Engineering degree. My academic journey ignited a deep passion for the worlds of Artificial Intelligence, Data Science, and Machine Learning, and I am now actively seeking opportunities where I can apply my skills to solve real-world challenges.
          </p>
          <p className="about-content-item">
            This passion isn't just theoretical; it's the driving force behind my hands-on projects, which span from complex Machine Learning models to robust applications using Python, DBMS, and the MERN stack. I thrive in collaborative, high-pressure environments, an experience I've eagerly sought out by participating in hackathons like DA-IICT's HackOut'23, the NASA Space Apps Challenge, and Datathrone.
          </p>
          <p className="about-content-item">
            Beyond the keyboard, I'm a creative at heart. In my free time, you'll find me painting, sketching, or doodling. My time playing on a state-level school basketball team also taught me the value of discipline, teamwork, and a competitive drive to succeed—qualities I bring to every project I undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;