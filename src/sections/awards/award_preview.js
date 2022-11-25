import React from 'react';

const AwardPreview = ({award}) => (
  <div className="award-preview">
    <div className="title">
      {
        award.link ?
          <a href={award.link} target="_blank">
            {award.title}
          </a> :
          <div>
            {award.title}
          </div>
      }
    </div>
    <div className="descriptions">
      {award.description}
    </div>
  </div>
);


export default AwardPreview;