import css from "./App.module.css";
import "./AppGlobal.css";
import { Greeting } from "./feature/greeting/Greeting";
import GreetingTilewind from "./feature/greeting-tailwin/GreetingTilewind";
import EventHandler from "./feature/events/EventHandler";
import Card from "./feature/card/Card";

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

      <div className="p-10 m-10">
        <Card
          title="first card"
          bgColor="bg-red-500"
          borderColor="border-red-500"
        >
          <p>children content</p>
        </Card>
        <Card
          title="second card"
          bgColor="bg-green-500"
          borderColor="border-green-500"
        >
          <p>children content</p>
          <p>children content</p>
          <p>children content</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
