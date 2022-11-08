import React from "react";
import Link from "next/link";
import { HiHeart, HiHome, HiSearch, HiShoppingCart } from "react-icons/hi";
import { useRouter } from "next/router";

const BottomNavbar = () => {
  const router = useRouter();
  const { route } = router;

  return (
    <>
      {router.pathname !== "/product/[id]" && (
        <div className="fixed bottom-0 min-w-full py-4 bottom-navbar custom-shadow bg-background_main_l md:hidden">
          <ul className="flex items-center justify-around min-w-full">
            <li>
              <Link href={"/"}>
                <a>
                  <HiHome
                    className={`h-6 w-6 duration-300 ${
                      route === "/" ? "fill-buttons_main" : "fill-fonts_main"
                    }`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/search"}>
                <a>
                  <HiSearch
                    className={`h-6 w-6 duration-300 ${
                      route === "/search"
                        ? "fill-buttons_main"
                        : "fill-fonts_main"
                    }`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/favs"}>
                <a>
                  <HiHeart
                    className={`h-6 w-6 duration-300 ${
                      route === "/favs"
                        ? "fill-buttons_main"
                        : "fill-fonts_main"
                    }`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/cart"}>
                <a>
                  <HiShoppingCart
                    className={`h-6 w-6 duration-300 ${
                      route === "/cart"
                        ? "fill-buttons_main"
                        : "fill-fonts_main"
                    }`}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default BottomNavbar;
