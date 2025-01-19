import React from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ApprovedCard = ({ orderData, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, biodataId, name, email, image, mobileNumber, status } =
    orderData;

  // Handle status change
  const handleStatus = async (newStatus) => {
    if (status === newStatus) return;
    try {
      // Update status in the backend
      await axiosSecure.patch(`/data-info/${_id}`, {
        status: newStatus,
      });
      refetch();
      toast.success("Contact request approved!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update status.");
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <img
            alt="profile"
            src={image}
            className="mx-auto object-cover rounded-full h-12 w-12"
          />
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {name}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {biodataId}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {email}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {mobileNumber}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {status}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select
          value={status}
          onChange={(e) => handleStatus(e.target.value)}
          disabled={status === "Approved"}
          className="p-2 border rounded"
        >
          <option value="Pending">Pending</option>
          <option value="Delivered">Approved</option>
        </select>
      </td>
    </tr>
  );
};

export default ApprovedCard;
