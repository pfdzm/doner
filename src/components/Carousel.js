import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
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
    <div className="relative max-w-xl mx-auto">
      <React.Fragment>
        <button
          className="absolute left-0 top-50 my-5 mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch({ type: "PREV_CHARITY" });
          }}
        >
          Prev
        </button>
        <button
          className="absolute right-0 top-50 my-5 mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch({ type: "NEXT_CHARITY" });
          }}
        >
          Next
        </button>
        {loading ? (
          <div className="h-64 bg-white w-full rounded overflow-hidden shadow">
            <Loading />
          </div>
        ) : (
          <Card charity={state.charities[state.currentCharity]} />
        )}
        <Link to="/donate">
          <Button className="my-5 w-full mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-bold p-3 text-center rounded inline-flex items-center">
            Dönate
          </Button>
        </Link>
      </React.Fragment>
    </div>
  );
}
