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
import ErrorPage from "../pages/Error/ErrorPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";

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
      {
        path: "*",
        element: <ErrorPage />,
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
    path: "/dashboard",
    element: (
      <PrivetRouter>
        <DashboardLayout />
      </PrivetRouter>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
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
      // {
      //   path: "dd",
      //   element: (
      //     <AdminRoute>
      //       <AdminHome />
      //     </AdminRoute>
      //   ),
      // },
      {
        path: "premium",
        element: (
          <AdminRoute>
            {" "}
            <ApprovedPremium />
          </AdminRoute>
        ),
      },
      {
        path: "contact",
        element: (
          <AdminRoute>
            {" "}
            <ApprovedRequest />
          </AdminRoute>
        ),
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
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routes;
