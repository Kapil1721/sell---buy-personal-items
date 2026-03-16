import { newsLetterEndPoint } from "../api";
import responseHanlder from "../apiUtils";

const { subscribeNewsletter } = newsLetterEndPoint;

export const SUBSCRIBE_NEWSLETTER = async (bodydata) => {
  return await responseHanlder(
    "POST",
    subscribeNewsletter,
    bodydata,
    true,
    null
  );
};
