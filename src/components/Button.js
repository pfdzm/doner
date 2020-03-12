import React from "react";

export default function Button(props) {
  return (
    <button
      className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-black rounded text-center text-lg p-3 w-full h-full"
      onClick={props.clickHandler}
      {...props}
    >
      <span className="w-full h-full text-lg text-center">
        {props.children}
      </span>
    </button>
  );
}
