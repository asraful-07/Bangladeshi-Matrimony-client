import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivetRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
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
