import React, { useEffect, useState } from "react";
import { CiGrid41, CiDark, MdDarkMode as DarkMode } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  HiHeart,
  HiHome,
  HiMoon,
  HiSearch,
  HiShoppingCart,
  HiUserGroup,
} from "react-icons/hi";

export default function Navbar() {
  const [navShowing, setNavShowing] = useState(false);
  const router = useRouter();
  const { route } = router;
  const handleOpenNavbar = () => {
    setNavShowing(true);
  };
  const handleNavClose = () => {
    setNavShowing(false);
  };
  const handleBack = () => {
    router.back();
  };
  const handleChangeTheme = () => {
    document.documentElement.classList.contains("dark")
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
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
        <CiGrid41 className="w-8 h-8 md:hidden" onClick={handleOpenNavbar} />
      </div>
      <nav
        className={`w-2/3 bg-background_main_l dark:bg-bg_dark_o transition-transform duration-300 h-full fixed flex flex-col justify-between
    top-0 left-0 pointer-events-none -translate-x-full text-fonts_main font-semibold max-w-[250px] min-w-[220px] z-50 px-3
    ${navShowing ? " transform-none pointer-events-auto " : ""
          } md:pointer-events-auto md:transform-none md:w-min md:min-w-0 custom-shadow  md:p-2`}
      >
        <div className="">
          <Link href={"/"}>
            <a className="flex w-full mt-4 md:mt-0" title='Home'>
              <HiHome
                className={`h-8 w-8 mb-2 duration-300 ${route === "/"
                    ? "fill-buttons_main"
                    : "fill-fonts_main dark:fill-background_main"
                  }`}
              />
              <span className="content-center text-lg md:hidden dark:text-background_main_l ml-6">Home</span>
            </a>
          </Link>
          <Link href={"/search"}>
            <a className="flex w-full" title='Search'>
              <HiSearch
                className={`h-8 w-8 mb-2 duration-300 ${route === "/search"
                    ? "fill-buttons_main"
                    : "fill-fonts_main dark:fill-background_main"
                  }`}
              />
              <span className="content-center text-lg md:hidden dark:text-background_main_l ml-6">Search</span>
            </a>
          </Link>
          <Link href={"/cart"}>
            <a className="flex w-full" title='Cart'>
              <HiShoppingCart
                className={`h-8 w-8 mb-2 duration-300 ${route === "/cart"
                    ? "fill-buttons_main"
                    : "fill-fonts_main dark:fill-background_main"
                  }`}
              />
              <span className="content-center text-lg md:hidden dark:text-background_main_l ml-6">Cart</span>
            </a>
          </Link>
          <Link href={"/favs"}>
            <a className="flex w-full" title='Favorites'>
              <HiHeart
                className={`h-8 w-8 mb-2 duration-300 ${route === "/favs"
                    ? "fill-buttons_main"
                    : "fill-fonts_main dark:fill-background_main"
                  }`}
              />
              <span className="content-center text-lg md:hidden dark:text-background_main_l ml-6">Favorites</span>
            </a>
          </Link>
        </div>
        <div className="w-full">
          <Link href={"/about_us"}>
            <a className="flex w-full" title='About Us'>
              <HiUserGroup
                className={`h-8 w-8 mb-2 duration-300 ${route === "/about_us"
                    ? "fill-buttons_main"
                    : "fill-fonts_main dark:fill-background_main"
                  }`}
              />
              <span className="content-center text-lg md:hidden dark:text-background_main_l ml-6">About Us</span>
            </a>
          </Link>
          <button onClick={handleChangeTheme} className='flex w-full' title='Toggle Theme'>
            <HiMoon
              className={`h-8 w-8 mb-4 md:mb-1 duration-300 dark:fill-background_main`}
            />
            <span className="content-center text-lg md:hidden dark:text-background_main_l ml-6  ">Toggle Theme</span>
          </button>
        </div>
      </nav>
      <section
        className={`w-screen h-screen transition-opacity duration-300 pointer-events-none opacity-0 bg-black fixed z-40
  top-0 left-0${navShowing ? " pointer-events-auto opacity-80 " : ""
          } md:hidden`}
        onClick={handleNavClose}
      />
    </>
  );
}
{/* <>
  <div
    className={`fixed top-4 left-4${!navShowing ? "" : " opacity-0 "
      } transition-opacity z-40 cursor-pointer `}
  >
    <CiGrid41 className="w-8 h-8 md:hidden" onClick={handleOpenNavbar} />
  </div>
  <nav
    className={`w-2/3 bg-background_main_l dark:bg-bg_dark_o transition-transform duration-300 h-full fixed flex flex-col justify-between
top-0 left-0 pointer-events-none -translate-x-full text-fonts_main font-semibold max-w-[300px] min-w-[220px] z-50 px-3
${navShowing ? " transform-none pointer-events-auto " : ""
      } md:pointer-events-auto md:transform-none md:w-min md:min-w-0 custom-shadow md:px-2`}
  >
    <div className="md:gap-y-2">
      <Link href={"/"}>
        <a>
          <HiHome
            className={`h-7 w-7 duration-300 ${
              route === "/"
                ? "fill-buttons_main"
                : "fill-fonts_main dark:fill-background_main"
            }`}
          />
        </a>
      </Link>
      <Link href={"/search"}>
        <a>
          <HiSearch
            className={`h-7 w-7 duration-300 ${
              route === "/search"
                ? "fill-buttons_main"
                : "fill-fonts_main dark:fill-background_main"
            }`}
          />
        </a>
      </Link>
      <Link href={"/cart"}>
        <a>
          <HiHeart
            className={`h-7 w-7 duration-300 ${
              route === "/favs"
                ? "fill-buttons_main"
                : "fill-fonts_main dark:fill-background_main"
            }`}
          />
        </a>
      </Link>
      <Link href={"/favs"}>
        <a>
          <HiShoppingCart
            className={`h-7 w-7 duration-300 ${
              route === "/cart"
                ? "fill-buttons_main"
                : "fill-fonts_main dark:fill-background_main"
            }`}
          />
        </a>
      </Link>
    </div>
    <div className="w-full">
      <Link href={"/about_us"}>
        <a>
          <HiUserGroup
            className={`h-7 w-7 duration-300 ${
              route === "/about_us"
                ? "fill-buttons_main"
                : "fill-fonts_main dark:fill-background_main"
            }`}
          />
        </a>
      </Link>
      <button onClick={handleChangeTheme}>
        <HiMoon
          className={`h-7 w-7 duration-300 dark:fill-background_main`}
        />
      </button>
    </div>
  </nav>
  <section
    className={`w-screen h-screen transition-opacity duration-300 pointer-events-none opacity-0 bg-black fixed z-40
top-0 left-0${navShowing ? " pointer-events-auto opacity-80 " : ""
      } md:hidden`}
    onClick={handleNavClose}
  />
</> */}
{/* <div className="flex flex-col items-center pt-5 gap-7">
<Link href={"/"}>
  <a className="flex w-full" title='test'>
    <HiHome
      className={`h-8 w-8 mb-2 duration-300 ${
        route === "/" ? "fill-buttons_main" : "fill-fonts_main"
      }`}
    />
  </a>
</Link>
<Link href={"/search"}>
  <a className="flex w-full" title='test'>
    <HiSearch
      className={`h-8 w-8 mb-2 duration-300 ${
        route === "/search" ? "fill-buttons_main" : "fill-fonts_main"
      }`}
    />
  </a>
</Link>
<Link href={"/favs"}>
  <a className="flex w-full" title='test'>
    <HiHeart
      className={`h-8 w-8 mb-2 duration-300 ${
        route === "/favs" ? "fill-buttons_main" : "fill-fonts_main"
      }`}
    />
  </a>
</Link>
<Link href={"/cart"}>
  <a className="flex w-full" title='test'>
    <HiShoppingCart
      className={`h-8 w-8 mb-2 duration-300 ${
        route === "/cart" ? "fill-buttons_main" : "fill-fonts_main"
      }`}
    />
  </a>
</Link>
</div>
<div className="flex flex-col items-center justify-center w-full pb-5 gap-7">
<Link href={"/about_us"}>
  <a className="flex w-full" title='test'>
    <HiUserGroup
      className={`h-8 w-8 mb-2 duration-300 ${
        route === "/about_us"
          ? "fill-buttons_main"
          : "fill-fonts_main"
      }`}
    />
  </a>
</Link title='test'>
<button>
  <HiMoon className={`h-8 w-8 mb-2 duration-300`} />
</button>
</div> */}