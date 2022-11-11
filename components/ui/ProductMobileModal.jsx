import React from 'react'
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { cartAdd, cartSave } from "@store/actions/cart";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function ProductMobileModal({ product, selectedSize, isBuying, setIsBuying, amount, setAmount }) {
  const dispatch = useDispatch()

  const handleUpAmount = () => {
    if (amount > 8) return;
    setAmount(amount + 1);
  };
  const handleDownAmount = () => {
    if (amount <= 1) return;
    setAmount(amount - 1);
  }
  const handleAddToCart = () => {
    dispatch(
      cartAdd({
        id: product.id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        size: selectedSize,
        secondaryPhotos: product.secondaryPhotos,
      })
    );
    toast.success("Successfully added to cart");
    dispatch(cartSave());
  };

  return <>
    <div
      className={`w-screen h-screen transition-opacity duration-300 pointer-events-none opacity-0 bg-black fixed z-40
    top-0 left-0${isBuying ? " pointer-events-auto opacity-20 " : ""}`}
      onClick={() => {
        setIsBuying(false);
      }}
    ></div>
    <div
      className={`w-full rounded-3xl fixed bottom-0 z-40 left-0 translate-y-full transition-transform
    ${isBuying ? " pointer-events-auto translate-y-0" : ""} `}
    >
      <div
        className={`h-full w-[95%] rounded-t-3xl mt-auto ml-auto mr-auto flex flex-col justify-between bg-background_main_l dark:bg-bg_dark`}
      >
        <div className="absolute top-2 w-1/3 border-2 border-[rgba(80,80,80,0.2)] left-[50%] -translate-x-1/2  " />
        <h4 className="text-[1.4rem] text-fonts_main ml-auto mr-auto mt-7 dark:text-background_main_l">
          {product.name}
        </h4>
        <span className="m-auto mb-1 font-bold text-details dark:text-buttons_main">
          Size {selectedSize}
        </span>
        <div className="grid w-full grid-cols-2 mb-6 text-fonts_secondary place-content-center dark:text-background_main_l">
          <h4 className="m-auto text-2xl">
            {" "}
            {Number.parseFloat(product.price * amount).toFixed(2)}{" "}
          </h4>
          <div className="m-auto">
            <button
              onClick={handleDownAmount}
              className="self-center px-2 text-black border-2 rounded-md border-details dark:border-buttons_main dark:text-buttons_main"
            >
              -
            </button>
            <span className="mx-3 text-2xl">{amount}</span>
            <button
              onClick={handleUpAmount}
              className="self-center px-2 text-black border-2 rounded-md bg-details border-details dark:border-buttons_main dark:text-buttons_main"
            >
              +
            </button>
          </div>
        </div>
        <p className="text-fonts_secondary text-base tall:text-lg w-[90%] mx-auto mt-1 text-center mb-8 dark:text-background_main_l dark:text-opacity-70">
          {product.description}
        </p>
        <div className="flex items-center justify-center w-full ">
          <button
            className="w-[45%] cursor-pointer bg-opacity-40 text-opacity-40 mr-2 pt-3 pb-3 mb-2 hover:bg-opacity-70 transition-colors
         duration-200 grid grid-cols-[30%,70%] place-content-center bg-buttons_main rounded-md dark:bg-opacity-100"
          >
            <BsCreditCard className="w-6 h-6 m-auto" />
            <span className="mr-4">Buy</span>
          </button>
          <button
            onClick={handleAddToCart}
            className="w-[45%] cursor-pointer bg-opacity-40 text-opacity-40 ml-2 pt-3 pb-3 mb-2 hover:bg-opacity-70 transition-colors
         duration-200 grid grid-cols-[20%,80%] place-content-center bg-details rounded-md dark:bg-opacity-100"
          >
            <AiOutlineShoppingCart className="w-6 h-6 ml-auto" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </>
}