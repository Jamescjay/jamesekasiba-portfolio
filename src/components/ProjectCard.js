import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ project }) => {
  return (
    <Col size={12} lg={6} className="mb-4">
      <div className="enhanced-project-card">
        <div className="project-image-container">
          <img 
            src={project.imgUrl} 
            alt={project.title}
            className="project-image"
          />
        </div>
        
        <div className="project-content">
          <div className="project-header">
            <div className="project-title-section">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>
            {project.featured && (
              <div className="featured-badge">
                <Award size={16} />
                <span>Featured</span>
              </div>
            )}
          </div>
          
          <p className="project-description">{project.description}</p>
          
          <div className="tech-stack-display">
            <h4>Technologies:</h4>
            <div className="tech-tags">
              {project.technologies && project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-accomplishments">
            <h4>Key Accomplishments:</h4>
            <ul>
              {project.accomplishments && project.accomplishments.slice(0, 3).map((accomplishment, idx) => (
                <li key={idx}>{accomplishment}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-actions">
            <a 
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button primary"
            >
              <ExternalLink size={16} />
              Live Preview
            </a>
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button secondary"
            >
              <Github size={16} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};