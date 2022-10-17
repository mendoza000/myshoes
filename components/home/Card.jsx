import Image from "next/image";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-4 rounded-md transform-to-children bg-background_main_l custom-shadow">
      <div className="children-custom-class mt-[-35%] transition-transform pointer-events-none -mb-7 -ml-4">
        <Image
          src={"/air-force-1-07-x1.png"}
          width={"300"}
          height={"330"}
          alt={"air-force"}
          className="pointer-events-none -rotate-12"
        />
      </div>
      <h4 className="min-w-full mt-2 ml-8 text-xl font-semibold text-left">
        Air force 1
      </h4>
      <div className="flex items-center justify-around min-w-full">
        <p className="text-lg font-semibold text-left text-fonts_secondary">
          <span className="">$</span>
          160
        </p>

        <div className="flex items-center justify-center">
          <HiStar className="fill-buttons_main" />
          <HiStar className="fill-buttons_main" />
          <HiStar className="fill-buttons_main" />
          <HiStar className="fill-buttons_main" />
          <HiOutlineStar className="stroke-buttons_main" />
        </div>
      </div>
    </div>
  );
};

export default Card;
