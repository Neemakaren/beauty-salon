import { BsFillBagFill } from "react-icons/bs";

const Card = ({ image_link,  name, price, price_sign }) => {
  return (
    <section className="border">
      <img src={image_link} alt={name} className="text-[.6em]" />
      <div className="text-center">
        <h3 className="flex flex-col items-center justify-center text-[.9em] font-bold">
          {name}
        </h3>

        <section className="">
          <div className="flex gap-1 my-2 text-[.8em] items-center justify-center">
            <button className="bg-[#6B0606] text-white px-2">50ml</button>
            <button className="bg-[#6B0606] text-white px-2">70ml</button>
          </div>
          <div className="font-semibold">
            <span>
              {price_sign}
              {price}
            </span>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
