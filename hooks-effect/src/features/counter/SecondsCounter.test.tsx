import { screen, render, act } from "@testing-library/react";
import SecondsCounter from "./SecondsCounter";

jest.useFakeTimers();

describe("Second counter test", () => {
  it("should init comp", () => {
    render(<SecondsCounter />);

    const secCounter = screen.getByTestId("seconds-counter");
    expect(secCounter.textContent).toBe("0");
  });

  it("should increment counter after a sec", () => {
    act(() => {
      render(<SecondsCounter />);

      const secCounter = screen.getByTestId("seconds-counter");
      expect(secCounter.textContent).toBe("0");
      jest.advanceTimersByTime(1001);

      expect(secCounter.textContent).toBe("1");
    });
  });
});
