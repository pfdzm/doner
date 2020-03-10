import React, { useEffect, useState } from "react";
import { useDonateContext } from "../utils/GlobalState";
import Card from "../components/Card";
import Loading from "../components/Loading";
import fetchCharities from "../utils/API";

export default function Carousel() {
  const [state, dispatch] = useDonateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharities().then(data => {
      dispatch({ type: "FETCH_CHARITIES", payload: data });
      setLoading(false);
    }, []);
  });

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
      {loading ? (
        <div className="py-12"><Loading /></div>
      ) : (
        <Card charity={state.charities[state.currentCharity]} />
      )}
    </div>
  );
}
