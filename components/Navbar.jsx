import React, { useEffect, useState } from "react";
import { CiGrid41, CiDark, MdDarkMode as DarkMode } from "react-icons/ci";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlineLeft,
} from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Navbar() {
  const [navShowing, setNavShowing] = useState(false);
  const router = useRouter();
  const handleOpenNavbar = () => {
    setNavShowing(true);
  };
  const handleNavClose = () => {
    setNavShowing(false);
  };
  const handleBack = () => {
    router.back();
  };

  // useEffect(() => {
  //   const handleResize = e => {
  //     console.log('redimesión', e.target.innerWidth, e.target.innerHeight)
  //   }
  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  // ^ PARA CHECKEAR EL RESIZE Y APLICAR RENDERIZADO CONDICIONAL DE LA NAVBAR

  return (
    <>
      {router.pathname !== "/product/[id]" ? (
        <>
          <div
            className={`fixed top-4 left-4${
              !navShowing ? "" : " opacity-0 "
            } transition-opacity z-40 cursor-pointer `}
          >
            <CiGrid41 className="w-8 h-8" onClick={handleOpenNavbar} />
          </div>
          <nav
            className={`w-2/3 bg-background_main_l transition-transform duration-300 h-full fixed flex flex-col justify-between
    top-0 left-0 pointer-events-none -translate-x-full text-fonts_main font-semibold max-w-[300px] min-w-[220px] z-50
    ${navShowing ? " transform-none pointer-events-auto " : ""}`}
          >
            <div className="w-full">
              <a>
                {/* REEMPLAZAR POR LINK ^ */}
                <div
                  className="w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main"
                >
                  <AiOutlineHome className="w-8 h-8" />
                  <span className="flex content-center text-lg ">Home</span>
                </div>
              </a>
              <div
                className="w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main"
              >
                <AiOutlineShoppingCart className="w-8 h-8" />
                <span className="flex content-center text-lg">Cart</span>
              </div>
              <div
                className="w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main"
              >
                <AiOutlineStar className="w-8 h-8" />
                <span className="flex content-center text-lg">Favorites</span>
              </div>
              <div
                className="w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main"
              >
                <MdOutlineAdminPanelSettings className="w-8 h-8" />
                <span className="flex content-center text-lg">
                  Admin Dashboard
                </span>
              </div>
            </div>
            <div className="w-full">
              <div
                className="w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main"
              >
                <BsPerson className="w-8 h-8" />
                <span className="flex content-center text-lg">About Us</span>
              </div>
              <div
                className="w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main"
              >
                <CiDark className="w-8 h-8" />
                <span className="flex content-center text-lg">Dark Mode</span>
              </div>
            </div>
          </nav>
          <section
            className={`w-screen h-screen transition-opacity duration-300 pointer-events-none opacity-0 bg-black fixed z-40
    top-0 left-0${navShowing ? " pointer-events-auto opacity-80 " : ""}`}
            onClick={handleNavClose}
          />
        </>
      ) : (
        <div
          className={`fixed top-4 left-4 z-40 cursor-pointer `}
          onClick={handleBack}
        >
          <AiOutlineLeft className="w-8 h-8" onClick={handleOpenNavbar} />
        </div>
      )}
    </>
  );
}
