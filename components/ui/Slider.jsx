import Card2 from "@components/home/Card2";
import React from "react";
import PromoCard from "./PromoCard";

const Slider = () => {
  return (
    <div className="flex gap-3 px-5 overflow-x-scroll mt-7">
      <Card2
        name={"Jordan ADG 4"}
        cardPhoto={"/Jordan ADG 4/main-card.png"}
        id={2}
        price={159.55}
      />
      <Card2
        name={"Jordan ADG 4"}
        cardPhoto={"/Jordan ADG 4/main-card.png"}
        id={2}
        price={159.55}
      />
      <Card2
        name={"Jordan ADG 4"}
        cardPhoto={"/Jordan ADG 4/main-card.png"}
        id={2}
        price={159.55}
      />
      <Card2
        name={"Jordan ADG 4"}
        cardPhoto={"/Jordan ADG 4/main-card.png"}
        id={2}
        price={159.55}
      />
    </div>
  );
};

export default Slider;
