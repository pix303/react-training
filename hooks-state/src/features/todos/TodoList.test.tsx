import { render, fireEvent, screen, act } from "@testing-library/react";
import { TodoList } from "./TodoList";

describe("TodoList test", () => {
  it("should init component", () => {
    act(() => {
      render(<TodoList />);
    });

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });

  it("should add item", () => {
    act(() => {
      render(<TodoList />);
    });

    fireEvent.change(screen.getByTestId("todo-list-input"), {
      target: { value: "testing" },
    });
    const addBtn = screen.getByLabelText("add-button");
    fireEvent.click(addBtn);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(1);
    expect(listItems[0].textContent).toBe("testing");
  });

  it("should add 10 item", () => {
    act(() => {
      render(<TodoList />);
    });

    const addBtn = screen.getByLabelText("add-batch-button");
    fireEvent.click(addBtn);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(10);
  });
});
