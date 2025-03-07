import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
} from "../assets/images";

const Banner = () => {
  return (
    <main className="-mt-16">
      <div className="flex flex-col text-center items-center justify-center py-10">
        <h2 className="text-[#6B0606] text-4xl font-bold py-4">
          Elegance comes from being as <br /> beautiful inside as outside
        </h2>
        <p className="text-[#00000080] tracking-wide">
          Eleifend arcu non lorem justo in tempus purus gravida. Est tortor
          egestas sed feugiat elementum. Viverra <br /> nulla amet a ultrices
          massa dui. Tortor est purus morbi vitae arcu suspendisse amet.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-3">
        <div className="relative flex py-6 border rounded-sm">
          <img src={banner8} alt="" className="relative" />
          <div className="absolute bottom-2 left-3 flex items-center gap-4">
            <img src={banner1} alt="" className="border" />
            <span className="text-white font-bold text-[1.2em] sm:text-[1.5em] lg:text-2xl">
              make up
            </span>
          </div>
        </div>
        <div className="relative flex py-6 border rounded-sm">
          <img src={banner8} alt="" className="relative" />
          <div className="absolute bottom-2 left-3 flex items-center gap-4">
            <img src={banner2} alt="" className="border" />
            <span className="text-white font-bold text-[1.2em] sm:text-[1.5em] lg:text-2xl">
              hair styling
            </span>
          </div>
        </div>
        <div className="relative flex py-6 border rounded-sm">
          <img src={banner8} alt="" className="relative" />
          <div className="absolute bottom-2 left-3 flex items-center gap-4">
            <img src={banner3} alt="" className="border" />
            <span className="text-white font-bold text-[1.2em] sm:text-[1.5em] lg:text-2xl">
              nail care
            </span>
          </div>
        </div>
        <div className="relative flex py-6 border rounded-sm">
          <img src={banner8} alt="" className="relative" />
          <div className="absolute bottom-2 left-3 flex items-center gap-4">
            <img src={banner4} alt="" className="border shadow-lg" />
            <span className="text-white font-bold text-[1.2em] sm:text-[1.5em] lg:text-2xl">
              cosmetology
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
