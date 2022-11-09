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
    <div className="grid items-center justify-center grid-cols-2 gap-3 pr-4 bg-background_main_l custom-shadow rounded-xl fix-rotate max-h-40">
      <Image
        src={secondaryPhotos[0].src}
        width={200}
        height={250}
        alt="Woman4"
        className=" -rotate-[15deg] lg:-translate-y-10"
      />

      <div className="flex flex-col justify-center gap-3 lg:-translate-y-12">
        <h3 className="font-bold">{name}</h3>
        <span className="flex items-center justify-center max-w-[7rem] rounded-xl bg-buttons_main bg-opacity-20 shadow-sm">
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
