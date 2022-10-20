import React from "react";
import BottomNavbar from "./BottomNavbar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <BottomNavbar />
      {/* y el footer si vamos a poner */}
    </>
  );
};

export default Layout;
