import React from "react";
import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav, saveFavs } from "@store/actions/fav";
import useIntersectionObserver from "hooks/useIntersectionObserver";

const Card2 = ({ name, cardPhoto, id, price, rating }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs);
  const { isInViewPort, fromRef } = useIntersectionObserver();
  const listFavsClean = favs.filter((e) => e.id === id);

  const handleOpenProduct = () => {
    router.push(`/product/${id}`);
    const bottomNav = document.querySelector(".bottom-navbar");
    bottomNav.classList.add("hidden");
  };

  const handleAddToFav = () => {
    if (listFavsClean.length === 0) {
      dispatch(
        addFav({
          id,
          name,
          price,
          rating,
          cardPhoto,
        })
      );
    } else {
      dispatch(
        removeFav({
          id,
        })
      );
    }

    dispatch(saveFavs());
  };

  return (
    <div
      ref={fromRef}
      className="relative flex flex-col items-center justify-center min-w-[10rem]"
    >
      <button
        onClick={handleAddToFav}
        className="absolute z-10 rounded-md shadow-md left-2 top-2"
      >
        <HiOutlineHeart
          className={`w-8 h-8 stroke-buttons_main ${
            listFavsClean.length === 1 ? "fill-buttons_main" : ""
          }`}
        />
      </button>
      <div
        onClick={handleOpenProduct}
        className="bg-background_main_l rounded-xl max-h-40 custom-shadow children-overflow"
      >
        <Image
          src={cardPhoto}
          width={200}
          height={200}
          alt={name}
          className={`-translate-y-12 transition-transform duration-700 ${
            isInViewPort && "-rotate-6 scale-110 -translate-y-14"
          }`}
        />
        <div className="flex items-center justify-around min-w-full -translate-y-11">
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
