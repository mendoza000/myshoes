import Image from "next/image";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const Card = ({ source, name, id, rating, price }) => {
  const map = ["", "", "", "", ""];

  return (
    <div className="relative flex flex-col items-center justify-center pb-4 rounded-md cursor-pointer transform-to-children bg-background_main_l custom-shadow ">
      <div className="children-custom-class mt-[-35%] transition-transform pointer-events-none -mb-7 -ml-4 z-20">
        <Image
          src={source}
          width={"300"}
          height={"330"}
          alt={"air-force"}
          className="pointer-events-none -rotate-12 "
        />
      </div>
      <h4 className="z-20 min-w-full mt-2 ml-8 text-xl font-semibold text-left fill-black">
        Air force 1
      </h4>
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
    </div>
  );
};

export default Card;
