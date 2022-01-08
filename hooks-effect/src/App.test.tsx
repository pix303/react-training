import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

describe("renders learn react link", () => {
  it("should init app", () => {
    act(() => {
      render(<App />);
    });

    const mtComp = screen.getByTestId("mouse-tracker");
    expect(mtComp).toBeInTheDocument();
  });

  it("should remove comp", () => {
    act(() => {
      render(<App />);
    });

    const toggleBtn = screen.getByLabelText("toggle-button");
    let mtComp = screen.getByTestId("mouse-tracker");
    expect(mtComp).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(mtComp).not.toBeInTheDocument();
    fireEvent.click(toggleBtn);
    mtComp = screen.getByTestId("mouse-tracker");
    expect(mtComp).toBeInTheDocument();
  });
});
