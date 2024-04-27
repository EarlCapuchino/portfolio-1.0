import React from 'react';
import data from '../data/credentials.json';

const Contacts = () => {
  const { personal_info } = data;
  return (
    <div className="contacts" id="contacts">
      <h4>contact me</h4>
      <p className="subtext">{personal_info.location}</p>
      <p className="subtext">{personal_info.contact.email}</p>
      <p className="subtext">{personal_info.contact.phone}</p>
    </div>
  );
};

export default Contacts;
