import { cartRemoveItem } from "@store/actions/cart";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const Card = ({ secondaryPhotos, name, price, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(cartRemoveItem({ id }));
  };

  return (
    <div className="grid items-center justify-center grid-cols-2 gap-3 pr-4 bg-background_main_l custom-shadow rounded-xl fix-rotate max-h-40 dark:bg-bg_dark_o">
      <div className="flex justify-center items-center">
        <Image
          src={secondaryPhotos[0].src}
          width={200}
          height={200}
          alt="Woman4"
          className=" -rotate-[15deg] -translate-y-5 md:-translate-y-1 lg:-translate-y-5"
        />
      </div>
      <div className="flex flex-col justify-center gap-3 -translate-y-5 md:-translate-y-1 lg:-translate-y-5">
        <h3 className="font-bold dark:text-background_main_l">{name}</h3>
        <span className="flex items-center justify-center max-w-[7rem] rounded-xl bg-buttons_main bg-opacity-20 shadow-sm dark:text-bg_dark_o dark:bg-opacity-100">
          $ {price}
        </span>
        <button
          onClick={handleDelete}
          className="bg-[#FF0063] bg-opacity-80 text-background_main_l shadow-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
