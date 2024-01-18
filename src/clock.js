import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    const timerId = setTimeout(updateCurrentTime, 1000);
    return () => clearTimeout(timerId);
  }, [currentTime]);
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <h4>The Current Time Is: {formattedTime}</h4>
    </div>
  );
};

export default Clock;