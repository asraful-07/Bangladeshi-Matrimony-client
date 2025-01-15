import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CustomerOrderDataRow from "../../components/CustomerOrderDataRow";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../hooks/UseAuth";
import { Helmet } from "react-helmet-async";

const FavouritesBiodata = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  // Use React Query to fetch data
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email is not available");
      }

      // Call the backend API with the correct route
      const { data } = await axiosSecure.get(`/favourites/${user.email}`);
      return data;
    },
  });

  if (isLoading) {
    return <h1>Loading......</h1>;
  }

  return (
    <>
      <Helmet>
        <title>My Favourites</title>
      </Helmet>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      BiodataId
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      permanentDivision
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      occupation
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((orderData) => (
                    <CustomerOrderDataRow
                      key={orderData._id}
                      refetch={refetch}
                      orderData={orderData}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouritesBiodata;
