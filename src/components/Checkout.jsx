import React from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const Checkout = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  const handleSubmit = async () => {};

  console.log(id);

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
            value={id}
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
            value={user?.email}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
