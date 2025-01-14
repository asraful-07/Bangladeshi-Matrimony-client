import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BiodataEdit = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const [isLoading, setLoading] = useState(false);

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const dob = form.dob.value;
    const height = form.height.value;
    const weight = form.weight.value;
    const age = form.age.value;
    const occupation = form.occupation.value;
    const race = form.race.value;
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const permanentDivision = form.permanentDivision.value;
    const presentDivision = form.presentDivision.value;
    const partnerAge = form.partnerAge.value;
    const partnerHeight = form.partnerHeight.value;
    const partnerWeight = form.partnerWeight.value;
    const mobileNumber = form.mobileNumber.value;
    const email = form.email.value;

    // Create biodata object
    const biodata = {
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
      partnerAge,
      partnerHeight,
      partnerWeight,
      mobileNumber,
      email,
      creator: user
        ? {
            email: user.email,
            name: user.displayName || "Unknown",
            photo: user.photoURL || "default-photo-url",
          }
        : {},
    };

    try {
      // Post request to save biodata
      await axiosSecure.post("/biodata", biodata);
      toast.success("Biodata Added Successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to save biodata. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-semibold mb-6">Edit Biodata</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Biodata Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Biodata Type *
            </label>
            <select
              name="category"
              required
              className="block w-full border rounded px-4 py-2"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <input
              type="text"
              name="name"
              required
              className="block w-full border rounded px-4 py-2"
            />
          </div>

          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Profile Image Link
            </label>
            <input
              type="text"
              name="image"
              className="block w-full border rounded px-4 py-2"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Date of Birth *
            </label>
            <input
              type="date"
              name="dob"
              required
              className="block w-full border rounded px-4 py-2"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium mb-2">Height *</label>
            <select
              name="height"
              required
              className="block w-full border rounded px-4 py-2"
            >
              <option value="">Select Height</option>
              <option value="Short">Short</option>
              <option value="Average">Average</option>
              <option value="Tall">Tall</option>
            </select>
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium mb-2">Weight *</label>
            <select
              name="weight"
              required
              className="block w-full border rounded px-4 py-2"
            >
              <option value="">Select Weight</option>
              <option value="Thin">Thin</option>
              <option value="Average">Average</option>
              <option value="Heavy">Heavy</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium mb-2">Age *</label>
            <input
              type="number"
              name="age"
              required
              className="block w-full border rounded px-4 py-2"
            />
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Occupation *
            </label>
            <select
              name="occupation"
              required
              className="block w-full border rounded px-4 py-2"
            >
              <option value="">Select Occupation</option>
              <option value="Student">Student</option>
              <option value="Engineer">Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Race */}
          <div>
            <label className="block text-sm font-medium mb-2">Race *</label>
            <select
              name="race"
              required
              className="block w-full border rounded px-4 py-2"
            >
              <option value="">Select Race</option>
              <option value="Fair">Fair</option>
              <option value="Medium">Medium</option>
              <option value="Dark">Dark</option>
            </select>
          </div>

          {/* Father & Mother Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Father's Name *
              </label>
              <input
                type="text"
                name="fatherName"
                required
                className="block w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Mother's Name *
              </label>
              <input
                type="text"
                name="motherName"
                required
                className="block w-full border rounded px-4 py-2"
              />
            </div>
          </div>

          {/* Division Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Permanent Division *
              </label>
              <select
                name="permanentDivision"
                required
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dhaka">Rajshahi</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Present Division *
              </label>
              <select
                name="presentDivision"
                required
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dhaka">Rajshahi</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
          </div>

          {/* Expected Partner Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Expected Partner Age
              </label>
              <input
                type="number"
                name="partnerAge"
                className="block w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Expected Partner Height
              </label>
              <select
                name="partnerHeight"
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Height</option>
                <option value="Short">Short</option>
                <option value="Average">Average</option>
                <option value="Tall">Tall</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Expected Partner Weight
              </label>
              <select
                name="partnerWeight"
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Weight</option>
                <option value="Thin">Thin</option>
                <option value="Average">Average</option>
                <option value="Heavy">Heavy</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Mobile Number *
              </label>
              <input
                type="text"
                name="mobileNumber"
                required
                className="block w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Contact Email (Readonly)
              </label>
              <input
                type="email"
                name="email"
                readOnly
                value={user ? user.email : ""}
                className="block w-full border rounded px-4 py-2 bg-gray-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            {/* {isLoading ? "Saving..." : "Save and Publish Now"} */}
            Saving
          </button>
        </form>
      </div>
    </div>
  );
};

export default BiodataEdit;
