// Blog.js
import React from 'react';

const Blog = ({ data }) => {
  return (
    <div>
      <h2>Blog</h2>
      
      <p>App Name: {data.appName}</p>
      
    </div>
  );
};

export default Blog;
