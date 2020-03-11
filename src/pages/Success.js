import React from "react";
import LinkButton from "../components/LinkButton";
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
      <LinkButton to="stats" buttonExtraClassNames="lg:hidden">
        <span role="img" aria-label="bar chart">
          📊 &nbsp;
        </span>
        Stats
      </LinkButton>
    </div>
  </Layout>
);

export default Success;
