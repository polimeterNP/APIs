import React from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./Components/Layout/Home";
import Profile from "./Components/Layout/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
