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
import MyContactRequest from "../pages/MyContactRequest.jsx/MyContactRequest";
import ApprovedRequest from "../pages/Admin/ApprovedRequest";
import SuccessStory from "../pages/Success/SuccessStory";
import ApprovedPremium from "../pages/Admin/ApprovedPremium";
import MatrimonyCarousel from "../components/MatrimonyCarousel";
import AdminHome from "../pages/Admin/AdminHome";
import ContactUs from "../pages/ContactUS/ContactUs";
import Payment from "../components/Payment/Payment";
import PrivetRouter from "./PrivetRouter";

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
      {
        path: "/checkout/:id",
        element: <Checkout />,
      },
      {
        path: "/about-us",
        element: <MatrimonyCarousel />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/payment",
        element: <Payment />,
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
      // Admin works
      {
        path: "user",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "dd",
        element: <AdminHome />,
      },
      {
        path: "premium",
        element: <ApprovedPremium />,
      },
      {
        path: "contact",
        element: <ApprovedRequest />,
      },
      // user work
      {
        path: "biodata",
        element: <BiodataEdit />,
      },
      {
        path: "view",
        element: <ViewBiodata />,
      },
      {
        path: "request",
        element: <MyContactRequest />,
      },
      {
        path: "favourites",
        element: <FavouritesBiodata />,
      },
      {
        path: "success",
        element: <SuccessStory />,
      },
    ],
  },
]);

export default routes;
