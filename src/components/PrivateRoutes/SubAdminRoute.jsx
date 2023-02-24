import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/authSlice";

const SubAdminRoute = () => {
  const user = useSelector(selectCurrentUser);

  const authFn = () => {
    alert("You are not authorized to this page");
    return <Navigate to="/" />;
  };

  return (user.isAdmin && user.role === "sub") ? (
    <Outlet />
  ) : (
    authFn()
  );
};

export default SubAdminRoute;
