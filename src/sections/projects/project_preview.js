import React from 'react';

const ProjectPreview = ({project}) => (
  <div className="project-preview">
    <div className="thumbnail">
      <img src={require("../../data/project_thumbnails/" + project.thumbnail) } />
    </div>
    <div className="descriptions">
      <div>

        <div className="title">
          {
            project.link  ?
              <a href={
                project.pdf ?
                require("../../data/" + project.pdf) :
                project.link} target="_blank">
                {project.title}
              </a> :
              <div>
                {project.title}
              </div>
          }
        </div>
        <div className="skill">
          {
            <div>
              &bull; {project.skill}
            </div>
          }
        </div>
        {project.partner &&  <div className="partner">
          {
            <div>
              &bull; {project.partner}
            </div>
          }
        </div>}
        <div className="description">
          <div dangerouslySetInnerHTML={ { __html: project.description } }></div>
        </div>
      </div>
    </div>
  </div>
);


export default ProjectPreview;