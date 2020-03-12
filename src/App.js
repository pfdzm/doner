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
                  <Route
                    exact
                    path="/logo"
                    render={() => (
                      <div className="my-12 w-56 h-56 mx-auto bg-yellow-400 flex flex-col justify-center items-center">
                        <img src="/img/doner-logo-grayscale.png" alt="logo" />
                        <h1 className="text-gray-700 text-5xl font-black">
                          Dönate
                        </h1>
                      </div>
                    )}
                  />
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
