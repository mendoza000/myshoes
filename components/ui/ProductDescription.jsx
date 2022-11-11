import React from 'react'
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartAdd, cartSave } from "@store/actions/cart";
import toast from "react-hot-toast";
import Sizes from './Sizes';

export default function ProductDescription({ product, setIsBuying, amount, setAmount, selectedSize ,setSelectedSize }) {
  const dispatch = useDispatch()

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

  return <section className="flex flex-col h-[37vh] md:min-h-[75%] my-auto lg:mr-10 custom-shadow lg:p-10 lg:pt-5 rounded-xl md:max-w-sm md:p-5 md:pt-0 lg:max-w-md dark:bg-bg_dark_o">
    <div className="flex flex-col w-full mt-6">
      <div className="w-full hidden md:flex text-xl justify-center mb-6">
        <span>{product?.name}</span>
      </div>
      <div className="flex justify-between w-full mb-3">
        <div className="md:hidden">
          <h3 className="inline ml-4 text-3xl font-bold text-fonts_main dark:text-background_main_l">
            ${product.price.toString().split(".")[0]}
          </h3>
          <span className="inline text-lg text-fonts_main dark:text-background_main_l">
            .{product.price.toString().split(".")[1]}
          </span>
        </div>
        <div className="hidden md:block">
          <h3 className="inline ml-4 text-3xl font-bold text-fonts_main">
            ${(product.price * amount).toString().split(".")[0]}
          </h3>
          <span className="inline text-lg text-fonts_main dark:text-background_main_l">
            .
            {(product.price * amount)
              .toString()
              .split(".")[1]
              .substring(0, 2)}
          </span>
        </div>
        <div className="flex items-center mr-4">
          {product.rating.map((star, index) => {
            if (star)
              return <HiStar key={index} className="fill-fonts_main" />;
            return <HiOutlineStar key={index} />;
          })}
        </div>
      </div>
      <div className="hidden mx-auto md:flex gap-x-2 dark:text-background_main_l">
        <span className="mr-2 dark:text-background_main_l">Size:</span>
        <Sizes setSelectedSize={setSelectedSize} selectedSize={selectedSize} isInDescription={true} />
      </div>
    </div>
    <p className="w-10/12 m-auto text-xs text-center text-fonts_secondary tall:text-base md:text-xs dark:text-background_main_l">
      {product.description}
    </p>
    <div className="w-full my-4 hidden md:grid grid-cols-[25%,70%] gap-x-4 items-center dark:text-background_main_l">
      <h4 className="w-max">Amount: {amount}</h4>
      <input
        type="range"
        min={1}
        max={10}
        step={1}
        defaultValue={1}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
        className={
          "bg-buttons_main appearance-none h-2 rounded-xl bg-opacity-30"
        }
      />
    </div>
    <button
      className="w-11/12 p-4 mt-auto mb-3 ml-auto mr-auto font-extrabold rounded-lg bg-buttons_main text-fonts_main md:hidden"
      onClick={() => {
        setIsBuying(true);
      }}
    >
      Buy!
    </button>
    <div className="flex flex-col items-center justify-center w-full">
      <button
        className="w-11/12 hidden cursor-pointer bg-opacity-40 text-opacity-40 mr-10 ml-1 pt-3 pb-3 mb-2 hover:bg-opacity-70 transition-colors
 duration-200 grid-cols-[30%,70%] place-content-center bg-buttons_main rounded-md md:grid dark:bg-opacity-100 items-center justify-center gap-2"
      >
        <BsCreditCard className="w-6 h-6 m-auto" />
        <span className="mr-4">Buy</span>
      </button>
      <button
        onClick={handleAddToCart}
        className="w-11/12 hidden cursor-pointer bg-opacity-40 text-opacity-40 ml-10 pt-3 pb-3 mb-2 hover:bg-opacity-70 transition-colors
 duration-200 grid-cols-[20%,80%] place-content-center bg-details rounded-md md:grid dark:bg-opacity-100 items-center justify-center gap-2"
      >
        <AiOutlineShoppingCart className="w-6 h-6 ml-auto" />
        Add To Cart
      </button>
    </div>
  </section>
}