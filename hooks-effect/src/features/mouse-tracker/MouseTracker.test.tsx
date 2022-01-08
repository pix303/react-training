import { fireEvent, render, screen } from "@testing-library/react";
import MouseTracker from "./MouseTracker";

describe("Mouse track", () => {
  it("should init component", () => {
    render(<MouseTracker />);

    const cf = screen.getByTestId("coord-feedback");
    expect(cf.textContent?.replace(/\s/g, " ")).toBe("X: 0 Y: 0");
  });

  it("should handle mouse move", () => {
    render(<MouseTracker />);

    const cf = screen.getByTestId("coord-feedback");

    fireEvent.mouseMove(document, { clientX: 300, clientY: 400 });
    expect(cf.textContent?.replace(/\s/g, " ")).toBe("X: 300 Y: 400");
  });
});
