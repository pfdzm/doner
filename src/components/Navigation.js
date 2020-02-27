import React from "react";
import { Link } from "react-router-dom";
import { useDonateContext } from "../utils/GlobalState";

export default function Navigation() {
  const [state, dispatch] = useDonateContext();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-orange-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Dönate</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => {
            dispatch({
              type: "TOGGLE_NAV"
            });
          }}
          className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white"
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
      {state.isVisible && (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
            >
              Home
            </Link>
            <Link
              to="/stats"
              className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
            >
              Stats
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
