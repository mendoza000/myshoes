import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      {/* Aqui va la navbar para que sea global */}
      <Navbar />
      <main>{children}</main>
      {/* y el footer si vamos a poner */}
    </>
  );
};

export default Layout;
