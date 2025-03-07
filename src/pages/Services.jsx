import React from 'react'
import { Hero } from '../components'
import { beauty, hero2, nav1, service1, services, shop } from '../assets/images'
import Grid from '../components/Grid';

const Services = ({ items, menuItems }) => {
  
  return (
    <>
      {/* <hr className='border-black border-[2px]'/> */}
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
        <p className="text-[#00000080] tracking-wide opacity-50">
          Eleifend arcu non lorem justo in tempus purus gravida. Est tortor
          egestas sed feugiat...
        </p>
      </div>

      <Grid />

      <main className="my-8 py-6">
        <div className="flex flex-col text-center items-center justify-center py-10">
          <h2 className="text-[#6B0606] text-4xl font-bold py-4">Our shop</h2>
          <p className="text-[#00000080] tracking-wide opacity-50">
            Eleifend arcu non lorem justo in tempus purus gravida. Est tortor
            egestas sed feugiat...
          </p>
        </div>

        {/* {menuItems && menuItems.map((menuItem) => <p>{menuItem.category}</p>)} */}

        <div className="grid grid-cols-2 md:gap-10 md:grid-cols-5 container mx-auto">
          {items.map((item, id) => (
            <div key={id} className="">
              {/* <div className="flex items-center justify-center p-4">
                <img src={item.image_link} alt={item.name} className="" />
              </div> */}
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-[1em] text-center">{item.name}</p>
                <span className="opacity-50 text-[1.1em]">$20 / 50ml</span>
                <div className="flex gap-3 my-2">
                  <button className="bg-[#6B0606] text-white px-2">50ml</button>
                  <button className="bg-[#6B0606] text-white px-2">70ml</button>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="">
            <img src={shop} alt="" className="" />
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold text-[1.2em]">Face toner</p>
              <span className="opacity-50 text-[1.1em]">$20 / 50ml</span>
              <div className="flex gap-3 my-2">
                <button className="bg-[#6B0606] text-white px-2">50ml</button>
                <button className="bg-[#6B0606] text-white px-2">70ml</button>
              </div>
            </div>
          </div> */}
          {/* <div className="">
            <img src={shop} alt="" />
            <div className="flex flex-col items-center justify-center">
              <p>Face toner</p>
              <span>$20 / 50ml</span>
              <div className="flex gap-3 my-2">
                <button className="bg-[#6B0606] text-white px-2">50ml</button>
                <button className="bg-[#6B0606] text-white px-2">70ml</button>
              </div>
            </div>
          </div> */}
          {/* <div className="">
            <img src={shop} alt="" />
            <div className="flex flex-col items-center justify-center">
              <p>Face toner</p>
              <span>$20 / 50ml</span>
              <div className="flex gap-3 my-2">
                <button className="bg-[#6B0606] text-white px-2">50ml</button>
                <button className="bg-[#6B0606] text-white px-2">70ml</button>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Services