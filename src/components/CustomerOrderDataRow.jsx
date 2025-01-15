import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CustomerOrderDataRow = ({ orderData, refetch }) => {
  const { _id, image, name, occupation, permanentDivision, biodataId } =
    orderData;

  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false); // Add state for modal visibility

  const closeModal = () => setIsOpen(false); // Function to close the modal
  const openModal = () => setIsOpen(true); // Function to open the modal

  // Handle order delete/cancellation
  const handleDelete = async () => {
    try {
      // Fetch delete request
      await axiosSecure.delete(`/orders/${_id}`);
      // Call refetch to refresh UI
      refetch();
      toast.success("Order Cancelled.");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data || "An error occurred.");
    } finally {
      closeModal(); // Ensure modal closes
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={image}
                className="mx-auto object-cover rounded h-16 w-12"
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{biodataId}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{permanentDivision}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{occupation}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={openModal}
          className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
        >
          <span className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
          <span className="relative">Cancel</span>
        </button>
        <DeleteModal
          handleDelete={handleDelete}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;
