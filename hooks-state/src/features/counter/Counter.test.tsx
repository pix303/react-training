import { fireEvent, render, screen } from "@testing-library/react";
import { defaultMaxListeners } from "events";
import { act } from "react-dom/test-utils";
import { Counter } from "./Counter";

describe("Counter test", () => {
  it("should render and init Counter", () => {
    act(() => {
      render(<Counter />);
    });
    const counterFeedback = screen.getByTestId("counter-feedback");
    expect(counterFeedback).toBeInTheDocument();
    expect(counterFeedback.textContent).toBe("Counter: 5");
  });

  it("should increment value", () => {
    act(() => {
      render(<Counter />);
      const btn = screen.getByRole("button", {
        name: "increment-button",
      });

      fireEvent(
        btn,
        new MouseEvent("click", { bubbles: true, cancelable: true })
      );
    });

    const counterFeedback = screen.getByRole("heading");
    expect(counterFeedback.textContent).toBe("Counter: 6");
  });

  it("should decrement value", () => {
    act(() => {
      render(<Counter />);
      const btn = screen.getByRole("button", {
        name: "decrement-button",
      });

      fireEvent(
        btn,
        new MouseEvent("click", { bubbles: true, cancelable: true })
      );
    });

    const counterFeedback = screen.getByRole("heading");
    expect(counterFeedback.textContent).toBe("Counter: 4");
  });

  it("should reset value", () => {
    act(() => {
      render(<Counter />);
      const btn = screen.getByRole("button", {
        name: "reset-button",
      });

      fireEvent(
        btn,
        new MouseEvent("click", { bubbles: true, cancelable: true })
      );
    });

    const counterFeedback = screen.getByRole("heading");
    expect(counterFeedback.textContent).toBe("Counter: 0");
  });

  it("should increment 10 times value", () => {
    act(() => {
      render(<Counter />);
      const btn = screen.getByRole("button", {
        name: "increment-10-times-button",
      });

      fireEvent(
        btn,
        new MouseEvent("click", { bubbles: true, cancelable: true })
      );
    });

    const counterFeedback = screen.getByRole("heading");
    expect(counterFeedback.textContent).toBe("Counter: 15");
  });
});
