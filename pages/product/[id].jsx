import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import data from "../api/data.json";
import Image from "next/image";
import { HiOutlineHeart, HiOutlineStar, HiStar } from "react-icons/hi";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav, saveFavs } from "@store/actions/fav";
import { cartAdd, cartSave } from "@store/actions/cart";
import toast, { Toaster } from "react-hot-toast";

export default function Product() {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs);

  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(38);
  const [image, setImage] = useState(null);
  const [isBuying, setIsBuying] = useState(false);
  const router = useRouter();
  const id = router.query.id;
  const listFavsClean = favs.filter((e) => e.id == id);

  const sizes = [37, 38, 39, 40, 41, 42, 43, 44, 45];

  useEffect(() => {
    const rawProduct = data.find((element) => element.id === parseInt(id));
    setProduct(rawProduct);
  }, [id]);
  useEffect(() => {
    if (product) {
      const finalImage = product.secondaryPhotos.find((el) => {
        return el.id === 1;
      });
      setImage(finalImage);
    }
  }, [product]);
  const handleUpAmount = () => {
    if (amount > 8) return;
    setAmount(amount + 1);
  };
  const handleDownAmount = () => {
    if (amount <= 1) return;
    setAmount(amount - 1);
  };
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
  const handleAddToCart = () => {
    dispatch(
      cartAdd({
        id: parseInt(id),
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

  if (product === null || product === undefined) return null;

  return (
    <div className="flex justify-center w-screen h-screen overflow-hidden bg-background_main_l dark:bg-bg_dark">
      <div
        className="flex flex-col w-full h-full md:w-11/12 animate__animated animate__fadeInUp animate__faster
    md:flex-row max-w-[1000px] lg:gap-x-20 md:ml"
      >
        <Toaster />
        {/* 
      -------------------------------------------------------------------------------------------------------------
      PARTE DE ARRIBA EN MOBILE (VOLVER PARA ATRAS, ETC) 
      -------------------------------------------------------------------------------------------------------------
      */}
        <section className="relative w-full mt-4 mb-4 md:absolute md:top-0 md:left-0">
          <h2 className="mt-1 text-xl font-bold text-center font-Rubik md:hidden dark:text-background_main_l">
            {product.name}
          </h2>
          <button
            onClick={handleAddToFavorites}
            className="absolute top-0 right-3"
          >
            <HiOutlineHeart
              className={`w-8 h-8 duration-300 ${
                listFavsClean.length === 1
                  ? "fill-buttons_main stroke-buttons_main"
                  : "dark:stroke-buttons_main"
              }`}
            />
          </button>
        </section>
        <section className="w-full h-[60vh] mb-4 flex flex-col items-center md:min-h-full md:max-w-[50%] relative justify-center ">
          {/* 
        ---------------------------------------------------------------------------------------------------------
                                          PARTE DE LAS IMÁGENES
        ---------------------------------------------------------------------------------------------------------
        */}
          <div
            className='ml-auto mr-auto rounded-md bg-background_main_l w-11/12 h-full md:h-[56%] overflow-hidden relative after:bg-[url("/nike-logo.svg")] after:h-full
      after:w-full after:max-w-[330px] after:content-[""] after:absolute after:bg-no-repeat after:bg-gray after:top-1/2 after:left-1/2 after:-translate-x-1/2
      after:-translate-y-[50%] after:z-0 after:bg-center after:bg-cover after:contrast-100 after:opacity-60 md:mb-8 dark:bg-bg_dark_o'
          >
            {/* After es la imágen de nike */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full mb-auto overflow-hidden translate-y-5 h-5/6 ">
              {image && (
                <Image
                  alt="main shoe photo"
                  layout="fill"
                  // Layout fill para que la imágen se amolde al height y width del parent, tiene que estar acompañado de objectFit='contain'
                  objectFit="contain"
                  src={image ? image.src : ""}
                  className={`${image?.id === 1 ? "-rotate-45" : ""} `}
                />
              )}
            </div>
            <div className="flex flex-col h-[95%] tall:h-3/4 justify-between w-7 absolute text-xs top-0 left-2 z-[21] md:hidden">
              <span className="mt-2 text-sm dark:text-background_main_l">
                Size
              </span>
              {sizes.map((size) => {
                return (
                  <div
                    key={size}
                    className={`w-full h-7 duration-300 ${
                      selectedSize === size
                        ? "bg-gray dark:bg-buttons_main"
                        : "bg-black bg-opacity-50 text-background_main_l dark:bg-buttons_main dark:bg-opacity-20"
                    } rounded-md grid place-content-center`}
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-3 left-0 w-full flex justify-end h-[70px] z-20">
              {product.secondaryPhotos.map((photo) => {
                return (
                  <div
                    key={photo.id}
                    className="w-[70px] h-[70px] inline-block relative ml-1 cursor-pointer md:hidden"
                    onClick={() => {
                      setImage(photo);
                    }}
                  >
                    <div
                      className={`absolute w-full h-full top-1/2 -translate-y-1/2 left-0 bg-[rgba(55,55,55,.4)] transition-opacity duration-200
                    ${
                      image?.id !== photo.id ? "opacity-100" : "opacity-0 "
                    } z-10 rounded-lg`}
                    ></div>

                    <Image
                      alt="Shoe Photo"
                      width={70}
                      height={70}
                      objectFit="contain"
                      src={photo.src}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute items-center justify-center hidden w-full md:flex bottom-20">
            {product.secondaryPhotos.map((photo) => {
              return (
                <div
                  key={photo.id}
                  className="relative flex ml-1 cursor-pointer"
                  onClick={() => {
                    setImage(photo);
                  }}
                >
                  <div
                    className={`absolute w-full h-full top-1/2 -translate-y-1/2 left-0 bg-[rgba(55,55,55,.4)] transition-opacity duration-200 dark:bg-bg_dark_o
                    ${
                      image?.id !== photo.id
                        ? "opacity-100 dark:opacity-50"
                        : "opacity-0 "
                    } z-10 rounded-lg`}
                  ></div>
                  <Image
                    alt="Shoe Photo"
                    width={90}
                    height={90}
                    objectFit="contain"
                    src={photo.src}
                  />
                </div>
              );
            })}
          </div>
        </section>
        <section className="flex flex-col h-[37vh] md:min-h-[75%] my-auto lg:mr-10 custom-shadow lg:p-10 lg:pt-5 rounded-xl md:max-w-sm md:p-5 md:pt-0 lg:max-w-none dark:bg-bg_dark_o">
          {/* 
        -----------------------------------------------------------------------------------------------------
                                        PARTE DE LA DESCRIPCIÓN Y PRECIO
        -----------------------------------------------------------------------------------------------------
        */}
          <div className="flex flex-col w-full mt-12">
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
                <h3 className="inline ml-4 text-3xl font-bold text-fonts_main dark:text-background_main_l">
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
                    return (
                      <HiStar
                        key={index}
                        className="fill-fonts_main dark:fill-buttons_main"
                      />
                    );
                  return (
                    <HiOutlineStar
                      key={index}
                      className="dark:stroke-buttons_main"
                    />
                  );
                })}
              </div>
            </div>
            <div className="hidden mx-auto md:flex gap-x-2 dark:text-background_main_l">
              <span className="mr-2">Size:</span>
              {sizes.map((size) => {
                return (
                  <div
                    key={size}
                    className={`w-6 h-6 duration-100 cursor-pointer ${
                      selectedSize === size
                        ? "bg-buttons_main bg-opacity-100 text-bg_dark_o"
                        : "bg-buttons_main bg-opacity-10 text-background_main_l"
                    } rounded-md grid place-content-center`}
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                  >
                    <span className="text-xs ">{size}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="w-10/12 m-auto text-xs text-center text-fonts_secondary tall:text-base md:text-xs dark:text-background_main_l dark:text-opacity-50">
            {product.description}
          </p>
          <div className="w-full my-4 hidden md:grid grid-cols-[25%,70%] gap-x-4 items-center dark:text-background_main_l">
            <h4>Amount: {amount}</h4>
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
              className="w-11/12 hidden cursor-pointer bg-opacity-40 text-opacity-40 mr-10 pt-3 pb-3 mb-2 hover:bg-opacity-70 transition-colors
         duration-200 grid-cols-[30%,70%] place-content-center bg-buttons_main rounded-md md:flex dark:bg-opacity-100 items-center justify-center gap-2"
            >
              <BsCreditCard className="w-6 h-6" />
              <span className="">Buy</span>
            </button>
            <button
              onClick={handleAddToCart}
              className="w-11/12 hidden cursor-pointer bg-opacity-40 text-opacity-40 ml-5 pt-3 pb-3 mb-2 hover:bg-opacity-70 transition-colors
         duration-200 grid-cols-[20%,80%] place-content-center bg-details rounded-md md:flex dark:bg-opacity-100 justify-center items-center gap-2"
            >
              <AiOutlineShoppingCart className="w-6 h-6" />
              Add To Cart
            </button>
          </div>
        </section>
        {/* 
          ------------------------------------------------------------------------------------------------
                                          PARTE DE LA COMPRA EN MOBILE
          ------------------------------------------------------------------------------------------------
      */}
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
              <div className="flex items-center justify-center m-auto">
                <button
                  onClick={handleDownAmount}
                  className="self-center px-2 text-black border-2 rounded-md border-details dark:border-buttons_main dark:text-buttons_main"
                >
                  -
                </button>
                <span className="mx-3 text-2xl">{amount}</span>
                <button
                  onClick={handleUpAmount}
                  className="self-center px-2 text-black border-2 rounded-md bg-details border-details dark:bg-buttons_main dark:border-buttons_main"
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
         duration-200 bg-buttons_main rounded-md flex justify-center items-center gap-2 dark:bg-opacity-100"
              >
                <BsCreditCard className="w-6 h-6" />
                <span className="">Buy</span>
              </button>
              <button
                onClick={handleAddToCart}
                className="w-[45%] cursor-pointer bg-opacity-40 text-opacity-40 ml-2 pt-3 pb-3 mb-2 hover:bg-opacity-70 transition-colors
         duration-200 flex justify-center items-center gap-2 bg-details rounded-md dark:bg-opacity-100"
              >
                <AiOutlineShoppingCart className="w-6 h-6" />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
