import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Error Image */}
      <img
        src="https://media.istockphoto.com/id/1631436945/photo/error-404-page-not-fond-futuristic-modern-3d-background.jpg?s=612x612&w=0&k=20&c=PPSccXEbZMRLjdxWezen6s_OWdkaICMzHtLcmM-2LAY="
        alt="404 Error"
        className="mb-6 w-full max-w-md rounded-md shadow-lg"
      />

      {/* Error Text */}
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Oops! The page you are looking for does not exist or might have been
        moved.
      </p>

      {/* Navigation Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-800 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
