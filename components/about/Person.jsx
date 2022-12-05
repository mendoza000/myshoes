import Image from "next/image";
import React from "react";
import { BsGithub, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Person = ({ data, currentPerson, person, language, funfact }) => {
  const dataPerson = person === "omar" ? data.ourData.omar : data.ourData.yon;
  person === 'yon' && console.log(currentPerson === 'yon' && person === 'yon')

  return (
    <div
      className={`w-full flex flex-col transition-all absolute ${person === 'omar' ? 'right-0' : 'left-0'} translate-x-0 ${person === 'omar' && currentPerson === 'omar' ? "" : 'right-full'}
        ${person === 'yon' && (currentPerson === 'yon' ? "" : 'left-full')} `}
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
      {
        funfact &&
        <span className="text-sm max-w-md block text-[rgb(130,130,130)] mt-4 mx-auto dark:text-background_main_l dark:opacity-50">
          <span className="text-details dark:text-buttons_main">Funfact: </span>
          {funfact}
        </span>
      }
      <div className="flex justify-center w-full gap-3 mt-5 mb-16">
        {
          person === 'yon' ?
            <>
              <a href='https://www.instagram.com/yoni_oc/' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-[#E1306C] rounded-xl '>
                <BsInstagram className='h-8 w-8 fill-[#E1306C] ' />
              </a>
              <a href='https://github.com/yonext24' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-[black] rounded-xl '>
                <BsGithub className='h-8 w-8 fill-[black] ' />
              </a>
              <a href='https://wa.me/1126665538' target='_blank' rel="noreferrer" className='py-2 px-4 border-[2px] border-[green] rounded-xl '>
                <BsWhatsapp className='h-8 w-8 fill-[green] ' />
              </a>
            </>
            :
            <>
              <a href='https://twitter.com/mendoza000x' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-buttons_main rounded-xl '>
                <BsTwitter className='h-8 w-8 fill-buttons_main ' />
              </a>
              <a href='https://github.com/mendoza000' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-[black] rounded-xl '>
                <BsGithub className='h-8 w-8 fill-[black] ' />
              </a>
              <a href='https://wa.me/+584164793843' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-[green] rounded-xl '>
                <BsWhatsapp className='h-8 w-8 fill-[green] ' />
              </a>
            </>
        }
      </div>
    </div>
  );
};

export default Person;
