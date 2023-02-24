import React from "react";
import { selectCurrentUser } from "../../../features/authSlice";
import { useSelector } from "react-redux";

function Welcome() {
  const user = useSelector(selectCurrentUser);
  const name = user.name;
  // console.log(user);

  return (
    <div className="text-center text-4xl font-bold mt-[2rem]">
      <p>Welcome</p>
      <p>{name}</p>
    </div>
  );
}

export default Welcome;
