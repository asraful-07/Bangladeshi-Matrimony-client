import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";

const BiodatasDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  // Fetch biodata details by ID
  const {
    data: biodata = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["biodata", id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:5000/biodata/${id}`);
      return data;
    },
  });

  // Handle loading and error states
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !biodata || Object.keys(biodata).length === 0) {
    return <p>Failed to load biodata details. Please try again.</p>;
  }

  // Destructure biodata object
  const {
    _id,
    biodataId,
    email,
    name,
    category,
    image,
    dob,
    height,
    weight,
    age,
    occupation,
    race,
    fatherName,
    motherName,
    permanentDivision,
    presentDivision,
    mobileNumber,
    expectedAge,
    expectedHeight,
    expectedWeight,
  } = biodata;

  // Handle Donate Button Click
  const handelBiodata = async () => {
    const data = {
      email: user?.email,
      name,
      biodataId,
      image,
      occupation,
      permanentDivision,
    };

    try {
      await axiosSecure.post("/favourites", data);
      toast.success("Biodata added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save biodata. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Biodata Details</h1>

      {/* Display Biodata Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          {/* Profile Image */}
          <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden mr-6">
            <img
              src={image || "default-profile-image.jpg"}
              alt={`${name}'s Profile`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Category */}
          <div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">
              Biodata Type: {category === "male" ? "Male" : "Female"}
            </p>
          </div>
        </div>

        {/* Biodata Details */}
        <p className="text-lg text-gray-700">Age: {age}</p>
        <p className="text-lg text-gray-700">Biodata ID: {biodataId}</p>
        <p className="text-lg text-gray-700">Occupation: {occupation}</p>
        <p className="text-lg text-gray-700">Date of Birth: {dob}</p>
        <p className="text-lg text-gray-700">Height: {height} cm</p>
        <p className="text-lg text-gray-700">Weight: {weight} kg</p>
        <p className="text-lg text-gray-700">Race: {race}</p>
        <p className="text-lg text-gray-700">Father's Name: {fatherName}</p>
        <p className="text-lg text-gray-700">Mother's Name: {motherName}</p>
        <p className="text-lg text-gray-700">
          Permanent Division: {permanentDivision}
        </p>
        <p className="text-lg text-gray-700">
          Present Division: {presentDivision}
        </p>
        <p className="text-lg text-gray-700">Mobile Number: {mobileNumber}</p>

        {/* Favourites Button */}
        <div className="mt-6">
          <button
            onClick={handelBiodata}
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700"
          >
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default BiodatasDetails;
