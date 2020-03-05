import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { DonateProvider } from "./utils/GlobalState";

import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

import Navigation from "./components/Navigation";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <DonateProvider>
            <Navigation />
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/stats" component={Stats}></Route>
                  <Route exact path="/donate" component={Donate}></Route>
                  <Route
                    render={() => (
                      <div className="p-5 w-11/12 mx-auto rounded border shadow bg-gray-200 mt-3 text-xl text-gray-700">
                        Oops ... Not Found
                      </div>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </DonateProvider>
        )}
      />
    </Router>
  );
}

export default App;
