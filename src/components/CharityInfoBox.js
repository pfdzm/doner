import React from "react";
import Progress from "./Progress";

const CharityInfoBox = ({ charity }) => (
  <div>
    <img
      className="w-full mb-2"
      src={charity?.img.src}
      alt={charity?.img.alt}
    />
    <div className="px-4 py-5">
      <h4 className="font-black text-gray-700 text-2xl mb-2">
        {charity?.name}
      </h4>
      <p className="text-gray-700 leading-normal mb-4">
        {charity?.description}
      </p>
      <Progress styles="leading-normal mb-4" progress={charity?.progress} />
    </div>
  </div>
);

export default CharityInfoBox;
