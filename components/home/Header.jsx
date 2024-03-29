import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const shoes = ['Nike Air Zoom SuperRep 3 w', 'nike-air-vapormax-plus', 'Nike Metcon 8 w']

const Header = () => {
  const [randomPick, setRandomPick] = useState(0)
  useEffect(() => {
    setRandomPick(Math.floor(Math.random() * shoes.length))
  }, [])
  return (
    <div className="container hidden min-w-full min-h-screen py-5 pl-20 pr-5 mb-10 custom-shadow md:grid dark:text-background_main_l">
      {/* top bar */}
      <div className="flex items-center justify-between">
        <Image
          alt="logo"
          src={"/bat-logo.svg"}
          width={"50"}
          height={"50"}
          className={"opacity-80 -pr-5"}
        />
        <p className="text-center underline">BUILD YOUR STYLE WITH MYSHOES</p>
        <Image
          alt="logo"
          src={"/bat-logo.svg"}
          width={"50"}
          height={"50"}
          className={"opacity-0"}
        />
      </div>

      {/* grid */}

      <div className="grid items-center justify-center grid-cols-2 gap-3 min-h-full-force">
        {/* col */}
        <div className="flex flex-col justify-center min-w-full min-h-screen gap-5 -mt-20 lg:ml-24 lg:gap-8">
          <h1 className="text-6xl font-bold">MyShoes</h1>
          <p className="max-w-sm opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            reprehenderit quo deserunt perferendis, aliquid consequuntur
            officia.
          </p>

          <a
            className="grid max-w-sm py-5 text-xl duration-300 bg-gradient-to-r from-buttons_main to-details custom-shadow rounded-xl text-background_main hover:scale-105 place-content-center"
            href="#shop"
          >
            Go to products
          </a>
        </div>

        {/* col */}
        <div className="flex flex-col items-center justify-center gap-3 -mt-10 lg:gap-7">
          <div className="bg-gradient-to-tr from-buttons_main to-details custom-shadow custom-border animate-changeBorder">
            <Image
              alt="header-img"
              width={400}
              height={400}
              src={`/${shoes[randomPick]}/main.webp`}
              className={"-rotate-[20deg]"}
            />
          </div>

          <p className="text-2xl text-center underline opacity-80">
            Shop now, relax later
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
