import React from "react";
import UseAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Checkout = () => {
  const axiosSecure = useAxiosSecure();
  const { user, bioDataInfo } = UseAuth();
  const { biodataId } = bioDataInfo || {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Construct the data object
      const dataInfo = {
        biodataId,
        name: bioDataInfo?.name,
        email: bioDataInfo?.email,
        image: bioDataInfo?.image,
        mobileNumber: bioDataInfo?.mobileNumber,
        userEmail: user?.email,
        status: "Pending",
      };

      // Save data in the database
      await axiosSecure.post("/data", dataInfo);

      // Notify success
      toast.success("data pas Successful!");
    } catch (error) {
      // Notify failure
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-5">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Biodata ID */}
        <div>
          <label htmlFor="biodataId" className="block text-sm font-medium">
            Biodata ID
          </label>
          <input
            type="text"
            value={biodataId || ""}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Self Email */}
        <div>
          <label htmlFor="selfEmail" className="block text-sm font-medium">
            Self Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
      <Link to="/payment">
        <button
          type="submit"
          className="w-full py-2 my-2 px-4 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition"
        >
          Pay
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
