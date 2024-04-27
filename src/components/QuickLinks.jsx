import React from 'react';
import data from '../data/credentials.json';

const QuickLinks = () => {
  return (
    <div className="quickLinks" id="quickLinks">
      <h2>Quick Links</h2>
      {Object.entries(data.quick_links).map(([key, value], index) => (
        <div key={index}>
          <a href={value} target="_blank" rel="noopener noreferrer">{key}</a>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
