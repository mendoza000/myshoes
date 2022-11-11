import React, { useState } from 'react'
import { HiLanguage } from "react-icons/hi2";
import { BsGithub, BsTwitter, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import data from "./api/about.json"
import Image from 'next/image';

export default function About_us() {
  const [language, setLanguage] = useState('en')
  const [currentPerson, setCurrentPerson] = useState('omar')

  const handleLanguageChange = () => {
    language === 'en' ? setLanguage('es') : setLanguage('en')
  }
  return <div className='min-h-screen w-full flex items-center flex-col bg-background_main_l overflow-x-hidden'>
    <button className='absolute right-8 top-5 flex items-center text-md'
      onClick={handleLanguageChange}>
      <HiLanguage className='fill-fonts_main h-7 w-7' />
      {
        language === 'en' ? 'Cambiar a Español' : 'Change to English'
      }
    </button>
    <div className='mt-16 w-full'>
      <h1 className='text-5xl text-center text-fonts_main'>{data[language].title}</h1>
    </div>
    <div className='mt-6 w-11/12 text-center text-fonts_secondary'>
      <h3 className='max-w-screen-sm mx-auto'>{data[language].description}</h3>
    </div>
    <div className='w-1/2 mx-auto flex flex-wrap gap-4 justify-center mt-4'>
      <div className='rounded-md flex items-center gap-2 px-4 py-2 bg-[#61DBFB]'>
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
    <div className='w-full mt-6 '>
      <a href='https://github.com/mendoza000/myshoes' target='_blank' rel='noreferrer' className='w-max bg-black text-[rgb(255,255,255)] rounded-md p-3 mx-auto flex'>
        <BsGithub className='fill-[#FFF] h-6 w-6 my-auto mr-2' />
        {
          data[language].gitbutton
        }
      </a>
    </div>
    <div className='w-full flex justify-center items-center mt-6 text-lg'>
      <div className='flex justify-center gap-6 items-center relative text-2xl'>
        <button className={``}
          onClick={() => setCurrentPerson('omar')} >Omar</button>
        <button className={``}
          onClick={() => setCurrentPerson('yon')}>Yonathan</button>
        <span className={`w-8 h-[3px] transition-all bg-buttons_main absolute bottom-0 
        ${currentPerson === 'omar' ? 'left-0 translate-x-0' : 'left-[calc(100%-4rem)] w-16 translate-x-0'}`} />
      </div>
    </div>
    <div className='w-full flex relative max-w-screen-md justify-center'>
      <div className={`w-full flex flex-col transition-all absolute right-0 translate-x-0 ${currentPerson === 'yon' && 'right-full'}`}>
        {/* 
        ------------------------------------------------------------------------------------
                                              OMAR
        ------------------------------------------------------------------------------------
      */}
        <div className={`flex w-11/12 mx-auto mt-4 items-center gap-5 justify-center bg-background_main_l`}>
          <div className='w-1/3'>
            <h3 className='text-3xl text-fonts_main text-center'>{data.ourData.omar.name}</h3>
            <h4 className='text-md mt-3 text-center'>{data.ourData.omar.smalldesc[language]}</h4>
          </div>
          <Image
            src={data.ourData.omar.photo}
            alt='profile pic'
            width={150}
            height={150}
            className='rounded-[50%]' />
        </div>
        <p className='text-md w-11/12 max-w-[550px] mx-auto mt-4 text-fonts_main'>{data.ourData.omar.description[language]}</p>
        <div className='flex w-full justify-center mt-5 gap-3 mb-16'>
          <a href='https://twitter.com/mendoza000x' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-buttons_main rounded-xl '>
            <BsTwitter className='h-8 w-8 fill-buttons_main ' />
          </a>
          <a href='https://github.com/mendoza000' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-[black] rounded-xl '>
            <BsGithub className='h-8 w-8 fill-[black] ' />
          </a>
          <a href='https://wa.me/+584164793843' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-[green] rounded-xl '>
            <BsWhatsapp className='h-8 w-8 fill-[green] ' />
          </a>
        </div>
      </div>
      <div className={`w-full flex flex-col transition-all absolute left-0 translate-x-0 ${currentPerson === 'omar' && 'left-full'}`}>
        {/* 
        --------------------------------------------------------------------------------------
                                        YONEXT
        ---------------------------------------------------------------------------------------
         */}
        <div className={`flex w-11/12 mx-auto mt-4 gap-6 items-center justify-center`}>
          <div className='w-1/3'>
            <h3 className='text-3xl text-fonts_main text-center'>{data.ourData.yon.name}</h3>
            <h4 className='text-md mt-3 text-center'>{data.ourData.yon.smalldesc[language]}</h4>
          </div>
          <Image
            src={data.ourData.yon.photo}
            alt='profile pic'
            width={150}
            height={150}
            className='rounded-[50%]' />
        </div>
        <p className='text-md w-11/12 max-w-[550px] mx-auto mt-4 text-fonts_main'>{data.ourData.yon.description[language]}</p>
        <span className='text-sm w-2/3 max-w-[400px] block text-[rgb(130,130,130)] mt-4 mx-auto'>{data.ourData.yon.funfact[language]}</span>
        <div className='flex w-full justify-center mt-5 gap-3 mb-16'>
          <a href='https://www.instagram.com/yoni_oc/' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-[#E1306C] rounded-xl '>
            <BsInstagram className='h-8 w-8 fill-[#E1306C] ' />
          </a>
          <a href='https://github.com/yonext24' target='_blank' rel='noreferrer' className='py-2 px-4 border-[2px] border-[black] rounded-xl '>
            <BsGithub className='h-8 w-8 fill-[black] ' />
          </a>
          <a href='https://wa.me/1126665538' target='_blank' rel="noreferrer" className='py-2 px-4 border-[2px] border-[green] rounded-xl '>
            <BsWhatsapp className='h-8 w-8 fill-[green] ' />
          </a>
        </div>
      </div>
    </div>
  </div >
}