import { API_URL, getBuyRoute, getSellRoute } from "../config/appConfig";

export const BASE_URL = API_URL;

// AUTH ENDPOINTS
export const endpoints = {
  LOGIN_API: BASE_URL + "/login",
  SET_COOKIES: BASE_URL + "/check-session",
  AUTHENTICATE_USER_API: BASE_URL + "/authenticate",
  GETUSER: BASE_URL + "/getValidUser",
  LOGOUT_USER_API: BASE_URL + "/logout",
  SIGNIN_API: BASE_URL + "/signup",
  UPDATE_PASSOWRD_API: BASE_URL + "/updatePassword",
  ValidateOtp: BASE_URL + "/validate-otp",
  SendOTP: BASE_URL + "/send-otp",
  change_password: BASE_URL + "/change-password",
};

export const membershipEndpoints = {
  GET_MEMBERSHIP_API: BASE_URL + "/membership",
  CREATEMEMBERSHIP_API: BASE_URL + "/membership",
  GETPLANS_API: BASE_URL + "/plans",
};

export const donationEndpoints = {
  DONATION_API: BASE_URL + "/donation/create",
};
export const fileUploadEndpoints = {
  // imageUpload_API: BASE_URL + "/uploads",
  fileUpload_API: BASE_URL + "/uploads",
  deleteFileUpload_API: BASE_URL + "/uploads",
};
export const adminEndpoints = {
  getProfile_API: BASE_URL + "/profile",
  updateProfile_API: BASE_URL + "/profile",
  updateProfile_Image_API: BASE_URL + "/profile/image",
  updateSocialMedia_API: BASE_URL + "/profile/socialmedia",
  updateEmail_API: BASE_URL + "/profile/email",
  updatePassword_API: BASE_URL + "/profile/password",
  deleteProfile_API: BASE_URL + "/profile/",
  addProduct_API: BASE_URL + "/addproduct",
  getModerationProduct_API: BASE_URL + "/moderation",
  moderationProduct_Statusupdate_API: BASE_URL + "/moderation",
  getOrders_API: BASE_URL + "/orders",
  getMyProducts_API: BASE_URL + "/my-products",
  getFavourites_API: BASE_URL + "/fovourites",
  getMessages_API: BASE_URL + "/messages",
  getMyOrders_API: BASE_URL + "/my-orders",
  getSettings_API: BASE_URL + "/settings",
  adminLoginUrl: BASE_URL + "/admin/login",
};

export const productEndPoint = {
  getProducts_API: BASE_URL + "/products",
  getFavoriteProducts_API: BASE_URL + "/favorite",
  getProduct_API: BASE_URL + "/product",
  postReview_API: BASE_URL + "/product",
  getProductCategory_API: BASE_URL + "/product-categories",
  postLike_API: BASE_URL + "/like",
  addToFavourite_API: BASE_URL + "/favorite",
  promoteProduct_API: BASE_URL + "/promote",
};

export const newsLetterEndPoint = {
  subscribeNewsletter: BASE_URL + "/newsletter/subscribe-newsletter",
};

export const purchaseRequestEndpoints = {
  sendRequest: BASE_URL + "/purchase-requests/send",
  getRequest: BASE_URL + "/purchase-requests",
  statusUpdate: BASE_URL + "/purchase-requests",
  getSingleRequest: BASE_URL + "/purchase-requests",
};

export const appRedirectEndpoints = {
  SELL_MEMBERSHIPS_URL: getSellRoute("/memberships"),
  SELL_REGISTER_URL: getSellRoute("/login-register?tab=register"),
  BUY_QUALIFIED_ITEMS_URL: getBuyRoute("/qualified-items-list"),
};
