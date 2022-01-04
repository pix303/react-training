import { useRef, useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const titleInput = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    setTodos([...todos, { title: titleInput.current?.value, complete: false }]);
  };

  const addTodoBatch = () => {
    setTodos((prevTodos) => {
      const result: Todo[] = [...prevTodos];

      for (let i = 0; i < 10; i++) {
        result.push({
          title: titleInput.current?.value + " " + (i + 1),
          complete: false,
        });
      }
      return result;
    });
  };

  return (
    <div>
      <input type="text" ref={titleInput} />
      <button onClick={addTodo}>Add todo</button>
      <button onClick={addTodoBatch}>Add counted todo</button>
      <ul>
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
