import React, { useState } from "react";
import { useDonateContext } from "../utils/GlobalState";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import {
  useStripe,
  useElements,
  CardElement,
  loadStripe
} from "@stripe/react-stripe-js";

import CardSection from "../components/CardSection";

const SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";

const buttonStyles =
  "bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold rounded";

export default function Donate() {
  const [store, dispatch] = useDonateContext();

  const current = store.charities[store.currentCharity];

  const [state, setState] = useState({
    username: "",
    message: "",
    location: false,
    donationAmount: 3.5
  });

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    // When the customer clicks on the button, redirect
    // them to Checkout.
    var stripe = window.Stripe("pk_test_qmV1HYqnEl0dhrkeg30Tee4N00NGRQWNFx");

    stripe
      .redirectToCheckout({
        items: [{ sku: "sku_GrTIRSh2XdyvO2", quantity: 1 }],

        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: "https://doner.now.sh/success",
        cancelUrl: "https://doner.now.sh/canceled"
      })
      .then(function(result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  };

  const handleInput = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div className="container mx-auto w-11/12 lg:px-4 py-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 py-5 flex flex-col justify-start max-w-xl mx-auto"
      >
        <div className="block text-gray-700 font-bold mb-3 pt-3 text-lg">
          Donating
        </div>
        <div className="p-3 text-gray-700 rounded text-3xl donationAmount text-center block text-gray-700 font-bold mb-3 pt-3 text-3xl text-center bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight">
          {state.donationAmount.toFixed(2)}&nbsp;€
        </div>
        <div className="block text-gray-700 font-bold mb-3 pt-3 text-lg">
          To
        </div>
        {current ? (
          <h1 className="block text-gray-700 font-bold mb-3 pt-3 text-3xl text-center bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight">
            {current.name}
          </h1>
        ) : (
          <Link to="/">
            <Button className={buttonStyles + " p-3 w-full mb-3 pt-3"}>
              Choose a charity
            </Button>
          </Link>
        )}
        <label
          className="block text-gray-700 font-bold mb-3 pt-3 text-lg"
          htmlFor="username"
        >
          What's your name?
        </label>
        <input
          className="mb-3 pt-3 focus:shadow bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
          type="text"
          id="username"
          name="username"
          placeholder="Anonymous"
          value={state.username}
          onChange={handleInput}
        />
        <label
          className="block text-gray-700 font-bold mb-3 pt-3 text-lg"
          htmlFor="username"
        >
          Do you want to leave a message?
        </label>
        <textarea
          className="focus:shadow resize-none mb-3 pt-3 bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
          type="textarea"
          id="message"
          name="message"
          placeholder="Today me, tomorrow you."
          value={state.message}
          onChange={handleInput}
        />
        {/* <label className="text-gray-500 font-bold mb-3 pt-3">
          <input
            name="location"
            type="checkbox"
            checked={state.location}
            onChange={handleInput}
            className="mr-2 form-checkbox"
          />
          <span className="text-sm">Share your location!</span>
        </label> */}
        <CardSection />
        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          className={buttonStyles + " text-center text-xl mb-3 p-3"}
        />
      </form>
    </div>
  );
}
