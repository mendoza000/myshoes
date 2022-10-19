import Image from "next/image";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const Card = ({ image, name, id, price }) => {
  console.log(image)
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
        <p className="text-lg font-semibold text-left text-fonts_main z-20">
          <span className="z-20">$</span>
          160
        </p>

        <div className="flex items-center justify-center">
          <HiStar className="fill-fonts_main z-20" />
          <HiStar className="fill-fonts_main z-20" />
          <HiStar className="fill-fonts_main z-20" />
          <HiStar className="fill-fonts_main z-20" />
          <HiOutlineStar className="stroke-buttons_main" />
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 rounded-md overflow-hidden z-10">
        <div className="skewed-bg z-10 bg-buttons_main" />
      </div>
      </a>
    </div>
  );
};

export default Card;
