import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("renders learn react link", () => {
  it("should init app", () => {
    render(<App />);

    const mtComp = screen.getByTestId("mouse-tracker");
    expect(mtComp).toBeInTheDocument();
  });

  it("should remove comp", () => {
    render(<App />);

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
