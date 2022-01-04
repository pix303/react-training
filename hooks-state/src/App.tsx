import "./App.css";
import { Counter } from "./features/counter/Counter";
import { UserInfo } from "./features/userinfo/UserInfo";

function App() {
  return (
    <div className="App">
      <Counter />
      <UserInfo></UserInfo>
    </div>
  );
}

export default App;
