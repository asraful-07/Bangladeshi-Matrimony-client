import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const { user, handleLogout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const themeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const defaultAvatar = "/default-avatar.png";

  // Separate public and private links
  const publicLinks = [
    { path: "/", label: "Home" },
    { path: "/ Bbodatas", label: "Biodatas" },
    { path: "/ about-us", label: "About Us" },
    { path: "/ contact-us", label: "Contact Us" },
  ];

  const privateLinks = [{ path: "/dashboard", label: "Dashboard" }];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://imgs.bangladeshimatrimony.com/cbsimages/hp_new/bangladeshi_logo.svg"
            alt="Bangladeshi Matrimony Logo"
            className="h-12 w-auto" // Adjust image size as needed
          />
          <div className="flex flex-col justify-center">
            <h4 className="text-green-600 text-xl font-semibold">
              Bangladeshi
            </h4>
            <h4 className="text-red-600 text-xl font-semibold">Matrimony</h4>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center justify-center space-x-6 text-lg">
          {/* Theme Toggle */}
          <div className="form-control w-52">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={theme === "dark"}
                onChange={themeToggle}
              />
            </label>
          </div>

          {/* Public Navigation Links */}
          {publicLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold underline block px-3 py-2"
                  : "text-black hover:underline hover:text-black block px-3 py-2"
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Private Navigation Links (Only if user is logged in) */}
          {user &&
            privateLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-black  font-semibold underline block px-3 py-2"
                    : "text-black  hover:underline hover:text-black  block px-3 py-2"
                }
              >
                {label}
              </NavLink>
            ))}

          {/* User Section */}
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user?.photoURL || defaultAvatar}
                alt="User"
                className="h-12 w-12 rounded-full border-2 border-[#0db496]"
                id="lg-tooltip"
              />
              <Tooltip
                className="z-10"
                anchorSelect="#lg-tooltip"
                content={user?.displayName || "User"}
              />
              <button
                className="bg-[#0db496] text-white text-xl font-bold hover:bg-[#0db496] transition duration-200 px-4 py-2 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-[#0db496] text-white px-4 py-2 rounded hover:bg-[#0db496]"
            >
              Log in
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#0db496] text-2xl"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#383737] shadow-lg p-4">
          {/* Public Navigation Links */}
          {publicLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#0db496] font-semibold underline block px-3 py-2"
                  : "text-white hover:underline hover:text-[#0db496] block px-3 py-2"
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Private Navigation Links (Only if user is logged in) */}
          {user &&
            privateLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0db496] font-semibold underline block px-3 py-2"
                    : "text-white hover:underline hover:text-[#0db496] block px-3 py-2"
                }
              >
                {label}
              </NavLink>
            ))}

          {user ? (
            <div className="flex flex-col items-start space-y-4 mt-4">
              <div className="flex items-center space-x-4">
                <img
                  src={user?.photoURL || defaultAvatar}
                  alt="User"
                  className="h-12 w-12 rounded-full border-2 border-[#0db496]"
                  id="sm-tooltip"
                />
                <Tooltip
                  className="z-10"
                  anchorSelect="#sm-tooltip"
                  content={user?.displayName || "User"}
                />
                <span className="text-gray-700 font-semibold">
                  {user?.displayName || "User"}
                </span>
              </div>
              <button
                className="w-full bg-[#0db496] text-white px-4 py-2 rounded hover:bg-[#0db496]"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="w-full bg-[#0db496] text-white px-4 py-2 rounded hover:bg-[#0db496]"
            >
              Log in
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
