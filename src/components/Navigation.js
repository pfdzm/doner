import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <nav className="flex items-baseline justify-between flex-wrap bg-yellow-400 p-6 lg:max-w-xl lg:mx-auto lg:rounded lg:shadow">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/">
          <h2 className="font-semibold text-5xl text-gray-700 tracking-tight">
            Dönate
          </h2>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => {
            setIsNavVisible(!isNavVisible);
          }}
          className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-gray-800 hover:border-gray-800"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {isNavVisible && (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right">
          <div className="text-xl lg:flex-grow">
            <Link
              to="/stats"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
            >
              Stats
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
