import React from "react";
import Progress from "./Progress";
import Loading from "./Loading";

const CharityInfoBox = ({ loading, charity }) => (
  <div>
    {!loading ? (
      <img
        className="w-full mb-4"
        src={charity?.img.src}
        alt={charity?.img.alt}
      />
    ) : (
      <Loading />
    )}
    <div className="px-4 mb-4">
      <h4 className="font-black text-gray-700 text-2xl mb-2">
        {!loading ? charity?.name : "Charity"}
      </h4>
      <p className="text-gray-700 leading-normal mb-4">
        {!loading ? charity?.description : "Charity description"}
      </p>
      <Progress
        styles="leading-normal"
        progress={!loading ? charity?.progress : 99}
      />
    </div>
  </div>
);

export default CharityInfoBox;
