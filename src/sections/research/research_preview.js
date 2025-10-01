import React from 'react';

const ResearchPreview = ({research}) => (
    <div className="publication_preview">
      <div className="thumbnail">
        <img src={require("../../data/research_thumbnails/" + research.thumbnail) } />
      </div>
      <div className="descriptions">
        <div>
          <div className="title">
            {research.title}
          </div>
          <div className="author">
            <div dangerouslySetInnerHTML={ { __html: research.authors } }></div>
          </div>
          <div className="conference">
            <div>{research.conference}</div>
          </div>
          {!!research.awards && <div className="awards">
            {research.awards.map((award) => <div>&#127942; {award}</div>)}
            </div> 
            }
          <div className="description">
            {research.description}
          </div>
        </div>
        <div className="links">
          {!!research.doi && <a href={research.doi} target="_blank">DOI</a>}
          {!!research.pdf && <a href={research.pdf} target="_blank">PDF</a>}
          {!!research.video && <a href={research.video} target="_blank">Video</a>}
          {!!research.projectPage && <a href={research.projectPage} target="_blank">Project Page</a>}
        </div>
      </div>
    </div>
  );


export default ResearchPreview;