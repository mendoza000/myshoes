import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import data from "../api/data.json"
import Image from 'next/image'
import { HiOutlineStar, HiStar } from "react-icons/hi";


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
    <section className='w-full h-[60vh] relative mt-8' >
      <div className='ml-auto w-11/12 mt-5'>
        <Image
          alt='main shoe photo'
          width={300}
          height={300}
          src={product.source}
          className='-rotate-45'
        />
        <div className='absolute top-5 left-0 flex flex-col w-1/5 h-full'>
          {product.secondaryPhotos.map(photo => {
            return (
              <div key={photo.id} className='w-full h-1/5 relative'>
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