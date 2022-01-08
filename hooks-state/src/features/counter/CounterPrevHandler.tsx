import { useState } from "react";
export const CounterPrevHandler = () => {
  // set init value of counter by function
  const [count, setCount] = useState<number>(() => {
    return 5;
  });

  // increment by function in order to closure previous value in the loop
  const increment = (times: number) => {
    for (let i = 0; i < times; i++) {
      setCount((prevCount: number): number => {
        return prevCount + 1;
      });
    }
  };

  return (
    <div data-testid="counter-prev">
      <h3 data-testid="counter-prev-feedback">Current counter: {count}</h3>
      <button
        aria-label="counter-prev-increment-button"
        onClick={() => increment(1)}
      >
        + increment
      </button>
      <button
        aria-label="counter-prev-reset-button"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      <button
        aria-label="counter-prev-increment-10-times-button"
        onClick={() => increment(10)}
      >
        +10 increment
      </button>
    </div>
  );
};
