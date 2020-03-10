import React from "react";
import Layout from "../components/Layout";

const Success = () => {
  return (
    <Layout>
      <div className="p-5 mb-4">
        <h1 className="text-xl mb-2">Oops!</h1>
        <p className="leading-normal mb-2">
          Your payment didn't go through, please try again...
        </p>
      </div>
    </Layout>
  );
};

export default Success;
