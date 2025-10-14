import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../projectData'; // Import our data
import './ProjectDetailPage.css';

// A small component to parse simple markdown (like making text bold)
const Markdown = ({ text }) => {
  const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const ProjectDetailPage = () => {
  const { slug } = useParams(); // Gets the ':slug' from the URL
  const project = projectsData.find(p => p.slug === slug);

  // --- THIS IS THE CRUCIAL FIX ---
  // If no project is found for the given slug, we immediately return
  // the "Not Found" message before trying to access any of its properties.
  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-not-found">
          <h2>Project Not Found</h2>
          <p>Sorry, the project you are looking for does not exist in the projectData.js file.</p>
          <Link to="/" className="back-link">← Go back to Homepage</Link>
        </div>
      </div>
    );
  }

  // If a project IS found, the rest of the code will run safely.
  return (
    <div className="project-detail-page">
      <header className="project-detail-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <div className="project-header-links">
          {project.liveLink && project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-button">Live Demo</a>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-button">Source Code</a>
        </div>
      </header>
      
      <div className="project-hero-image-container">
        <img src={project.heroImage} alt={`${project.title} hero image`} className="project-hero-image" />
      </div>

      <div className="project-detail-body">
        <div className="project-section">
          <h3>Project Overview</h3>
          <p>{project.overview}</p>
        </div>

        <div className="project-section tech-stack-section">
          <h3>Technology Stack</h3>
          <ul className="project-tech-list-detail">
            {project.tech.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
        
        <div className="project-section">
          <h3>Key Features</h3>
          <ul className="key-features-list">
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>
                <span className="feature-icon">✓</span>
                <Markdown text={feature} />
              </li>
            ))}
          </ul>
        </div>

        <div className="project-section">
          <h3>Challenges & Solutions</h3>
          <p>{project.challenges}</p>
          <p><strong>My Solution:</strong> {project.solution}</p>
        </div>
        
        <div className="project-section learnings-section">
          <h3>What I Learned</h3>
          <p>{project.learnings}</p>
        </div>
        
        <Link to="/" className="back-link">← Back to All Projects</Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;