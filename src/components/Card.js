import React from "react";
import Loading from "./Loading";
import CharityInfoBox from "./CharityInfoBox";

const Card = ({ loading, charity }) => {
  return loading ? <Loading /> : <CharityInfoBox charity={charity} />;
};

export default Card;
