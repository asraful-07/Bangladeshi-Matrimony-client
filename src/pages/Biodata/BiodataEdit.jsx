import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

const BiodataEdit = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: bioData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bioData", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email is not available");
      }

      // Call the backend API with the correct route
      const { data } = await axiosSecure.get(`/biodata-data/${user.email}`);
      return data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ values: bioData });

  // console.log(bioData);

  const onSubmit = async (data) => {
    try {
      if (bioData?._id) {
        delete data._id;
        await axiosSecure.put(`/biodata-edit/${bioData?._id}`, data);
        refetch();
      } else {
        data.email = user?.email;
        data.type = "general";
        await axiosSecure.post("/biodata", data);
      }

      toast.success("Biodata added successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to save biodata. Please try again.");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <Helmet>
          <title>Edit Biodata</title>
        </Helmet>
        <h1 className="text-3xl font-semibold mb-6">Edit Biodata</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="block w-full border rounded px-4 py-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="text"
                className="block w-full border rounded px-4 py-2"
                defaultValue={user?.email}
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Mobile Number *
              </label>
              <input
                type="text"
                {...register("mobileNumber", {
                  required: "Mobile Number is required",
                })}
                className="block w-full border rounded px-4 py-2"
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm">
                  {errors.mobileNumber?.message}
                </p>
              )}
            </div>

            {/* Biodata Type */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Biodata Type *
              </label>
              <select
                {...register("gender", {
                  required: "Biodata Type is required",
                })}
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender?.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Profile Image */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Profile Image Link
              </label>
              <input
                type="text"
                {...register("image")}
                className="block w-full border rounded px-4 py-2"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image?.message}</p>
              )}
            </div>

            {/* Race */}
            <div>
              <label className="block text-sm font-medium mb-2">Race *</label>
              <select
                {...register("race", { required: "Race is required" })}
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Race</option>
                <option value="Fair">Fair</option>
                <option value="Medium">Medium</option>
                <option value="Dark">Dark</option>
              </select>
              {errors.race && (
                <p className="text-red-500 text-sm">{errors.race?.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                {...register("dob", { required: "Date of Birth is required" })}
                className="block w-full border rounded px-4 py-2"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm">{errors.dob.message}</p>
              )}
            </div>

            {/* Religion */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Religion *
              </label>
              <select
                {...register("religion", { required: "Religion is required" })}
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select</option>
                <option value="Islam">Islam</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Christianity">Christianity</option>
              </select>
              {errors.religion && (
                <p className="text-red-500 text-sm">
                  {errors.religion?.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Height */}
            <div>
              <label className="block text-sm font-medium mb-2">Height *</label>
              <select
                {...register("height", { required: "Height is required" })}
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Height</option>
                <option value="Short">Short</option>
                <option value="Average">Average</option>
                <option value="Tall">Tall</option>
              </select>
              {errors.height && (
                <p className="text-red-500 text-sm">{errors.height?.message}</p>
              )}
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-medium mb-2">Weight *</label>
              <select
                {...register("weight", { required: "Weight is required" })}
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Weight</option>
                <option value="Thin">Thin</option>
                <option value="Average">Average</option>
                <option value="Heavy">Heavy</option>
              </select>
              {errors.weight && (
                <p className="text-red-500 text-sm">{errors.weight?.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Age */}
            <div>
              <label className="block text-sm font-medium mb-2">Age *</label>
              <input
                {...register("age", { required: "Age is required" })}
                type="text"
                className="block w-full border rounded px-4 py-2"
              />
              {errors.age && (
                <p className="text-red-500 text-sm">{errors.age?.message}</p>
              )}
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Occupation *
              </label>
              <select
                {...register("occupation", {
                  required: "Occupation is required",
                })}
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Occupation</option>
                <option value="Student">Student</option>
                <option value="Engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
                <option value="Business">Business</option>
                <option value="Others">Others</option>
              </select>
              {errors.occupation && (
                <p className="text-red-500 text-sm">
                  {errors.occupation?.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Father's Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Father's Name
              </label>
              <input
                {...register("fatherName")}
                type="text"
                className="block w-full border rounded px-4 py-2"
              />
              {errors.fatherName && (
                <p className="text-red-500 text-sm">
                  {errors.fatherName?.message}
                </p>
              )}
            </div>

            {/* Mother's Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Mother's Name
              </label>
              <input
                {...register("motherName")}
                type="text"
                className="block w-full border rounded px-4 py-2"
              />
              {errors.motherName && (
                <p className="text-red-500 text-sm">
                  {errors.motherName?.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Permanent Division */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Permanent Division *
              </label>
              <select
                {...register("permanentDivision", {
                  required: "Permanent division is required",
                })}
                className="block w-full border rounded px-4 py-2"
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
              {errors.permanentDivision && (
                <p className="text-red-500 text-sm">
                  {errors.permanentDivision?.message}
                </p>
              )}
            </div>

            {/* Present Division */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Present Division *
              </label>
              <select
                {...register("presentDivision", {
                  required: "Present division is required",
                })}
                className="block w-full border rounded px-4 py-2"
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
              {errors.presentDivision && (
                <p className="text-red-500 text-sm">
                  {errors.presentDivision?.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Expected Partner  Height */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Expected Partner Height
              </label>
              <select
                {...register("expectedHeight")}
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Height</option>
                <option value="Short">Short</option>
                <option value="Average">Average</option>
                <option value="Tall">Tall</option>
              </select>
              {errors.expectedHeight && (
                <p className="text-red-500 text-sm">
                  {errors.expectedHeight?.message}
                </p>
              )}
            </div>

            {/* Expected Partner Weight */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Expected Partner Weight
              </label>
              <select
                {...register("expectedWeight")}
                className="block w-full border rounded px-4 py-2"
              >
                <option value="">Select Weight</option>
                <option value="Thin">Thin</option>
                <option value="Average">Average</option>
                <option value="Heavy">Heavy</option>
              </select>
              {errors.expectedWeight && (
                <p className="text-red-500 text-sm">
                  {errors.expectedWeight?.message}
                </p>
              )}
            </div>
          </div>

          {/*Expected Partner Age */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Expected Partner Age
            </label>
            <input
              {...register("expectedAge")}
              type="text"
              className="block w-full border rounded px-4 py-2"
            />
            {errors.expectedAge && (
              <p className="text-red-500 text-sm">
                {errors.expectedAge?.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full px-6 py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700"
          >
            {isSubmitting ? "Saving..." : "Save and Publish Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BiodataEdit;
