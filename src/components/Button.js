import React from "react";

export default function Button(props) {
  return (
    <button onClick={props.clickHandler} {...props}>
      <span className="w-full h-full text-lg text-center">
        {props.children}
      </span>
    </button>
  );
}
