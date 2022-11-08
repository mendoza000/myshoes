import Image from "next/image";

const PromoCard = ({ id, name, img }) => {
  const handleOpen = () => {
    const slider = document.querySelector(".custom-slider");
    slider.scrollTo(1000, 0);
  };

  return (
    <div className="grid grid-cols-2 p-4 mt-8 shadow-xl rounded-xl bg-gradient-to-r from-buttons_main to-[#36D1DC] max-h-32 fix-rotate min-w-[20rem] max-w-[20rem] justify-center mx-auto">
      <div className="flex flex-col gap-1">
        <span className="text-fonts_main">Promotion!</span>
        <p className="text-xl">Jordan ADG 4</p>
        <button
          onClick={handleOpen}
          className="px-4 py-1 bg-opacity-90 bg-background_main_l rounded-xl"
        >
          View product
        </button>
      </div>

      <Image
        src={"/Nike Air Max 90 Futura w/main.png"}
        width={200}
        height={200}
        alt="promo-img"
        className="scale-110 -rotate-[30deg] -translate-y-10 -translate-x-0"
      />
    </div>
  );
};

export default PromoCard;
