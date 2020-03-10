import React from "react";

import Progress from "./Progress";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Card({
  charity = {
    img: {
      src: "",
      alt: ""
    },
    name: "",
    description: "",
    progress: ""
  }
}) {
  return (
    <div>
      <img
        className="w-full mb-2"
        src={charity.img.src}
        alt={charity.img.alt}
      />
      <div className="px-4 py-5">
        <h4 className="font-black text-gray-700 text-2xl mb-2">
          {charity.name}
        </h4>
        <p className="text-gray-700 leading-normal mb-4">
          {charity.description}
        </p>
        <Progress
          styles="leading-normal mb-4"
          progress={charity.progress}
        ></Progress>
        <Link to="/donate">
          <Button className="w-full mb-4 lg:mb-0 mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-black p-3 text-center rounded inline-flex items-center">
            Dönate
          </Button>
        </Link>
        <Link to="/stats">
          <Button className="lg:hidden w-full mx-auto bg-yellow-400 hover:bg-yellow-700 text-gray-700 font-black p-3 text-center rounded inline-flex items-center">
            <span role="img" aria-label="bar chart">
              📊 &nbsp;
            </span>
            Stats
          </Button>
        </Link>
      </div>
    </div>
  );
}
