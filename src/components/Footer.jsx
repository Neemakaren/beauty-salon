import {
  nav1,
  beauty,
  hero1,
  hero2,
  nav3,
  facebook1,
  instagram1,
  telegram,
  twitter,
  payment,
} from "../assets/images";

const Footer = () => {
  const date = new Date()
  const date1 = date.getFullYear()
  
  return (
    <main className="flex flex-col bg-[#DFBFA8] pt-7 pb-2">
      <div className="relative flex items-center justify-center py-6">
        <img src={nav1} alt="" className="w-[20em]"/>
        <div className="absolute flex flex-col items-center justify-center">
          <img src={nav3} alt="" className="inset-0 px-2 w-16" />
          <img src={beauty} alt="" />
          <p className="text-center opacity-50">
            Est tortor egestas sed feugiat elementum. Viverra nulla <br /> amet
            a ultrices massa dui. Tortor est purus morbi vitae <br /> arcu
            suspendisse amet.
          </p>
          <div className="flex gap-4 my-3">
            <img src={facebook1} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram1} alt="" />
            <img src={telegram} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-col  md:flex-row mx-10 mt-2 gap-2">
        <p className="text-white">©Copyright {date1}</p>
        <img src={payment} alt="" className=""/>
      </div>
    </main>
  );
};

export default Footer;
