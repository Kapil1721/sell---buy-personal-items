import { API_URL } from "../config/appConfig";

export const BASE_URL = API_URL;

// AUTH ENDPOINTS
export const authEndpoints = {
  LOGIN_API: BASE_URL + "/login",
  SIGNUP_API: BASE_URL + "/signup",
  LOGOUT_API: BASE_URL + "/logout",
  AUTHENTICATE_USER_API: BASE_URL + "/authenticate",
  GET_VALID_USER_API: BASE_URL + "/getValidUser",
  CHECK_SESSION_API: BASE_URL + "/check-session",
};

// MEMBERSHIP ENDPOINTS
export const membershipEndpoints = {
  GET_MEMBERSHIP_API: BASE_URL + "/membership",
  CREATE_MEMBERSHIP_API: BASE_URL + "/membership",
  GET_PLANS_API: BASE_URL + "/plans",
  PAYPAL_CONFIG_API: BASE_URL + "/membership/paypal/config",
  PAYPAL_CREATE_ORDER_API: BASE_URL + "/membership/paypal/order",
  PAYPAL_CAPTURE_ORDER_API: BASE_URL + "/membership/paypal/capture",
};
