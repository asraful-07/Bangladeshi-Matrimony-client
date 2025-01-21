import React from "react";
import { Link } from "react-router-dom";

const BiodatasCard = ({ biodata }) => {
  const { _id, biodataId, gender, image, permanentDivision, age, occupation } =
    biodata;

  return (
    <div className="bg-white border p-4 rounded-lg shadow-lg">
      {/* Profile Image with Hover Effect */}
      <div className="w-full h-40 bg-gray-200 rounded-md overflow-hidden mb-4">
        <img
          src={image || "default-profile-image.jpg"}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Biodata Info */}
      <div>
        {/* Biodata Id */}
        <p className="text-sm text-gray-600">Biodata ID: {biodataId}</p>

        {/* Biodata Type */}
        <p className="text-sm text-gray-600">Biodata Type: {gender}</p>

        {/* Permanent Division */}
        <p className="text-sm text-gray-600">
          Permanent Division: {permanentDivision}
        </p>

        {/* Age */}
        <p className="text-sm text-gray-600">Age: {age}</p>

        {/* Occupation */}
        <p className="text-sm text-gray-600">Occupation: {occupation}</p>
      </div>

      {/* View Profile Button */}
      <div className="mt-4">
        <Link to={`/biodata/${_id}`}>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-700">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BiodatasCard;
