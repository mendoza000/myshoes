import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import data from "../api/data.json";
import { Toaster } from "react-hot-toast";
import ProductDescription from "@components/ui/ProductDescription";
import ProductMobileModal from "@components/ui/ProductMobileModal";
import ProductImage from "@components/ui/ProductImage";
import ProductHeaderMobile from "@components/ui/ProductHeaderMobile";

export default function Product() {
  const [isBuying, setIsBuying] = useState(false)
  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(38);
  const [image, setImage] = useState(null);
  const router = useRouter();
  const id = router.query.id;


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

  if (product === null || product === undefined) return null;

  return (
    <div className="flex justify-center w-screen h-screen overflow-hidden bg-background_main_l dark:bg-bg_dark dark:bg-bg_dark">
      <div
        className="flex flex-col w-full h-full md:w-11/12 animate__animated animate__fadeInUp animate__faster
    md:flex-row max-w-[1000px] lg:gap-x-20 md:ml"
      >
        <Toaster />
        <ProductHeaderMobile
          id={id}
          product={product} />

        <ProductImage
          image={image}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          photos={product.secondaryPhotos}
          setImage={setImage} />

        <ProductDescription
          product={product}
          setIsBuying={setIsBuying}
          amount={amount}
          setAmount={setAmount}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize} />

        <ProductMobileModal product={product}
          selectedSize={selectedSize}
          isBuying={isBuying}
          setIsBuying={setIsBuying}
          amount={amount}
          setAmount={setAmount} />
      </div>
    </div>
  );
}
