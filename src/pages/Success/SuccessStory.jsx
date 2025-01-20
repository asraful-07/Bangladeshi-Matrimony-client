import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const SuccessStory = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = { ...data, email: user?.email };
    try {
      await axiosSecure.post("/success", userData);
      toast.success("Success story added successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to save success story. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 shadow-lg rounded-md bg-white">
      <Helmet>
        <title>Success Story</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-5">
        Share Your Success Story
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Self Biodata ID */}
          <div className="mb-4">
            <label
              htmlFor="selfBiodataId"
              className="block text-gray-700 font-medium"
            >
              Self Biodata ID
            </label>
            <input
              type="text"
              id="selfBiodataId"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("selfBiodataId", {
                required: "Self Biodata ID is required",
              })}
            />
            {errors.selfBiodataId && (
              <p className="text-red-500 text-sm">
                {errors.selfBiodataId.message}
              </p>
            )}
          </div>

          {/* Partner Biodata ID */}
          <div className="mb-4">
            <label
              htmlFor="partnerBiodataId"
              className="block text-gray-700 font-medium"
            >
              Partner Biodata ID
            </label>
            <input
              type="text"
              id="partnerBiodataId"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("partnerBiodataId", {
                required: "Partner Biodata ID is required",
              })}
            />
            {errors.partnerBiodataId && (
              <p className="text-red-500 text-sm">
                {errors.partnerBiodataId.message}
              </p>
            )}
          </div>
        </div>

        {/* Couple Image Link */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-medium">
            Couple Image Link
          </label>
          <input
            type="text"
            id="image"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("image", {
              required: "Couple image is required",
              pattern: {
                value: /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp)$/i,
                message: "Please provide a valid image URL",
              },
            })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 font-medium">
            Gender
          </label>
          <select
            id="gender"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("gender", { required: "Gender is required" })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Marriage Date */}
        <div className="mb-4">
          <label
            htmlFor="marriageDate"
            className="block text-gray-700 font-medium"
          >
            Marriage Date
          </label>
          <input
            type="date"
            id="marriageDate"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("marriageDate", {
              required: "Marriage Date is required",
            })}
          />
          {errors.marriageDate && (
            <p className="text-red-500 text-sm">
              {errors.marriageDate.message}
            </p>
          )}
        </div>

        {/* Success Story Review */}
        <div className="mb-4">
          <label htmlFor="story" className="block text-gray-700 font-medium">
            Success Story Review
          </label>
          <textarea
            id="story"
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
            {...register("story", {
              required: "Success Story Review is required",
            })}
          ></textarea>
          {errors.story && (
            <p className="text-red-500 text-sm">{errors.story.message}</p>
          )}
        </div>

        {/* Review Star */}
        <div className="mb-4">
          <label
            htmlFor="reviewStar"
            className="block text-gray-700 font-medium"
          >
            Review Star
          </label>
          <input
            type="number"
            id="reviewStar"
            className="w-full border border-gray-300 rounded-md p-2"
            min="1"
            max="5"
            {...register("reviewStar", {
              required: "Review Star is required",
              min: { value: 1, message: "Minimum rating is 1" },
              max: { value: 5, message: "Maximum rating is 5" },
            })}
          />
          {errors.reviewStar && (
            <p className="text-red-500 text-sm">{errors.reviewStar.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-medium p-2 rounded-md hover:bg-pink-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SuccessStory;
