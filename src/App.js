import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { DonateProvider } from "./utils/GlobalState";

import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

import Navigation from "./components/Navigation";

import "./styles/App.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_qmV1HYqnEl0dhrkeg30Tee4N00NGRQWNFx");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
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
                    <Route render={() => <NotFound />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </DonateProvider>
          )}
        />
      </Router>
    </Elements>
  );
}

export default App;
