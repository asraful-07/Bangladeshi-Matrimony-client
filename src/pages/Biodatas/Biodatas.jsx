import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import BiodatasCard from "../../components/BiodatasCard";

const Biodatas = () => {
  const [filters, setFilters] = useState({
    ageRange: [20, 30],
    biodataType: "male",
    division: "Dhaka",
  });

  const {
    data: biodatas = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/biodata");
      return data;
    },
  });

  // Handle filtering
  const filteredBiodatas = biodatas.filter((biodata) => {
    const isAgeInRange =
      biodata.age >= filters.ageRange[0] && biodata.age <= filters.ageRange[1];
    const isBiodataTypeMatch = biodata.type === filters.biodataType;
    const isDivisionMatch = biodata.permanentDivision === filters.division;

    return isAgeInRange && isBiodataTypeMatch && isDivisionMatch;
  });

  if (isLoading) {
    return (
      <span className="loading loading-spinner text-primary md:loading-lg"></span>
    );
  }

  if (isError) {
    return <div>Failed to load biodata. Please try again later.</div>;
  }

  return (
    <div className="flex">
      {/* Left side filter section */}
      <div className="w-1/4 p-4">
        <h2 className="font-bold text-lg">Filters</h2>

        {/* Age Range Filter */}
        <div>
          <label htmlFor="ageRange">Age Range: </label>
          <input
            type="range"
            id="ageRange"
            min="18"
            max="60"
            step="1"
            value={filters.ageRange[0]}
            onChange={(e) =>
              setFilters({
                ...filters,
                ageRange: [Number(e.target.value), filters.ageRange[1]],
              })
            }
          />
          -{" "}
          <input
            type="range"
            id="ageRange"
            min="18"
            max="60"
            step="1"
            value={filters.ageRange[1]}
            onChange={(e) =>
              setFilters({
                ...filters,
                ageRange: [filters.ageRange[0], Number(e.target.value)],
              })
            }
          />
        </div>

        {/* Biodata Type Filter */}
        <div>
          <label htmlFor="biodataType">Biodata Type: </label>
          <select
            id="biodataType"
            value={filters.biodataType}
            onChange={(e) =>
              setFilters({
                ...filters,
                biodataType: e.target.value,
              })
            }
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Division Filter */}
        <div>
          <label htmlFor="division">Division: </label>
          <select
            id="division"
            value={filters.division}
            onChange={(e) =>
              setFilters({
                ...filters,
                division: e.target.value,
              })
            }
          >
            <option value="Dhaka">Dhaka</option>
            <option value="Dhaka">Rajshahi</option>
            <option value="Chattagra">Chattagra</option>
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
      </div>
    </div>
  );
};

export default Biodatas;
