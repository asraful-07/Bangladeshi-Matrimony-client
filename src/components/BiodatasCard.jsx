import React from "react";
import { Link } from "react-router-dom";

const BiodatasCard = ({ biodata }) => {
  const {
    _id,
    biodataId,
    category,
    image,
    permanentDivision,
    age,
    occupation,
  } = biodata;

  return (
    <div className="bg-white border p-4 rounded-lg shadow-lg">
      {/* Profile Image */}
      <div className="w-full h-40 bg-gray-200 rounded-md overflow-hidden mb-4">
        <img
          src={image || "default-profile-image.jpg"}
          alt={`${category}'s Profile`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Biodata Info */}
      <div>
        {/* Biodata Type */}
        <p className="text-sm text-gray-600">
          Biodata Type: {category === "male" ? "Male" : "Female"}
        </p>

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
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BiodatasCard;
