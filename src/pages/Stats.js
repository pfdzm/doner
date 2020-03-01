import React from "react";

export default function Stats() {
  return (
    <div className="p-5 w-11/12 mx-auto rounded border shadow bg-gray-200 m-3 text-xl text-gray-700">
      <h1 className="p-5 bg-yellow-300 rounded shadow border">
        Thank you, donors!
      </h1>
      <ul className="p-5 my-3 leading-normal">
        <li>Peter, 3.50</li>
        <li>Wiebke, 3.50</li>
        <li>Friedrich, 3.50</li>
      </ul>
    </div>
  );
}
