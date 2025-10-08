import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2025 - Present",
    title: "Data Science Intern",
    company: "PetPooja",
    description: "Gained hands-on experience in data science, contributing to real-world projects and enhancing analytical skills."
  },
  {
    year: "2021 - 2025",
    title: "Bachelor of Engineering in IT",
    company: "LJ Institute of Engineering and Technology",
    description: "Completed a comprehensive degree in Information Technology with a CGPA of 7.94, focusing on core areas like AI, ML, and software development."
  },
  {
    year: "2023",
    title: "Website Designing Head",
    company: "Exympower Innovation",
    description: "Led web design initiatives, overseeing the creation and implementation of innovative website solutions."
  },
];

const Experience = () => {
  const container = useRef();

  useGSAP(() => {
    // Animate the timeline items on scroll
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section id="experience" ref={container}>
      <h2 className="section-title">My Journey</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-year">{item.year}</p>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-company">{item.company}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;