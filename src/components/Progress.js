import React, { useEffect } from "react";

export default function Progress({ progress }) {
  // TODO: add side-effect to load current donations and calculate progress
  useEffect(() => {}, []);
  return (
    <div className="leading-normal">
      <div className="font-bold">
        <h4 className="text-2xl mb-3 text-gray-700">Our goal</h4>
      </div>
      <div>
        <p className="text-lg text-gray-700">
          We are aiming to raise 500&nbsp;€ this month.
        </p>
      </div>
      <div className="w-full">
        <div className="rounded w-full bg-gray-200 mt-2">
          <div
            className="rounded progress-bar bg-yellow-400 text-xl font-black leading-none py-1 text-center text-gray-700"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}
