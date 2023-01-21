import data from "./api/data.json";
import "animate.css";
import { useEffect } from "react";
import useImages from "hooks/useImages";
import Slider from "@components/ui/Slider";
import Card2 from "@components/home/Card2";
import Header from "@components/home/Header";
import PromoSection from "@components/home/PromoSection";

export default function Home() {
  const { imagesLoaded } = useImages({ data });

  useEffect(() => {
    const bottomNav = document.querySelector(".bottom-navbar");
    bottomNav.classList.remove("hidden");
  }, []);

  return (
    <>
      <div>
      </div>
      <div
        className={`fixed h-screen w-screen grid place-content-center z-[100] pointer-events-all translate-y-none transition-transform 
      bg-background_main_l dark:bg-bg_dark ${
        imagesLoaded &&
        "md:hidden animate-splashBounce pointer-events-none translate-y-full "
      }`}
      >
        <div className="waveform">
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
        </div>
      </div>
      <div className="container min-w-full min-h-screen scroll-smooth bg-background_main dark:bg-bg_dark animate__animated animate__fadeIn animate__faster">
        {/* header only md & lg */}
        <Header />

        <div className="flex items-center justify-center px-6 py-4 md:hidden">
          <h1 className="text-3xl font-bold text-center fill-fonts_main dark:text-background_main_l">
            myShoes
          </h1>
        </div>

        <div className="flex flex-col gap-10">
          <PromoSection />
          <Slider />
          <div
            id="shop"
            className="flex items-center gap-6 md:max-w-[70rem] mx-auto dark:text-background_main_l"
          >
            <h3 className="flex items-center py-1 pr-4 text-xl font-semibold text-center border-b-2 border-b-buttons_main">
              News
            </h3>
            <h3 className="flex items-center py-1 pr-4 text-xl font-semibold text-center text-fonts_secondary dark:text-background_main_l dark:text-opacity-60">
              Most sold
            </h3>
            <h3 className="flex items-center py-1 pr-4 text-xl font-semibold text-center text-fonts_secondary dark:text-background_main_l dark:text-opacity-60">
              Comming
            </h3>
          </div>
          <div className="grid items-center justify-center w-full h-full grid-cols-2 px-5 py-2 mb-10 overflow-hidden gap-x-6 md:gap-x-0
           md:max-w-[93%] md:ml-14 md:grid-cols-3 md:gap-y-5 md:mb-0 lg:grid-cols-[repeat(auto-fit,250px)] lg:max-w-[70rem] lg:mx-auto">
            {data.map((shoe) => {
              return <Card2 key={shoe.id} {...shoe} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
