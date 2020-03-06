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
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment("{CLIENT_SECRET}", {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen"
        }
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
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
          className={buttonStyles + " text-center text-xl mb-3 p-3"}
        />
      </form>
    </div>
  );
}
