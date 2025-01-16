import React from "react";

const ViewCard = ({ view }) => {
  const {
    biodataId,
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
    email,
  } = view;

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Profile Image */}
        <div className="bg-gray-200">
          <img
            src={image || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{name}</h1>
          <p className="text-sm text-gray-500 mb-6">Biodata ID: {biodataId}</p>

          {/* Biodata Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-bold">Category:</span> {category}
            </p>
            <p>
              <span className="font-bold">Date of Birth:</span> {dob}
            </p>
            <p>
              <span className="font-bold">Height:</span> {height} cm
            </p>
            <p>
              <span className="font-bold">Weight:</span> {weight} kg
            </p>
            <p>
              <span className="font-bold">Age:</span> {age} years
            </p>
            <p>
              <span className="font-bold">Occupation:</span> {occupation}
            </p>
            <p>
              <span className="font-bold">Race (Skin Color):</span> {race}
            </p>
            <p>
              <span className="font-bold">Father's Name:</span> {fatherName}
            </p>
            <p>
              <span className="font-bold">Mother's Name:</span> {motherName}
            </p>
            <p>
              <span className="font-bold">Permanent Division:</span>{" "}
              {permanentDivision}
            </p>
            <p>
              <span className="font-bold">Present Division:</span>{" "}
              {presentDivision}
            </p>
            <p>
              <span className="font-bold">Mobile Number:</span> {mobileNumber}
            </p>
            <p>
              <span className="font-bold">Contact Email:</span> {email}
            </p>
            <p>
              <span className="font-bold">Expected Partner Age:</span>{" "}
              {expectedAge}
            </p>
            <p>
              <span className="font-bold">Expected Partner Height:</span>{" "}
              {expectedHeight} cm
            </p>
            <p>
              <span className="font-bold">Expected Partner Weight:</span>{" "}
              {expectedWeight} kg
            </p>
          </div>

          {/* Input Field */}
          <div className="mt-6">
            <label
              htmlFor="premiumNote"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Add a Note (Optional)
            </label>
            <input
              type="text"
              id="premiumNote"
              placeholder="Write something here..."
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Premium Button */}
          <div className="mt-6">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
              Make Biodata Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
