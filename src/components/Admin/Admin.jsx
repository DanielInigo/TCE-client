import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    axios
      .post(`${process.env.REACT_APP_API_URL}/admin/add`, {
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
      })
      toast.success("Events Added", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose:3000,
        theme:'colored'
      })
        // alert("submited");
        document.AddEve.reset();
  }
  return (
    <form name="AddEve" className="bg-[#f0f2f5] h-max py-[5rem]">
      <div className="h-[1050px] w-[1000px] rounded-lg bg-white shadow-black shadow-2xl m-auto pt-[3rem]">
        <div className="text-black font-bold text-4xl text-center">
          <p>Add Events</p>
        </div>
        <div className="flex flex-row justify-around flex-wrap">
          <div className="flex flex-col ">
            <label className="text-lg font-bold pt-[2rem] text-black">
              Event Name
            </label>
            <input
              className="border-2 border-black p-2 rounded-md w-[20rem]"
              type="text"
              onChange={(e) => {
                setname(e.target.value);
              }}
              placeholder="Enter Event Name "
            />

            <label className="text-lg font-bold pt-[2rem] text-black">
              Summary
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-[20rem]"
              type="text"
              onChange={(e) => {
                setsummary(e.target.value);
              }}
              placeholder="Enter Event Summary"
            />

            <label className="text-lg font-bold pt-[2rem] text-black">
              Department
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-[20rem]"
              type="text"
              onChange={(e) => {
                setdept(e.target.value);
              }}
              placeholder="Enter Event Department"
            />

            <label className="text-lg font-bold pt-[2rem] text-black">
              Venue
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-[20rem]"
              type="text"
              onChange={(e) => {
                setvenu(e.target.value);
              }}
              placeholder="Enter Event Venue"
            />

            <label className="text-lg font-bold pt-[2rem] text-black">
              Time
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-[20rem]"
              type="text"
              onChange={(e) => {
                settime(e.target.value);
              }}
              placeholder="Enter Event Time"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-bold pt-[2rem] text-black">
              Event Date
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-[20rem]"
              type="date" name="book_date" id="book_date"
              onChange={(e) => {
                setdate(e.target.value);

              }}
              placeholder="Enter Event Date "
            />

            <label className="text-lg font-bold pt-[2rem] text-black">
              Organiser
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-[20rem]"
              type="text"
              onChange={(e) => {
                setorg(e.target.value);
              }}
              placeholder="Enter Event Organiser"
            />

            <label className="text-lg font-bold pt-[2rem] text-black">
              Event Category
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-[20rem]"
              type="text"
              onChange={(e) => {
                setcate(e.target.value);
              }}
              placeholder="Enter Event Category"
            />

            <label className="text-lg font-bold pt-[2rem] text-black">
              Event Type
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-[20rem]"
              type="text"
              onChange={(e) => {
                settype(e.target.value);
              }}
              placeholder="Enter Event Type"
            />

            <label className="text-lg font-bold pt-[2rem] text-black">
              Contact
            </label>
            <input
              className="border-2 mt-2 border-black p-2 rounded-md w-[20rem]"
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
            <label className="text-lg font-bold pt-[2rem] text-black">
              Detailed Description
            </label>
            <textarea
              className="border-2 mt-2 border-black p-2 rounded-md w-[30rem] h-[10rem]"
              type="text"
              onChange={(e) => {
                setdesc(e.target.value);
              }}
              placeholder="Enter Event Description"
            />
          </div>
        </div>
        <button
          className="text-lg font-bold mt-[3rem] ml-[28rem] text-black bg-blue-200 rounded-lg hover:bg-blue-400 h-[2.5rem] w-[5rem]"
          type="submit"
          onClick={Submit}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Admin;