import React from "react";

const Success = () => {
  return (
    <div className="p-5 w-11/12 max-w-xl mx-auto rounded border shadow bg-gray-200 my-5 text-xl text-gray-700">
      <h1 className="py-5 font-display text-2xl">Oops!</h1>
      <p className="leading-7">
        Your payment didn't go through, please try again...
      </p>
    </div>
  );
};

export default Success;
