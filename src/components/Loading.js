import React from "react";

const Loading = () => (
  <div
    id="spinner"
    style={{
      minHeight: "18em"
    }}
    className="h-full loading-container flex-col justify-center"
  >
    <div className="h-full loading"></div>
  </div>
);

export default Loading;
