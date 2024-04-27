import React from 'react';
import data from '../data/credentials.json';

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2>Languages</h2>
      <div className="skills-container">
        {data.skills.programming_languages.map((lang, index) => (
          <div className="card" key={index}>
            <i className={`icon ${lang.icon}`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;