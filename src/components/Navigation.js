import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex items-baseline justify-between flex-wrap bg-yellow-400 p-6 lg:max-w-xl lg:mx-auto lg:rounded lg:shadow">
      <div className="flex items-center flex-shrink-0">
        <Link to="/">
          <h2 className="font-semibold text-5xl font-black text-gray-700 tracking-tight">
            Dönate
          </h2>
        </Link>
      </div>
      <div className="w-full block flex-grow hidden lg:flex lg:items-center lg:w-auto ">
        <div className="lg:flex-grow lg:text-right">
          <Link
            to="/stats"
            className="block lg:inline-block text-gray-700 text-2xl font-black"
          >
            Stats
          </Link>
        </div>
      </div>
    </nav>
  );
}
