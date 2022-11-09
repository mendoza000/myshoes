import React, { useEffect, useState } from "react";
import { CiGrid41, CiDark, MdDarkMode as DarkMode } from "react-icons/ci";
import { HiSearch } from "react-icons/hi";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlineLeft,
} from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";

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
      <div
        className={`fixed top-4 left-4${!navShowing ? "" : " opacity-0 "
          } transition-opacity z-40 cursor-pointer `}
      >
        <CiGrid41 className="w-8 h-8" onClick={handleOpenNavbar} />
      </div>
      <nav
        className={`w-2/3 bg-background_main_l transition-transform duration-300 h-full fixed flex flex-col justify-between
    top-0 left-0 pointer-events-none -translate-x-full text-fonts_main font-semibold max-w-[300px] min-w-[220px] z-50
    ${navShowing ? " transform-none pointer-events-auto " : ""} md:pointer-events-auto md:transform-none md:w-min md:min-w-0 custom-shadow`}
      >
        <div className="">
          <Link href={'/'} >
            {/* REEMPLAZAR POR LINK ^ */}
            <div title='Home'
              className="h-14 grid grid-cols-[15%,85%] md:flex items-center justify-center place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main md:w-14"
            >
              <AiOutlineHome className="w-8 h-8" />
              <span className="flex content-center text-lg md:hidden">Home</span>
            </div>
          </Link>
          <div title="Cart"
            className="h-14 grid grid-cols-[15%,85%] md:flex items-center justify-center place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main md:w-14"
          >
            <AiOutlineShoppingCart className="w-8 h-8" />
            <span className="flex content-center text-lg md:hidden">Cart</span>
          </div>
          <div title="Favorites"
            className="h-14 grid grid-cols-[15%,85%] md:flex items-center justify-center place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main md:w-14"
          >
            <AiOutlineStar className="w-8 h-8" />
            <span className="flex content-center text-lg md:hidden">Favorites</span>
          </div>
          <div title="Search"
            className="h-14 grid grid-cols-[15%,85%] md:flex items-center justify-center place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main md:w-14"
          >
            <HiSearch className="w-8 h-8" />
            <span className="flex content-center text-lg md:hidden">Search</span>
          </div>
          <div title="Admin Dashboard"
            className="h-14 grid grid-cols-[15%,85%] md:flex items-center justify-center place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main md:w-14"
          >
            <MdOutlineAdminPanelSettings className="w-8 h-8" />
            <span className="flex content-center text-lg md:hidden">
              Admin Dashboard
            </span>
          </div>
        </div>
        <div className="w-full">
          <div title="About Us"
            className="h-14 grid grid-cols-[15%,85%] md:flex items-center justify-center place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main md:w-14"
          >
            <BsPerson className="w-8 h-8" />
            <span className="flex content-center text-lg md:hidden">About Us</span>
          </div>
          <div title="Dark Mode"
            className="h-14 grid grid-cols-[15%,85%] md:flex items-center justify-center place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main md:w-14"
          >
            <CiDark className="w-8 h-8" />
            <span className="flex content-center text-lg md:hidden">Dark Mode</span>
          </div>
        </div>
      </nav>
      <section
        className={`w-screen h-screen transition-opacity duration-300 pointer-events-none opacity-0 bg-black fixed z-40
    top-0 left-0${navShowing ? " pointer-events-auto opacity-80 " : ""} md:hidden`}
        onClick={handleNavClose}
      />
    </>
  );
}
  // {router.pathname !== "/product/[id]" ? (
  // ) : (
  //   <div
  //     className={`fixed top-4 left-4 z-40 cursor-pointer `}
  //     onClick={handleBack}
  //   >
  //     <AiOutlineLeft className="w-8 h-8" />
  //   </div>
  // )}
