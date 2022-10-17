import Image from "next/image";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-4 rounded-md transform-to-children bg-background_main_l custom-shadow relative cursor-pointer " >
      <div className="children-custom-class mt-[-35%] transition-transform pointer-events-none -mb-7 -ml-4 z-20">
        <Image
          src={"/air-force-1-07-x1.png"}
          width={"300"}
          height={"330"}
          alt={"air-force"}
          className="pointer-events-none -rotate-12 "
        />
      </div>
      <h4 className="min-w-full mt-2 ml-8 text-xl font-semibold text-left z-20 fill-black">
        Air force 1
      </h4>
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
    </div>
  );
};

export default Card;
