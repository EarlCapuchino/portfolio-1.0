import React from 'react';
import data from '../data/credentials.json';

const Education = () => {
  return (
    <div className="education" id="education">
      <h4>Education</h4>
      {data.education.universities.map((uni, index) => (
        <div className="education-card" key={index}>
          <div className = "univ-header">
            <img src={uni.logo} alt="University Logo" className ="univ-logo"/>
            <h3 className="univ-name">{uni.name}</h3>
          </div>
          {uni.degree && <p className="degree">{uni.degree}</p>}
          {uni.honors && <p className="honors">{uni.honors}</p>}
          {uni.achievements && uni.achievements.map((achieve, idx) => (
            <p key={idx} className="achievement">{achieve}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Education;
