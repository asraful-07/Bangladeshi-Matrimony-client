import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayouts = () => {
  return (
    <div>
      <h1>dashboard</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayouts;
