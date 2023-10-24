import axios from "axios";

const BASE_URL = "http://localhost:7241/api/User"; 

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
    const response = await axios.post(`${BASE_URL}`, userData);
    return response.data; // Include user type (role) in the response
  } catch (error) {
    return error;
  }
};

export default {
  login,
  signup,
};
