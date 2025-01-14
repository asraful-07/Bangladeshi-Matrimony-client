import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-primary md:loading-lg"></span>
      </div>
    );
  } else if (user) {
    return children;
  }

  return (
    <Navigate
      state={{ from: location.pathname }}
      to="/login"
      replace
    ></Navigate>
  );
};

export default PrivetRouter;
