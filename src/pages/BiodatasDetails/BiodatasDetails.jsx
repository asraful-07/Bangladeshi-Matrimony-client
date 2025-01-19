import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaPhone } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import LoadingSpinner from "../../components/LoadingSpinner";

const BiodatasDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user, handleGetBioDataInfo } = UseAuth();

  // Fetch biodata details by ID
  const {
    data: biodata = {},
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["biodata", id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:5000/biodata/${id}`);
      return data;
    },
  });

  // Handle loading and error states
  if (isLoading) {
    return <LoadingSpinner />;
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

  const bioDataInfoForPayment = { name, mobileNumber, email, image, biodataId };

  return (
    <div className="container mx-auto mt-12 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Biodata Details</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Profile and Actions */}
          <div>
            <div className="flex items-center mb-6">
              {/* Profile Image */}
              <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden mr-6">
                <img
                  src={image || "default-profile-image.jpg"}
                  alt={`${name || "Profile"}'s Image`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Category */}
              <div>
                <h2 className="text-2xl font-semibold">{name || "N/A"}</h2>
                <p className="text-sm text-gray-600">
                  Biodata Type: {category === "male" ? "Male" : "Female"}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handelBiodata}
                className="flex items-center justify-center gap-2 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
              >
                <FaHeart /> Add to Favourites
              </button>
              <Link to={`/checkout/${biodataId}`}>
                <button
                  onClick={() => handleGetBioDataInfo(bioDataInfoForPayment)}
                  className="flex items-center justify-center gap-2 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
                >
                  <FaPhone /> Request Contact
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Biodata Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Sub-Column */}
            <div>
              <p className="text-lg text-gray-700">Age: {age || "N/A"}</p>
              <p className="text-lg text-gray-700">
                Biodata ID: {biodataId || "N/A"}
              </p>
              <p className="text-lg text-gray-700">
                Occupation: {occupation || "N/A"}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Date of Birth: {dob || "N/A"}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Height: {height || "N/A"} cm
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Weight: {weight || "N/A"} kg
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Race: {race || "N/A"}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Father's Name: {fatherName || "N/A"}
              </p>
            </div>

            {/* Right Sub-Column */}
            <div>
              <p className="text-lg text-gray-700 mt-2">
                Mother's Name: {motherName || "N/A"}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Permanent Division: {permanentDivision || "N/A"}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Present Division: {presentDivision || "N/A"}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Mobile Number: {mobileNumber || "N/A"}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Expected Age: {expectedAge || "N/A"}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Expected Height: {expectedHeight || "N/A"}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Expected Weight: {expectedWeight || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodatasDetails;
