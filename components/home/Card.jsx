import Image from "next/image";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-4 rounded-md shadow-xl bg-background_main_l">
      <Image
        src={"/air-force-1-07-x1.png"}
        width={"300"}
        height={"330"}
        alt={"air-force"}
        className="-rotate-12"
      />
      <h4 className="min-w-full ml-8 -mt-5 text-xl font-semibold text-left">
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
