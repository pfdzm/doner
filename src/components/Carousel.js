import React, { useEffect } from "react";
import { useDonateContext } from "../utils/GlobalState";
import Card from "../components/Card";
import fetchCharities from "../utils/API";

export default function Carousel() {
  const [state, dispatch] = useDonateContext();

  useEffect(() => {
    fetchCharities().then(data => {
      dispatch({ type: "FETCH_CHARITIES", payload: data });
    }, []);
  });

  return (
    <div className="relative max-w-xl mx-auto">
      <button
        className="absolute left-0 top-50 my-4 mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch({ type: "PREV_CHARITY" });
        }}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-50 my-4 mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch({ type: "NEXT_CHARITY" });
        }}
      >
        Next
      </button>
      {state.charities.length && (
        <Card charity={state.charities[state.currentCharity]} />
      )}
    </div>
  );
}
