import { GrUserAdmin } from "react-icons/gr";
import { useState } from "react";
import toast from "react-hot-toast";
import BecomeRequest from "./BecomeRequest";
import UseAuth from "../hooks/UseAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const PremiumMenu = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const requestHandler = async () => {
    try {
      // send a request to server
      const { data } = await axiosSecure.patch(`/users/${user?.email}`);
      console.log(data);
      toast.success("Successfully Applied to become a seller👍");
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data + "👊");
    } finally {
      closeModal();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
      >
        <GrUserAdmin className="w-5 h-5" />

        <span className="mx-4 font-medium">Become Premium</span>
      </button>

      <BecomeRequest
        requestHandler={requestHandler}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default PremiumMenu;
