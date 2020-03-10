import React from "react";

const Layout = props => (
  <div className="w-11/12 max-w-xl mx-auto rounded border shadow bg-white my-5 text-gray-700">
    {props.children}
  </div>
);

export default Layout;
