import { icon, icon1, icon2 } from "../assets/images";

const Brands = () => {
  return (
    <main className="bg-[#F3E2D5] py-12 ">
      <div className="container mx-auto gap-6 grid grid-cols-1 sm:grid-cols-3 ">
        <div className="items-center justify-center flex flex-col">
          <img src={icon} alt="" />
          <h4 className="text-[#6B0606] text-[1.2em] md:text-2xl font-semibold">
            Professional Care
          </h4>
          <p className="text-center">
            Eleifend arcu non lorem justo in <br /> tempus purus gravida.{" "}
          </p>
        </div>
        <div className="items-center justify-center flex flex-col">
          <img src={icon1} alt="" />
          <h4 className="text-[#6B0606]  text-[1.2em] md:text-2xl font-semibold">
            Premium brands
          </h4>
          <p className="text-center">
            Eleifend arcu non lorem justo in <br /> tempus purus gravida.{" "}
          </p>
        </div>
        <div className="items-center justify-center flex flex-col">
          <img src={icon2} alt="" />
          <h4 className="text-[#6B0606]  text-[1.2em] md:text-2xl font-semibold">
            Natural cosmetic
          </h4>
          <p className="text-center">
            Eleifend arcu non lorem justo in <br /> tempus purus gravida.{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Brands;
