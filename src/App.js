import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/App.css";
import { DonateProvider } from "./utils/GlobalState";

const Donate = lazy(() => import("./pages/Donate"));
const Home = lazy(() => import("./pages/Home"));
const Stats = lazy(() => import("./pages/Stats"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Success = lazy(() => import("./pages/Success"));
const Canceled = lazy(() => import("./pages/Canceled"));
const Navigation = lazy(() => import("./components/Navigation"));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route
          render={({ location }) => (
            <DonateProvider>
              <Navigation />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                >
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
      </Suspense>
    </Router>
  );
}

export default App;
