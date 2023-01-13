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
        <div className="fixed bottom-0 min-w-full py-4 bottom-navbar custom-shadow bg-background_main_l md:hidden z-20 dark:bg-fonts_main">
          <ul className="flex items-center justify-around min-w-full">
            <li>
              <Link href={"/"} name='Home'>
                <a>
                  <HiHome
                    className={`h-6 w-6 duration-300 ${
                      route === "/" ? "fill-buttons_main" : "fill-fonts_main dark:fill-background_main"
                    }`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/search"} name='Search'>
                <a>
                  <HiSearch
                    className={`h-6 w-6 duration-300 ${
                      route === "/search"
                        ? "fill-buttons_main"
                        : "fill-fonts_main dark:fill-background_main"
                    }`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/favs"} name='Favorites'>
                <a>
                  <HiHeart
                    className={`h-6 w-6 duration-300 ${
                      route === "/favs"
                        ? "fill-buttons_main"
                        : "fill-fonts_main dark:fill-background_main"
                    }`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/cart"} name='Cart'>
                <a>
                  <HiShoppingCart
                    className={`h-6 w-6 duration-300 ${
                      route === "/cart"
                        ? "fill-buttons_main"
                        : "fill-fonts_main dark:fill-background_main"
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
