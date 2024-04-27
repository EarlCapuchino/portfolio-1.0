import React from 'react';
import data from '../data/credentials.json';

const Experience = () => {
  return (
    <div className="experience" id="experience">
      {data.experience.map((exp, index) => {
        // Check if the experience has a link and render accordingly
        const experienceContent = (
          <div className="experience-card">
            <div className="date">{exp.period}</div>
            <div className="details">
              <h3 className="company">{exp.company}</h3>
              <h4 className="role">{exp.role}</h4>
              {exp.details.map((detail, idx) => <p key={idx} className="detail">{detail}</p>)}
            </div>
          </div>
        );

        return exp.link ? (
          <a href={exp.link} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            {experienceContent}
          </a>
        ) : (
          <div key={index}>
            {experienceContent}
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
