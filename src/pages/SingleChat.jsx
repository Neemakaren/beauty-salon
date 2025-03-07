import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import { service1 } from "../assets/images";

const SingleChat = ({ items }) => {
  const { staffId } = useParams();
  return (
    <main>
      <section className="container mx-auto border-2 gap-3 flex flex-col md:flex-row my-16">
        {data
          .filter((item) => item.id == staffId)
          .map((product) => {
            return (
              <div className="border-r-4">
                <img
                  src={product.profile}
                  alt=""
                  className="object-cover p-6 "
                />
                <div className="flex flex-col pl-6">
                  <h5>{product.description}</h5>
                  <div>
                    <div className=" flex flex-col gap-6  lg:text-[1em] font-semibold">
                      <p className="">
                        Nail Care
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                      <p>
                        Hair Styling
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                      <p>
                        Make up
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                      <p>
                        Cosmetology
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                      <p>
                        SPA procedures
                        <span className="opacity-30">
                          ..........................................
                        </span>
                        from$25
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="w-full">
          <div className="">
            <div className="flex gap-3 items-center">
              <img
                src={service1}
                alt="userImage"
                width={45}
                height={45}
                className="rounded-full m-4"
              />
              <div>
                <h2 className="text-[14px] font-medium"></h2>
                <h2 className="text-[12px]"></h2>
              </div>
            </div>
          </div>
          <div></div>
          <form action="">
            <textarea
              name=""
              id=""
              cols="9"
              rows="13"
              placeholder="start your conversation here...."
              className="outline-none  w-full mt-8 py-4 pl-2 text-[18px] border-b-[2px] border-gray-400 placeholder-gray-400 resize-none h-[100%] font-Licorice leading-loose "
            ></textarea>
            <div className="flex">
              <button className="text-white px-6 py-1 text-[1.2em] my-4 bg-red-500">
                send
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="grid grid-cols-2 md:gap-10 md:grid-cols-5 container mx-auto">
        {items.slice(0, 5).map((item, id) => (
          <div key={id} className="">
            {/* <div className="flex items-center justify-center p-4">
                <img src={item.image_link} alt={item.name} className="" />
              </div> */}
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold text-[1.2em]">{item.name}</p>
              <span className="opacity-50 text-[1.1em]">$20 / 50ml</span>
              <div className="flex gap-3 my-2">
                <button className="bg-[#6B0606] text-white px-2">50ml</button>
                <button className="bg-[#6B0606] text-white px-2">70ml</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SingleChat;
