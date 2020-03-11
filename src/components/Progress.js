import React from "react";

export default function Progress({ styles, progress }) {
  // TODO: add side-effect to load current donations and calculate progress
  return (
    <div className={styles}>
      <div className="font-black">
        <h4 className="text-lg mb-2 text-gray-700">Our goal</h4>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">
          We are aiming to raise 500&nbsp;€ this month.
        </p>
      </div>
      <div className="w-full">
        <div className="rounded w-full bg-gray-200">
          <div
            className="rounded progress-bar bg-yellow-400 font-black leading-none py-1 text-center text-lg text-gray-700"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      </div>
      <div>
        <p>
          We have received xx € in donations this month. Help us reach our goal
          of yy €!
        </p>
      </div>
    </div>
  );
}
