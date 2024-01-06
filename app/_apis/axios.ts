import axios from "axios";

export const authAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});
