import axios, { AxiosRequestHeaders } from "axios";

export function http() {
  const token = localStorage.getItem("token");
  const headers: AxiosRequestHeaders = {
    "Content-type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: "http://localhost:3300",
    headers,
  });
}
