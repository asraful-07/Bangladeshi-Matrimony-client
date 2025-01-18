import React from "react";

const StoryCard = ({ story }) => {
  const {
    selfBiodataId,
    partnerBiodataId,
    image,
    story: successStory,
    gender,
    marriageDate,
    reviewStar,
  } = story;

  return (
    <div className="max-w-sm mx-auto my-4 p-4 shadow-lg rounded-md bg-white hover:bg-blue-100 transition duration-300 group">
      <div className="relative overflow-hidden rounded-t-md">
        <img
          src={image}
          alt="Couple"
          className="w-full h-48 object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-3">
          <p className="text-white text-sm font-medium">Love in the Air 💕</p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 group-hover:text-green-500 transition duration-300">
          Success Story
        </h2>
        <p className="text-gray-600 my-2">{successStory}</p>
        <div className="mt-3 text-sm">
          <p>
            <strong>Self Biodata ID:</strong> {selfBiodataId}
          </p>
          <p>
            <strong>Partner Biodata ID:</strong> {partnerBiodataId}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Marriage Date:</strong> {marriageDate}
          </p>
          <p>
            <strong>Review Stars:</strong> {"⭐".repeat(reviewStar)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
