import { donationEndpoints } from "../api";
import responseHanlder from "../apiUtils";

const { DONATION_API } = donationEndpoints;

export const CREATEDONATION = async (bodydata) => {
  return await responseHanlder("POST", DONATION_API, bodydata, false, null);
};
