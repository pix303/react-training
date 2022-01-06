import { useRef, useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("test");

  const addTodo = () => {
    setTodos([...todos, { title: title, complete: false }]);
  };

  const addTodoBatch = () => {
    setTodos((prevTodos) => {
      const result: Todo[] = [...prevTodos];

      for (let i = 0; i < 10; i++) {
        result.push({
          title: title + " " + (i + 1),
          complete: false,
        });
      }
      return result;
    });
  };

  return (
    <div data-testid="todo-list">
      <input
        data-testid="todo-list-input"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button aria-label="add-button" onClick={addTodo}>
        Add todo
      </button>
      <button aria-label="add-batch-button" onClick={addTodoBatch}>
        Add counted todo
      </button>
      <ul data-testid="todo-item-list">
        {todos.map((todo, i) => (
          <li key={i}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

type Todo = {
  title?: string;
  complete?: boolean;
};
