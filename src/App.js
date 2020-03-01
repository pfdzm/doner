import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DonateProvider } from "./utils/GlobalState";

import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <div className="bg-gray-700 min-h-screen">
      <Router>
        <DonateProvider>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/stats" component={Stats}></Route>
            <Route exact path="/donate" component={Donate}></Route>
          </Switch>
        </DonateProvider>
      </Router>
    </div>
  );
}

export default App;
