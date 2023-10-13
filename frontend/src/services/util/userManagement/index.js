import axios from "axios";

const BASE_URL = "https://localhost:7241/api/Traveler"; // Replace with your API endpoint

export const login = async (email, nic) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email: email,
      nic: nic,
    });
    return response.data; // Include user type (role) in the response
  } catch (error) {
    return error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data; // Include user type (role) in the response
  } catch (error) {
    return error;
  }
};

export default {
  login,
  signup,
};
