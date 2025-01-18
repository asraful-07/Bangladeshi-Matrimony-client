import React from "react";
import { Helmet } from "react-helmet-async";
import { HiHome } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const isAdmin = true;
  return (
    <div className="relative min-h-screen md:flex bg-gray-100">
      <Helmet>
        <title>Matrimony | Dashboard</title>
      </Helmet>
      {/* Left Side: Sidebar Component */}
      <div className="w-64 bg-blue-900 text-white flex-shrink-0">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center py-6 px-4 gap-3">
            <img
              src="https://imgs.bangladeshimatrimony.com/cbsimages/hp_new/bangladeshi_logo.svg"
              alt="Bangladeshi Matrimony Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col justify-center">
              <h4 className="text-green-600 text-xl font-semibold">
                Bangladeshi
              </h4>
              <h4 className="text-red-600 text-xl font-semibold">Matrimony</h4>
            </div>
          </div>
        </NavLink>
        <nav className="mt-6">
          <ul>
            {/* admin code */}
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                <span className="flex justify-center gap-2">
                  {" "}
                  <HiHome />
                </span>{" "}
                Home
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                <span className="flex justify-center gap-2">
                  {" "}
                  <HiHome />
                </span>{" "}
                Admin Dashboard
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/dashboard/user"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Manage User
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/dashboard/premium"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Approved Premium
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/dashboard/contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Approved contact request
              </NavLink>
            </li>

            {/* user code */}
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/dashboard/biodata"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Edit Biodata
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/dashboard/view"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                View Biodata
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/dashboard/request"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                My Contact Request
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/dashboard/favourites"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Favourites Biodata
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-blue-700">
              <NavLink
                to="/dashboard/success"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Success Story
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right Side: Dashboard Dynamic Content */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
