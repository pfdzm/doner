import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="container mx-auto w-11/12 lg:px-4 py-5">
      <Carousel />

      <Link to="/stats">
        <Button className="lg:hidden w-full mx-auto bg-yellow-400 hover:bg-yellow-700 text-gray-700 font-bold p-3 text-center rounded inline-flex items-center">
          <span role="img" aria-label="bar chart">
            📊 &nbsp;
          </span>
          Stats
        </Button>
      </Link>
    </div>
  );
}
