import axios from "axios";

// env에 BASE_URL 설정 필요
export const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
