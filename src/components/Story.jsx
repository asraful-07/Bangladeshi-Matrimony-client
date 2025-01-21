import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";

const Story = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch success stories
  const { data: successStories = [], isLoading } = useQuery({
    queryKey: ["successStories"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/success-stories");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  console.log(successStories);

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
        Success Stories
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">
                Male Biodata ID
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Female Biodata ID
              </th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {successStories.map((story) => (
              <tr key={story._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {story.partnerBiodataId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {story.selfBiodataId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    onClick={() => alert(`View story for ID: ${story._id}`)}
                  >
                    View Story
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Story;
