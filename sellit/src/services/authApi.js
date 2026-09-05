import axios from "axios";
import { authEndpoints } from "./api";

const getHeaders = () => {
  const token = localStorage.getItem("_sell_Token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(authEndpoints.LOGIN_API, credentials, {
      headers: getHeaders(),
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || "Login failed";
    throw new Error(message);
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(authEndpoints.SIGNUP_API, userData, {
      headers: getHeaders(),
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || "Registration failed";
    throw new Error(message);
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(authEndpoints.LOGOUT_API, {}, {
      headers: getHeaders(),
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const checkUserSession = async () => {
  try {
    const response = await axios.get(authEndpoints.CHECK_SESSION_API, {
      headers: getHeaders(),
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getValidUser = async () => {
  try {
    const response = await axios.get(authEndpoints.GET_VALID_USER_API, {
      headers: getHeaders(),
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};
