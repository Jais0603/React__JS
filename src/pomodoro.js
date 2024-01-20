import React, { useEffect, useState } from 'react';

function App() {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [workSecond, setWorkSecond] = useState(25 * 60);
  const [breakSecond, setBreakSecond] = useState(5 * 60);
  const [type, setType] = useState('Work');
  const [resetFlag, setResetFlag] = useState(true);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let timer;
  
    if (flag && type === 'Work' && workSecond > 0) {
      timer = setTimeout(() => setWorkSecond(workSecond - 1), 1000);
    } else if (flag && type === 'Work' && workSecond === 0) {
      alert('Work duration is over');
      setType('Break');
    } else if (flag && type === 'Break' && breakSecond > 0) {
      timer = setTimeout(() => setBreakSecond(breakSecond - 1), 1000);
    } else if (flag && type === 'Break' && breakSecond === 0) {
      alert('Break duration is over');
      setType('Work');
    }
  
    return () => clearTimeout(timer);
  }, [flag, type, workSecond, breakSecond]);
  

  const convertor = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkSecond(workDuration * 60);
    setBreakSecond(breakDuration * 60);
  };

  const handleReset = () => {
    setResetFlag(true);
    setFlag(false);
    setBreakDuration(5);
    setWorkDuration(25);
    setWorkSecond(25 * 60);
    setBreakSecond(5 * 60);
  };

  return (
    <>
      <div>
        <h1>{type === 'Work' ? convertor(workSecond) : convertor(breakSecond)}</h1>
        <h1>{type === 'Work' ? 'Work' : 'Break'}-Time</h1>
      </div>
      <div>
        <button onClick={() => { setFlag(true); setResetFlag(false); }} disabled={!resetFlag}>
          Start
        </button>
        <button onClick={() => { setFlag(false); setResetFlag(false); }} disabled={!flag}>
          Stop
        </button>
        <button onClick={handleReset} disabled={resetFlag}>
          Reset
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={workDuration}
            onChange={(e) => setWorkDuration(e.target.value)}
          />
          <input
            type="number"
            value={breakDuration}
            onChange={(e) => setBreakDuration(e.target.value)}
          />
          <input type="submit" value="Set" />
        </form>
      </div>
    </>
  );
}

export default App;