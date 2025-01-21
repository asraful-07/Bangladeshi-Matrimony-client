import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";
import { Dialog } from "@headlessui/react";

const Story = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
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

  const handleViewStory = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

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
                    onClick={() => handleViewStory(story)}
                    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-200"
                  >
                    View Story
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for success story */}
      {isModalOpen && selectedStory && (
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
              Success Story
            </h2>
            <img
              src={selectedStory.image}
              alt="Couple Story"
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedStory.story}</p>
            <p className="text-sm text-gray-500 mb-4">
              Marriage Date: {selectedStory.marriageDate}
            </p>
            <p>
              <strong>Review Stars:</strong>{" "}
              {"⭐".repeat(selectedStory.reviewStar)}
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Story;
