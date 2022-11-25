import React from 'react';
import Profile from './profile.png';

const About = () => (
  <div className="about-container">
    <img src={Profile} alt="./profile1.jpg"/>
    <div className="self-description-container">
      <div className="my-name">
        Xin Wen
      </div>
      <div className="paragraph">
        <div className="semibold">
          Research interests:
        </div>
        <div>Human Computer Interaction</div>
      </div>

      <div className="paragraph">
      <div className="semibold">
          Background:
        </div>
        I graduated from MIT in 2019 and worked at <a href="https://www.csail.mit.edu/" target="_blank">MIT CSAIL</a> as an undergraduate research assistant
        with <a href="https://hcie.csail.mit.edu/stefanie-mueller.html" target="_blank">
        Prof. Stefanie Mueller</a>. Since I graduated, I have worked at Airbnb as software engineer.
      </div>

    </div>
  </div>
);

export default About;