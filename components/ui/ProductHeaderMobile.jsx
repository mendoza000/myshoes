import React from 'react'
import { HiOutlineHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav, saveFavs } from "@store/actions/fav";

export default function ProductHeaderMobile({ product, id }) {
  const dispatch = useDispatch()
  const favs = useSelector((state) => state.favs);

  const handleAddToFavorites = () => {
    if (listFavsClean.length === 0) {
      dispatch(
        addFav({
          id,
          name: product.name,
          price: product.price,
          rating: product.rating,
          secondaryPhotos: product.secondaryPhotos,
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
  const listFavsClean = favs.filter((e) => e.id == id);


  return <section className="relative w-full mt-4 mb-4 md:absolute md:top-0 md:left-0">
    <h2 className="mt-1 text-xl font-bold text-center font-Rubik md:hidden dark:text-background_main_l">
      {product.name}
    </h2>
    <button
      onClick={handleAddToFavorites}
      className="absolute top-0 right-3"
    >
      <HiOutlineHeart
        className={`w-8 h-8 duration-300 ${listFavsClean.length === 1
          ? "fill-buttons_main stroke-buttons_main"
          : "dark:stroke-buttons_main"
          }`}
      />
    </button>
  </section>
}