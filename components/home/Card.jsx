import useIntersectionObserver from "hooks/useIntersectionObserver";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiOutlineStar, HiStar } from "react-icons/hi";


const Card = ({ image, name, id, rating, price }) => {
  const router = useRouter();
  // const {isInViewPort, fromRef} = useIntersectionObserver()

  const handleOpenProduct = () => {
    router.push(`/product/${id}`);
    const bottomNav = document.querySelector(".bottom-navbar");
    bottomNav.classList.add("hidden");
  };

  return (
    <div
      ref={fromRef} 
      onClick={handleOpenProduct}
      className="flex flex-col items-center justify-center pb-4 rounded-md transform-to-children bg-background_main_l custom-shadow relative cursor-pointer min-h-[13rem]"
    >
      <a className="h-full w-full z-30">
        {/* ^ REEMPLAZAR POR LINK */}
        <div className="children-custom-class mt-[-38%] mb-[10%] transition-transform pointer-events-none z-30">
          <Image
            src={image}
            width={220}
            height={220}
            alt={"air-force"}
            className={`pointer-events-none -rotate-12 -translate-x-4 z-30 ${isInViewPort && 'scale-150'} `}
          />
        </div>
        <div className="relative w-full h-6">
          <h4 className="min-w-full absolute top-0 left-0 text-xs font-semibold text-left z-20 fill-black ">
            {name}
          </h4>
        </div>
        <div className="flex flex-col items-center min-w-full">
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
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-md">
          <div className="skewed-bg -z-10 bg-buttons_main" />
        </div>
      </a>
    </div>
  );
};

export default Card;
