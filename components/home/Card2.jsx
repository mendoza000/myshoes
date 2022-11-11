import React from "react";
import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav, saveFavs } from "@store/actions/fav";
import useIntersectionObserver from "hooks/useIntersectionObserver";

const Card2 = ({ name, secondaryPhotos, id, price, rating, isInSlider }) => {
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
          secondaryPhotos,
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
      className="relative flex flex-col items-center justify-center min-w-[10rem] max-w-[12rem] mx-auto cursor-pointer"
    >
      {!isInSlider && (
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
      )}
      {isInSlider && (
        <h4 className="min-w-full mt-2 text-center text-md">{name}</h4>
      )}
      <div
        onClick={handleOpenProduct}
        className="relative pb-5 bg-background_main_l rounded-xl min-h-max custom-shadow children-overflow dark:bg-bg_dark_o"
      >
        <Image
          src={secondaryPhotos[0].src}
          width={200}
          height={200}
          alt={name}
          className={`-translate-y-5 transition-transform duration-700 ${
            isInViewPort && "-rotate-6"
          }`}
        />
        {!isInSlider && (
          <div className="flex items-center justify-around min-w-full -mt-14 dark:text-background_main_l">
            <span className="text-fonts_secondary dark:text-background_main_l">
              ${price}
            </span>
            <span className="p-1 bg-buttons_main bg-opacity-30 rounded-xl dark:bg-opacity-80">
              In stock
            </span>
          </div>
        )}
      </div>
      {!isInSlider && (
        <h4 className="min-h-[3rem] text-left min-w-full text-md mt-2 dark:text-background_main_l">
          {name}
        </h4>
      )}
    </div>
  );
};

export default Card2;
