import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  HiHome,
  HiOutlineViewGrid,
  HiUserGroup,
  HiStar,
  HiMailOpen,
  HiHeart,
  HiCheckCircle,
} from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import UseAuth from "../hooks/UseAuth";

// Reusable Sidebar Item Component
const SidebarItem = ({ to, label, icon: Icon }) => (
  <li className="py-2 px-4 hover:bg-blue-700">
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-yellow-400 flex items-center gap-2"
          : "text-white flex items-center gap-2"
      }
    >
      <Icon />
      {label}
    </NavLink>
  </li>
);

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const { user } = UseAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen md:flex bg-gray-100">
      <Helmet>
        <title>Matrimony | Dashboard</title>
      </Helmet>

      {/* Sidebar Toggle Button for Mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="block md:hidden p-4 bg-blue-900 text-white"
      >
        Menu
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 bg-blue-900 text-white flex-shrink-0 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
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

        {/* Navigation */}
        <nav className="mt-6">
          <ul>
            {isAdmin ? (
              <>
                <SidebarItem
                  to="/dashboard"
                  label="Admin Dashboard"
                  icon={HiOutlineViewGrid}
                />
                <SidebarItem
                  to="/dashboard/user"
                  label="Manage User"
                  icon={HiUserGroup}
                />
                <SidebarItem
                  to="/dashboard/premium"
                  label="Approved Premium"
                  icon={HiStar}
                />
                <SidebarItem
                  to="/dashboard/contact"
                  label="Approved Contact Requests"
                  icon={HiMailOpen}
                />
              </>
            ) : (
              <>
                <SidebarItem
                  to="/dashboard/biodata"
                  label="Edit Biodata"
                  icon={HiOutlineViewGrid}
                />
                <SidebarItem
                  to="/dashboard/view"
                  label="View Biodata"
                  icon={HiHome}
                />
                <SidebarItem
                  to="/dashboard/request"
                  label="My Contact Request"
                  icon={HiMailOpen}
                />
                <SidebarItem
                  to="/dashboard/favourites"
                  label="Favourites Biodata"
                  icon={HiHeart}
                />
                <SidebarItem
                  to="/dashboard/success"
                  label="Success Story"
                  icon={HiCheckCircle}
                />
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Dynamic Content Area */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
