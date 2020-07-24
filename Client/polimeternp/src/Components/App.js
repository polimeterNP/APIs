import React from "react";
import "../App.css";
import Navbar from "./Layout/Navbar";
import { Route, Switch } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Layout/Home";
import Profile from "./Layout/Profile";
import Footer from "./Layout/Footer"



function App() {
  return (<div className="App">
    <header>      
    <Header />
    <Navbar />
  </header>
    <body>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </body>
    <footer> <Footer/></footer>      
    </div>
  );
}

export default App;
