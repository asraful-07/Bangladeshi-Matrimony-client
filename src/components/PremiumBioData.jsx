import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";
import PremiumBioDataCard from "./PremiumBioDataCard";

const PremiumBioData = () => {
  const [sortOrder, setSortOrder] = useState("ascending");

  // Fetch data using React Query
  const {
    data: biodatas = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const response = await axios.get(
        "https://assigment-server-one.vercel.app/premium-biodata"
      );
      return response.data;
    },
  });

  // Handle sorting logic
  const sortedPremium = [...biodatas].sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.age - b.age;
    } else {
      return b.age - a.age;
    }
  });

  // Display loading spinner
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Handle error state
  if (isError) {
    return (
      <div className="text-center mt-24">
        <h2 className="text-2xl font-semibold text-red-600">
          Error fetching premium biodata. Please try again later.
        </h2>
      </div>
    );
  }

  // Handle empty data
  if (biodatas.length === 0) {
    return (
      <div className="text-center mt-24">
        <h2 className="text-2xl font-semibold text-gray-700">
          No premium biodata found.
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-4xl font-bold mb-6 text-pink-600">Premium BioData</h1>

      {/* Sorting Dropdown */}
      <div className="mb-6 flex justify-end items-center">
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
