import React, { useState, useRef } from "react";
import Button from "../components/Button";

export default function Donate(props) {
  const [state, setState] = useState({});

  const donationAmountRef = useRef();

  const handleClick = event => {
    event.preventDefault();
  };

  const handleInput = event => {
    event.preventDefault();
    setState({
      ...state,
      username: event.target.value
    });
  };

  return (
    <div className="container max-w-md mx-auto lg:px-4 py-5">
      <form className="bg-white shadow-md rounded px-8 mb-4">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="username"
        >
          What can we call you?
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          id="username"
          name="username"
          value={state.username}
          onChange={handleInput}
        />
        <Button clickHandler={handleClick}>
          <span role="img" aria-label="globe-emoji" className="w-full">
            🌍 Share location
          </span>
        </Button>
        <div
          id="donationBox"
          className="block font-mono font-black text-gray-700 text-5xl border-orange-500 rounded w-full py-2"
        >
          <Button clickHandler={handleClick}>-</Button>
          <span className="donationAmount mx-10" ref={donationAmountRef}>
            3,50
          </span>
          <Button clickHandler={handleClick}>+</Button>
        </div>
        <Button type="submit" clickHandler={handleClick}>
          Donate
        </Button>
      </form>
    </div>
  );
}
