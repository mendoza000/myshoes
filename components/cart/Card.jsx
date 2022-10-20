import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="bg-fonts_main max-h-40 flex justify-center items-center">
      <Image
        src={"/Woman4/Pasted-20221016-012544_preview_rev_1.png"}
        width={200}
        height={250}
        alt="Woman4"
      />
    </div>
  );
};

export default Card;
