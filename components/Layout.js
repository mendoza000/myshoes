import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* y el footer si vamos a poner */}
    </>
  );
};

export default Layout;
