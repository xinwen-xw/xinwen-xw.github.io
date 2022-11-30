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
        <div>Human Computer Interaction, Digital Fabrication</div>
      </div>

      <div className="paragraph">
      <div className="semibold">
          Background:
        </div>
        I graduated from MIT in 2019 with a B.Sc. in Electrical Engineering & Computer Science, with a minor in Design. I worked at MIT CSAIL as an undergraduate research assistant
        with <a href="https://hcie.csail.mit.edu/stefanie-mueller.html" target="_blank">
        Prof. Stefanie Mueller</a>. Since I graduated, I have been working at Airbnb as a software engineer.
      </div>

    </div>
  </div>
);

export default About;