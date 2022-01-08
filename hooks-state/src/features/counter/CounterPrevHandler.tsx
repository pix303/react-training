import { useState } from "react";
export const CounterPrevHandler = () => {
  // set init value of counter by
  const [count, setCount] = useState<number>(() => {
    console.log("init state");
    return 5;
  });

  // increment by function in order to closure previous value in the loop
  const increment = (times: number) => {
    for (let i = 0; i < times; i++) {
      setCount((prevCount: number): number => {
        console.log("incrementTenTimes calc", prevCount);
        return prevCount + 1;
      });
    }
  };

  return (
    <div data-testid="counter">
      <h3 data-testid="counter-feedback">Counter functional: {count}</h3>
      <button aria-label="increment-button" onClick={() => increment(1)}>
        + increment
      </button>
      <button aria-label="reset-button" onClick={() => setCount(0)}>
        Reset
      </button>
      <button
        aria-label="increment-10-times-button"
        onClick={() => increment(10)}
      >
        +10 increment
      </button>
    </div>
  );
};
