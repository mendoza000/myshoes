import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import data from "../api/data.json"
import Image from 'next/image'
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { SiNike } from "react-icons/si";


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
    <section className='w-full h-[57vh] mb-4 flex items-center ' >
      <div className='ml-auto mr-auto rounded-md bg-gray w-11/12 h-full overflow-hidden relative mt-5 after:bg-[url("/nike-logo.svg")] after:h-[inherit]
      after:w-[inherit] after:max-w-[350px] after:content-[""] after:absolute after:bg-no-repeat after:bg-gray after:top-1/2 after:left-1/2 after:-translate-x-1/2
      after:-translate-y-[42%] after:z-0 after:bg-center after:bg-cover after:contrast-100 '>
        <div className='h-full w-full image-correct-centering z-20'>
          <Image
            alt='main shoe photo'
            layout='fill'
            // Layout fill para que la imágen se amolde al height y width del parent, tiene que estar acompañado de objectFit='contain'
            objectFit='contain'
            src={product.source}
            className='-rotate-45 z-20'
          />
        </div>
        <div className='absolute bottom-0 right-0 inline-flex gap-1 w-56 h-1/4 z-20'>
          {product.secondaryPhotos.map(photo => {
            return (
              <div key={photo.id} className='w-full relative'>
                <div className='absolute w-full h-[70%] top-1/2 -translate-y-1/2 left-0 bg-[rgba(55,55,55,.4)] z-10 rounded-lg'></div>
                <Image
                  alt='Shoe Photo'
                  layout='fill'
                  objectFit='contain'
                  src={photo.src}
                />
              </div>
            )
          }
          )}
          <div className='w-full relative'>
            <Image
              alt='Shoe Photo'
              layout='fill'
              objectFit='contain'
              src={product.source}
            />
            {/* Eliminar después ^ */}
          </div>
        </div>
      </div>
    </section>
    <section className='w-full h-[40vh] flex flex-col'>
      <div className='w-full flex justify-between mb-3'>
        <h3 className='text-3xl font-bold ml-4 text-fonts_main'>${product.price}</h3>
        <div className='flex items-center mr-4'>
          {
            product.rating.map((star, index) => {
              if (star) return <HiStar key={index} className='fill-fonts_main' />
              return <HiOutlineStar key={index} />
            })
          }
        </div>
      </div>
      <p className='text-fonts_secondary w-10/12 text-center m-auto text-xs'>{product.description}</p>
      <button className='bg-buttons_main w-11/12 p-5 rounded-lg ml-auto mr-auto mt-auto mb-3 text-fonts_main font-extrabold '>Buy!</button>
    </section>
  </div>
}