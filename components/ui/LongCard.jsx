import useIntersectionObserver from "hooks/useIntersectionObserver";
import Image from "next/image";
import { useState } from "react";

const LongCard = ({ name, cardPhoto, id, price, isBlack }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const handleOpen = () => {
    const slider = document.querySelector(".custom-slider");
    slider.scrollTo(1000, 0);
  };
  const { isInViewPort, fromRef } = useIntersectionObserver()

  return (
    <div ref={fromRef} className={`grid relative grid-cols-2 p-4 mx-5 mt-8 shadow-xl rounded-xl ${isBlack ? 'bg-dark_gray' : 'bg-light_gray'}
     -z-20 fix-rotate min-w-[20rem] max-h-32 after:bg-[url("/nike-noletters.svg")] after:w-full after:h-full after:-z-10 after:absolute after:bg-no-repeat after:top-1/2 after:left-1/2 after:-translate-x-1/2  after:-translate-y-[50%]
     ${isBlack ? 'after:opacity-70 after:contrast-0' : 'after:opacity-50'} after:bg-center`} >
      <div className="flex flex-col gap-1">
        <p className={`text-xl w-full h-14 ${isBlack && 'text-background_main_l'}`}>{name}</p>
        <button
          onClick={handleOpen}
          className={`px-4 py-1 bg-opacity-90 mt-2 mb-auto ${isBlack ? 'bg-light_gray' : 'bg-background_main_l'} rounded-xl`}
        >
          {price}
        </button>
      </div>
      <Image
        src={cardPhoto}
        layout={"responsive"}
        width={230}
        height={230}
        alt="shoe image"
        className={`scale-125 transition-transform duration-1000 ${isInViewPort ? '-rotate-[30deg] -translate-x-5' : '-rotate-[15deg]'} -translate-y-20`}
        onLoad={() => { setIsImageLoaded(true) }}
      />
      <div className={`waveform absolute right-12 top-10 ${isImageLoaded && 'opacity-0'}`}>
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
        </div>
    </div>
  );
};

export default LongCard;
