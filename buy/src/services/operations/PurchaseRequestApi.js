import responseHanlder from "../apiUtils";
import { purchaseRequestEndpoints } from "../api";
const { getRequest, sendRequest, getSingleRequest, statusUpdate } =
  purchaseRequestEndpoints;

export const SEND_PURCHASE_REQUEST = async (bodydata) => {
  return await responseHanlder("POST", sendRequest, bodydata, true, null);
};
export const GET_PURCHASE_REQUEST = async (userId, queryParams) => {
  return await responseHanlder(
    "GET",
    getRequest + "/" + userId,
    null,
    true,
    null,
    queryParams
  );
};
export const GET_SINGLE_PURCHASE_REQUEST = async (requestId) => {
  return await responseHanlder(
    "GET",
    getSingleRequest + "/" + requestId,
    null,
    true,
    null
  );
};
export const UPDATE_STATUS_PURCHASE_REQUEST = async (status, id) => {
  return await responseHanlder(
    "PUT",
    statusUpdate + "/" + status + "/" + id,
    null,
    true,
    null
  );
};
