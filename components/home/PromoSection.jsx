import PromoCard from "@components/ui/PromoCard";
import React from "react";

const PromoSection = () => {
  return (
    <div className="flex flex-row items-center justify-center max-w-[50rem] mx-auto gap-x-10 flex-wrap">
      <PromoCard
        name={"Air Winflo 9"}
        img={"/Nike Air Winflo 9 w/main.webp"}
        id={22}
        onlyLg={false}
      />
      <PromoCard
        name={"Metcon 8"}
        img={"/Nike Metcon 8 w/main.webp"}
        id={12}
        onlyLg={true}
      />
      <PromoCard
        name={"Kyrie Low 5"}
        img={"/Kyrie Low 5/main.webp"}
        id={13}
        onlyLg={true}
      />
    </div>
  );
};

export default PromoSection;
