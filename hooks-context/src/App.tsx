import "./App.css";
import { Header } from "./feature/header/Header";
import UserChanger from "./feature/header/UserChanger";
import { AppContext } from "./AppContext";
import { useEffect, useState, useMemo } from "react";

function App() {
  const [globalData, setglobalData] = useState({
    username: "pix303",
    appName: "App ctx #1",
    setUsername: () => "test",
  });

  const [username, setUsername] = useState("paolo");
  const setableContext = useMemo(() => ({ username, setUsername }), [username]);

  useEffect(() => {
    let c = 0;
    const interval = setInterval(() => {
      c += 10;
      setglobalData({
        username: "pix303 change " + c,
        appName: "App ctx #" + c,
        setUsername: () => "test",
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div className="context-block">
        <AppContext.Provider value={globalData}>
          <Page desc="with external interval that change context" />
        </AppContext.Provider>
      </div>

      <div className="context-block">
        <AppContext.Provider value={setableContext}>
          <Page desc="with useState passed as context prop to set by functon new value on context" />
          <UserChanger />
        </AppContext.Provider>
      </div>

      <div className="context-block">
        <AppContext.Provider
          value={{
            username: "once username",
            appName: "stable app name",
            setUsername: undefined,
          }}
        >
          <Page desc="use once setted context" />
        </AppContext.Provider>
      </div>

      <div className="context-block">
        <Page desc="use default context" />
      </div>
    </div>
  );
}

type Description = {
  desc: string;
};
function Page({ desc }: Description) {
  return (
    <div>
      <Header />
      {desc}
    </div>
  );
}

export default App;
