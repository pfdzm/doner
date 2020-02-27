import React, { useEffect } from "react";
import { useDonateContext } from "../utils/GlobalState";
import Card from "../components/Card";
import { fetchCharities } from "../utils/API";

export default function Carousel({ charities }) {
  const [state, dispatch] = useDonateContext();

  useEffect(() => {
    const charities = fetchCharities();
    dispatch({ type: "FETCH_CHARITIES", payload: charities });
  }, []);

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-50 my-4 mx-auto bg-orange-300 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch({ type: "PREV_CHARITY" });
        }}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-50 my-4 mx-auto bg-orange-300 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch({ type: "NEXT_CHARITY" });
        }}
      >
        Next
      </button>
      {state.charities.length && (
        <Card
          charity={
            state.charities.filter((charity, index) => {
              return index === state.currentCharity;
            })[0]
          }
        />
      )}
    </div>
  );
}
