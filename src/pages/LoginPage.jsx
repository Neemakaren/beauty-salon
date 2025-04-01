import { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { nav1 } from "../assets/images";


const LoginPage = () => {
  const { user, handleUserLogin } = useAuth();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    if (user) {
      navigate("/services");
    }
  }, []);


  const handleInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setCredentials({...credentials, [name]:value})
  }


  return (
    <main className="h-screen flex items-center justify-center here">
      <div className="z-50 bg-white flex flex-col p-10 border-4">
        <form onSubmit={(e) => handleUserLogin(e, credentials)}>
          <div className="flex flex-col my-5">
            <label className="text-[.9em]">Email:</label>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter Your email..."
              value={credentials.email}
              onChange={handleInputChange}
              className="py-4 border-2 pl-2 rounded-sm"
            />
          </div>
          <div className="z-50 bg-white flex flex-col my-5">
            <label className="text-[.9em]">Password:</label>
            <input
              type="password"
              required
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="py-4 border-2 pl-2 rounded-sm"
            />
          </div>
          <div className="bg-[#6B0606] text-white text-center rounded-sm py-1 my-5 hover:bg-gray-600">
            <input type="submit" value="login" />
          </div>
        </form>
        <p className="">
          Dont have an account? Register{" "}
          <Link to="/register" className="hover:text-[#6B0606] text-[1.3em]">
            here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
