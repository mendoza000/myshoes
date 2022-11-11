import React from 'react'

export default function Sizes({ selectedSize, setSelectedSize, isInDescription }) {
  const sizes = [37, 38, 39, 40, 41, 42, 43, 44, 45];

  return <>
    {sizes.map((size) => {
      return (
        <div
          key={size}
          className={`${isInDescription ? 'w-6 h-6 cursor-pointer' : 'w-full h-7'} duration-300 ${selectedSize === size
            ? "bg-gray dark:bg-buttons_main"
            : "bg-black bg-opacity-50 text-background_main_l dark:bg-buttons_main dark:bg-opacity-20"
            } rounded-md grid place-content-center`}
          onClick={() => {
            setSelectedSize(size);
          }}
        >
          <span className={`${isInDescription ? 'text-xs' : ''}`}>{size}</span>
        </div>
      );
    })}
  </>
}