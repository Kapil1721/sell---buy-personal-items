const isDev = import.meta.env.DEV;

export const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3000/api/v1";

export const BUY_APP_URL =
  import.meta.env.VITE_BUY_APP_URL ??
  import.meta.env.VITE_BUY_URL ??
  (isDev ? "http://localhost:5174" : "https://www.sellpersonalitems.com");

export const SELL_APP_URL =
  import.meta.env.VITE_SELL_APP_URL ??
  import.meta.env.VITE_SELL_URL ??
  (isDev ? "http://localhost:5173" : window.location.origin);

const normalizePath = (path = "/") =>
  path.startsWith("/") ? path : `/${path}`;

export const buildExternalUrl = (baseUrl, path = "/") =>
  `${baseUrl.replace(/\/$/, "")}${normalizePath(path)}`;

export const getBuyRoute = (path = "/") => buildExternalUrl(BUY_APP_URL, path);
export const getSellRoute = (path = "/") =>
  buildExternalUrl(SELL_APP_URL, path);
