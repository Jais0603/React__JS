import React, { useState } from 'react';

const ColorChangePage = () => {
  const [bgColor, setBgColor] = useState('white');

  const handleButtonClick = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Background Color Changer</h1>
      <div>
        <button onClick={() => handleButtonClick('red')} style={{ backgroundColor: 'red', color: 'white', marginRight: '5px' }}>Red</button>
        <button onClick={() => handleButtonClick('pink')} style={{ backgroundColor: 'pink', color: 'white', marginRight: '5px' }}>Pink</button>
        <button onClick={() => handleButtonClick('orange')} style={{ backgroundColor: 'orange', color: 'white', marginRight: '5px' }}>Orange</button>
        <button onClick={() => handleButtonClick('purple')} style={{ backgroundColor: 'purple', color: 'white', marginRight: '5px' }}>Purple</button>
        <button onClick={() => handleButtonClick('green')} style={{ backgroundColor: 'green', color: 'white', marginRight: '5px' }}>Green</button>
      </div>
    </div>
  );
};

export default ColorChangePage;
