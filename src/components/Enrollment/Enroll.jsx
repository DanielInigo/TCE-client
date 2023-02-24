import React, { useEffect, useState } from "react";
import Axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Enroll = () => {
  const [event, setevent] = useState([]);

  let registeredPhonenumber = [];

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/admin/eve`).then((response) => {
      setevent(response.data);
      console.log(response.data);
    });
  }, []);

  const Notify = (eventname,registeredPhonenumber) => {
    Axios.post(`${process.env.REACT_APP_API_URL}/admin/notify`, {
      notify: true,
      phonenos: registeredPhonenumber,
      eventname
    }).then(() => {
      // alert("Notified")
      toast.success("Notified Successfully!!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose:3000,
        theme:'colored'
      })
    });
  };

  return (
    <div className="bg-[#f0f2f5] relative ">
      <div className="mx-auto container py-20 px-6">
        <div className="grid grid-cols-3 gap-10 ">
          
          {event.map((eve,idx) => {
            
            return(
              <div key={idx} className="rounded ">
              <div className="w-full h-[20rem] justify-between bg-gray-700 border border-gray-700 rounded-lg  mb-6 py-5 px-4 ">
              <button
                    onClick={() => {
                      Notify(eve.name,registeredPhonenumber);
                    }}
                    className="p-2 sticky border-2 ml-[20rem] bg-white border-black rounded-md font-bold hover:bg-black hover:text-white"
                  >
                    Notify All
                  </button>
                <div>
                  <h4 className=" text-white font-bold text-2xl text-center m-3">
                    {eve.name}
                  </h4>
                  {
                  eve.res1.map((res,idx) => {
                    registeredPhonenumber.push(res.userphonenumber)
                    return (
                      <li key={idx} className=" text-white text-xl mt-1">
                        Reg No: {res.user}  Phone: {res.userphonenumber}
                      </li>
                    );
                  })}
                  
                </div>
              </div>
            </div>
            )

})}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Enroll;
