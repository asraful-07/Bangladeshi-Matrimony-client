import React, { useState } from "react";
import UseAuth from "../hooks/UseAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";
import PremiumBioDataCard from "./PremiumBioDataCard";

const PremiumBioData = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const [sortOrder, setSortOrder] = useState("ascending");

  // Fetch data using React Query
  const { data: premium = [], isLoading } = useQuery({
    queryKey: ["premium", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email is not available");
      }
      const { data } = await axiosSecure.get(`/premium-biodata`);
      return data;
    },
  });

  // Handle sorting logic
  const sortedPremium = [...premium].sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.age - b.age;
    } else {
      return b.age - a.age;
    }
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-4xl font-bold mb-6 text-pink-600">Premium BioData</h1>

      {/* Sorting Dropdown */}
      <div className="mb-6 flex justify-start items-center">
        <label
          htmlFor="sortOrder"
          className="mr-3 font-xl text-gray-800"
          style={{ color: "#4A5568" }}
        >
          Sort by Age:
        </label>
        <select
          id="sortOrder"
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition ease-in-out duration-200"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ascending" className="text-gray-800">
            Ascending
          </option>
          <option value="descending" className="text-gray-800">
            Descending
          </option>
        </select>
      </div>

      {/* Premium BioData Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedPremium.map((data) => (
          <PremiumBioDataCard key={data._id} biodata={data} />
        ))}
      </div>
    </div>
  );
};

export default PremiumBioData;
