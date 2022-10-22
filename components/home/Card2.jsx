import React from "react";
import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "@store/actions/fav";

const Card2 = ({ name, cardPhoto, id, price, rating }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs);
  const listFavsClean = favs.filter((e) => e.id !== id);

  const handleOpenProduct = () => {
    router.push(`/product/${id}`);
    const bottomNav = document.querySelector(".bottom-navbar");
    bottomNav.classList.add("hidden");
  };

  const handleAddToFav = () => {
    dispatch(
      addFav({
        id,
        name,
        price,
        rating,
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-background_main_l rounded-xl max-h-40 custom-shadow relative">
        <button
          onClick={handleAddToFav}
          className="absolute left-2 top-2 z-10 rounded-md shadow-md"
        >
          <HiOutlineHeart
            className={`h-8 w-8 duration-300 stroke-buttons_main ${
              listFavsClean.length <= 0 ? "fill-buttons_main" : ""
            }`}
          />
        </button>

        <Image
          src={cardPhoto}
          width={200}
          height={200}
          alt={name}
          className={"-translate-y-12"}
        />
        <div className="-translate-y-11 flex min-w-full justify-around items-center">
          <span className="text-fonts_secondary">${price}</span>
          <span className="p-1 bg-buttons_main bg-opacity-30 rounded-xl">
            In stock
          </span>
        </div>
      </div>
      <h4 className="min-h-[3rem] text-left min-w-full text-md mt-2">{name}</h4>
    </div>
  );
};

export default Card2;
