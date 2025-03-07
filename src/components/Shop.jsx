import { shop } from "../assets/images";

const Shop = () => {
  return (
    <main className="my-8 py-6">
      <div className="flex flex-col text-center items-center justify-center py-10">
        <h2 className="text-[#6B0606] text-4xl font-bold py-4">Our shop</h2>
        <p className="text-[#00000080] tracking-wide opacity-50">
          Eleifend arcu non lorem justo in tempus purus gravida. Est tortor
          egestas sed feugiat...
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 container mx-auto">
        <div className="">
          <img src={shop} alt="" className="" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-[1.2em]">Face toner</p>
            <span className="opacity-50 text-[1.1em]">$20 / 50ml</span>
            <div className="flex gap-3 my-2">
              <button className="bg-[#6B0606] text-white px-2">50ml</button>
              <button className="bg-[#6B0606] text-white px-2">70ml</button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={shop} alt="" />
          <div className="flex flex-col items-center justify-center">
            <p>Face toner</p>
            <span>$20 / 50ml</span>
            <div className="flex gap-3 my-2">
              <button className="bg-[#6B0606] text-white px-2">50ml</button>
              <button className="bg-[#6B0606] text-white px-2">70ml</button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={shop} alt="" />
          <div className="flex flex-col items-center justify-center">
            <p>Face toner</p>
            <span>$20 / 50ml</span>
            <div className="flex gap-3 my-2">
              <button className="bg-[#6B0606] text-white px-2">50ml</button>
              <button className="bg-[#6B0606] text-white px-2">70ml</button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={shop} alt="" />
          <div className="flex flex-col items-center justify-center">
            <p>Face toner</p>
            <span>$20 / 50ml</span>
            <div className="flex gap-3 my-2">
              <button className="bg-[#6B0606] text-white px-2">50ml</button>
              <button className="bg-[#6B0606] text-white px-2">70ml</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
