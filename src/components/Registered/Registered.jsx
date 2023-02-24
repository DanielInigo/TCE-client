import React, { useEffect, useState } from "react";
import { selectCurrentUser } from "../../features/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Registered = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  //const[date,dateonly]= useState('')
  const [event, setevent] = useState([]);
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/userApi/reg-eve`, { user: user.regno })
      .then(function (response) {
        setevent(response.data);
        console.log(response.data);
      });
  }, [user.regno]);
  return (
    <div className="bg-[#f0f2f5] relative h-screen">
      <div className="mx-auto container py-20 px-6">
        <div className="grid grid-cols-3 gap-10">
          {event.map((eve, idx) => (
            <div className="rounded" key={idx}>
              <div
                className="w-full h-64 flex flex-col justify-between dark:bg-gray-700 dark:border-gray-700 rounded-lg border border-gray-400 hover:bg-gray-800 hover:scale-105  mb-6 py-5 px-4"
                onClick={() => {
                  navigate("/description", { state: { eve, reg: 1 } });
                }}
              >
                <div>
                  <h4 className=" text-white font-bold text-2xl text-center mb-3">
                    {eve.name}
                  </h4>
                  <p className=" text-white text-xl mt-[2rem]">{eve.summary}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between dark:text-gray-100">
                    <p className="text-sm">{eve.date.split("T")[0]}</p>
                    <div className="p-1 mr-[50%] bg-gray-800 dark:bg-gray-100 rounded-full  text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registered;
