import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

// import { useDispatch } from "react-redux";
// import { setCredentials } from "../../features/authSlice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    Axios.post(`${process.env.REACT_APP_API_URL}/userApi/register`, data).then((res) => {
      if (res.data.error) {
        console.log(res.data.error);
      } else {
        // localStorage.setItem("accessToken", res.data);
        // console.log("Here")
        
        navigate("/signin",{state: true});
        
      }
    });
  };

  return (
    <div className="bg-[url('clgimg.jpg')] bg-cover font-medium h-screen flex items-center justify-center">
      <div className="p-10 h-[500px] w-[370px] rounded-lg shadow-lg shadow-black bg-[rgba(0,0,0,0.5)]">
        <div>
          <h1 className="text-2xl font-bold py-2 text-white">
            Sign up for an account
          </h1>
          <p className="text-medium text-white py-2">
            Already have an account?
            <Link
              to="/signin"
              className="ml-2 underline text-lg font-bold text-blue-400"
            >
              Sign in.
            </Link>
          </p>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="flex flex-col py-2">
            <label className="text-lg font-bold pt-2 text-white">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black p-2 rounded-md"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-lg font-bold pt-2 text-white">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-black p-2 rounded-md"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="w-72 mt-10 bg-[#8B0000] text-white rounded-md p-2 border hover:font-bold hover:scale-105 shadow-md hover:shadow-black"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
