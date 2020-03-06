import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const StatsButton = () => (
  <Link to="/stats">
    <Button className="lg:hidden w-full mx-auto bg-yellow-400 hover:bg-yellow-700 text-gray-700 font-bold p-3 text-center rounded inline-flex items-center">
      <span role="img" aria-label="bar chart">
        📊 &nbsp;
      </span>
      Stats
    </Button>
  </Link>
);

export default StatsButton;
