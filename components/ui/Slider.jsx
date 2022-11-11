import Card2 from "@components/home/Card2";
import data from "pages/api/data.json";
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Slider = () => {
  const [originalIndex, setOriginalIndex] = useState(14);
  const [index, setIndex] = useState(originalIndex);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const actualLeftShoe = data.at(index);
    const actualRightShoe = data.at(index + 1);
    const prevShoe = data.at(index - 1);
    const nextShoe = data.at(index + 2);
    setShoes([
      { ...prevShoe, isPrev: true },
      { ...actualLeftShoe, isActualLeft: true },
      { ...actualRightShoe, isActualRight: true },
      { ...nextShoe, isNext: true },
    ]);
  }, [index]);

  const handlePrevIndex = () => {
    const newArray = Array.from(shoes).map((shoe) => {
      if (shoe.isPrev) {
        shoe.isPrev = false;
        shoe.isActualLeft = true;
      } else if (shoe.isActualLeft) {
        shoe.isActualLeft = false;
        shoe.isActualRight = true;
      } else if (shoe.isActualRight) {
        shoe.isActualRight = false;
        shoe.isNext = true;
      } else if (shoe.isNext) {
        shoe.isNext = false;
        shoe.isPrev = true;
      }
      return shoe;
    });
    setShoes(newArray);
  };
  const handleNextIndex = () => {
    const newArray = Array.from(shoes).map((shoe) => {
      if (shoe.isPrev) {
        shoe.isPrev = false;
        shoe.isNext = true;
      } else if (shoe.isActualLeft) {
        shoe.isActualLeft = false;
        shoe.isPrev = true;
      } else if (shoe.isActualRight) {
        shoe.isActualRight = false;
        shoe.isActualLeft = true;
      } else if (shoe.isNext) {
        shoe.isNext = false;
        shoe.isActualRight = true;
      }
      return shoe;
    });
    setShoes(newArray);
  };

  return (
    <div className="flex relative gap-3 px-5 w-full h-56 overflow-hidden mt-7 max-w-[400px] mx-auto ">
      <button
        className="grid place-content-center absolute z-20 hover:bg-gradient-to-r hover:from-[rgba(25,25,25,0.1)]
        hover:to-transparent h-full w-20 top-0 left-0"
        onClick={handlePrevIndex}
      >
        <FaAngleLeft className="w-16 h-16 opacity-90 fill-fonts_main" />
      </button>
      {shoes?.map((shoe) => {
        return (
          <div
            key={shoe.id}
            className={`w-[200px] transition-all duration-300 absolute ${shoe.isActualLeft
                ? "left-0 -translate-x-0 "
                : ""
              }
          ${shoe.isActualRight
                ? "left-full -translate-x-full"
                : ""
              }
          ${shoe.isNext
                ? "left-full translate-x-0 -z-10 opacity-10"
                : ""
              }
          ${shoe.isPrev ? "left-0 -translate-x-full -z-10 opacity-10"
                : ""} `}
          >
            <Card2 {...shoe} isInSlider={true} />
          </div>
        );
      })}
      <button
        className="absolute top-0 right-0 z-20 grid w-20 h-full place-content-center hover:bg-gradient-to-r 
        hover:to-[rgba(25,25,25,0.1)] hover:from-transparent"
        onClick={handleNextIndex}
      >
        <FaAngleRight className="w-16 h-16 opacity-90 fill-fonts_main" />
      </button>
    </div>
  );
};

export default Slider;
