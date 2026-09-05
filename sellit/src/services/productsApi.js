import axios from "axios";
import { BASE_URL } from "./api";

export const formatImageUrl = (src) => {
  if (!src) return '/images/vintage-camera.jpg';
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  if (src.startsWith('/uploads/')) return `${BASE_URL}${src}`;
  if (src.startsWith('uploads/')) return `${BASE_URL}/${src}`;
  return `${BASE_URL}/uploads/${src}`;
};

export const getRealProducts = async (params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching real products from server:", error);
    return null;
  }
};

export const getProductCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product-categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product categories:", error);
    return null;
  }
};
