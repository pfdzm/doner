import React from "react";

export default function Progress() {
  return (
    <>
      <div className="font-bold">
        <h4>Our goal</h4>
      </div>
      <div className="w-full">
        <div className="shadow w-full bg-grey-light">
          <div
            className="bg-blue-300 text-xs leading-none py-1 text-center text-white"
            style={{ width: "45%" }}
          >
            45%
          </div>
        </div>

        <div className="shadow w-full bg-grey-light mt-2">
          <div
            className="bg-teal-300 text-xs leading-none py-1 text-center text-white"
            style={{ width: "55%" }}
          >
            55%
          </div>
        </div>

        <div className="shadow w-full bg-grey-light mt-2">
          <div
            className="bg-orange-300 text-xs leading-none py-1 text-center text-white"
            style={{ width: "65%" }}
          >
            65%
          </div>
        </div>

        <div className="shadow w-full bg-grey-light mt-2">
          <div
            className="bg-red-300 text-xs leading-none py-1 text-center text-white"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>
      </div>
    </>
  );
}
