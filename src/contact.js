// Contact.js
import React from 'react';
import Blog from './blog';

const Contact = ({ data }) => {
  return (
    <div>
      <h2>Contact</h2>
      
      <p>App Name: {data.appName}</p>
      <Blog data={data} />
    </div>
  );
};

export default Contact;
