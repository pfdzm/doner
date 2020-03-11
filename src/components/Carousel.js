import React from "react";
import Card from "../components/Card";

const Carousel = props => {
  const { loading, dispatch, charity } = props;
  return (
    <div className="relative">
      <button
        className="absolute left-0 top-50 my-5 mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 text-sm font-black py-2 px-4 rounded"
        onClick={() => {
          dispatch({ type: "PREV_CHARITY" });
        }}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-50 my-5 mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 text-sm font-black py-2 px-4 rounded"
        onClick={() => {
          dispatch({ type: "NEXT_CHARITY" });
        }}
      >
        Next
      </button>
      <Card loading={loading} charity={charity} />
    </div>
  );
};

export default Carousel;
