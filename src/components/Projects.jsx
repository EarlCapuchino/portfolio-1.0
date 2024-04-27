import React from 'react';
import data from '../data/credentials.json';

const Projects = () => {
  const { projects } = data.company;
  return (
    <div className="projects" id="projects">
      <h4>Projects</h4>
      {projects.map((project, index) => {
        // Check if the project has a link and render accordingly
        const projectContent = (
          <div className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        );

        return project.link ? (
           <div className="ll">
            <a href={project.link}  target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            {projectContent}
          </a>
          </div>
        ) : (
          <div key={index}>
            {projectContent}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
