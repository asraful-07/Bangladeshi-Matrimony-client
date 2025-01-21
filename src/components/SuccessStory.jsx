import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../hooks/UseAuth";
import StoryCard from "./StoryCard";
import LoadingSpinner from "./LoadingSpinner";

const SuccessStory = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const [sortOrder, setSortOrder] = useState("ascending");

  // Fetch data with sorting
  const { data: success = [], isLoading } = useQuery({
    queryKey: ["success", user?.email, sortOrder],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email is not available");
      }

      // Pass sortOrder as a query parameter
      const { data } = await axiosSecure.get(`/success?sortOrder=${sortOrder}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-4xl font-bold text-center text-green-600 hover:text-green-800 transition-all duration-300 ease-in-out">
        Our Success Story
      </h1>

      {/* Sort Order Dropdown */}
      <div className="mb-6 flex justify-start">
        <label htmlFor="sortOrder" className="mr-2 font-medium text-gray-700">
          Sort by Marriage Date:
        </label>
        <select
          id="sortOrder"
          className="border border-gray-300 rounded px-3 py-2"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {/* Success Stories Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {success.map((story) => (
          <StoryCard story={story} key={story._id} />
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;
