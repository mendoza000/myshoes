import useIntersectionObserver from "hooks/useIntersectionObserver";
import Image from "next/image";

const LongCard = ({ name, cardPhoto, id, price, isBlack }) => {
  const handleOpen = () => {
    const slider = document.querySelector(".custom-slider");
    slider.scrollTo(1000, 0);
  };
  const {isInViewPort, fromRef} = useIntersectionObserver()

  return (
    <div ref={fromRef} className={`grid relative grid-cols-2 p-4 mx-5 mt-8 shadow-xl rounded-xl h-32 ${isBlack ? 'bg-dark_gray' : 'bg-light_gray'} -z-20
    fix-rotate min-w-[20rem] after:bg-[url("/nike-noletters.svg")] after:w-full after:h-full after:-z-10  
     after:absolute after:bg-no-repeat after:top-1/2 after:left-1/2 after:-translate-x-1/2
     after:-translate-y-[50%] ${isBlack ? 'after:opacity-70 after:contrast-0' : 'after:opacity-50'} after:bg-center`} > 
      <div className="flex flex-col gap-1">
        <p className={`text-xl w-full ${isBlack && 'text-background_main_l'}`}>{name}</p>
        <button
          onClick={handleOpen}
          className={`px-4 py-1 bg-opacity-90 mt-auto mb-12 ${isBlack ? 'bg-light_gray' : 'bg-background_main_l'} rounded-xl`}
        >
          {price}
        </button>
      </div>

      <Image
        src={cardPhoto}
        layout={"responsive"}
        width={230}
        height={230}
        alt="promo-img"
        className={`scale-125 transition-transform duration-1000 ${isInViewPort && '-rotate-[30deg] -translate-x-5'} -translate-y-20`}
      />
    </div>
  );
};

export default LongCard;
