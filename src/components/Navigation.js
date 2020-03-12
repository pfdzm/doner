import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="bg-yellow-400">
      <nav className="max-w-xl w-11/12 mx-auto flex items-baseline justify-between flex-wrap bg-yellow-400">
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="/img/doner-logo-grayscale-xs.png"
            alt="donate logo"
            className="h-12 mr-2"
          />
          <h1 className="py-5 font-semibold text-5xl font-black text-gray-700 tracking-tight">
            Dönate
          </h1>
        </Link>
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
    </div>
  );
}
