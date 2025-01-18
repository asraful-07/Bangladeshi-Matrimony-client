import React from "react";
import { Helmet } from "react-helmet-async";
import { HiHome } from "react-icons/hi";
import { FaUserCog, FaUserEdit, FaHeart } from "react-icons/fa";
import { MdContacts, MdOutlineRequestQuote } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="relative min-h-screen md:flex bg-gray-100">
      <Helmet>
        <title>Matrimony | Dashboard</title>
      </Helmet>

      {/* Sidebar Component */}
      <div className="w-64 bg-blue-900 text-white flex-shrink-0">
        {/* Logo Section */}
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

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul>
            {isAdmin ? (
              // Admin Links
              <>
                <li className="py-2 px-4 hover:bg-blue-700">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400" : "text-white"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <HiHome /> Home
                    </span>
                  </NavLink>
                </li>
                <li className="py-2 px-4 hover:bg-blue-700">
                  <NavLink
                    to="/dashboard/user"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400" : "text-white"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaUserCog /> Manage Users
                    </span>
                  </NavLink>
                </li>
                <li className="py-2 px-4 hover:bg-blue-700">
                  <NavLink
                    to="/dashboard/contact"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400" : "text-white"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <MdContacts /> Approved Contacts
                    </span>
                  </NavLink>
                </li>
              </>
            ) : (
              // User Links
              <>
                <li className="py-2 px-4 hover:bg-blue-700">
                  <NavLink
                    to="/dashboard/biodata"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400" : "text-white"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaUserEdit /> Edit Biodata
                    </span>
                  </NavLink>
                </li>
                <li className="py-2 px-4 hover:bg-blue-700">
                  <NavLink
                    to="/dashboard/view"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400" : "text-white"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <HiHome /> View Biodata
                    </span>
                  </NavLink>
                </li>
                <li className="py-2 px-4 hover:bg-blue-700">
                  <NavLink
                    to="/dashboard/request"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400" : "text-white"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <MdOutlineRequestQuote /> My Contact Requests
                    </span>
                  </NavLink>
                </li>
                <li className="py-2 px-4 hover:bg-blue-700">
                  <NavLink
                    to="/dashboard/favourites"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400" : "text-white"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <FaHeart /> Favourite Biodata
                    </span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Dynamic Content */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
