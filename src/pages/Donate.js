import { loadStripe } from "@stripe/stripe-js/pure";
import React, { useState } from "react";
import Layout from "../components/Layout";
import LinkButton from "../components/LinkButton";
import { useDonateContext } from "../utils/GlobalState";
const stripePromise = loadStripe("pk_test_qmV1HYqnEl0dhrkeg30Tee4N00NGRQWNFx");

const buttonStyles =
  "bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-black rounded";

// const { loadStripe } = import("@stripe/stripe-js");
export default function Donate() {
  // eslint-disable-next-line
  const [store, dispatch] = useDonateContext();

  const current = store.charities[store.currentCharity];

  const [state, setState] = useState({
    username: "",
    message: "",
    location: false,
    donationAmount: 3.5,
    paymentType: "subscription",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // When the customer clicks on the button, redirect
    // them to Checkout.

    const item =
      state.paymentType === "subscription"
        ? [{ price: "plan_GrWvX1uzhkUwnC", quantity: 1 }]
        : [{ sku: "sku_GrTIRSh2XdyvO2", quantity: 1 }];

    // Stripe Checkout
    const stripe = await stripePromise;
    const response = await fetch(
      "https://apps.pfdzm.me/api/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode:
            state.paymentType === "subscription" ? "subscription" : "payment",
          item: item,
        }),
      }
    );
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  const handleInput = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="px-4 py-5 flex flex-col justify-start"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-black mb-2">
            Donating
          </label>
          <div className="p-3 text-gray-700 rounded text-xl donationAmount text-center block text-gray-700 font-black mb-2 text-xl text-center bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight">
            {state.donationAmount.toFixed(2)}&nbsp;€
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-black mb-2">To</label>
          {current ? (
            <h1 className="block text-gray-700 font-black mb-2 text-xl text-center bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight">
              {current.name}
            </h1>
          ) : (
            <LinkButton to="/">Choose a charity</LinkButton>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-black mb-2"
            htmlFor="username"
          >
            What's your name?
          </label>
          <input
            className="mb-2 focus:shadow bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
            type="text"
            id="username"
            name="username"
            placeholder="Anonymous"
            value={state.username}
            onChange={handleInput}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-black mb-2"
            htmlFor="message"
          >
            Do you want to leave a message?
          </label>
          <textarea
            className="focus:shadow resize-none mb-2 bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
            type="textarea"
            id="message"
            name="message"
            placeholder="Today me, tomorrow you."
            value={state.message}
            onChange={handleInput}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <input
              type="radio"
              id="subscription"
              name="paymentType"
              value="subscription"
              onChange={handleInput}
              checked={state.paymentType === "subscription"}
            />
            <label
              className="ml-3 form-label text-gray-700"
              htmlFor="subscription"
            >
              Monthly subscription
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="one-time"
              name="paymentType"
              value="one-time"
              onChange={handleInput}
              checked={state.paymentType === "one-time"}
            />
            <label className="ml-3 form-label text-gray-700" htmlFor="one-time">
              One-time payment
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          className={buttonStyles + " text-center text-lg p-3"}
        />
      </form>
    </Layout>
  );
}
