import React from "react";
import StatsButton from "../components/StatsButton";

const Success = () => (
  <div className="w-11/12 mx-auto">
    <div className="p-5 max-w-xl mx-auto rounded border shadow bg-gray-200 my-5 text-xl text-gray-700">
      <h1 className="py-5 font-display text-2xl">Thank you!</h1>
      <p className="leading-7">Your donation will be put to good use!</p>
    </div>
    <StatsButton />
  </div>
);

export default Success;
