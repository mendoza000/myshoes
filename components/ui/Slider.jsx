import Card2 from "@components/home/Card2";
import data from 'pages/api/data.json'
import React, { useEffect, useState } from "react";

const Slider = () => {
  // const [index, setIndex] = useState(0)
  // const [shoes, setShoes] = useState(0)
  // useEffect(() => {
  //   const actualShoe = data.sliderShoes.at(index)
  //   const prevShoe = data.sliderShoes.at(index-1)
  //   const nextShoe = data.sliderShoes.at(index+1)
  //   setShoes({prevShoe, actualShoe, nextShoe})
  // }, [index])

  return (
    <div className="flex gap-3 px-5 overflow-x-scroll mt-7">
    </div>
  );
};

export default Slider;
