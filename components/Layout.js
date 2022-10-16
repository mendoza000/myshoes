import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {/* Aqui va la navbar para que sea global */}
      <main>{children}</main>
      {/* y el footer si vamos a poner */}
    </>
  );
};

export default Layout;
