import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = (name: string, option?: any) => {
  return cookies.get(name, { ...option });
};

export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const removeCookie = (name: string, option?: any) => {
  cookies.remove(name, { ...option });
};
