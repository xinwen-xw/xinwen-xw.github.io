import React from 'react';
import courses from '../../data/teaching.json';

const Community = () => (
  <div className="community-section">
    <div className="section-title">
      Teaching and community involvement
    </div>

    <div className="teaching-section">
      <div className="teaching">
        {courses.map((course) =>
          <div key={course.id} className="preview">
            <div className="title">
              { course.link ?
                <a href={course.link} target="_blank">
                  {course.courseName}
                </a> :
                <div>
                  {course.courseName}
                </div>
              }
            </div>
            <div className="descriptions">
              <div>
                {course.term}
              </div>
              <ul>
                {course.details.map((job, i)=> (
                  <li key={i}>
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>

    <div className="conference-attendance-info">
	  	<div className="sec-title">
	  		Conference volunteering
	    </div>
	    <div className="info">
	    	<div className="info-line">
	      		<div className="item">ACM UIST Student Volunteer</div>
	      		<div className="year">2017</div>
	    	</div>
	    	<div className="info-line">
	      		<div className="item">ACM CHI Student Volunteer</div>
	      		<div className="year">2018</div>
	    	</div>
	    </div>
  	</div>
  </div>
);


export default Community;