import React from "react";
import BiodataEdit from "../Biodata/BiodataEdit";
import useRole from "../../hooks/useRole";
import AdminHome from "../Admin/AdminHome";

const Dashboard = () => {
  const [role] = useRole();

  return (
    <div>
      {role === "Premium" || (role === "NormalUser" && <BiodataEdit />)}

      {role === "admin" && <AdminHome />}
    </div>
  );
};

export default Dashboard;
