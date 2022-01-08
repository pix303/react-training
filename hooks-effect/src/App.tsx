import React from "react";
import { useState } from "react";
import SecondsCounter from "./features/counter/SecondsCounter";
import MouseTracker from "./features/mouse-tracker/MouseTracker";

function App() {
  const [displayComp, setDisplayComp] = useState<boolean>(true);
  const toggle = () => {
    setDisplayComp(!displayComp);
  };

  return (
    <div className="App">
      <header>
        <h1>useEffect</h1>
        <button aria-label="toggle-button" onClick={toggle}>
          Toggle Mouse tracker
        </button>
      </header>
      {displayComp && <MouseTracker />}
      <SecondsCounter />
    </div>
  );
}

export default App;
