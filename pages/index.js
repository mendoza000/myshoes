import data from "./api/data.json";
import "animate.css";
import { useEffect } from "react";
import Card2 from "@components/home/Card2";
import useImages from "hooks/useImages";

export default function Home() {
  const { imagesLoaded, imagesLoadError } = useImages({ data });
  console.log(imagesLoaded);

  useEffect(() => {
    const bottomNav = document.querySelector(".bottom-navbar");
    bottomNav.classList.remove("hidden");
  }, []);

  return (
    <>
      <div
        className={`fixed h-screen w-screen grid place-content-center z-[100] pointer-events-all translate-y-none transition-transform 
       bg-background_main_l ${
         imagesLoaded &&
         " animate-splashBounce pointer-events-none translate-y-full "
       }`}
      >
        <div class="waveform">
          <div class="waveform__bar"></div>
          <div class="waveform__bar"></div>
          <div class="waveform__bar"></div>
          <div class="waveform__bar"></div>
        </div>
      </div>
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

          <div className="grid items-center justify-center w-full h-full grid-cols-2 p-5 my-8 overflow-x-hidden gap-x-6 gap-y-3">
            {data.map((shoe) => {
              return <Card2 key={shoe.id} {...shoe} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
