import "./App.css";
import { Counter } from "./features/counter/Counter";
import { UserInfo } from "./features/userinfo/UserInfo";
import { TodoList } from "./features/todos/TodoList";

function App() {
  return (
    <div className="App">
      <Counter />
      <UserInfo></UserInfo>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
