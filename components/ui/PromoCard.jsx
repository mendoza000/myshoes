import Image from "next/image";

const PromoCard = ({ id, name, img, onlyLg }) => {
  const handleOpen = () => {
    const slider = document.querySelector(".custom-slider");
    slider.scrollTo(1000, 0);
  };

  return (
    <div
      className={`grid grid-cols-2 p-4 mt-8 shadow-xl rounded-xl bg-gradient-to-r from-buttons_main to-[#36D1DC] max-h-32 fix-rotate min-w-[20rem] max-w-[20rem] justify-center mx-auto ${
        onlyLg ? "hidden lg:grid" : ""
      }`}
    >
      <div className="flex flex-col gap-1">
        <span className="text-fonts_main">Promotion!</span>
        <p className="text-xl">{name}</p>
        <button
          onClick={handleOpen}
          className="px-4 py-1 duration-300 bg-opacity-90 bg-background_main_l rounded-xl hover:scale-110"
        >
          View product
        </button>
      </div>

      <Image
        src={img}
        width={200}
        height={200}
        alt="promo-img"
        className="scale-110 -rotate-[30deg] -translate-y-6 -translate-x-0"
      />
    </div>
  );
};

export default PromoCard;
