import Card from "../components/home/Card";
import data from "./api/data.json";
import "animate.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const bottomNav = document.querySelector(".bottom-navbar");
    bottomNav.classList.remove("hidden");
  }, []);

  return (
    <div className="container min-h-screen bg-background_main animate__animated animate__fadeIn animate__faster">
      <div className="flex items-center justify-center px-6 py-4">
        <h1 className="text-3xl font-bold text-center fill-fonts_main ">
          myShoes
        </h1>
      </div>

      <div className="">
        <div className="flex justify-center gap-6">
          <h3 className="flex items-center py-1 pr-4 text-xl font-semibold text-center border-b-2 border-b-buttons_main">
            News
          </h3>
          <h3 className="flex items-center py-1 pr-4 text-xl font-semibold text-center text-fonts_secondary">
            Most sold
          </h3>
          <h3 className="flex items-center py-1 pr-4 text-xl font-semibold text-center text-fonts_secondary">
            Comming
          </h3>
        </div>

        <div className="grid items-center justify-center grid-cols-2 gap-6 my-8 overflow-x-hidden p-5 h-full w-full">
          {data.map((shoe) => {
            return (
              <Card
                key={shoe.id}
                image={shoe.cardPhoto}
                id={shoe.id}
                rating={shoe.rating}
                price={shoe.price}
                name={shoe.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
