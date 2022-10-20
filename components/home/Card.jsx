import Image from "next/image";
import { HiOutlineStar, HiStar } from "react-icons/hi";


const Card = ({ image, name, id, rating, price }) => {
  const map = ["", "", "", "", ""];

  return (
       <div className="flex flex-col items-center justify-center pb-4 rounded-md transform-to-children bg-background_main_l custom-shadow relative cursor-pointer " >
      <a href={`product/${id}`} className="h-full w-full z-20">
        {/* ^ REEMPLAZAR POR LINK */}
      <div className="children-custom-class mt-[-65%] mb-[10%] transition-transform pointer-events-none z-20">
        <Image
          src={image}
          width={220}
          height={220}
          alt={"air-force"}
          className="pointer-events-none -rotate-12 -translate-x-4 "
        />
      </div>
      <div className="relative w-full h-6">
        <h4 className="min-w-full absolute top-0 left-0 text-xs font-semibold text-left z-20 fill-black ">
          {name}
        </h4>
      </div>
      <div className="flex items-center justify-around min-w-full">
        <p className="z-20 text-lg font-semibold text-left text-fonts_main">
          <span className="z-20">$</span>
          {price}
        </p>

        <div className="flex items-center justify-center">
          <HiStar className="z-20 fill-fonts_main" />
          <HiStar className="z-20 fill-fonts_main" />
          <HiStar className="z-20 fill-fonts_main" />
          <HiStar className="z-20 fill-fonts_main" />
          <HiStar className="z-20 fill-fonts_main" />
        </div>
      </div>
      <div className="absolute top-0 left-0 z-10 w-full h-full overflow-hidden rounded-md">
        <div className="z-10 skewed-bg bg-buttons_main" />
      </div>
      </a>
    </div>
  );
};

export default Card;
