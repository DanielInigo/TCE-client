import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, logOut } from "../../features/authSlice";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="h-[400px] w-[350px] flex items-center justify-center flex-col shadow-lg shadow-black bg-[rgba(0,0,0,0.5)] text-white rounded-xl">
      <h1 className="text-3xl font-bold py-2 text-white">Account</h1>
      <p className="text-lg font-bold py-2 text-white">
        User Email: {user && user.email}
      </p>

      <button
        onClick={handleLogout}
        className="w-72 mt-10 bg-[#8B0000] text-white rounded-full p-2 border hover:font-bold hover:scale-105 shadow-md hover:shadow-black"
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
