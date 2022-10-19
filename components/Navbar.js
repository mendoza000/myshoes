import React, { useState } from 'react'
import { CiGrid41, CiDark, MdDarkMode as DarkMode } from "react-icons/ci";
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsPerson } from "react-icons/bs";


export default function Navbar() {
  const [navShowing, setNavShowing] = useState(false)
  const handleOpenNavbar = () => {
    setNavShowing(true)
  }
  const handleNavClose = () => {
    setNavShowing(false)
  }

  // useEffect(() => {
  //   const handleResize = e => {
  //     console.log('redimesión', e.target.innerWidth, e.target.innerHeight)
  //   }
  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  // ^ PARA CHECKEAR EL RESIZE Y APLICAR RENDERIZADO CONDICIONAL DE LA NAVBAR


  return <>
    <div className={`fixed top-4 left-4${!navShowing ? '' : ' opacity-0 '} transition-opacity z-40 cursor-pointer `}>
      <CiGrid41 className='w-8 h-8' onClick={handleOpenNavbar} />
    </div>
    <nav className={`w-2/3 bg-background_main transition-transform duration-300 h-full fixed flex flex-col justify-between
    top-0 left-0 pointer-events-none -translate-x-full text-fonts_main font-semibold max-w-[300px] min-w-[220px] z-50
    ${navShowing ? ' transform-none pointer-events-auto ' : ''}`} >
      <div className='w-full'>
        <a href='/'>
          {/* REEMPLAZAR POR LINK ^ */}
          <div className='w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main'>
            <AiOutlineHome className='w-8 h-8' />
            <span className='text-lg flex content-center '>Home</span>
          </div>
        </a>
        <div className='w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main'>
          <AiOutlineShoppingCart className='h-8 w-8' />
          <span className='text-lg flex content-center'>Cart</span>
        </div>
        <div className='w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main'>
          <AiOutlineStar className='h-8 w-8' />
          <span className='text-lg flex content-center'>Favorites</span>
        </div>
        <div className='w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main'>
          <MdOutlineAdminPanelSettings className='h-8 w-8' />
          <span className='text-lg flex content-center'>Admin Dashboard</span>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main'>
          <BsPerson className='h-8 w-8' />
          <span className='text-lg flex content-center'>About Us</span>
        </div>
        <div className='w-full h-14 grid grid-cols-[15%,85%] place-content-center cursor-pointer transition-colors
         hover:bg-buttons_main'>
          <CiDark className='h-8 w-8' />
          <span className='text-lg flex content-center'>Dark Mode</span>
        </div>
      </div>
    </nav>
    <section className={`w-screen h-screen transition-opacity duration-300 pointer-events-none opacity-0 bg-black fixed z-40
    top-0 left-0${navShowing ? ' pointer-events-auto opacity-80 ' : ''}`}
      onClick={handleNavClose} />
  </>
}