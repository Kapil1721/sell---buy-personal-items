import { adminEndpoints, fileUploadEndpoints } from "../api";
import responseHanlder from "../apiUtils";

const {
  addProduct_API,
  getModerationProduct_API,
  getMyProducts_API,
  getProfile_API,
  updateProfile_API,
  updateProfile_Image_API,
  updateSocialMedia_API,
  updatePassword_API,
  updateEmail_API,
  deleteProfile_API,
  adminLoginUrl
} = adminEndpoints;
const { fileUpload_API, deleteFileUpload_API } = fileUploadEndpoints;

export const ADDPRODUCT = async (formdata) => {
  return await responseHanlder("POST", addProduct_API, formdata, true, null);
};
export const UPDATEPRODUCT = async (formdata) => {
  return await responseHanlder("PUT", addProduct_API, formdata, true, null);
};

export const UPLOADS = async (formdata) => {
  return await responseHanlder("POST", fileUpload_API, formdata, true, null);
};

export const DELETEUPLOADS = async (id) => {
  return await responseHanlder(
    "DELETE",
    deleteFileUpload_API + `/${id}`,
    null,
    true,
    null
  );
};

export const GET_PROFILE = async (params) => {
  return await responseHanlder("GET", getProfile_API, null, true, null, params);
};
export const DELETE_PROFILE = async (params) => {
  return await responseHanlder(
    "DELETE",
    deleteProfile_API,
    null,
    true,
    null,
    params
  );
};

export const UPDATE_ACCOUNT_DETAILS = async (body, params) => {
  return await responseHanlder(
    "PUT",
    updateProfile_API,
    body,
    true,
    null,
    params
  );
};

export const UPDATE_PROFILE_IMAGE_DETAILS = async (body, params) => {
  return await responseHanlder(
    "PUT",
    updateProfile_Image_API,
    body,
    true,
    null,
    params
  );
};

export const UPDATE_SOCIALMEDIA_DETAILS = async (body, params) => {
  return await responseHanlder(
    "PUT",
    updateSocialMedia_API,
    body,
    true,
    null,
    params
  );
};
export const UPDATE_EMAIL_DETAILS = async (body, params) => {
  return await responseHanlder(
    "PUT",
    updateEmail_API,
    body,
    true,
    null,
    params
  );
};
export const UPDATE_PASSWORD_DETAILS = async (body, params) => {
  return await responseHanlder(
    "PUT",
    updatePassword_API,
    body,
    true,
    null,
    params
  );
};

export const GET_MODERATION_PRODUCT = async (params) => {
  return await responseHanlder(
    "GET",
    getModerationProduct_API,
    null,
    true,
    null,
    params
  );
};

export const GET_MODERATION_PRODUCTByID = async (params) => {
  return await responseHanlder(
    "GET",
    getModerationProduct_API + "/" + params.id,
    null,
    true,
    params
  );
};

export const DELETE_MODERATION_PRODUCT = async (id) => {
  return await responseHanlder(
    "DELETE",
    getModerationProduct_API + "/" + id,
    null,
    true,
    null
  );
};

export const MODERATION_PRODUCT_STATUSUPDATE = async (data) => {
  return await responseHanlder(
    "PUT",
    getModerationProduct_API,
    data,
    true,
    null
  );
};

export const GET_MY_PRODUCT = async (params) => {
  return await responseHanlder(
    "GET",
    getMyProducts_API,
    null,
    true,
    null,
    params
  );
};

export const GET_MY_PRODUCT_BY_ID = async (id) => {
  return await responseHanlder(
    "GET",
    getMyProducts_API + "/" + id,
    null,
    true,
    null
  );
};

export const DELETE_MY_PRODUCT = async (id) => {
  return await responseHanlder(
    "DELETE",
    getMyProducts_API + "/" + id,
    null,
    true,
    null
  );
};
export const adminLogin = async (data) => {
  return await responseHanlder(
    "POST",
    adminLoginUrl,
    data,
    true,
    null
  );
};
