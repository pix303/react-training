import "./App.css";
import { Counter } from "./features/counter/Counter";
import { CounterPrevHandler } from "./features/counter/CounterPrevHandler";
import { User, UserInfo } from "./features/userinfo/UserInfo";
import { TodoList } from "./features/todos/TodoList";

function App() {
  const u: User = { name: "Giacomo", surname: "Carraro", age: 1 };
  return (
    <div className="App">
      <Counter />
      <CounterPrevHandler />
      <UserInfo {...u}></UserInfo>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
