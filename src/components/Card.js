import React from "react";

import Progress from "./Progress";

export default function Card({ charity }) {
  return (
    <>
      <div className="bg-white max-w-sm rounded overflow-hidden shadow">
        <img
          className="w-full"
          src={charity.imgUrl}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{charity.name}</div>
          <p className="text-gray-700 text-base">{charity.description}</p>
        </div>
        <div className="px-6 py-4">
          <Progress progress={charity.progress}></Progress>
        </div>
      </div>
    </>
  );
}
