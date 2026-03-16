import responseHanlder from "../apiUtils";
import { productEndPoint } from "../api";

const {
  getProducts_API,
  getProductCategory_API,
  postLike_API,
  getProduct_API,
  addToFavourite_API,
  getFavoriteProducts_API,
  promoteProduct_API
} = productEndPoint;

export const GET_ALL_PRODUCTS = async (searchParams, userId) => {
  console.log(`${getProducts_API}${userId !== null ? `/${userId}` : ""}`);
  return await responseHanlder(
    "GET",
    `${getProducts_API}${userId !== null ? `/${userId}` : ""}`,
    null,
    false,
    null,
    searchParams
  );
};
export const GET_FAVORITE_PRODUCTS = async (searchParams) => {
  return await responseHanlder(
    "GET",
   getFavoriteProducts_API,
    null,
    false,
    null,
    searchParams
  );
};
export const GET_SINGLE_PRODUCTS = async (params, searchParams) => {
  return await responseHanlder(
    "GET",
    getProduct_API + "/" + params,
    null,
    false,
    null,
    searchParams
  );
};
export const GET_PRODUCT_CATEGORY = async () => {
  return await responseHanlder(
    "GET",
    getProductCategory_API,
    null,
    false,
    null
  );
};

export const POST_LIKE = async (body) => {
  return await responseHanlder("POST", postLike_API, body, false, null);
};
export const ADD_TO_FAVORITE = async (body) => {
  return await responseHanlder("POST", addToFavourite_API, body, true, null);
};
export const DELETE_FAVORITE = async (body) => {
  return await responseHanlder("DELETE", addToFavourite_API, body, true, null);
};
export const PROMOTE_PRODUCTS = async (body) => {
  return await responseHanlder("POST", promoteProduct_API, body, true, null);
};
