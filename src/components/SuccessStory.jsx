import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../hooks/UseAuth";
import StoryCard from "./StoryCard";

const SuccessStory = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  // Use React Query to fetch data
  const {
    data: success = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["success", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email is not available");
      }

      // Call the backend API with the correct route
      const { data } = await axiosSecure.get(`/success`);
      return data;
    },
  });
  if (isLoading) {
    return <h1>Loading......</h1>;
  }

  return (
    <div className="mt-24">
      <h1 className="text-4xl font-bold text-center text-green-600 hover:text-green-800 transition-all duration-300 ease-in-out">
        Our Success Story
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {success.map((story) => (
          <StoryCard story={story} key={story._id} />
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;
