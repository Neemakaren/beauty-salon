import { data } from "../utils/data";
import { Link } from "react-router-dom";
import { services } from "../assets/images";



const Grid = () => {
  return (
    <section className="">
      <section className="grid grid-cols-1 gap-2 px-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-2 xl:gap-4 container mx-auto shadow-none mt-4">
        <div className="relative">
          {data.slice(0, 2).map((product, idx) => (
            <Link key={product.id} to={`/stylist/${product.id}`}>
              <div className="group relative mb-3 flex h-[15em] items-end overflow-hidden md:h-[20em] rounded-md scroll-smooth hover:-translate-y-2 ease-in duration-150">
                <img
                  src={product.profile}
                  loading="lazy"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center border-4"
                />
                <div className="absolute inset-0 m-4 bg-pink-100 bg-opacity-60  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-full w-full p-4">
                    <h3 className="text-2xl font-bold text-black flex items-center text-center">
                      {product.description}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="sm:mt-16 md:mt-16 lg:mt-24 relative">
          {data.slice(2, 3).map((product, id) => (
            <Link key={product.id} to={`/stylist/${product.id}`}>
              <div className="group relative flex h-[20em] items-end overflow-hidden md:h-[30em] rounded-md scroll-smooth hover:-translate-y-3 ease-in duration-150">
                <img
                  src={product.profile}
                  loading="lazy"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center border-4"
                />
                <div className="absolute inset-0 m-4 bg-pink-100 bg-opacity-60  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-full w-full p-4">
                    <h3 className="text-2xl font-bold text-black flex items-center text-center">
                      {product.description}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative">
          {data.slice(3, 5).map((product, id) => (
            <Link key={product.id} to={`/stylist/${product.id}`}>
              <div className="group relative mb-3 flex h-[15em] items-end overflow-hidden rounded-md md:h-[20em] scroll-smooth hover:-translate-y-2 ease-in duration-150">
                <img
                  src={product.profile}
                  loading="lazy"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center border-4"
                />
                <div className="absolute inset-0 m-4 bg-pink-100 bg-opacity-60  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-full w-full p-4">
                    <h3 className="text-2xl font-bold text-black flex items-center text-center">
                      {product.description}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>

    // <>
    //   {data.map((product) => {
    //     return (
    //       <Link key={product.id} to={`/stylist/${product.id}`}>
    //         <img src={product.profile} alt="" className="rounded-md" />
    //         <h4>{product.description}</h4>
    //       </Link>
    //     );
    //   })}
    // </>
  );
}

export default Grid