import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const LinkButton = props => (
  <Link to={props.to} className="block w-full mb-4">
    <Button
      className={
        "w-full mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-black p-3 text-center rounded inline-flex items-center " +
        props.buttonExtraClassNames
      }
    >
      {props.children}
    </Button>
  </Link>
);

export default LinkButton;
