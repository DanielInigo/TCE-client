import { useState } from "react";
import Gif1 from "../../images/profile.png";
import Axios from "axios";
import { selectCurrentUser, setCredentials } from "../../features/authSlice";
import { useSelector, useDispatch } from "react-redux";

import ActivityAchievements from "./ActivityAchievements/ActivityAchievements";
import { Calendar } from "react-calendar";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const user = useSelector(selectCurrentUser);
  const userEmail = user ? user.email : null;
  const name = user.name;

  const dispatch = useDispatch();

  const [updatedname, setUpdatedName] = useState(user ? user.name : "");
  const [updatedphonenumber, setUpdatedphonenumber] = useState(
    user ? user.phonenumber : ""
  );
  const [updatedmailid, setUpdatedMailid] = useState(user ? user.email : "");
  const [updatedregisternumber, setUpdatedregisternumber] = useState(
    user ? user.regno : ""
  );

  const saveDets = async (e) => {
    e.preventDefault();
    const updated = {
      name: updatedname,
      phonenumber: updatedphonenumber,
      email: updatedmailid,
      regno: updatedregisternumber,
    };

    dispatch(
      setCredentials({
        user: {
          ...user,
          name: updatedname,
          phonenumber: updatedphonenumber,
          email: updatedmailid,
          regno: updatedphonenumber,
        },
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
      })
    );

    Axios.post(`${process.env.REACT_APP_API_URL}/userApi/updateUser`, {
      email: userEmail,
      updated,
    }).then((res) => {
      // alert("Details Saved");
        toast.success("Details Saved", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose:3000,
          theme:'colored'
        })
      //navigate("/dashboard");
    });
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-around bg-[#f0f2f5] ">
        {/* User Profile Div */}
        <form className="my-10 bg-gray-600 flex flex-col w-[40rem] items-center justify-center rounded-lg">
          <h5 className="my-3 text-4xl text-center font-bold text-white">
            User Profile
          </h5>
          <img
            className="h-[200px] w-[200px] rounded-full"
            src={Gif1}
            alt="profile"
          />
          <div className="mt-10 px-10 flex flex-col justify-center mb-2 text-2xl w-[90%]">
            <label className="text-white text-lg ml-1">Name :</label>
            <input
              className="text-black p-2 rounded-lg border-black border-2"
              defaultValue={user?.name}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </div>
          <div className="mt-5 px-10 flex flex-col justify-center mb-2 text-2xl w-[90%]">
            <label className="text-white text-lg ml-1">Phone Number :</label>
            <input
              className=" text-black p-2 rounded-lg border-black border-2"
              defaultValue={user?.phonenumber}
              onChange={(e) => setUpdatedphonenumber(e.target.value)}
            />
          </div>
          <div className="mt-5 px-10 flex flex-col justify-center mb-2 text-2xl w-[90%]">
            <label className="text-white text-lg ml-1">Mail Id :</label>
            <input
              className=" text-black p-2 rounded-lg border-black border-2"
              defaultValue={userEmail}
              onChange={(e) => setUpdatedMailid(e.target.value)}
            />
          </div>
          <div className="mt-5 px-10 flex flex-col justify-center mb-2 text-2xl w-[90%]">
            <label className="text-white text-lg ml-1">Register Number :</label>
            <input
              className=" text-black p-2 rounded-lg border-black border-2"
              defaultValue={user?.regno}
              onChange={(e) => setUpdatedregisternumber(e.target.value)}
            />
          </div>
          <button
            onClick={(e) => saveDets(e)}
            className="text-lg px-10 py-2 my-8 text-center text-black bg-blue-200 rounded-lg hover:bg-blue-400"
          >
            Save
          </button>
        </form>

        {/* Activities and Achivements */}
        {user.isAdmin!==true?<ActivityAchievements />:
        <div className=" ">
        <div className="box-border mt-[5rem] h-[220px] w-[355px]  border-2 bg-white shadow-2xl ">
        <div className="text-center pt-[2rem]  text-4xl font-bold mt-[2rem]">
        <p>Welcome</p>
        <p>{name}</p>
    </div>
    </div>
    <div className="mt-[7.5rem]">
    <Calendar/>
    </div>
        </div>}
      </div>
      <ToastContainer />
    </>
  );
}

export default Profile;
