import Image from "next/image";
import React from "react";

const Card = ({ cardPhoto, name, price, id }) => {
  return (
    <div className="grid items-center justify-center grid-cols-2 gap-3 pr-4 bg-background_main_l custom-shadow rounded-xl fix-rotate max-h-40">
      <Image
        src={cardPhoto}
        width={200}
        height={250}
        alt="Woman4"
        className="-translate-y-16 -rotate-[15deg] -translate-x-4"
      />

      <div className="flex flex-col justify-center gap-3 -translate-y-6">
        <h3 className="font-bold">{name}</h3>
        <span className="flex items-center justify-center max-w-[7rem] rounded-xl bg-buttons_main bg-opacity-20 shadow-sm">
          $ {price}
        </span>
        <button className="bg-[#FF0063] bg-opacity-80 text-background_main_l shadow-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
