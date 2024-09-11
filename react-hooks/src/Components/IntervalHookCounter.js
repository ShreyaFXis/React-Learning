import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1); // Use an updater function to avoid stale state
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // Remove count from the dependency array

  return (
    <div>
      {count}
    </div>
  );
}

export default IntervalHookCounter;