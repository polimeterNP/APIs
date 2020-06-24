import React from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Text">
          <pre>
            Everyone has a purpose in life, perhaps yours is making
            PolimeterNP.org live.
          </pre>
          -Unknown.
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
