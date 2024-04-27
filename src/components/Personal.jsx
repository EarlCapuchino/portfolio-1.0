import React from 'react';
import data from '../data/credentials.json';

const Personal = () => {
  const { personal_info } = data;
  return (
    <div className="personal">
      <h1>{personal_info.name}</h1>
      <h4 className = "role">{personal_info.role}</h4>
    </div>
  );
};

export default Personal;
