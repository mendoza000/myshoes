import Image from 'next/image';
import React from 'react'
import SecondaryPhotos from './SecondaryPhotos';
import Sizes from './Sizes';

export default function ProductImage({ image, selectedSize, setSelectedSize, photos, setImage }) {

  return (
    <section className="w-full h-[60vh] mb-4 flex flex-col items-center md:min-h-full md:max-w-[50%] relative justify-center ">
      <div
        className='ml-auto mr-auto rounded-md bg-background_main_l w-11/12 h-full md:h-[56%] overflow-hidden relative after:bg-[url("/nike-logo.svg")] after:h-full
after:w-full after:max-w-[330px] after:content-[""] after:absolute after:bg-no-repeat after:bg-gray after:top-1/2 after:left-1/2 after:-translate-x-1/2
after:-translate-y-[50%] after:z-0 after:bg-center after:bg-cover after:contrast-100 after:opacity-60 md:mb-8 dark:bg-bg_dark_o '
      >
        {/* After es la imágen de nike */}
        <div className="relative z-20 w-full mb-auto overflow-hidden h-5/6">
          {image && (
            <Image
              alt="main shoe photo"
              layout="fill"
              // Layout fill para que la imágen se amolde al height y width del parent, tiene que estar acompañado de objectFit='contain'
              objectFit="contain"
              src={image ? image.src : ""}
              className={`${image?.id === 1 ? "-rotate-45" : ""} z-20 `}
            />
          )}
        </div>
        <div className="flex flex-col h-[95%] tall:h-3/4 justify-between w-7 absolute text-xs top-0 left-2 z-[21] md:hidden">
          <span className="mt-2 text-sm">Size</span>
          <Sizes selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        </div>
        <div className="absolute bottom-3 left-0 w-full flex justify-end h-[70px] z-20 md:hidden">
          <SecondaryPhotos photos={photos} image={image} setImage={setImage} />
        </div>
      </div>
      <div className="absolute items-center justify-center hidden w-full md:flex bottom-0 h-[40vh]">
        <SecondaryPhotos photos={photos} image={image} setImage={setImage} />
      </div>
    </section>
  )
}