import React from "react";
import Carousel from "../components/Carousel";
import StatsButton from "../components/StatsButton";

const Home = () => (
  <div className="container mx-auto w-11/12 lg:px-4 py-5">
    <Carousel />
    <StatsButton />
  </div>
);

export default Home;
