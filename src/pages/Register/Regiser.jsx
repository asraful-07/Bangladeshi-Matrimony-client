import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { saveUser } from "../../api/utils";

// import Lottie from "lottie-react";
// import loginAnimation from "../assets/loginAnimation.json";

const Register = () => {
  const { handleRegister, manageProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handelSinUp = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Collect input values
    const name = e.target.name.value.trim();
    const photoUrl = e.target.photoUrl.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const conPassword = e.target.conPassword.value.trim();

    // Input validations
    if (!name) {
      setError("Name is required.");
      return;
    }
    if (!photoUrl) {
      setError("Photo URL is required.");
      return;
    }
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }
    if (password !== conPassword) {
      setError("Passwords didn't match.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    try {
      // Register the user
      const res = await handleRegister(email, password);

      // Manage user profile
      await manageProfile(name, photoUrl);

      // Save user information in the database
      await saveUser({
        ...res.user,
        displayName: name,
      });

      toast.success("Registration successful!");
      console.log("Registration successful:", res);
    } catch (err) {
      // Handle registration errors
      console.error("Registration error:", err);
      setError("Registration failed: " + err.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-gray-100 py-8">
      <div className="hero-content flex-col lg:flex-row justify-between">
        {/* <div>
          <Lottie animationData={loginAnimation} loop={true} />
        </div> */}
        <div className="card bg-white w-full max-w-2xl shadow-lg rounded-lg p-8">
          <form onSubmit={handelSinUp} className="space-y-6">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              Register Your Account
            </h1>
            <div className="divider my-4"></div>

            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered text-lg w-full"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Your Photo URL
                </span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="Enter your photo URL"
                className="input input-bordered text-lg w-full"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered text-lg w-full"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered text-lg w-full pr-12"
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 text-2xl text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Confirm Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="conPassword"
                  placeholder="Confirm your password"
                  className="input input-bordered text-lg w-full pr-12"
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 text-2xl text-gray-500 hover:text-gray-700"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-control">
              <button className="btn bg-green-600 hover:bg-green-700 text-white py-3 px-6 text-lg rounded-lg w-full">
                Register
              </button>
            </div>

            <p className="text-center text-gray-600 text-sm">
              Don’t Have An Account?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            </p>

            {error && <p className="text-red-600 text-center mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
