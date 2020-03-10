import React, { useState, useEffect } from "react";
import { useDonateContext } from "../utils/GlobalState";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
const buttonStyles =
  "bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-black rounded";

export default function Donate() {
  // eslint-disable-next-line
  const [store, dispatch] = useDonateContext();

  const current = store.charities[store.currentCharity];

  const [state, setState] = useState({
    username: "",
    message: "",
    location: false,
    donationAmount: 3.5,
    paymentType: "subscription"
  });

  // this side-effect loads Stripe.js so we can use it to handle the form submission
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    // When the customer clicks on the button, redirect
    // them to Checkout.
    var stripe = window.Stripe("pk_test_qmV1HYqnEl0dhrkeg30Tee4N00NGRQWNFx");

    const item =
      state.paymentType === "subscription"
        ? [{ plan: "plan_GrWvX1uzhkUwnC", quantity: 1 }]
        : [{ sku: "sku_GrTIRSh2XdyvO2", quantity: 1 }];

    stripe
      .redirectToCheckout({
        items: item,

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
          <label className="block text-gray-700 font-black mb-2">
            To
          </label>
          {current ? (
            <h1 className="block text-gray-700 font-black mb-2 text-xl text-center bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight">
              {current.name}
            </h1>
          ) : (
            <Link to="/">
              <Button className={buttonStyles + " p-3 w-full mb-2 "}>
                Choose a charity
              </Button>
            </Link>
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
            htmlFor="username"
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
