import React from "react";
import Link from "next/link";
import { HiHeart, HiHome, HiSearch, HiShoppingCart } from "react-icons/hi";
import { useRouter } from "next/router";

const BottomNavbar = () => {
  const router = useRouter();
  const { route } = router;

  return (
    <>
      {
        router.pathname !== '/product/[id]' &&
        <div className="bottom-navbar fixed bottom-0 min-w-full py-4 custom-shadow bg-background_main_l">
          <ul className="flex items-center justify-around min-w-full">
            <li>
              <Link href={"/"}>
                <a>
                  <HiHome
                    className={`h-6 w-6 duration-300 ${route === "/" ? "fill-buttons_main" : "fill-fonts_main"
                      }`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/search"}>
                <a>
                  <HiSearch
                    className={`h-6 w-6 duration-300 ${route === "/search" ? "fill-buttons_main" : "fill-fonts_main"
                      }`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <a>
                  <HiHeart
                    className={`h-6 w-6 duration-300 ${route === "/favs" ? "fill-buttons_main" : "fill-fonts_main"
                      }`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/cart"}>
                <a>
                  <HiShoppingCart
                    className={`h-6 w-6 duration-300 ${route === "/cart" ? "fill-buttons_main" : "fill-fonts_main"
                      }`}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

export default BottomNavbar;
