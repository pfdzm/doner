import React from "react";

import Progress from "./Progress";

export default function Card({
  charity = { imgUrl: "", name: "", description: "", progress: "" }
}) {
  return (
    <div className="bg-white w-full rounded overflow-hidden shadow">
      <img
        className="w-full"
        src={charity.imgUrl}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <h4 className="font-bold text-gray-700 text-3xl mb-3">
          {charity.name}
        </h4>
        <p className="text-gray-700 text-lg leading-normal">
          {charity.description}
        </p>
      </div>
      <div className="px-6 py-5">
        <Progress progress={charity.progress}></Progress>
      </div>
    </div>
  );
}
