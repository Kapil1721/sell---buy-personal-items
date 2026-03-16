import { endpoints } from "../api";
import responseHanlder from "../apiUtils";
// authService.js
import axios from "axios";

const {
  LOGIN_API,
  SIGNIN_API,
  AUTHENTICATE_USER_API,
  LOGOUT_USER_API,
  GETUSER,
  change_password,
  SET_COOKIES,
  SendOTP,
  ValidateOtp
} = endpoints;

export const LOGIN = async (formdata) => {
  return await responseHanlder("POST", LOGIN_API, formdata, true, null);
};
export const CHECK_SESSION = async (loading) => {
  return await responseHanlder("GET", SET_COOKIES, null, loading, null);
};
export const GET_VALID_USER = async () => {
  return await responseHanlder("GET", GETUSER, null, true, null);
};
export const SIGNUP = async (signupformdata) => {
  return await responseHanlder("POST", SIGNIN_API, signupformdata, true, null);
};
export const AUTHENTICATEUSER = async () => {
  return await responseHanlder("GET", AUTHENTICATE_USER_API, null, true, null);
};
export const LOGOUTUSER = async () => {
  return await responseHanlder("POST", LOGOUT_USER_API, null, true, null);
};
export const SEND_OTP = async (bodyData) => {
  return await responseHanlder("POST", SendOTP, bodyData, true, null);
};
export const VALIDATE_OTP = async (bodyData) => {
  return await responseHanlder("POST", ValidateOtp, bodyData, true, null);
};
export const CHANGE_PASSWORD = async (bodyData) => {
  return await responseHanlder("POST", change_password, bodyData, true, null);
};

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api/v1"
    : "https://sell-personal-items-server.vercel.app/api/v1";

const register = async (email, password) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};

const login = async (body) => {
  const response = await axios.post(`${API_URL}/login`, { ...body });
  return response.data;
};

const refreshToken = async () => {
  const response = await axios.post(
    `${API_URL}/refresh-token`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

const authService = {
  register,
  login,
  refreshToken,
};

export default authService;
