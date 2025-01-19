import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import BiodatasCard from "../../components/BiodatasCard";
import { Helmet } from "react-helmet-async";

const Biodatas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ageRange, setAgeRange] = useState("");
  const [gender, setGender] = useState("");
  const [division, setDivision] = useState("");

  const itemsPerPage = 10;

  const {
    data: { data: biodatas = [], totalCount = 0 } = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["biodatas", currentPage, ageRange, gender, division],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/biodata", {
        params: {
          page: currentPage,
          limit: itemsPerPage,
          ageRange,
          gender,
          division,
        },
      });
      return data;
    },
    keepPreviousData: true,
  });

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleAgeChange = (e) => {
    setAgeRange(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
  };

  if (isLoading) {
    return (
      <span className="loading loading-spinner text-primary md:loading-lg"></span>
    );
  }

  if (isError) {
    return <div>Failed to load biodata. Please try again later.</div>;
  }

  return (
    <div className="flex container mx-auto">
      <Helmet>
        <title>Biodata</title>
      </Helmet>
      {/* Left side filter section */}
      <div className="w-1/4 p-4">
        <h2 className="font-bold text-lg">Filters</h2>

        {/* Age Range Filter */}
        <div className="mb-4">
          <label htmlFor="ageRange" className="block text-sm text-gray-600">
            Age Range
          </label>
          <select
            id="ageRange"
            value={ageRange}
            onChange={handleAgeChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Age Range</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
            <option value="50-60">50-60</option>
          </select>
        </div>

        {/* Gender Filter */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm text-gray-600">
            Biodata Type
          </label>
          <select
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Division Filter */}
        <div className="mb-4">
          <label htmlFor="division" className="block text-sm text-gray-600">
            Division
          </label>
          <select
            id="division"
            value={division}
            onChange={handleDivisionChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
      </div>

      {/* Right side: Display biodata cards */}
      <div className="w-3/4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {biodatas.map((biodata) => (
            <BiodatasCard key={biodata._id} biodata={biodata} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-4 flex justify-between items-center">
          <button
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span>
            {currentPage} of {totalPages}
          </span>

          <button
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
