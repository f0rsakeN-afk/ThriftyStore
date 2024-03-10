import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  
  return false ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AuthRoute;
