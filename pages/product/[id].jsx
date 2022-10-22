import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import data from "../api/data.json"
import Image from 'next/image'
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";


export default function Product() {
  const [product, setProduct] = useState(null)
  const [amount, setAmount] = useState(1)
  const [selectedSize, setSelectedSize] = useState(38)
  const [image, setImage] = useState(null)
  const [isBuying, setIsBuying] = useState(false)
  const router = useRouter()
  const id = router.query.id
  
  const sizes = [37,38,39,40,41,42,43,44,45]

  useEffect(() => {
    const rawProduct = data.find(element => element.id === parseInt(id))
    setProduct(rawProduct)
  }, [id])
  useEffect(() => {
    if (product) {
      const finalImage = product.secondaryPhotos.find(el => {
        return el.id === 1
      })
      setImage(finalImage)
    }
  }, [product])
  const handleUpAmount = () => {
    if (amount > 8) return
    setAmount(amount + 1)
  }
  const handleDownAmount = () => {
    if (amount <= 1) return
    setAmount(amount - 1)
  }

  if (product === null || product === undefined) return null

  return <div className='w-screen h-screen flex flex-col bg-background_main_l'>
    <section className='w-full mt-4 relative'>
      <h2 className='text-1xl text-center font-Rubik mt-1 font-bold'>{product.name}</h2>
      <AiOutlineHeart className='w-8 h-8 absolute right-3 top-0' />
    </section>
    <section className='w-full h-[60vh] mb-4 flex items-center overflow-hidden ' >
      <div className='ml-auto mr-auto rounded-md bg-background_main_l w-11/12 h-full overflow-hidden relative after:bg-[url("/nike-logo.svg")] after:h-full
      after:w-full after:max-w-[330px] after:content-[""] after:absolute after:bg-no-repeat after:bg-gray after:top-1/2 after:left-1/2 after:-translate-x-1/2
      after:-translate-y-[50%] after:z-0 after:bg-center after:bg-cover after:contrast-100 '>
        {/* After es la imágen de nike */}
        <div className='mb-auto relative h-5/6 w-full overflow-hidden z-20'>
          {
            image &&
            <Image
            alt='main shoe photo'
            layout='fill'
            // Layout fill para que la imágen se amolde al height y width del parent, tiene que estar acompañado de objectFit='contain'
            objectFit='contain'
            src={image ? image.src : ''}
            className={`${image?.id === 1 ? '-rotate-45' : ''} z-20 `}
          />
          }
        </div>
        <div className='flex flex-col h-[95%] tall:h-3/4 justify-between w-7 absolute text-xs top-0 left-2 z-[21]'>
          <span className='text-sm mt-2'>Size</span>
          {
            sizes.map(size => {
              return <div key={size} className={`w-full h-7 ${selectedSize === size ? 'bg-gray' : 'bg-black bg-opacity-50 text-background_main_l'} rounded-md grid place-content-center`}
              onClick={() => {setSelectedSize(size)}}>{size}</div>
            })
          }
        </div>
        <div className='absolute bottom-3 left-0 w-full flex justify-end h-[70px] z-20'>
          {product.secondaryPhotos.map(photo => {
            return (
              <div key={photo.id} className='w-[70px] h-[70px] inline-block relative ml-1 cursor-pointer' onClick={() => { setImage(photo) }}>
                {
                  image?.id !== photo.id &&
                  <div className='absolute w-full h-full top-1/2 -translate-y-1/2 left-0 bg-[rgba(55,55,55,.4)] z-10 rounded-lg'>
                    <AiOutlineEye className='h-full w-3/6 m-auto mt-auto text-gray opacity-30' />
                  </div>
                }
                <Image
                  alt='Shoe Photo'
                  width={70}
                  height={70}
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
      <button className='bg-buttons_main w-11/12 p-4 rounded-lg ml-auto mr-auto mt-auto mb-3 text-fonts_main font-extrabold '
        onClick={() => { setIsBuying(true) }}>Buy!</button>
    </section>
    <div className={`w-screen h-screen transition-opacity duration-300 pointer-events-none opacity-0 bg-black fixed z-40
    top-0 left-0${isBuying ? ' pointer-events-auto opacity-20 ' : ''}`} onClick={() => { setIsBuying(false) }}>
    </div>
    <div className={`w-full rounded-3xl fixed bottom-0 z-40 left-0 translate-y-full transition-transform
    ${isBuying ? ' pointer-events-auto translate-y-0' : ''} `} >
      <div className={`h-full w-[95%] rounded-t-3xl mt-auto ml-auto mr-auto flex flex-col justify-between bg-background_main_l`}>
        <div className='absolute top-2 w-1/3 border-2 border-[rgba(80,80,80,0.2)] left-[50%] -translate-x-1/2  ' />
        <h4 className='text-[1.4rem] text-fonts_main ml-auto mr-auto mt-7'>{product.name}</h4>
        <span className='m-auto mb-1 text-details font-bold'>Size {selectedSize}</span>
        <div className='grid grid-cols-2 w-full text-fonts_secondary place-content-center mb-6'>
          <h4 className='text-2xl m-auto' > {Number.parseFloat(product.price * amount).toFixed(2)} </h4>
          <div className='m-auto'>
            <button onClick={handleDownAmount} className='rounded-md border-details text-black border-2 px-2 self-center'>
              -
            </button>
            <span className='text-2xl mx-3'>{amount}</span>
            <button onClick={handleUpAmount} className='rounded-md bg-details border-details text-black border-2 px-2 self-center'>
              +
            </button>
          </div>
        </div>
        <p className='text-fonts_secondary text-base tall:text-lg w-[90%] mx-auto mt-1 text-center mb-8'>{product.description}</p>
        <div className='w-full flex justify-center items-center '>
          <button className='w-[45%] cursor-pointer bg-opacity-40 text-opacity-40 mr-2 pt-3 pb-3 mb-2 hover:bg-opacity-70 transition-colors
         duration-200 grid grid-cols-[30%,70%] place-content-center bg-buttons_main rounded-md'>
            <BsCreditCard className='h-6 w-6 m-auto' />
            <span className='mr-4'>
              Buy
            </span>
          </button>
          <button className='w-[45%] cursor-pointer bg-opacity-40 text-opacity-40 ml-2 pt-3 pb-3 mb-2 hover:bg-opacity-70 transition-colors
         duration-200 grid grid-cols-[20%,80%] place-content-center bg-details rounded-md'>
            <AiOutlineShoppingCart className='h-6 w-6 ml-auto' />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
}