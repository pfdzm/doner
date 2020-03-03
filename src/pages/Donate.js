import React, { useState } from "react";
import { useDonateContext } from "../utils/GlobalState";
import Button from "../components/Button";
import { Link } from "react-router-dom";

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

  const handleSubmit = event => {
    event.preventDefault();
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
        <div className="p-3 text-gray-700 rounded text-3xl donationAmount text-center block text-gray-700 font-bold mb-3 pt-3 text-3xl text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight">
          {state.donationAmount.toFixed(2)}&nbsp;€
        </div>
        <div className="block text-gray-700 font-bold mb-3 pt-3 text-lg">
          To
        </div>
        {current ? (
          <h1 className="block text-gray-700 font-bold mb-3 pt-3 text-3xl text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight">
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
          What can we call you?
        </label>
        <input
          className="mb-3 pt-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
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
          className="resize-none mb-3 pt-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
          type="textarea"
          id="message"
          name="message"
          placeholder="Today me, tomorrow you."
          value={state.message}
          onChange={handleInput}
        />
        <label className="text-gray-500 font-bold mb-3 pt-3">
          <input
            name="location"
            type="checkbox"
            checked={state.location}
            onChange={handleInput}
            className="mr-2 form-checkbox"
          />
          <span className="text-sm">Share your location!</span>
        </label>
        <input
          type="submit"
          value="Submit"
          className={buttonStyles + " text-center text-xl mb-3 p-3"}
        />
      </form>
    </div>
  );
}
