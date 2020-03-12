import React from "react";
import CharityInfoBox from "./CharityInfoBox";

const Card = ({ loading, charity }) => {
  return <CharityInfoBox loading={loading} charity={charity} />;
};

export default Card;
