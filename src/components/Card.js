import React, { lazy, Suspense } from "react";
import Loading from "./Loading";

const CharityInfoBox = lazy(() => import("./CharityInfoBox"));

const Card = ({ loading, charity }) => {
  return loading ? (
    <Loading />
  ) : (
    <Suspense>
      <CharityInfoBox charity={charity} />
    </Suspense>
  );
};

export default Card;
