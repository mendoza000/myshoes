import Image from "next/image";
import React from "react";

const Card = ({ cardPhoto }) => {
  return (
    <div className="flex items-center justify-center bg-fonts_main max-h-40">
      <Image src={cardPhoto} width={200} height={250} alt="Woman4" />
    </div>
  );
};

export default Card;
