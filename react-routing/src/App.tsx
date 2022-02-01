import "./App.css";
import NavBar from "./shared/NavBar";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <NavBar />
        <Suspense fallback={<div>Loading....</div>}>
          <Router />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
