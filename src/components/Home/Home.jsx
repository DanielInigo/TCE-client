import React, { useState, useEffect } from "react";
import Account from "../Account/Account";
import Axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/authSlice";
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Home = () => {
  const user = useSelector(selectCurrentUser);
  // eslint-disable-next-line no-unused-vars
  const [event, setEvent] = useState([]);

  // const dispatch = useDispatch();
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/userApi/eve`).then(response => {
      setEvent(response.data);
      console.log(response.data);
    });
    console.log(user);
  }, [user]);

  return user ? (
    <div className="bg-[url('clgimg.jpg')] bg-cover font-medium h-screen flex flex-col items-center justify-center">
      <Account/>
    </div>
  ) : (
 <div className="bg-gray-300 h-screen"> 
  <div className="text-black font-bold text-4xl text-center pt-[2rem]">
  <div className="flex flex-col ml-[85%]">
              <p className=" text-xl flex-row mr-[3rem] pb-2"> Follow Us</p>
              <p className="flex">
              <a href="https://www.facebook.com/TCE-Events-108386058745332" target="_blank" rel="noreferrer">
                <AiFillFacebook size={30} className="ml-7"></AiFillFacebook>
              </a>
              <a href="https://www.instagram.com/tceevents5" target="_blank" rel="noreferrer">
                <BsInstagram size={30} className="ml-7"></BsInstagram>
              </a>
              <a href="https://twitter.com/tce_events/" target="_blank" rel="noreferrer">
                <AiFillTwitterCircle size={30} className="ml-7"></AiFillTwitterCircle>
              </a>
              </p>
            </div>
            <div className="absolute top-[8rem] ml-[32%] p-3 mt-3"> 
    <p>Exciting Events!!!</p>
    <p className="p-[1rem]">Experience the joy of Participation!</p>
  </div>
  </div>  
<div 
  id="carouselExampleIndicators"
  className="carousel slide relative p-[1rem]"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-3 mb-10">
    
        {
      event.map((eve,i)=>i===0?(<button 
        key={i}
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={`${i}`}
        className="active bg-white"
        aria-current="true"
        aria-label="Slide 1"
      ></button>):(
        <button
        key={i}
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={`${i}`}
        className="bg-white"
        aria-label="Slide 1"
      ></button>
      ))
    }
    
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
     {
      event.map((eve,i)=>i===0?(<div key={i} className="carousel-item active relative float-left w-full">
      <div className="bg-[url('./images/bghom.jpg')] bg-cover mt-[3rem] ml-[28rem] h-[30rem] w-[50rem]  border-2 shadow-2xl ">
      <h5 className="mt-[3rem] text-center m-auto text-4xl font-bold tracking-tight text-gray-300 border-[5px] w-[50%] border-white p-4">
            {eve.name}
          </h5>
          <h5 className="mt-[3rem] text-center text-2xl font-bold tracking-tight text-gray-300">
            {eve.summary}
          </h5>
          <h5 className="mt-[3rem] text-center text-2xl font-bold tracking-tight text-gray-300 ">
            Organized by {eve.org}
          </h5>
      </div>
      </div>):(
        <div key={i} className="carousel-item  relative float-left ">
      <div className="bg-[url('./images/bghom.jpg')] bg-cover mt-[3rem] ml-[28rem] h-[30rem] w-[50rem]  border-2 shadow-2xl ">
      <h5 className="mt-[3rem] text-center m-auto text-4xl font-bold tracking-tight text-gray-300 border-[5px] w-[50%] border-white p-4">
            {eve.name}
          </h5>
          <h5 className="mt-[3rem] text-center text-2xl font-bold tracking-tight text-gray-300 ">
            {eve.summary}
          </h5>
          <h5 className="mt-[3rem] text-center text-2xl font-bold tracking-tight text-gray-300 ">
            Organized by {eve.org}
          </h5>
      </div>
      </div>
      ))
    } 
  </div>
  <div className="carousel-dark">
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
  );
};

export default Home;
