import { nav1, beauty, hero1, hero2 } from "../assets/images";


const Hero = () => {
   
  return (
    <>
      <hr className="border-[#6B0606] opacity-10 border-[2px]" />
      <main className="h-screen flex flex-col">
        <div className="relative flex items-center justify-center py-6">
          <img src={nav1} alt="" />
          <div className="absolute">
            <img src={beauty} alt="" />
          </div>
        </div>

        <div className="h-[25em]">
          <img src={hero1} alt="" className="w-full h-full object-cover" />
        </div>
      </main>
    </>
  );
};

export default Hero;
