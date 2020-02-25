import React from "react";

import { Link } from "react-router-dom";

export default function Button({ linkTo, clickHandler, children, withLogo }) {
  return (
    <>
      {linkTo ? (
        <Link to={linkTo}>
          <button
            onClick={clickHandler}
            className="my-4 mx-auto bg-orange-300 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            {withLogo && (
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
            )}
            <span>{children}</span>
          </button>
        </Link>
      ) : (
        <button
          onClick={clickHandler}
          className="my-4 mx-auto bg-orange-300 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          {withLogo && (
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          )}
          <span>{children}</span>
        </button>
      )}
    </>
  );
}
