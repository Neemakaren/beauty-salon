import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const {handleUserRegister} = useAuth()

  const [credentials, setCredentials] = useState({
    name:'',
    email: "",
    password1: "",
    password2: "",
  });

   const handleInputChange = (e) => {
     let name = e.target.name;
     let value = e.target.value;

     setCredentials({ ...credentials, [name]: value });
   };
  return (
    <main className="h-screen flex items-center justify-center here">
      <div className="z-50 bg-white flex flex-col py-6 px-14 border-4 rounded-sm">
        <form onSubmit={(e) => handleUserRegister(e, credentials)}>
          <div className="flex flex-col my-5 gap-2">
            <label className="text-[.9em]">Name:</label>
            <input
              type="text"
              required
              name="name"
              placeholder="Enter Your name..."
              value={credentials.name}
              onChange={handleInputChange}
              className="py-4 border-2 pl-2 rounded-sm"
            />
          </div>
          <div className="z-50 bg-white flex flex-col my-5 gap-2">
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
          <div className="z-50 bg-white flex flex-col my-5 gap-2">
            <label className="text-[.9em]">Password:</label>
            <input
              type="password"
              required
              name="password1"
              value={credentials.password1}
              onChange={handleInputChange}
              className="py-4 border-2 pl-2 rounded-sm"
            />
          </div>
          <div className="z-50 bg-white flex flex-col my-5 gap-2">
            <label className="text-[.9em]">confirm Password:</label>
            <input
              type="password"
              required
              name="password2"
              placeholder="confirm your password..."
              value={credentials.password2}
              onChange={handleInputChange}
              className="py-4 border-2 pl-2 rounded-sm"
            />
          </div>
          <div className="bg-[#6B0606] text-white text-center rounded-sm py-1 my-5 hover:bg-gray-600">
            <input type="submit" value="Register" />
          </div>
        </form>
        <p>
          Already have an account? Login{" "}
          <Link to="/login" className="hover:text-[#6B0606] text-[1.2em]">
            here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
