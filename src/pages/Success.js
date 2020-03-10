import React from "react";
import StatsButton from "../components/StatsButton";
import Layout from "../components/Layout";

const Success = () => (
  <Layout>
    <div className="p-5 text-lg text-gray-700">
      <div className="mb-4">
        <h1 className="text-xl mb-2 font-black">Thank you!</h1>
        <p className="leading-normal mb-2">
          Your donation will be put to good use!
        </p>
      </div>
      <StatsButton />
    </div>
  </Layout>
);

export default Success;
