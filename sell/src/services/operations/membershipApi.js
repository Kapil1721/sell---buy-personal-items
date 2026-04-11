import { membershipEndpoints } from "../api";
import responseHanlder from "../apiUtils";

const {
  GETPLANS_API,
  GET_MEMBERSHIP_API,
  CREATEMEMBERSHIP_API,
  PAYPAL_CONFIG_API,
  PAYPAL_CREATE_ORDER_API,
  PAYPAL_CAPTURE_ORDER_API,
} = membershipEndpoints;

export const GETPLANS = async () => {
  return await responseHanlder("GET", GETPLANS_API, null, false, null);
};
export const GETPLANSBYID = async (id) => {
  return await responseHanlder(
    "GET",
    GETPLANS_API + "/" + id,
    null,
    false,
    null
  );
};

export const CREATEMEMBERSHIP = async (bodyData) => {
  return await responseHanlder(
    "POST",
    CREATEMEMBERSHIP_API,
    bodyData,
    false,
    null
  );
};

export const GETMEMBERSHIP = async (bodyData) => {
  return await responseHanlder(
    "GET",
    GET_MEMBERSHIP_API,
    bodyData,
    false,
    null,
    null,
    { suppressUnauthorizedToast: true }
  );
};

export const GETPAYPALMEMBERSHIPCONFIG = async () => {
  return await responseHanlder("GET", PAYPAL_CONFIG_API, null, false, null);
};

export const CREATEPAYPALMEMBERSHIPORDER = async (bodyData) => {
  return await responseHanlder(
    "POST",
    PAYPAL_CREATE_ORDER_API,
    bodyData,
    false,
    null
  );
};

export const CAPTUREPAYPALMEMBERSHIPORDER = async (bodyData) => {
  return await responseHanlder(
    "POST",
    PAYPAL_CAPTURE_ORDER_API,
    bodyData,
    false,
    null
  );
};
