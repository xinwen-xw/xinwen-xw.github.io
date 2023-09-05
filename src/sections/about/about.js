import React from 'react';
import Profile from './profile.jpeg';

const About = () => (
  <div className="about-container" 
    accessible={true}
    accessibilityLabel="About Xin Wen">
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
        <div> I am a PhD student at the ATLAS Institute at CU Boulder, advised by <a href="https://www.colorado.edu/atlas/michael-rivera" target="_blank">
        Prof. Michael Rivera</a>.  
        Previously I worked as a software engineer at Airbnb. I have a B.Sc. in Electrical Engineering & Computer Science, with a minor in Design from MIT. I worked at MIT CSAIL as an undergraduate research assistant
        with <a href="https://hcie.csail.mit.edu/stefanie-mueller.html" target="_blank">
        Prof. Stefanie Mueller</a>. 
        </div>
      </div>

    </div>
  </div>
);

export default About;