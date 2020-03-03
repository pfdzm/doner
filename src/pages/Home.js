import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="container mx-auto w-11/12 lg:px-4 py-5">
      <Carousel />
      <div className="max-w-xl mx-auto">
        <Link to="/donate">
          <Button className="my-4 w-full mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold p-3 text-center rounded inline-flex items-center">
            Dönate
          </Button>
        </Link>{" "}
      </div>
    </div>
  );
}
