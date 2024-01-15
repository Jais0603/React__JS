// About.js
import React from 'react';
import Contact from './contact';

const About = ({ data }) => {
  return (
    <div>
      <h2>About</h2>
      <p>{data.aboutText}</p>
      <Contact data={data} />
    </div>
  );
};

export default About;
