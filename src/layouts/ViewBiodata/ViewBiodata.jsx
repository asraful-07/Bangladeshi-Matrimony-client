import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../hooks/UseAuth";
import ViewCard from "../../components/ViewCard";
import { Helmet } from "react-helmet-async";

const ViewBiodata = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  // Use React Query to fetch data
  const {
    data: biodatas = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["biodatas", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email is not available");
      }

      // Call the backend API with the correct route
      const { data } = await axiosSecure.get(`/biodata/view/${user?.email}`);
      return data;
    },
  });
  console.log(biodatas);
  if (isLoading) return <h1>loading.........</h1>;
  return (
    <div>
      <Helmet>
        <title>View Biodata</title>
      </Helmet>

      {biodatas.map((biodata, idx) => (
        <ViewCard key={idx} view={biodata} />
      ))}
    </div>
  );
};

export default ViewBiodata;
