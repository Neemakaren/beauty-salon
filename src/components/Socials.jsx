import { banner8 } from "../assets/images";

const Socials = () => {
  return (
    <main>
      <div className="flex flex-col text-center items-center justify-center py-10">
        <h2 className="text-[#6B0606] text-4xl font-bold py-4">
          Follow our Instagram
        </h2>
        <p className="text-[#00000080] tracking-wide opacity-50">
          Eleifend arcu non lorem justo in tempus purus gravida. Est tortor
          egestas sed feugiat...
        </p>
      </div>

      <div className="grid grid-cols-5">
        <img src={banner8} alt="" />
        <img src={banner8} alt="" />
        <img src={banner8} alt="" />
        <img src={banner8} alt="" />
        <img src={banner8} alt="" />
        <img src={banner8} alt="" />
        <img src={banner8} alt="" />
        <img src={banner8} alt="" />
        <img src={banner8} alt="" />
        <img src={banner8} alt="" />
      </div>
    </main>
  );
};

export default Socials;
