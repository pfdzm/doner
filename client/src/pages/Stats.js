import React, { createRef, useEffect } from "react";
import Chart from "chart.js";
import fetchCharities from "../utils/API";

const canvasRef = createRef();
export default function Stats() {
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    fetchCharities().then(data => {
      const charityLabels = data.map(charity => charity.name);

      const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "bar",

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
            ...charityLabels.map(name => {
              const r = Math.floor(Math.random() * 255);
              const g = Math.floor(Math.random() * 255);
              const b = Math.floor(Math.random() * 255);

              return {
                label: name,
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                borderColor: `rgb(${r}, ${g}, ${b})`,
                data: [
                  Math.floor(Math.random() * 500),
                  Math.floor(Math.random() * 500),
                  Math.floor(Math.random() * 500),
                  Math.floor(Math.random() * 500),
                  Math.floor(Math.random() * 500),
                  Math.floor(Math.random() * 500),
                  Math.floor(Math.random() * 500)
                ]
              };
            })
          ]
        },

        // Configuration options go here
        options: {
          scales: {
            yAxes: [{ stacked: true }],
            xAxes: [{ stacked: true }]
          }
        }
      });
    });
  }, []);

  return (
    <div className="p-5 w-11/12 max-w-xl mx-auto rounded border shadow bg-gray-200 m-3 text-xl text-gray-700">
      <h1 className="py-5 font-display text-2xl">Thank you, donors!</h1>
      <p className="leading-7">
        With your help, we are helping those Berliners that need it most.
      </p>
      <canvas
        id="myChart"
        className="mb-5"
        width="400"
        height="400"
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
