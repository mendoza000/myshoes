import Image from "next/image";
import React from "react";
import { BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Person = ({ data, currentPerson, person, language }) => {
  const dataPerson = person !== "omar" ? data.ourData.omar : data.ourData.yon;

  return (
    <div
      className={`w-full flex flex-col transition-all absolute right-0 translate-x-0 ${
        currentPerson === person &&
        `${person !== "omar" ? "right-full" : "left-full"}`
      }`}
    >
      <div className={`flex w-11/12 mx-auto mt-4 items-center justify-center`}>
        <div className="w-1/2">
          <h3 className="text-3xl text-center text-fonts_main dark:text-buttons_main">
            {dataPerson.name}
          </h3>
          <h4 className="mt-3 text-center text-md dark:text-background_main_l">
            {dataPerson.smalldesc[language]}
          </h4>
        </div>
        <Image
          src={dataPerson.photo}
          alt="profile pic"
          width={150}
          height={150}
          className="rounded-[50%]"
        />
      </div>
      <p className="max-w-sm px-5 mx-auto mt-4 text-md text-fonts_main dark:text-background_main_l dark:text-opacity-80 md:max-w-md">
        {dataPerson.description[language]}
      </p>
      <div className="flex justify-center w-full gap-3 mt-5 mb-16">
        <div className="py-2 px-4 border-[2px] border-buttons_main rounded-xl ">
          <BsTwitter className="w-8 h-8 fill-buttons_main " />
        </div>
        <div className="py-2 px-4 border-[2px] border-[black] rounded-xl ">
          <BsGithub className="h-8 w-8 fill-[black] " />
        </div>
        <div className="py-2 px-4 border-[2px] border-[green] rounded-xl ">
          <BsWhatsapp className="h-8 w-8 fill-[green] " />
        </div>
      </div>
    </div>
  );
};

export default Person;
