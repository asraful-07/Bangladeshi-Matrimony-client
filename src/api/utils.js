import axios from "axios";

export const saveUser = async (user) => {
  try {
    const response = await axios.post(
      `https://assigment-server-one.vercel.app/users/${user?.email}`,
      {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
      }
    );
    console.log("User saved:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving user:", error);
    throw error;
  }
};
