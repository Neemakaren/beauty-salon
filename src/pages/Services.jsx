import React from "react";
import { Hero } from "../components";
import {
  beauty,
  hero2,
  nav1,
  service1,
  services,
  shop,
} from "../assets/images";
import Grid from "../components/Grid";
import Header from "../components/Header";

const Services = () => {
  return (
    <>
      <hr className="border-[#6B0606] opacity-10 border-[2px]" />
      <Header />
      <main className="h-screen flex flex-col">
        <div className="relative flex items-center justify-center py-6">
          <img src={nav1} alt="" />
          <div className="absolute">
            <img src={services} alt="" />
          </div>
        </div>

        <div className="h-[25em]">
          <img src={hero2} alt="" className="w-full h-full object-cover" />
        </div>
      </main>

      <div className="flex flex-col text-center items-center justify-center py-10 -mt-16">
        <h2 className="text-[#6B0606] text-4xl font-bold py-4">
          You Can Chat Directly with The stylist You want
        </h2>
        <p className="text-[#000] tracking-wide opacity-50">
          Eleifend arcu non lorem justo in tempus purus gravida. Est tortor
          egestas sed feugiat...
        </p>
      </div>
      <Grid />
    </>
  );
};

export default Services;
