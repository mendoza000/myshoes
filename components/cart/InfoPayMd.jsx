import React from "react";
import { HiOutlineCreditCard } from "react-icons/hi";

const InfoPayMd = ({ cart }) => {
  if (cart.length >= 1)
    return (
      <div className="min-h-[25rem] max-h-[25rem] bg-background_main_l custom-shadow rounded-xl hidden md:flex flex-col px-5 justify-center items-center gap-8">
        <div className="flex flex-col max-w-full gap-2">
          <h4 className="max-w-[100%] font-bold text-left border-b-2 border-opacity-50 border-b-dark_gray text-xl">
            Deliverpy info
          </h4>

          <input
            type="text"
            placeholder="Street"
            className="px-3 py-1 duration-300 border-2 rounded-md outline-none bg-background_main_l border-buttons_main border-opacity-30 hover:border-opacity-80 max-w-[100%]"
          />

          <div className="grid items-center justify-center grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="City"
              className="px-3 py-1 duration-300 border-2 rounded-md outline-none bg-background_main_l border-buttons_main border-opacity-30 hover:border-opacity-80"
            />

            <input
              type="text"
              placeholder="No. Apartment"
              className="px-3 py-1 duration-300 border-2 rounded-md outline-none bg-background_main_l border-buttons_main border-opacity-30 hover:border-opacity-80"
            />
          </div>
        </div>

        <div className="flex flex-col max-w-full gap-2">
          <h4 className="max-w-[100%] font-bold text-left border-b-2 border-opacity-50 border-b-dark_gray text-xl">
            Pay info
          </h4>

          <input
            type="number"
            placeholder="Card Number"
            className="px-3 py-1 duration-300 border-2 rounded-md outline-none bg-background_main_l border-buttons_main border-opacity-30 hover:border-opacity-80 max-w-[100%]"
          />

          <div className="grid items-center justify-center grid-cols-2 gap-2">
            <input
              type="date"
              placeholder="Date"
              className="px-3 py-1 duration-300 border-2 rounded-md outline-none bg-background_main_l border-buttons_main border-opacity-30 hover:border-opacity-80"
            />

            <input
              type="number"
              placeholder="CVC"
              className="px-3 py-1 duration-300 border-2 rounded-md outline-none bg-background_main_l border-buttons_main border-opacity-30 hover:border-opacity-80"
            />
          </div>
        </div>

        {cart.length >= 1 && (
          <button className="flex items-center justify-center min-w-full gap-1 px-3 py-3 mx-auto duration-300 shadow-xl bg-opacity-80 bg-buttons_main rounded-xl hover:bg-opacity-50">
            <HiOutlineCreditCard className="w-5 h-5" />
            Pay Now
          </button>
        )}
      </div>
    );
};

export default InfoPayMd;
