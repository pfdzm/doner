import React, { useState } from "react";
import Button from "../components/Button";

const buttonStyles =
  "bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold rounded";

export default function Donate() {
  const [state, setState] = useState({
    username: "",
    message: "",
    shareLocation: false,
    donationAmount: 3.5
  });

  const handleClick = event => {
    event.preventDefault();
    setState({
      ...state,
      shareLocation: !state.shareLocation
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleInput = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="container w-11/12 lg:max-w-xl mx-auto lg:px-4 py-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 py-5 mb-4 flex flex-col"
      >
        <div className="flex-col justify-start mb-3">
          <label
            className="block text-gray-700 font-bold mb-3 pr-4 pt-3 text-lg"
            htmlFor="username"
          >
            What can we call you?
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
            type="text"
            id="username"
            name="username"
            value={state.username}
            onChange={handleInput}
          />
          <label
            className="block text-gray-700 font-bold mb-3 pr-4 pt-3 text-lg"
            htmlFor="username"
          >
            Do you want to leave a message?
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
            type="textarea"
            id="message"
            name="message"
            value={state.message}
            onChange={handleInput}
          />
        </div>
        <div className="flex justify-center">
          <Button
            clickHandler={handleClick}
            className={buttonStyles + " mb-3 py-3 px-3"}
          >
            <span role="img" aria-label="globe-emoji" className="w-full">
              🌍 Share location
            </span>
          </Button>
        </div>
        <div
          id="donationBox"
          className="font-black text-gray-700 rounded mb-3 flex items-center justify-center"
        >
          <button
            className={buttonStyles + " font-black text-lg py-3 px-3 mr-5"}
            onClick={handleClick}
          >
            -
          </button>
          <span className="bg-yellow-400 p-5 rounded border-2 border-yellow-400 text-lg donationAmount">
            {state.donationAmount.toFixed(2)}&nbsp;€
          </span>
          <button
            className={buttonStyles + " font-black text-lg py-3 px-3 ml-5"}
            onClick={handleClick}
          >
            +
          </button>
        </div>
        <Button
          type="submit"
          clickHandler={handleClick}
          className={buttonStyles + " py-2 px-4"}
        >
          Dönate
        </Button>
      </form>
    </div>
  );
}
