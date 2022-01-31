import css from "./App.module.css";
import "./AppGlobal.css";
import { Greeting } from "./feature/greeting/Greeting";
import GreetingTilewind from "./feature/greeting-tailwin/GreetingTilewind";
import EventHandler from "./feature/events/EventHandler";

function App() {
  return (
    <div className={css.bg}>
      <h1>Local scope css</h1>
      <p className="my-font">
        This paragraph has class my-font applied taken from AppGlobal.css
      </p>
      <Greeting />
      <GreetingTilewind
        isValid={false}
        name="Paolo"
        text="Hi"
      ></GreetingTilewind>
      <GreetingTilewind
        isValid={true}
        name="pix"
        text="Hello"
      ></GreetingTilewind>
      <EventHandler />
    </div>
  );
}

export default App;
