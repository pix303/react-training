import { useState } from "react";

export const Counter = () => {
  // set init value of counter
  const [count, setCount] = useState<number>(5);

  // increment by function in order to closure previous value and preserve for rendering
  const incrementTenTimes = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>R</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => incrementTenTimes()}>+10</button>
    </div>
  );
};
