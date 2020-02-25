import React from "react";

import Navigation from "./components/Navigation";

import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/stats" component={Stats}></Route>
        <Route exact path="/donate" component={Donate}></Route>
      </Switch>
    </Router>
  );
}

export default App;
