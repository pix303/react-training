import React, { useState, useEffect } from "react";

function SecondsCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(increment, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div data-testid="seconds-counter">
      <h1>{count}</h1>
    </div>
  );
}

export default SecondsCounter;
