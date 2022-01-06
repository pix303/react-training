import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders all component", () => {
  render(<App />);
  const counter = screen.getByTestId("counter");
  expect(counter).toBeInTheDocument();
  const userinfo = screen.getByTestId("user-info");
  expect(userinfo).toBeInTheDocument();
  const todoList = screen.getByTestId("todo-list");
  expect(todoList).toBeInTheDocument();
});
