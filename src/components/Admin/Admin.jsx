import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [summary, setsummary] = useState("");
  const [org, setorg] = useState("");
  const [dept, setdept] = useState("");
  const [cate, setcate] = useState("");
  const [venu, setvenu] = useState("");
  const [type, settype] = useState("");
  const [time, settime] = useState("");
  const [cont, setcont] = useState("");
  const [desc, setdesc] = useState("");
  function Submit() {
    axios.post(`${process.env.REACT_APP_API_URL}/admin/add`, {
      name,
      date,
      summary,
      org,
      dept,
      cate,
      venu,
      type,
      time,
      cont,
      desc,
    });
    toast.success("Events Added", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      theme: "colored",
    });
    // alert("submited");
    document.AddEve.reset();
  }
  return (
    <form name="AddEve" className="bg-[#f0f2f5] py-10">
      <div className="mx-auto max-w-6xl rounded-lg bg-white shadow-black shadow-2xl">
        <div className="text-black font-bold text-4xl text-center py-8">
          <p>Add Events</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around flex-wrap p-8">
          <div className="flex flex-col pl-[5rem] w-full md:w-1/2">
            <label className="text-lg font-bold pt-2 text-black">
              Event Name
            </label>
            <input
              className="border-2 border-black p-2 rounded-md w-full md:w-80"
              type="text"
              onChange={(e) => {
                setname(e.target.value);
              }}
              placeholder="Enter Event Name"
            />

            <label className="text-lg font-bold pt-2 text-black">Summary</label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-80"
              type="text"
              onChange={(e) => {
                setsummary(e.target.value);
              }}
              placeholder="Enter Event Summary"
            />

            <label className="text-lg font-bold pt-2 text-black">
              Department
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-80"
              type="text"
              onChange={(e) => {
                setdept(e.target.value);
              }}
              placeholder="Enter Event Department"
            />

            <label className="text-lg font-bold pt-2 text-black">Venue</label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-80"
              type="text"
              onChange={(e) => {
                setvenu(e.target.value);
              }}
              placeholder="Enter Event Venue"
            />

            <label className="text-lg font-bold pt-2 text-black">Time</label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-80"
              type="text"
              onChange={(e) => {
                settime(e.target.value);
              }}
              placeholder="Enter Event Time"
            />
          </div>

          <div className="flex flex-col pl-[5rem] w-full md:w-1/2 mt-8 md:mt-0">
            <label className="text-lg font-bold pt-2 text-black">
              Event Date
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-80"
              type="date"
              name="book_date"
              id="book_date"
              onChange={(e) => {
                setdate(e.target.value);
              }}
              placeholder="Enter Event Date"
            />

            <label className="text-lg font-bold pt-2 text-black">
              Organiser
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-80"
              type="text"
              onChange={(e) => {
                setorg(e.target.value);
              }}
              placeholder="Enter Event Organiser"
            />

            <label className="text-lg font-bold pt-2 text-black">
              Event Category
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-80"
              type="text"
              onChange={(e) => {
                setcate(e.target.value);
              }}
              placeholder="Enter Event Category"
            />

            <label className="text-lg font-bold pt-2 text-black">
              Event Type
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-80"
              type="text"
              onChange={(e) => {
                settype(e.target.value);
              }}
              placeholder="Enter Event Type"
            />

            <label className="text-lg font-bold pt-2 text-black">Contact</label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-80"
              type="text"
              onChange={(e) => {
                setcont(e.target.value);
              }}
              placeholder="Enter Contact Details"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col">
            <label className="text-lg font-bold pt-8 text-black">
              Detailed Description
            </label>
            <textarea
              className="border-2 mt-2 border-black p-2 rounded-md w-full md:w-96 h-32 md:h-48"
              type="text"
              onChange={(e) => {
                setdesc(e.target.value);
              }}
              placeholder="Enter Event Description"
            />
          </div>
        </div>
        <div class="flex justify-center items-center p-3">
          <button
            className=" text-white bg-blue-500 rounded-lg hover:bg-blue-600 md:flex-row md:px-4 py-4 px-6 md:text-lg"
            type="submit"
            onClick={Submit}
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Admin;
