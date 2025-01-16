import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Regiser";
import DashboardLayout from "../layouts/DashboardLayouts";
import BiodataEdit from "../pages/Biodata/BiodataEdit";
import Biodatas from "../pages/Biodatas/Biodatas";
import BiodatasDetails from "../pages/BiodatasDetails/BiodatasDetails";
import FavouritesBiodata from "../pages/Favourites/FavouritesBiodata";
import ManageUsers from "../pages/Admin/ManageUsers";
import PrivetRouter from "./PrivetRouter";
import AdminRoute from "./AdminRoutes";
import ViewBiodata from "../layouts/ViewBiodata/ViewBiodata";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Bbodatas",
        element: <Biodatas />,
      },
      {
        path: "/biodata/:id",
        element: (
          <PrivetRouter>
            <BiodatasDetails />
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivetRouter>
        <DashboardLayout />
      </PrivetRouter>
    ),
    children: [
      {
        path: "biodata",
        element: <BiodataEdit />,
      },
      {
        path: "favourites",
        element: <FavouritesBiodata />,
      },
      {
        path: "view",
        element: <ViewBiodata />,
      },
      // Admin works
      {
        path: "user",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default routes;
