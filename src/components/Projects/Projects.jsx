import React, { useRef } from 'react';
import gsap from 'gsap'; // <--- MISSING IMPORT
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // <--- MISSING IMPORT
import { useGSAP } from '@gsap/react'; // <--- MISSING IMPORT
import './Projects.css';

// You need to register the plugin to use it
gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "Recommendation System for Farmers",
        tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
        description: "Engineered a model to provide crop recommendations to farmers based on regional environmental and soil conditions.",
        githubLink: "https://github.com/Shehnazzazwala/Recommendation-System-for-Farmers"
    },
    {
        title: "Swift Scan: Real-Time Traffic Monitoring",
        tech: ["AI/ML", "YOLO", "SORT", "EasyOCR"],
        description: "Integrates vehicle detection, tracking, and license plate recognition to monitor traffic in real-time.",
        githubLink: "https://github.com/Shehnazzazwala/SwiftScan"
    },
    {
        title: "Image to Text Generator with TTS",
        tech: ["Python", "OpenCV", "Hugging Face", "pyttsx3"],
        description: "An AI-powered image captioning system using a BLIP model to generate accurate textual descriptions from images.",
        githubLink: "https://github.com/Shehnazzazwala/Image-to-Text-Generator-with-Text-to-Speech"
    },
    {
        title: "Petrol-Pump Management System",
        tech: ["DBMS", "PL/SQL", "MySQL"],
        description: "A secure database system to manage sales, purchases, and stock inventory with stored procedures and triggers.",
        githubLink: "https://github.com/Shehnazzazwala/Petrol-Pump-Management-System"
    },
    {
        title: "Disease Detection Analysis",
        tech: ["Python", "Pandas", "Seaborn", "Matplotlib"],
        description: "A data analysis program to process and interpret health-related data and generate insightful visualizations.",
        githubLink: "https://github.com/Shehnazzazwala/Disease-Detection-Analysis"
    },
    {
        title: "Pokemon Battle Game",
        tech: ["Python", "Pygame", "API Integration"],
        description: "A fully functional Pokemon battle game using Pygame, featuring turn-based combat and dynamic game logic from an external API.",
        githubLink: "https://github.com/Shehnazzazwala/Pokemon-Battle-Game"
    },
];

const Projects = () => {
    const container = useRef();
    const titleRef = useRef();

    useGSAP(() => {
        // Animate the section title's underline
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 85%',
                toggleActions: "play none none none"
            },
            scaleX: 0,
            duration: 1,
            ease: 'power3.out',
            transformOrigin: 'left'
        });

        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 85%',
                toggleActions: "play none none none"
            },
            duration: 0.8,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <section id="projects" ref={container}>
            <h2 className="section-title">
                My Projects
                <span className="title-underline" ref={titleRef}></span>
            </h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="card-header">
                            <span className="card-icon">📁</span>
                            <div className="card-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <ul className="project-tech-list">
                            {project.tech.map((tech, i) => <li key={i}>{tech}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;