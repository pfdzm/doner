import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex items-baseline justify-between flex-wrap bg-yellow-400 p-6 lg:max-w-xl lg:mx-auto lg:rounded lg:shadow">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/">
          <h2 className="font-semibold text-5xl text-gray-700 tracking-tight">
            Dönate
          </h2>
        </Link>
      </div>
      <div className="w-full block flex-grow hidden lg:flex lg:items-center lg:w-auto ">
        <div className="text-xl lg:flex-grow lg:text-right">
          <Link
            to="/stats"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
          >
            Stats
          </Link>
        </div>
      </div>
    </nav>
  );
}
