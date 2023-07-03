import { useEffect, useState } from 'react';
import formatDuration from './utils/formatDuration';

function App() {
  const eventOn = 1791590400000;
  const [eventIn, setEventIn] = useState((eventOn - Date.now()) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventIn((eventOn - Date.now()) / 1000);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h1>{formatDuration(eventIn)}</h1>;
}

export default App;
