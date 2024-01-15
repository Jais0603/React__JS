// App.js
import React from 'react';
import './App.css';
import About from './about';

const App = () => {
  const data = {
    appName: 'My React App',
    aboutText: 'This is a simple React application.',
  };

  return (
    <div>
      <h1>{data.appName}</h1>
      <About data={data} />
    </div>
  );
}

export default App;
