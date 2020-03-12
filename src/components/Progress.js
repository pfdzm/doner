import React from "react";

export default function Progress({ styles, progress }) {
  // TODO: add side-effect to load current donations and calculate progress
  return (
    <div className={styles}>
      <h4 className="font-black text-lg mb-2 text-gray-700">Our goal</h4>
      <p className="text-gray-700 mb-4">
        We are aiming to raise 500&nbsp;€ this month.
      </p>
      <div className="w-full mb-4">
        <div className="rounded w-full bg-gray-200">
          <div
            className="rounded progress-bar bg-yellow-400 font-black leading-none py-1 text-center text-lg text-gray-700"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      </div>
      <p>
        We are almost there! Click Dönate below to contribute to this month's
        goal, or set up a recurring monthly donation!
      </p>
    </div>
  );
}
