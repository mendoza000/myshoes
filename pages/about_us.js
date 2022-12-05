import React, { useState } from "react";
import { HiLanguage } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import data from "./api/about.json"
import Person from "@components/about/Person";
import { SiReact, SiTailwindcss } from "react-icons/si";

export default function About_us() {
  const [language, setLanguage] = useState("en");
  const [currentPerson, setCurrentPerson] = useState("omar");

  const handleLanguageChange = () => {
    language === "en" ? setLanguage("es") : setLanguage("en");
  };
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-3 overflow-x-hidden bg-background_main_l dark:bg-bg_dark">
      <button
        className="absolute flex items-center px-3 py-1 duration-300 rounded-md shadow-md right-5 top-5 text-md md:right-10 dark:text-bg_dark_o bg-details dark:bg-buttons_main"
        onClick={handleLanguageChange}
      >
        <HiLanguage className="fill-fonts_main h-7 w-7 dark:fill-bg_dark_o" />
        {language === "en" ? "Cambiar a Español" : "Change to English"}
      </button>
      <div className="w-full mt-16">
        <h1 className="text-5xl text-center text-fonts_main dark:text-background_main_l">
          {data[language].title}
        </h1>
      </div>
      <div className="w-11/12 mt-6 text-center text-fonts_secondary dark:text-background_main_l dark:text-opacity-80">
        <h3 className="max-w-screen-sm mx-auto">
          {data[language].description}
        </h3>
        <div className='w-1/2 mx-auto flex flex-wrap gap-4 justify-center mt-4'>
          <div className='rounded-md flex text-fonts_secondary items-center gap-2 px-4 py-2 bg-[#61DBFB]'>
            <SiReact className='h-7 w-7' />
            <span className='text-cl'>React</span>
          </div>
          <div className='rounded-md flex text-[white] items-center gap-2 px-4 py-2 bg-[rgb(20,20,20)]'>
            <TbBrandNextjs className='h-7 w-7' />
            <span className='text-cl'>NextJs</span>
          </div>
          <div className='rounded-md flex text-[white] items-center gap-2 px-4 py-2 bg-[rgb(55,154,177)]'>
            <SiTailwindcss className='h-7 w-7' />
            <span className='text-cl'>TailwindCSS</span>
          </div>
        </div>

      </div>
      <div className="w-full mt-6 ">
        <a
          href="https://github.com/mendoza000/myshoes"
          target="_blank"
          rel="noreferrer"
          className="w-max bg-black text-[rgb(255,255,255)] rounded-md p-3 mx-auto flex"
        >
          <BsGithub className="fill-[#FFF] h-6 w-6 my-auto mr-2" />
          {data[language].gitbutton}
        </a>
      </div>
      <div className="flex items-center justify-center w-full mt-6 text-lg">
        <div className="relative flex items-center justify-center gap-6 dark:text-background_main_l">
          <button className={``} onClick={() => setCurrentPerson("omar")}>
            Omar
          </button>
          <button className={``} onClick={() => setCurrentPerson("yon")}>
            Yonathan
          </button>
          <span
            className={`w-8 h-[3px] transition-all bg-buttons_main absolute bottom-0 
        ${currentPerson === "omar"
                ? "left-0 translate-x-0"
                : "left-[calc(100%-4rem)] w-16 translate-x-0"
              }`}
          />
        </div>
      </div>
      <div className="relative flex justify-center w-full max-w-screen-md">
        <Person
          data={data}
          language={language}
          currentPerson={currentPerson}
          person={"omar"}
        />
        <Person
          data={data}
          language={language}
          currentPerson={currentPerson}
          person={"yon"}
          funfact={data.ourData.yon.funfact[language]}
        />
      </div>
    </div>
  );
}
