import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { CounterPrevHandler } from "./CounterPrevHandler";

describe("Counter with use state implemented by function", () => {
  it("should init component", () => {
    act(() => {
      render(<CounterPrevHandler />);
    });

    const counterFeedback = screen.getByTestId("counter-prev-feedback");
    expect(counterFeedback.textContent).toBe("Current counter: 5");
  });

  it("should increment 1 time", () => {
    act(() => {
      render(<CounterPrevHandler />);
    });

    const counterFeedback = screen.getByTestId("counter-prev-feedback");
    const incrementBtn = screen.getByLabelText("counter-prev-increment-button");
    fireEvent.click(incrementBtn);

    expect(counterFeedback.textContent).toBe("Current counter: 6");
  });

  it("should increment 10 time", () => {
    act(() => {
      render(<CounterPrevHandler />);
    });

    const counterFeedback = screen.getByTestId("counter-prev-feedback");
    const incrementBtn = screen.getByLabelText(
      "counter-prev-increment-10-times-button"
    );
    fireEvent.click(incrementBtn);

    expect(counterFeedback.textContent).toBe("Current counter: 15");
  });

  it("should reset", () => {
    act(() => {
      render(<CounterPrevHandler />);
    });

    const counterFeedback = screen.getByTestId("counter-prev-feedback");
    const incrementBtn = screen.getByLabelText("counter-prev-reset-button");
    fireEvent.click(incrementBtn);

    expect(counterFeedback.textContent).toBe("Current counter: 0");
  });
});
