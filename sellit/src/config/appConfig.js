export const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://sell-buy-personal-items.vercel.app/api/v1";

export const BUY_APP_URL =
  import.meta.env.VITE_BUY_URL ||
  import.meta.env.VITE_BUY_APP_URL ||
  "https://buypersonalitems.com";

export const SELL_APP_URL =
  import.meta.env.VITE_SELL_URL ||
  import.meta.env.VITE_SELL_APP_URL ||
  "https://sellpersonalitems.com";

export const APP_MODE =
  import.meta.env.VITE_MODE || (import.meta.env.DEV ? "development" : "production");

const normalizePath = (path = "/") =>
  path.startsWith("/") ? path : `/${path}`;

export const buildExternalUrl = (baseUrl, path = "/") =>
  `${baseUrl.replace(/\/$/, "")}${normalizePath(path)}`;

export const getBuyRoute = (path = "/") => buildExternalUrl(BUY_APP_URL, path);
export const getSellRoute = (path = "/") => buildExternalUrl(SELL_APP_URL, path);
