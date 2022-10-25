import { cartGet } from "@store/actions/cart";
import { getFavs } from "@store/actions/fav";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BottomNavbar from "./BottomNavbar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavs());
    dispatch(cartGet());
  }, [dispatch]);

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
