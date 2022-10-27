import Card2 from "@components/home/Card2";
import AlertInfo from "@components/ui/AlertInfo";
import React from "react";
import { useSelector } from "react-redux";

const Favs = () => {
  const favs = useSelector((state) => state.favs);

  return (
    <div className="container min-h-screen bg-background_main animate__animated animate__fadeIn animate__faster">
      <div className="flex items-center justify-center px-6 py-4">
        <h1 className="text-3xl font-bold text-center fill-fonts_main ">
          Favorites
        </h1>
      </div>

      {favs.length == 0 && <AlertInfo message={"You don't have favorites"} />}

      <div className="grid justify-center w-full h-full grid-cols-2 px-5 py-2 mb-10 overflow-hidden gap-x-6">
        {favs.map((e) => {
          return <Card2 key={e.id} {...e} />;
        })}
      </div>
    </div>
  );
};

export default Favs;
