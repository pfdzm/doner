import React, { useEffect } from "react";

export default function Progress({ progress }) {
  // TODO: add side-effect to load current donations and calculate progress
  useEffect(() => {}, []);
  return (
    <>
      <div className="font-bold">
        <h4>Our goal</h4>
      </div>
      <div className="w-full">
        <div className="shadow w-full bg-grey-light mt-2">
          <div
            className="bg-orange-300 text-xs leading-none py-1 text-center text-white"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </>
  );
}
