import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { DonateProvider } from "./utils/GlobalState";

import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Canceled from "./pages/Canceled";

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
                  <Route exact path="/success" component={Success}></Route>
                  <Route exact path="/canceled" component={Canceled}></Route>
                  <Route render={() => <NotFound />} />
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
