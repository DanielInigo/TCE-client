import React from "react";
import TCELogo from "../../images/logo.png";
import { Link } from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/authSlice";

function Navbar() {
  // const { user } = UserAuth();
  const user = useSelector(selectCurrentUser);
  // console.log(user);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-30 mx-auto px-4 text-white bg-[#a80202]">
      <div className="md:w-[200px]">
        <img
          src={TCELogo}
          alt="TCELogo"
          className="rounded-full w-[132px] h-[117px] p-2"
        />
      </div>
      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-white mt-4 md:mt-0 md:ml-[9rem]">
        TCE EVENTS
      </div>
  
      {user ? (
        user.isAdmin ? (
          <ul className="hidden md:flex font-medium text-lg md:text-xl ">
            <li className="p-2 md:p-4 hover:scale-125">
              <Link to="/profile">Profile</Link>
            </li>
            {user.role === "main" ? (
              <>
                <li className="p-2 md:p-4 hover:scale-125">
                  <Link to="/add-event">Add Events</Link>
                </li>
                <li className="p-2 md:p-4 hover:scale-125">
                  <Link to="/enroll">Participants</Link>
                </li>
              </>
            ) : null}
            {user.role === "sub" ? (
              <li className="p-2 md:p-4 hover:scale-125">
                <Link to="/enroll">Participants</Link>
              </li>
            ) : null}
            <li className="p-2 md:p-4 hover:scale-125">
              <Link to="/">Logout</Link>
            </li>
          </ul>
        ) : (
          <ul className="hidden md:flex font-medium text-lg md:text-xl ">
            <li className="p-2 md:p-4 hover:scale-125">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="p-2 md:p-4 hover:scale-125">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-2 md:p-4 hover:scale-125">
              <Link to="/reg">Registered</Link>
            </li>
            <li className="p-2 md:p-4 hover:scale-125">
              <Link to="/">Log-Out</Link>
            </li>
          </ul>
        )
      ) : (
        <ul className="hidden md:flex font-medium text-lg md:text-2xl ">
          <li className="p-2 md:p-4 hover:scale-125">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 md:p-4 hover:scale-125">
            <Link to="/signin">Sign-In</Link>
          </li>
          <li className="p-2 md:p-4 hover:scale-125">
            <Link to="/signup">Sign-Up</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
