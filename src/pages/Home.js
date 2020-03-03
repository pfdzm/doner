import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="container mx-auto w-11/12 lg:px-4 py-5">
      <Carousel />
    </div>
  );
}
