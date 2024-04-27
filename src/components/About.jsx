import React from 'react';
import data from '../data/credentials.json';

const About = () => {
  return (
    <div className="about">
      <p>{data.about}</p>
    </div>
  );
};

export default About;
