import React, { createRef, useEffect } from "react";
import Chart from "chart.js";

const canvasRef = createRef();
export default function Stats() {
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
  }, []);
  return (
    <div className="p-5 w-11/12 max-w-xl mx-auto rounded border shadow bg-gray-200 m-3 text-xl text-gray-700">
      <h1 className="p-5 bg-yellow-300 rounded shadow border">
        Thank you, donors!
      </h1>
      <canvas id="myChart" width="400" height="400" ref={canvasRef}></canvas>
    </div>
  );
}
