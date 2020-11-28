import React, { createRef, useEffect, useState } from "react";
// import Chart from "chart.js";
import fetchCharities from "../utils/API";
import Loading from "../components/Loading";
import Layout from "../components/Layout";

const canvasRef = createRef();
export default function Stats() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    fetchCharities().then((data) => {
      const charityLabels = data.map((charity) => charity.name);

      // eslint-disable-next-line
      import("chart.js").then((chart) => {
        new chart.Chart(ctx, {
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
              "July",
            ],
            datasets: [
              ...charityLabels.map((name) => {
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
                    Math.floor(Math.random() * 500),
                  ],
                };
              }),
            ],
          },

          // Configuration options go here
          options: {
            scales: {
              yAxes: [{ stacked: true }],
              xAxes: [{ stacked: true }],
            },
            animation: {
              onProgress: () => {
                setLoading(false);
              },
            },
          },
        });
      });
    });
  }, []);

  return (
    <Layout>
      <div className="px-4 py-5">
        <div className="mb-4">
          <h1 className="mb-2 text-xl font-black">Thank you, donors!</h1>
          <p className="leading-normal">
            With your help, we are helping those Berliners that need it most.
          </p>
        </div>
        {loading && <Loading />}
        <canvas
          id="myChart"
          className={loading ? "hidden mb-4" : "mb-4"}
          width="400"
          height="400"
          ref={canvasRef}
        ></canvas>
      </div>
    </Layout>
  );
}
