import { nav2,facebook, instagram, vector, search, nav1, nav3 } from "../assets/images";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex bg-[#6B0606] font-semibold font items-center justify-center gap-3 py-1">
        <img src={nav2} alt="" />
        <p className=" text-center text-white rounded-none text-[16px]">
          Only this month 20% discount on all services
        </p>
        <img src={nav2} alt="" />
      </div>

      <div className="flex items-center justify-between container mx-auto py-2">
        <div className="flex gap-3">
          <img src={facebook} alt="" className="inset-0 py-3" />
          <img src={instagram} alt="" className="inset-0 py-4" />
        </div>

        <div className="flex items-center justify-center gap-6 text-[16px]">
          <ul className="flex gap-4">
            <Link to='/'>Home</Link>
            <Link to='services'>Services</Link>
          </ul>
          <img src={nav3} alt="" className="inset-0 px-2" />
          <ul className="flex gap-4">
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="flex gap-3">
          <img src={vector} alt="" className="inset-0 py-2" />
          <img src={search} alt="" className="inset-0 py-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
