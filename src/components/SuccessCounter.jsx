import React from "react";
import { FaMale, FaFemale, FaUserFriends } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import CountUp from "react-countup";

const SuccessCounter = () => {
  const counters = [
    {
      id: 1,
      icon: <FaUserFriends size={40} className="text-purple-500" />,
      title: "Total Profiles",
      count: 7261,
    },
    {
      id: 2,
      icon: <FaMale size={40} className="text-purple-500" />,
      title: "Total Male Profiles",
      count: 2968,
    },
    {
      id: 3,
      icon: <FaFemale size={40} className="text-purple-500" />,
      title: "Total Female Profiles",
      count: 4283,
    },
    {
      id: 4,
      icon: <GiDiamondRing size={40} className="text-purple-500" />,
      title: "Successful Marriages",
      count: 2114,
    },
  ];

  return (
    <div className="container mx-auto py-10 mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
      {counters.map((counter) => (
        <div
          key={counter.id}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          {/* Icon */}
          <div className="mb-4">{counter.icon}</div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 text-purple-600">
            {counter.title}
          </h3>

          {/* Counter */}
          <CountUp
            start={0}
            end={counter.count}
            duration={2.5}
            separator=","
            className="text-3xl font-bold text-black"
          />
          <span className="text-xl font-bold text-purple-600">
            {counter.id === 4 ? "+" : ""}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SuccessCounter;
