import React from "react";

import Button from "../components/Button";

import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="container mx-auto w-11/12 lg:px-4 py-5">
      <Carousel />
      <div className="max-w-xl mx-auto">
        <Button
          className="my-4 mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
          linkTo="donate"
        >
          Dönate
        </Button>
      </div>
    </div>
  );
}
