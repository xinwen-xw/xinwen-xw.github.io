import React from 'react';
import researchProjects from '../../data/projects.json';
import ProjectPreview from './project_preview.js';


const Projects = () => (
  <div className="project-section">
    <div className="section-title">
      Design and fabrication related projects
    </div>

    <div className="project-list">
      {
        researchProjects
          .map((project) =>
            <ProjectPreview key={project.id} project={project}
            />)
      }
    </div>
  </div>
);


export default Projects;