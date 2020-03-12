import React from "react";
import CharityInfoBox from "./CharityInfoBox";
import Loading from "./Loading";

const Card = ({ loading, charity }) => {
  return loading ? <Loading /> : <CharityInfoBox charity={charity} />;
};

export default Card;
