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
    </nav>
  );
}
