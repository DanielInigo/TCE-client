import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../../features/authSlice";
import { useSelector } from "react-redux";
import "./upcoming.css";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
//import Gif1 from "../../../images/cs1.gif";
// import Axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ar = [];
function Upcoming() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [event, setevent] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/userApi/eve`).then(function (response) {
      setevent(response.data);
      console.log(response.data);
      setFilteredData(response.data);
    });
  }, []);

  function Register_eve(
    id,
    name,
    summary,
    date,
    org,
    dept,
    cate,
    venu,
    type,
    time,
    cont,
    desc
  ) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/userApi/register-eve`, {
        user: user.regno,
        userphonenumber: user.phonenumber,
        id,
        name,
        summary,
        date,
        org,
        dept,
        cate,
        venu,
        type,
        time,
        cont,
        desc,
      })
      .then(function (response) {
        if (response.data === 400) {
          toast.error("You have already registered to this event", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
            theme: "colored",
          });
        } else if (response.data === 200) {
          toast.success("Registered to the event Successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
            theme: "colored",
          });
        }
      });
  }
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = event.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  return (
    <>
      <div className="relative ml-[110px] w-[300px] mt-[30px] shadow-2xl shadow-black ">
        <AiOutlineSearch className="h-[50px] w-[50px] p-[4px] absolute box-border border-[4px] top-[50%] border-black translate-y-[-50%] " />
        <input
          className="h-[50px] box-border pl-[60px] w-[400px] border-[4px] border-black"
          type="text"
          placeholder="Type to Search"
          onChange={handleFilter}
        />
      </div>
      <h1 className="text-4xl pt-4 pb-4 ml-[220px] mt-[20px] font-bold">Upcoming...</h1>
      <div className="overflow-y-scroll"></div>
      {filteredData.length !== 0 && (
        <div className="flex flex-col overflow-y-scroll pl-[20px] pt-[20px] h-[470px] w-[670px]">
          {filteredData.map((eve, idx) => (
            <div key={idx}>
              <div className="flex flex-col mb-5 items-center bg-gray-700 rounded-3xl border shadow-md md:flex-row md:max-w-xl hover:bg-gray-800 hover:scale-105  hover:rounded-3xl">
                {/* <img
              className="object-cover w-full h-full rounded-t-lg md:h-40 md:w-40 md:rounded-none md:rounded-l-lg"
              src={Gif1}
              alt=""
            /> */}
                <div
                  className="flex flex-col flex-grow justify-between p-4 leading-normal"
                  onClick={() => {
                    navigate("/description", { state: { eve, reg: 0 } });
                  }}
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {eve.name}
                  </h5>
                  <p
                    className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                    onClick={() => {
                      navigate("/description", { state: eve });
                    }}
                  >
                    {eve.summary}
                  </p>
                  <p
                    onClick={() => ar.push(eve.date)}
                    className="text-white w-[50%] "
                  >
                    Event date : {eve.date.split("T")[0]}
                  </p>
                </div>
                <button
                  onClick={() => {
                    Register_eve(
                      eve._id,
                      eve.name,
                      eve.summary,
                      eve.date,
                      eve.org,
                      eve.dept,
                      eve.cate,
                      eve.venu,
                      eve.type,
                      eve.time,
                      eve.cont,
                      eve.desc
                    );
                  }}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default Upcoming;
