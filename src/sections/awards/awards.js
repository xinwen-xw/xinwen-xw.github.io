import React from 'react';
import awards from '../../data/awards.json';
import AwardPreview from './award_preview';

const Awards = () => (
  <div className="awards-section">
    <div className="section-title">
      Awards
    </div>
    <div className="awards">
        {awards.map((award) => <AwardPreview key={award.id} award={award} />)}
      </div>
  </div>
);


export default Awards;