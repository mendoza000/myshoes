import Card2 from "@components/home/Card2";
import data from "pages/api/data.json";
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Slider = () => {
  const [originalIndex, setOriginalIndex] = useState(14);
  const [index, setIndex] = useState(originalIndex);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const actualShoe = data.at(index);
    const prevPrevShoe = data.at(index - 2);
    const prevShoe = data.at(index - 1);
    const nextShoe = data.at(index + 1);
    const nextNextShoe = data.at(index + 2);
    setShoes([
      { ...prevPrevShoe, isPrevPrev: true },
      { ...prevShoe, isPrev: true },
      { ...actualShoe, isActual: true },
      { ...nextShoe, isNext: true },
      { ...nextNextShoe, isNextNext: true },
    ]);
  }, [index]);

  const handlePrevIndex = () => {
    const newArray = Array.from(shoes).map((shoe) => {
      if (shoe.isPrevPrev) {
        shoe.isPrevPrev = false;
        shoe.isPrev = true;
      } else if (shoe.isPrev) {
        shoe.isPrev = false;
        shoe.isActual = true;
      } else if (shoe.isActual) {
        shoe.isActual = false;
        shoe.isNext = true;
      } else if (shoe.isNext) {
        shoe.isNext = false;
        shoe.isNextNext = true;
      } else if (shoe.isNextNext) {
        shoe.isNextNext = false;
        shoe.isPrevPrev = true;
      }
      return shoe;
    });
    setShoes(newArray);
  };
  const handleNextIndex = () => {
    const newArray = Array.from(shoes).map((shoe) => {
      if (shoe.isPrevPrev) {
        shoe.isPrevPrev = false;
        shoe.isNextNext = true;
      } else if (shoe.isPrev) {
        shoe.isPrev = false;
        shoe.isPrevPrev = true;
      } else if (shoe.isActual) {
        shoe.isActual = false;
        shoe.isPrev = true;
      } else if (shoe.isNext) {
        shoe.isNext = false;
        shoe.isActual = true;
      } else if (shoe.isNextNext) {
        shoe.isNextNext = false;
        shoe.isNext = true;
      }
      return shoe;
    });
    setShoes(newArray);
  };

  return (
    <div className="flex relative gap-3 px-5 w-full h-56 overflow-hidden mt-7 max-w-[900px]">
      <button className="grid place-content-center absolute z-20 bg-gradient-to-r from-[rgba(25,25,25,0.2)] to-transparent h-full w-20 top-0 left-0" onClick={handlePrevIndex}>
        <FaAngleLeft className="w-16 h-16 opacity-50" />
      </button>
      {
        shoes?.map(shoe => {
          return <div key={shoe.id} className={`transition-all duration-200 absolute ${shoe.isActual ? 'scale-105 z-20 left-1/2 -translate-x-1/2 ' : 'scale-50 pointer-events-none '}
          ${shoe.isPrev ? '-left-6 md:left-28 md:scale-75 md:z-10 lg:scale-105 lg:left-32 lg:pointer-events-auto ' : ''}
           ${shoe.isNext ? '-right-6 md:right-28 md:scale-75 lg:scale-105 lg:right-32 md:z-10 lg:pointer-events-auto' : ''}
           ${shoe.isPrevPrev ? 'hidden md:block md:left-0' : ''} ${shoe.isNextNext ? 'hidden md:block md:right-0' : ''}`}>
            <Card2 {...shoe} isInSlider={true} />
          </div>
        );
      })}
      <button
        className="absolute top-0 right-0 z-20 grid w-20 h-full place-content-center"
        onClick={handleNextIndex}
      >
        <FaAngleRight className="w-16 h-16 opacity-90 fill-fonts_main" />
      </button>
    </div>
  );
};

export default Slider;
