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
import AdminRoute from "./AdminRoutes";
import ViewBiodata from "../layouts/ViewBiodata/ViewBiodata";
import Checkout from "../components/Checkout";

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
        element: <BiodatasDetails />,
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
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
    element: <DashboardLayout />,
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
