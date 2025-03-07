import { banner8, nails,line } from "../assets/images";
import { Link } from "react-router-dom";

const Prices = () => {
  return (
    <main className="container mx-auto gap-4 mt-20 grid grid-cols-1 md:grid-cols-2">
      <div className="h-full flex items-center justify-center">
        <img src={nails} alt="" className="h-full object-cover" />
      </div>

      <div className="flex flex-col sm:items-center lg:items-start justify-center px-10 gap-5">
        <h3 className="text-[#6B0606] text-4xl md:text-4xl lg:text-5xl">
          Treatments and prices
        </h3>
        <p className="opacity-50">
          Velit in dui dictum arcu felis tempor in feugiat in mauris...
        </p>
        <div>
          <div className=" flex flex-col gap-6 text-[1em] lg:text-[1.3em] font-semibold">
            <p className="">
              Nail Care
              <span className="opacity-30">
                ..............................................
              </span>
              from$25
            </p>
            <p>
              Hair Styling
              <span className="opacity-30">
                ...............................................
              </span>
              from$25
            </p>
            <p>
              Make up
              <span className="opacity-30">
                ..............................................
              </span>
              from$25
            </p>
            <p>
              Cosmetology
              <span className="opacity-30">
                ..............................................
              </span>
              from$25
            </p>
            <p>
              SPA procedures
              <span className="opacity-30">
                ..............................................
              </span>
              from$25
            </p>
          </div>
        </div>
        <Link
          to="/services"
          className="mt-2 underline font-semibold text-[#6B0606]"
        >
          View All
        </Link>
      </div>
    </main>
  );
};

export default Prices;

//  ut dictum
//           at magna cursus. Malesuada aliquet ut lorem mollis vitae etiam sed eu
//           suspendisse. Aliquam phasellus orci nulla sed est. Duis nisl placerat
//           aliquet penatibus tellus. Augue faucibus at suspendisse porta feugiat
//           malesuada quisque proin.
