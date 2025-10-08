import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../projectData';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>Sorry, the project you are looking for does not exist.</p>
        <Link to="/" className="back-link">Go back to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <header className="project-detail-header">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-header-links">
          {project.liveLink && project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-button">Live Demo</a>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-button">Source Code</a>
        </div>
      </header>

      <section className="project-section">
        <h3>Overview</h3>
        <p>{project.overview}</p>
      </section>

      <section className="project-section tech-stack-section">
        <h3>Technology Stack</h3>
        <ul className="project-tech-list">
          {project.tech.map(t => <li key={t}>{t}</li>)}
        </ul>
      </section>
      
      <section className="project-section">
        <h3>Challenges & Solutions</h3>
        <h4>Challenges</h4>
        <p>{project.challenges}</p>
        <h4>Solution</h4>
        <p>{project.solution}</p>
      </section>

      <Link to="/" className="back-link">← Back to All Projects</Link>
    </div>
  );
};

// THIS IS THE CRUCIAL LINE THAT WAS MISSING
export default ProjectDetailPage;