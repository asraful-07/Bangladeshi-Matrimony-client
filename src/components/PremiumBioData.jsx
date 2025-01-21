import React from "react";
import UseAuth from "../hooks/UseAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";
import PremiumBioDataCard from "./PremiumBioDataCard";

const PremiumBioData = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  // Use React Query to fetch data
  const { data: premium = [], isLoading } = useQuery({
    queryKey: ["premium", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email is not available");
      }

      // Call the backend API with the correct route
      const { data } = await axiosSecure.get(`/premium-biodata`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-4xl font-bold mb-6 text-pink-600">PremiumBioData</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {premium.map((data) => (
          <PremiumBioDataCard key={data._id} biodata={data} />
        ))}
      </div>
    </div>
  );
};

export default PremiumBioData;
