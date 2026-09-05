import axios from "axios";
import { membershipEndpoints } from "./api";

const getHeaders = () => {
  const token = localStorage.getItem("_sell_Token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export const getPlans = async () => {
  try {
    const response = await axios.get(membershipEndpoints.GET_PLANS_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching plans:", error);
    throw new Error(error.response?.data?.message || "Failed to load plans");
  }
};

export const getPlanById = async (id) => {
  try {
    const response = await axios.get(`${membershipEndpoints.GET_PLANS_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching plan by ID:", error);
    throw new Error(error.response?.data?.message || "Failed to load plan details");
  }
};

export const getUserMembership = async () => {
  try {
    const response = await axios.get(membershipEndpoints.GET_MEMBERSHIP_API, {
      headers: getHeaders(),
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getPayPalMembershipConfig = async () => {
  try {
    const response = await axios.get(membershipEndpoints.PAYPAL_CONFIG_API);
    return response.data;
  } catch (error) {
    console.error("Error loading PayPal config:", error);
    return null;
  }
};

export const createPayPalMembershipOrder = async (data) => {
  try {
    const response = await axios.post(
      membershipEndpoints.PAYPAL_CREATE_ORDER_API,
      data,
      {
        headers: getHeaders(),
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating PayPal order:", error);
    throw new Error(error.response?.data?.message || "Failed to create PayPal order");
  }
};

export const capturePayPalMembershipOrder = async (data) => {
  try {
    const response = await axios.post(
      membershipEndpoints.PAYPAL_CAPTURE_ORDER_API,
      data,
      {
        headers: getHeaders(),
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error capturing PayPal order:", error);
    throw new Error(error.response?.data?.message || "Failed to capture PayPal payment");
  }
};
