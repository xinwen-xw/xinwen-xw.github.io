import React from 'react';
import Profile from './profile.jpeg';

const About = () => (
  <div className="about-container" 
    accessible={true}
    accessibilityLabel="About Xin Wen">
    <img src={Profile} alt="./profile.jpeg"/>
    <div className="self-description-container">
      <div className="my-name">
        Xin Wen 温馨
      </div>
      <div className="paragraph">
        <div>
        <b>Research overview:</b>
        </div>
        <div>My research focuses on using computational design to invent and investigate sustainable manufacturing approaches that span across 3D printing, textiles, and electronics.
        </div>
        <br></br>
        <div>Keywords: Computational Fabrication, Sustainable Design, 3D Printing, Smart Textiles, Human-Computer Interaction</div>
      </div>

      <div className="paragraph">
      <div>
      <b>Background:</b>
        </div>
        <div> I am a PhD student at the ATLAS Institute at University of Colorado Boulder, advised by <a href="https://www.colorado.edu/atlas/michael-rivera" target="_blank">
        Prof. Michael Rivera</a>.  
        Previously I worked as a software engineer at Airbnb. I have a B.S. in Electrical Engineering & Computer Science, with a minor in Design from 
        Massachusetts Institute of Technology (MIT). During my undergraduate study, I worked at MIT Computer Science & Artificial Intelligence Laboratory (CSAIL)
        with <a href="https://hcie.csail.mit.edu/stefanie-mueller.html" target="_blank">
        Prof. Stefanie Mueller</a>. 
        </div>
      </div>

      <div className="paragraph">
        xin_dot_wen_at_colorado_dot_edu
      </div>

    </div>
  </div>
);

export default About;