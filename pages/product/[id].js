import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import data from "../api/data.json"
import Image from 'next/image'
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


export default function Product() {
  const [product, setProduct] = useState(null)
  const router = useRouter()
  const id = router.query.id
  useEffect(() => {
    const rawProduct = data.find(element => element.id === parseInt(id))
    setProduct(rawProduct)
  }, [id])

  if (product === null || product === undefined) return null

  return <div className='w-screen h-screen flex flex-col bg-background_main_l'>
    <section className='w-full mt-4 relative'>
      <h2 className='text-1xl text-center font-Rubik mt-1 font-bold'>{product.name}</h2>
      <AiOutlineHeart className='w-8 h-8 absolute right-3 top-0' />
    </section>
    <section className='w-full h-[60vh] mb-4 flex items-center overflow-hidden ' >
      <div className='ml-auto mr-auto rounded-md bg-background_main_l w-11/12 h-full overflow-hidden relative mt-5 after:bg-[url("/nike-logo.svg")] after:h-full
      after:w-full after:max-w-[330px] after:content-[""] after:absolute after:bg-no-repeat after:bg-gray after:top-1/2 after:left-1/2 after:-translate-x-1/2
      after:-translate-y-[50%] after:z-0 after:bg-center after:bg-cover after:contrast-100 '>
        {/* After es la imágen de nike */}
        <div className='mb-auto relative h-5/6 w-full overflow-hidden z-20'>
          <Image
            alt='main shoe photo'
            layout='fill'
            // Layout fill para que la imágen se amolde al height y width del parent, tiene que estar acompañado de objectFit='contain'
            objectFit='contain'
            src={product.source}
            className='-rotate-45 z-20 '
          />
        </div>
        <div className='absolute bottom-3 left-0 w-full flex justify-end h-[80px] z-20'>
          {product.secondaryPhotos.map(photo => {
            return (
              <div key={photo.id} className='w-[80px] h-[80px] inline-block relative ml-1'>
                <div className='absolute w-full h-full top-1/2 -translate-y-1/2 left-0 bg-[rgba(55,55,55,.4)] z-10 rounded-lg'></div>
                <Image
                  alt='Shoe Photo'
                  width={80}
                  height={80}
                  objectFit='contain'
                  src={photo.src}
                />
              </div>
            )
          }
          )}
          <div className='w-[80px] h-[80px] inline-block relative ml-1'>
            <Image
              alt='Shoe Photo'
              width={80}
              height={80}
              objectFit='contain'
              src={product.source}
              className=''
            />
            {/* Eliminar después ^ */}
          </div>
        </div>
      </div>
    </section>
    <section className='w-full flex flex-col'>
      <div className='w-full flex justify-between mb-3'>
        <div>
          <h3 className='text-3xl font-bold inline ml-4 text-fonts_main'>${product.price.toString().split('.')[0]}</h3>
          <span className='inline text-lg text-fonts_main'>.{product.price.toString().split('.')[1]}</span>
        </div>
        <div className='flex items-center mr-4'>
          {
            product.rating.map((star, index) => {
              if (star) return <HiStar key={index} className='fill-fonts_main' />
              return <HiOutlineStar key={index} />
            })
          }
        </div>
      </div>
    </section>
    <section className='flex flex-col h-[27vh]'>
      <p className='text-fonts_secondary w-10/12 text-center m-auto mb-5 text-xs tall:text-base :'>{product.description}</p>
      <button className='bg-buttons_main w-11/12 p-5 rounded-lg ml-auto mr-auto mt-auto mb-3 text-fonts_main font-extrabold '>Buy!</button>
    </section>
  </div>
}