import React from "react";
import { hero2 } from "../assets/images";
import Recommended from "../components/Recommended";

const BeautyShop = ({ result, handleClick, selectedCategory }) => {
  return (
    <>
      <hr className="border-[#6B0606] opacity-10 border-[2px]" />
      <div className="h-[25em] mt-8">
        <img src={hero2} alt="" className="w-full h-full object-cover" />
      </div>
      <main className="my-8 py-6">
        <div className="flex flex-col text-center items-center justify-center">
          <h2 className="text-[#6B0606] text-4xl font-bold py-4">Our shop</h2>
          <p className="text-[#00000080] tracking-wide opacity-50">
            Eleifend arcu non lorem justo in tempus purus gravida. Est tortor
            egestas sed feugiat...
          </p>
        </div>

        <Recommended handleClick={handleClick} />
        <div className="flex items-center justify-center text-2xl font-bold text-[#6B0606] mb-14">
          <h2>Showing Results for: {selectedCategory}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:gap-10 md:grid-cols-5 container mx-auto">
          {result}
        </div>
      </main>
    </>
  );
};

export default BeautyShop;
