import React from "react";

const Loading = () => (
  <div
    style={{
      minHeight: "20rem"
    }}
    id="spinner"
    className="h-full loading-container flex-col justify-center"
  >
    <div className="h-full loading"></div>
  </div>
);

export default Loading;
