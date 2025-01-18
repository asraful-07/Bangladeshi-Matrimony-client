import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

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
      <h1 className="text-2xl font-bold text-center mb-5">
        Share Your Success Story
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SuccessStory;
