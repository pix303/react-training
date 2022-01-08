import { useState } from "react";
export const Counter = () => {
  // set init value of counter
  const [count, setCount] = useState<number>(5);

  // increment by function in order to closure previous value in the loop
  const incrementTenTimes = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount: number): number => {
        return prevCount + 1;
      });
    }
  };

  return (
    <div data-testid="counter">
      <h3 data-testid="counter-feedback">Counter: {count}</h3>
      <button aria-label="increment-button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button aria-label="reset-button" onClick={() => setCount(0)}>
        R
      </button>
      <button aria-label="decrement-button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button
        aria-label="increment-10-times-button"
        onClick={() => incrementTenTimes()}
      >
        +10
      </button>
    </div>
  );
};
