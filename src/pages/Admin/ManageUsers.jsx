import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UserDataRow from "../../components/UserDataRow";
import { useState } from "react";

const ManageUsers = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email, search], // Add search as a queryKey dependency
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/all-users/${user?.email}`, {
        params: { search }, // Pass search as a query parameter
      });
      return data;
    },
  });
  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();
    setSearch(searchValue);
  };

  if (isLoading) return <h1>loading.........</h1>;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div className="py-8">
          <form onSubmit={handleSearch}>
            <div className="flex p-1 w-fit overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Username"
                aria-label="Enter Username"
              />
              <button
                type="submit"
                className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
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
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
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
                  {users.map((userData) => (
                    <UserDataRow
                      refetch={refetch}
                      key={userData?._id}
                      userData={userData}
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

export default ManageUsers;
